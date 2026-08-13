from app.ml.registry import MODEL_REGISTRY, ModelDefinition


def get_all_models() -> list[ModelDefinition]:
    return list(MODEL_REGISTRY)


def get_model_by_key(model_key: str) -> ModelDefinition | None:
    for model in MODEL_REGISTRY:
        if model.key == model_key:
            return model

    return None