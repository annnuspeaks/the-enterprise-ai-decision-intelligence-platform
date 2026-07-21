# Engineering Decision Record (EDR-002)

# Technology Stack

## Decision

Adopt a modern, open-source, production-inspired technology stack optimized for Machine Learning applications and enterprise web development.

---

## Final Technology Stack

| Layer | Technology |
|--------|------------|
| Frontend | React + TypeScript + Vite |
| UI Framework | Tailwind CSS + shadcn/ui |
| Backend | FastAPI |
| Machine Learning | Scikit-learn |
| Boosting Models | XGBoost, LightGBM (Optional) |
| Database (Development) | SQLite |
| Database (Production) | PostgreSQL |
| ORM | SQLAlchemy |
| Authentication | JWT |
| Charts | Recharts |
| Data Analysis | Plotly, Matplotlib |
| Model Serialization | joblib |
| API Testing | Postman |
| Backend Testing | pytest |
| Frontend Testing | Vitest |
| Containerization | Docker |
| Version Control | Git + GitHub |
| Deployment | Vercel + Render + Neon PostgreSQL |
| Documentation | Markdown + Swagger + Mermaid |

---

## Reason

- Modern and industry-standard.
- Excellent support for structured ML workloads.
- Free or minimal-cost ecosystem.
- Highly maintainable and scalable.
- Strong portfolio value.
- Easy to explain during interviews.

---

## Trade-offs

### Advantages

- Open-source ecosystem
- Fast development
- Modern UI
- Strong ML support
- Low deployment cost

### Disadvantages

- Multiple technologies to learn
- Slightly higher initial setup effort

---

## Locked

- React + TypeScript + Vite
- Tailwind CSS + shadcn/ui
- FastAPI
- Scikit-learn
- SQLite → PostgreSQL
- SQLAlchemy
- JWT Authentication
- Recharts + Plotly + Matplotlib
- Docker
- Git + GitHub
- pytest + Vitest
- Vercel + Render + Neon
- Markdown + Swagger + Mermaid

---

**Status:** 🔒 Locked
