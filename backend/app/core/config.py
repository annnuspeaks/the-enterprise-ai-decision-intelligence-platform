from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict

from pathlib import Path

BASE_DIR = Path(__file__).resolve().parents[3]

class Settings(BaseSettings):
    app_name: str
    app_env: str
    app_debug: bool
    app_version: str

    host: str
    port: int

    database_url: str

    jwt_secret: str
    jwt_algorithm: str
    access_token_expire_minutes: int

    model_path: str

    log_level: str

    model_config = SettingsConfigDict(
        env_file=BASE_DIR / ".env",
        case_sensitive=False,
        extra="ignore",
    )


@lru_cache
def get_settings() -> Settings:
    return Settings()


settings = get_settings()
