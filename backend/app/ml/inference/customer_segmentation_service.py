from typing import Any


class CustomerSegmentationService:
    """
    Service responsible for generating customer segmentation predictions.

    The trained model is injected into the service so that model loading
    remains a separate responsibility.
    """

    def __init__(self, model: Any):
        self.model = model

    def predict(self, features):
        """
        Generate cluster predictions for customer feature data.
        """

        predictions = self.model.predict(features)

        return predictions