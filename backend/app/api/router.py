from fastapi import APIRouter

from app.api.routes import (
    customer_segmentation,
    health,
    model_registry,
    root,
)

api_router = APIRouter()

api_router.include_router(root.router)
api_router.include_router(health.router)
api_router.include_router(
    customer_segmentation.router
)
api_router.include_router(
    model_registry.router
)