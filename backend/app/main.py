from fastapi import FastAPI

from app.api.router import api_router
from app.core.config import settings
from app.core.logging import logger

app = FastAPI(
    title=settings.app_name,
    description=settings.project_description,
    version=settings.app_version,
    debug=settings.app_debug,
)

app.include_router(api_router)
logger.info("Application started successfully.")