import pandas as pd
import pytest

from app.ml.inference.purchase_propensity_service import PurchasePropensityService


class FakeModel:
    feature_names_in_ = ["Administrative", "Weekend"]
    classes_ = [0, 1]

    def predict_proba(self, features):
        return [[0.7, 0.3]]


def test_predict_returns_probability_and_decision():
    service = PurchasePropensityService(FakeModel(), threshold=0.4)
    features = pd.DataFrame([{"Administrative": 2, "Weekend": False}])

    result = service.predict(features)

    assert result["purchase_probability"] == pytest.approx(0.3)
    assert result["purchase_prediction"] is False
    assert result["threshold"] == pytest.approx(0.4)


def test_predict_rejects_missing_features():
    service = PurchasePropensityService(FakeModel())
    features = pd.DataFrame([{"Administrative": 2}])

    with pytest.raises(ValueError, match="missing_features"):
        service.predict(features)


def test_predict_rejects_unexpected_features():
    service = PurchasePropensityService(FakeModel())
    features = pd.DataFrame([{"Administrative": 2, "Weekend": False, "ExtraFeature": 1}])

    with pytest.raises(ValueError, match="unexpected_features"):
        service.predict(features)


def test_threshold_must_be_between_zero_and_one():
    with pytest.raises(ValueError, match="Threshold must be between 0 and 1"):
        PurchasePropensityService(FakeModel(), threshold=1.5)


from fastapi.testclient import TestClient
from app.main import app


client = TestClient(app)
VALID_PAYLOAD = {
    "features": {
        "Administrative": 2,
        "Administrative_Duration": 30.0,
        "Informational": 1,
        "Informational_Duration": 15.0,
        "ProductRelated": 20,
        "ProductRelated_Duration": 600.0,
        "BounceRates": 0.02,
        "ExitRates": 0.04,
        "SpecialDay": 0.0,
        "Month": "Nov",
        "OperatingSystems": 2,
        "Browser": 2,
        "Region": 1,
        "TrafficType": 2,
        "VisitorType": "Returning_Visitor",
        "Weekend": False,
    }
}


def test_api_predict_returns_200():
    response = client.post("/purchase-propensity/predict", json=VALID_PAYLOAD)
    assert response.status_code == 200
    body = response.json()
    assert 0.0 <= body["purchase_probability"] <= 1.0
    assert isinstance(body["purchase_prediction"], bool)
    assert body["threshold"] == pytest.approx(0.4)


def test_api_rejects_missing_features_with_422():
    response = client.post(
        "/purchase-propensity/predict",
        json={"features": {"Administrative": 2}},
    )
    assert response.status_code == 422
    assert "missing_features" in response.json()["detail"]["error"]


def test_api_rejects_unexpected_features_with_422():
    payload = {"features": {**VALID_PAYLOAD["features"], "ExtraFeature": 123}}
    response = client.post("/purchase-propensity/predict", json=payload)
    assert response.status_code == 422
    assert "ExtraFeature" in response.json()["detail"]["error"]
