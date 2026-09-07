from typing import Any

import pandas as pd


class CustomerChurnService:
    """
    Service responsible for generating customer churn predictions.
    """

    def __init__(self, model: Any, threshold: float):
        self.model = model
        self.threshold = threshold

    def predict(self, features: pd.DataFrame) -> dict:
        """
        Generate a churn prediction and probability for a customer.
        """

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

        features = features[expected_features]

        probability = float(
            self.model.predict_proba(features)[0, 1]
        )

        prediction = int(probability >= self.threshold)

        if probability >= self.threshold:
            risk_level = "High"
        elif probability >= 0.33:
            risk_level = "Medium"
        else:
            risk_level = "Low"

        return {
            "churn_prediction": prediction,
            "churn_probability": probability,
            "threshold": self.threshold,
            "risk_level": risk_level,
        }