import pandas as pd

from fastapi import APIRouter, Depends, HTTPException

from app.api.schemas.purchase_propensity import (
    PurchasePropensityRequest,
    PurchasePropensityResponse,
)
from app.ml.inference.model_loader import load_purchase_propensity_model
from app.ml.inference.purchase_propensity_service import PurchasePropensityService


router = APIRouter(
    prefix="/purchase-propensity",
    tags=["Purchase Propensity"],
)


def get_purchase_propensity_service() -> PurchasePropensityService:
    model = load_purchase_propensity_model()
    return PurchasePropensityService(model)


@router.post("/predict", response_model=PurchasePropensityResponse)
async def predict_purchase_propensity(
    request: PurchasePropensityRequest,
    service: PurchasePropensityService = Depends(
        get_purchase_propensity_service
    ),
) -> PurchasePropensityResponse:
    features = pd.DataFrame([request.features])

    try:
        prediction = service.predict(features)
    except ValueError as exc:
        raise HTTPException(
            status_code=422,
            detail={
                "message": "Invalid features for purchase propensity prediction.",
                "error": str(exc),
            },
        ) from exc

    return PurchasePropensityResponse(**prediction)
