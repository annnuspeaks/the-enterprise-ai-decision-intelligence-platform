from fastapi import APIRouter

from app.api.routes import (
    customer_segmentation,
    health,
    root,
)

api_router = APIRouter()

api_router.include_router(root.router)
api_router.include_router(health.router)
api_router.include_router(
    customer_segmentation.router
)