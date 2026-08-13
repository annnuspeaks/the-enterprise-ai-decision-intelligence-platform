from pydantic import BaseModel, Field


class CustomerSegmentationRequest(BaseModel):
    """
    Input features required for customer segmentation.
    """

    total_orders: int = Field(
        ...,
        ge=0,
        description="Total number of orders placed by the customer.",
    )

    total_spent: float = Field(
        ...,
        ge=0,
        description="Total amount spent by the customer.",
    )

    average_order_value: float = Field(
        ...,
        ge=0,
        description="Average monetary value of the customer's orders.",
    )

    average_review_score: float = Field(
        ...,
        ge=0,
        le=5,
        description="Average customer review score.",
    )


class CustomerSegmentationResponse(BaseModel):
    """
    Output returned by the customer segmentation prediction API.
    """

    cluster_id: int = Field(
        ...,
        ge=0,
        description="Predicted customer cluster identifier.",
    )

    segment_name: str = Field(
        ...,
        description="Business-readable customer segment name.",
    )