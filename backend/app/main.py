from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.router import api_router
from app.core.config import settings
from app.core.logging import logger


app = FastAPI(
    title=settings.app_name,
    description=settings.project_description,
    version=settings.app_version,
    debug=settings.app_debug,
)

# Allowed frontend origins
allowed_origins = [
    "https://nexoratas.vercel.app",
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

# Preserve additional origins configured in settings
configured_origins = settings.cors_origins or []

if isinstance(configured_origins, str):
    configured_origins = [
        origin.strip()
        for origin in configured_origins.split(",")
        if origin.strip()
    ]

allowed_origins = list(
    dict.fromkeys(allowed_origins + list(configured_origins))
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router)

logger.info("Application started successfully.")