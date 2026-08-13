import pandas as pd
from fastapi import APIRouter, Depends

from app.api.schemas.customer_segmentation import (
    CustomerSegmentationRequest,
    CustomerSegmentationResponse,
)
from app.ml.inference.model_loader import (
    load_customer_segmentation_model,
)
from app.ml.inference.customer_segmentation_service import (
    CustomerSegmentationService,
)


router = APIRouter(
    prefix="/customer-segmentation",
    tags=["Customer Segmentation"],
)


def get_customer_segmentation_service() -> CustomerSegmentationService:
    model = load_customer_segmentation_model()
    return CustomerSegmentationService(model)


@router.post(
    "/predict",
    response_model=CustomerSegmentationResponse,
)
async def predict_customer_segmentation(
    request: CustomerSegmentationRequest,
    service: CustomerSegmentationService = Depends(
        get_customer_segmentation_service
    ),
) -> CustomerSegmentationResponse:

    features = pd.DataFrame(
        [
            {
                "total_orders": request.total_orders,
                "total_spent": request.total_spent,
                "average_order_value": request.average_order_value,
                "average_review_score": request.average_review_score,
            }
        ]
    )

    prediction = service.predict(features)

    cluster_id = int(prediction[0])

    return CustomerSegmentationResponse(
        cluster_id=cluster_id,
        segment_name=f"Cluster {cluster_id}",
    )