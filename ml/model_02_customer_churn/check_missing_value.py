import pandas as pd
from pathlib import Path

base = Path("ml/model_02_customer_churn/data/raw")

files = [
    "orders.csv",
    "order_products__prior.csv",
    "order_products__train.csv",
    "products.csv",
    "aisles.csv",
    "departments.csv",
]

print("=== MISSING VALUE ANALYSIS ===")

for file in files:
    path = base / file
    missing = {}

    for chunk in pd.read_csv(path, chunksize=200000):
        for column, count in chunk.isna().sum().items():
            missing[column] = missing.get(column, 0) + int(count)

    print(f"\n{file}")

    for column, count in sorted(
        missing.items(),
        key=lambda x: x[1],
        reverse=True
    ):
        print(f"  {column}: {count}")