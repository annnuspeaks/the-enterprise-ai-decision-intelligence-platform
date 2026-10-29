from typing import Dict

from pydantic import BaseModel, Field


class CustomerLifetimeValueRequest(BaseModel):
    """Input features required for CLV prediction."""

    features: Dict[str, float] = Field(
        ...,
        description=(
            "Customer behavioural features calculated over "
            "the defined observation window."
        ),
    )


class CustomerLifetimeValueResponse(BaseModel):
    """Output returned by the CLV prediction API."""

    predicted_future_gross_purchase_value: float = Field(
        ...,
        ge=0,
        description=(
            "Predicted gross purchase value over the defined "
            "future prediction window. This is not profit "
            "or true lifetime value."
        ),
    )

    currency: str = Field(
        default="dataset_currency",
        description=(
            "Currency denomination must be confirmed from "
            "the source dataset before displaying a symbol."
        ),
    )

    target_definition: str = Field(
        default="fixed_one_year_future_gross_purchase_value",
        description=(
            "Fixed-horizon future gross purchase value, "
            "not profit or true customer lifetime value."
        ),
    )