import json
from functools import lru_cache
from pathlib import Path

import joblib


MODEL_PATH = (
    Path(__file__).resolve().parents[3]
    / "models"
    / "customer_segmentation"
    / "customer_segmentation_pipeline.joblib"
)


@lru_cache(maxsize=1)
def load_customer_segmentation_model():
    """
    Load and cache the trained customer segmentation pipeline.
    """

    if not MODEL_PATH.exists():
        raise FileNotFoundError(
            f"Customer segmentation model not found: {MODEL_PATH}"
        )

    return joblib.load(MODEL_PATH)

CUSTOMER_CHURN_MODEL_PATH = (
    Path(__file__).resolve().parents[3]
    / "models"
    / "customer_churn"
    / "customer_churn_pipeline.joblib"
)


@lru_cache(maxsize=1)
def load_customer_churn_model():
    """
    Load and cache the trained customer churn pipeline.
    """

    if not CUSTOMER_CHURN_MODEL_PATH.exists():
        raise FileNotFoundError(
            f"Customer churn model not found: {CUSTOMER_CHURN_MODEL_PATH}"
        )

    return joblib.load(CUSTOMER_CHURN_MODEL_PATH)

CUSTOMER_CHURN_METADATA_PATH = (
    Path(__file__).resolve().parents[3]
    / "models"
    / "customer_churn"
    / "metadata.json"
)


@lru_cache(maxsize=1)
def load_customer_churn_metadata():
    """
    Load and cache metadata for the trained customer churn model.
    """

    if not CUSTOMER_CHURN_METADATA_PATH.exists():
        raise FileNotFoundError(
            f"Customer churn metadata not found: "
            f"{CUSTOMER_CHURN_METADATA_PATH}"
        )

    with open(CUSTOMER_CHURN_METADATA_PATH, "r") as f:
        return json.load(f)