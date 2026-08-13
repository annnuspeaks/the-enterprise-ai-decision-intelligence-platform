from fastapi import APIRouter

from app.services.model_registry_service import get_all_models

router = APIRouter(
    prefix="/models",
    tags=["Model Registry"],
)


@router.get("/")
def list_models():
    return {
        "models": get_all_models(),
    }