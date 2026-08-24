from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """App configuration, loaded from environment variables / backend/.env.

    Values here are the dev defaults; production overrides them via real
    environment variables on the host. Secrets never get defaults.
    """

    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")

    spotify_client_id: str = ""
    spotify_client_secret: str = ""
    database_url: str = ""
    app_base_url: str = "http://127.0.0.1:8000"


settings = Settings()
