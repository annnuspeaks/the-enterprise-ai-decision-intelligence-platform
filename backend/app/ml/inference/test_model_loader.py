from app.ml.inference.model_loader import (
    MODEL_PATH,
    load_customer_segmentation_model,
)


def test_customer_segmentation_model_loading():
    model = load_customer_segmentation_model()

    assert MODEL_PATH.exists()
    assert model is not None