from typing import Any

import pandas as pd


class CustomerLifetimeValueService:
    """Service responsible for CLV predictions."""

    def __init__(self, model: Any):
        self.model = model

    def predict(self, features: pd.DataFrame) -> dict:
        """Validate features and predict future gross purchase value."""

        expected_features = list(self.model.feature_names_in_)

        missing_features = [
            feature
            for feature in expected_features
            if feature not in features.columns
        ]

        unexpected_features = [
            feature
            for feature in features.columns
            if feature not in expected_features
        ]

        if missing_features or unexpected_features:
            raise ValueError(
                {
                    "missing_features": missing_features,
                    "unexpected_features": unexpected_features,
                }
            )

        # Enforce the exact feature order expected by the model.
        features = features[expected_features]

        prediction = float(self.model.predict(features)[0])

        # Business rule: gross purchase value cannot be negative.
        prediction = max(0.0, prediction)

        return {
            "predicted_future_gross_purchase_value": prediction
        }