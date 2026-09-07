import pandas as pd
from fastapi import APIRouter, Depends

from app.api.schemas.customer_churn import (
    CustomerChurnRequest,
    CustomerChurnResponse,
)
from app.ml.inference.model_loader import (
    load_customer_churn_metadata,
    load_customer_churn_model,
)
from app.ml.inference.customer_churn_service import (
    CustomerChurnService,
)


router = APIRouter(
    prefix="/customer-churn",
    tags=["Customer Churn"],
)


def get_customer_churn_service() -> CustomerChurnService:
    model = load_customer_churn_model()
    metadata = load_customer_churn_metadata()

    threshold = float(metadata["selected_threshold"])

    return CustomerChurnService(
        model=model,
        threshold=threshold,
    )


@router.post(
    "/predict",
    response_model=CustomerChurnResponse,
)
async def predict_customer_churn(
    request: CustomerChurnRequest,
    service: CustomerChurnService = Depends(
        get_customer_churn_service
    ),
) -> CustomerChurnResponse:

    features = pd.DataFrame([request.features])

    prediction = service.predict(features)

    return CustomerChurnResponse(**prediction)