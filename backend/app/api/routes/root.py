from fastapi import APIRouter

from app.core.config import settings

router = APIRouter(tags=["Root"])


@router.get("/")
async def root():
    return {
        "message": f"Welcome to {settings.app_name}",
        "environment": settings.app_env,
        "version": settings.app_version,
    }