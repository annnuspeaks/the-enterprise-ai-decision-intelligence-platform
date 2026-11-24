from typing import Any

import pandas as pd


class PurchasePropensityService:
    """Predict purchase probability from session features."""

    DEFAULT_THRESHOLD = 0.40

    def __init__(self, model: Any, threshold: float = DEFAULT_THRESHOLD):
        if not 0.0 <= threshold <= 1.0:
            raise ValueError('Threshold must be between 0 and 1.')
        self.model = model
        self.threshold = threshold

    def predict(self, features: pd.DataFrame) -> dict:
        if not hasattr(self.model, 'feature_names_in_'):
            raise ValueError('Model does not expose feature_names_in_.')

        expected = list(self.model.feature_names_in_)
        missing = [name for name in expected if name not in features.columns]
        unexpected = [name for name in features.columns if name not in expected]

        if missing or unexpected:
            raise ValueError({'missing_features': missing, 'unexpected_features': unexpected})

        features = features[expected]
        if not hasattr(self.model, 'predict_proba'):
            raise ValueError('Model does not support predict_proba.')

        probabilities = self.model.predict_proba(features)
        classes = list(self.model.classes_)
        if 1 not in classes:
            raise ValueError('Model does not contain purchase class 1.')

        probability = float(probabilities[0][classes.index(1)])
        return {
            'purchase_probability': probability,
            'purchase_prediction': probability >= self.threshold,
            'threshold': self.threshold,
        }
