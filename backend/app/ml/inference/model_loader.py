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
    
# Customer Lifetime Value model

CLV_MODEL_PATH = (
    Path(__file__).resolve().parents[3]
    / "models"
    / "customer_lifetime_value"
    / "clv_random_forest_pipeline.joblib"
)

CLV_METADATA_PATH = (
    Path(__file__).resolve().parents[3]
    / "models"
    / "customer_lifetime_value"
    / "clv_model_metadata.json"
)


@lru_cache(maxsize=1)
def load_customer_lifetime_value_model():
    """Load and cache the trained CLV prediction pipeline."""

    if not CLV_MODEL_PATH.exists():
        raise FileNotFoundError(
            f"CLV model not found: {CLV_MODEL_PATH}"
        )

    return joblib.load(CLV_MODEL_PATH)


@lru_cache(maxsize=1)
def load_customer_lifetime_value_metadata():
    """Load and cache CLV model metadata."""

    if not CLV_METADATA_PATH.exists():
        raise FileNotFoundError(
            f"CLV metadata not found: {CLV_METADATA_PATH}"
        )

    with open(CLV_METADATA_PATH, "r", encoding="utf-8") as file:
        return json.load(file)