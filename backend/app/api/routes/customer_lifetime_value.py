import pandas as pd

from fastapi import APIRouter, Depends, HTTPException

from app.api.schemas.customer_lifetime_value import (
    CustomerLifetimeValueRequest,
    CustomerLifetimeValueResponse,
)

from app.ml.inference.model_loader import (
    load_customer_lifetime_value_model,
)

from app.ml.inference.customer_lifetime_value_service import (
    CustomerLifetimeValueService,
)


router = APIRouter(
    prefix="/customer-lifetime-value",
    tags=["Customer Lifetime Value"],
)


def get_customer_lifetime_value_service() -> (
    CustomerLifetimeValueService
):
    model = load_customer_lifetime_value_model()

    return CustomerLifetimeValueService(model)


@router.post(
    "/predict",
    response_model=CustomerLifetimeValueResponse,
)
async def predict_customer_lifetime_value(
    request: CustomerLifetimeValueRequest,
    service: CustomerLifetimeValueService = Depends(
        get_customer_lifetime_value_service
    ),
) -> CustomerLifetimeValueResponse:

    features = pd.DataFrame([request.features])

    try:
        prediction = service.predict(features)

    except ValueError as exc:
        raise HTTPException(
            status_code=422,
            detail={
                "message": "Invalid features provided for CLV prediction.",
                "error": str(exc),
            },
        ) from exc

    return CustomerLifetimeValueResponse(**prediction)