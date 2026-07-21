from fastapi import FastAPI

from app.core.config import settings

app = FastAPI(
    title=settings.app_name,
    version=settings.app_version,
    debug=settings.app_debug,
)


@app.get("/", tags=["Root"])
async def root():
    return {
        "message": f"Welcome to {settings.app_name}",
        "environment": settings.app_env,
        "version": settings.app_version,
    }


@app.get("/health", tags=["Health"])
async def health_check():
    return {
        "status": "Very healthy",
    }