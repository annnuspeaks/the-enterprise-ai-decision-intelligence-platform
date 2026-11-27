"""Load Nexora ML pipelines locally or download them from Cloudflare R2.

On Vercel, .joblib files are excluded from the function bundle and are fetched
from the configured R2 bucket into /tmp on first use. Downloaded files and
loaded Python models are cached for the lifetime of the warm function instance.
"""

import json
import os
from functools import lru_cache
from pathlib import Path
from urllib.parse import urlparse

import boto3
import joblib

# backend/app/ml/inference/model_loader.py -> backend/
BACKEND_DIR = Path(__file__).resolve().parents[3]
MODELS_DIR = BACKEND_DIR / "models"

# R2 object keys in the bucket are the four .joblib filenames (bucket root).
MODEL_FILES = {
    "customer_segmentation": "customer_segmentation_pipeline.joblib",
    "customer_churn": "customer_churn_pipeline.joblib",
    "customer_lifetime_value": "clv_random_forest_pipeline.joblib",
    "purchase_propensity": "purchase_propensity_pipeline.joblib",
}


def _r2_client():
    """Create an S3-compatible client for Cloudflare R2 from env variables."""
    account_id = os.getenv("R2_ACCOUNT_ID", "").strip()
    endpoint = os.getenv("R2_ENDPOINT_URL", "").strip().rstrip("/")
    bucket = os.getenv("R2_BUCKET_NAME", "nexora-bucket").strip()
    access_key = os.getenv("R2_ACCESS_KEY_ID", "").strip()
    secret_key = os.getenv("R2_SECRET_ACCESS_KEY", "").strip()

    # Accept either the base endpoint or the dashboard's endpoint ending in /bucket.
    if endpoint:
        parsed = urlparse(endpoint)
        if parsed.path and parsed.path != "/":
            endpoint = f"{parsed.scheme}://{parsed.netloc}"
    elif account_id:
        endpoint = f"https://{account_id}.r2.cloudflarestorage.com"

    missing = [
        name for name, value in (
            ("R2_ENDPOINT_URL or R2_ACCOUNT_ID", endpoint),
            ("R2_ACCESS_KEY_ID", access_key),
            ("R2_SECRET_ACCESS_KEY", secret_key),
            ("R2_BUCKET_NAME", bucket),
        ) if not value
    ]
    if missing:
        raise RuntimeError(
            "Model file is not present in the deployment and Cloudflare R2 is not "
            "configured. Set these Vercel Environment Variables: " + ", ".join(missing)
        )

    return boto3.client(
        "s3",
        endpoint_url=endpoint,
        aws_access_key_id=access_key,
        aws_secret_access_key=secret_key,
        region_name="auto",
    ), bucket


def _resolve_model_file(model_name: str, relative_path: str) -> Path:
    """Use a bundled local model if present; otherwise download it from R2."""
    local_path = MODELS_DIR / relative_path
    if local_path.is_file():
        return local_path

    filename = MODEL_FILES[model_name]
    cache_dir = Path(os.getenv("NEXORA_MODEL_CACHE_DIR", "/tmp/nexora-models"))
    cache_dir.mkdir(parents=True, exist_ok=True)
    cached_path = cache_dir / filename
    if cached_path.is_file() and cached_path.stat().st_size > 0:
        return cached_path

    client, bucket = _r2_client()
    temporary_path = cached_path.with_suffix(cached_path.suffix + ".download")
    try:
        client.download_file(bucket, filename, str(temporary_path))
        if not temporary_path.is_file() or temporary_path.stat().st_size == 0:
            raise RuntimeError(f"Cloudflare R2 returned an empty model file: {filename}")
        temporary_path.replace(cached_path)
    except Exception as exc:
        temporary_path.unlink(missing_ok=True)
        raise RuntimeError(
            f"Could not download model '{filename}' from Cloudflare R2 bucket '{bucket}'. "
            "Check the R2 object name and Vercel environment variables."
        ) from exc
    return cached_path


def _load_model(model_name: str, relative_path: str):
    path = _resolve_model_file(model_name, relative_path)
    return joblib.load(path)


@lru_cache(maxsize=1)
def load_customer_segmentation_model():
    return _load_model(
        "customer_segmentation",
        "customer_segmentation/customer_segmentation_pipeline.joblib",
    )


@lru_cache(maxsize=1)
def load_customer_churn_model():
    return _load_model("customer_churn", "customer_churn/customer_churn_pipeline.joblib")


CUSTOMER_CHURN_METADATA_PATH = MODELS_DIR / "customer_churn" / "metadata.json"


@lru_cache(maxsize=1)
def load_customer_churn_metadata():
    if not CUSTOMER_CHURN_METADATA_PATH.is_file():
        raise FileNotFoundError(f"Customer churn metadata not found: {CUSTOMER_CHURN_METADATA_PATH}")
    with CUSTOMER_CHURN_METADATA_PATH.open("r", encoding="utf-8") as file:
        return json.load(file)


CLV_METADATA_PATH = MODELS_DIR / "customer_lifetime_value" / "clv_model_metadata.json"


@lru_cache(maxsize=1)
def load_customer_lifetime_value_model():
    return _load_model(
        "customer_lifetime_value",
        "customer_lifetime_value/clv_random_forest_pipeline.joblib",
    )


@lru_cache(maxsize=1)
def load_customer_lifetime_value_metadata():
    if not CLV_METADATA_PATH.is_file():
        raise FileNotFoundError(f"CLV metadata not found: {CLV_METADATA_PATH}")
    with CLV_METADATA_PATH.open("r", encoding="utf-8") as file:
        return json.load(file)


PURCHASE_PROPENSITY_METADATA_PATH = MODELS_DIR / "purchase_propensity" / "model_metadata.json"


@lru_cache(maxsize=1)
def load_purchase_propensity_model():
    return _load_model(
        "purchase_propensity",
        "purchase_propensity/purchase_propensity_pipeline.joblib",
    )


@lru_cache(maxsize=1)
def load_purchase_propensity_metadata():
    if not PURCHASE_PROPENSITY_METADATA_PATH.is_file():
        raise FileNotFoundError(
            f"Purchase propensity metadata not found: {PURCHASE_PROPENSITY_METADATA_PATH}"
        )
    with PURCHASE_PROPENSITY_METADATA_PATH.open("r", encoding="utf-8") as file:
        return json.load(file)
