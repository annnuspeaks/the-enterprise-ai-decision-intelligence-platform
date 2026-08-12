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