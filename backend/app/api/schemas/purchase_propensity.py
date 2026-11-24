from typing import Dict, Union

from pydantic import BaseModel, Field


class PurchasePropensityRequest(BaseModel):
    """Session features for purchase propensity prediction."""

    features: Dict[str, Union[float, int, str, bool]] = Field(
        ...,
        description="Online shopping session features used by the trained model.",
    )


class PurchasePropensityResponse(BaseModel):
    """Purchase propensity prediction response."""

    purchase_probability: float = Field(..., ge=0.0, le=1.0)
    purchase_prediction: bool
    threshold: float = Field(..., ge=0.0, le=1.0)
