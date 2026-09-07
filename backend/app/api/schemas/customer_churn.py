from typing import Dict

from pydantic import BaseModel, Field


class CustomerChurnRequest(BaseModel):
    """
    Input features required for customer churn prediction.
    """

    features: Dict[str, float] = Field(
        ...,
        description=(
            "Customer behavioral features required by the churn "
            "prediction model."
        ),
    )


class CustomerChurnResponse(BaseModel):
    """
    Output returned by the customer churn prediction API.
    """

    churn_prediction: int = Field(
        ...,
        description="Binary churn-like prediction: 0 or 1.",
    )

    churn_probability: float = Field(
        ...,
        ge=0,
        le=1,
        description="Predicted probability of churn-like behavior.",
    )

    threshold: float = Field(
        ...,
        ge=0,
        le=1,
        description="Operating threshold used for the prediction.",
    )

    risk_level: str = Field(
        ...,
        description="Business-readable churn risk classification.",
    )