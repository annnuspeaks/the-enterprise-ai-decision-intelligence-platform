from pydantic import ValidationError
import pytest

from app.api.schemas.customer_segmentation import (
    CustomerSegmentationRequest,
    CustomerSegmentationResponse,
)


def test_valid_customer_segmentation_request():
    request = CustomerSegmentationRequest(
        total_orders=5,
        total_spent=750.50,
        average_order_value=150.10,
        average_review_score=4.5,
    )

    assert request.total_orders == 5
    assert request.total_spent == 750.50
    assert request.average_order_value == 150.10
    assert request.average_review_score == 4.5


def test_invalid_customer_segmentation_request():
    with pytest.raises(ValidationError):
        CustomerSegmentationRequest(
            total_orders=-1,
            total_spent=750.50,
            average_order_value=150.10,
            average_review_score=4.5,
        )


def test_invalid_review_score():
    with pytest.raises(ValidationError):
        CustomerSegmentationRequest(
            total_orders=5,
            total_spent=750.50,
            average_order_value=150.10,
            average_review_score=6.0,
        )


def test_customer_segmentation_response():
    response = CustomerSegmentationResponse(
        cluster_id=0,
        segment_name="Core Satisfied Customers",
    )

    assert response.cluster_id == 0
    assert response.segment_name == "Core Satisfied Customers"