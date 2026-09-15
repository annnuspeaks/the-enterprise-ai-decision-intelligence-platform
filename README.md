<div align="center">

<img src="./frontend/src/assets/nexora-logo.png" alt="Nexora — Enterprise Decision Intelligence System" width="860"/>

# Nexora

### The Enterprise AI Decision Intelligence Platform

**A modular, full-stack AI platform for enterprise decision support**

<p>
  <img src="./frontend/src/assets/nexora-icon.png" alt="Nexora Icon" width="72"/>
</p>

</div>

---

## ✦ Platform at a Glance

**Nexora** is a full-stack **Enterprise AI Decision Intelligence Platform** designed to bring multiple Machine Learning capabilities together behind a unified, business-oriented application.

The platform is built around a simple principle:

> **Convert business data into intelligent signals that can support better decisions.**

Instead of treating Machine Learning models as isolated experiments, Nexora provides a common platform architecture in which models can be developed independently and then exposed through a centralized backend and an interactive frontend.

### What Nexora brings together

- 🧠 **Machine Learning intelligence**
- ⚙️ **FastAPI-based inference services**
- 🎨 **React + TypeScript user experience**
- 🔌 **RESTful API integration**
- 🧩 **Modular model architecture**
- 📊 **Business-oriented insight presentation**
- 🏗️ **Scalable enterprise-oriented foundation**

---

## 🎯 Project Vision

Modern enterprises generate large volumes of customer and business data, but converting that information into actionable decisions remains a significant challenge.

Traditional Business Intelligence systems are often strong at describing **what happened**, while an AI-powered Decision Intelligence platform can additionally help answer:

- What is likely to happen?
- Which customers or situations require attention?
- What patterns are emerging?
- Which business segment does a customer belong to?
- What action could be considered next?

Nexora is designed as a foundation for answering these questions through a collection of independent AI/ML capabilities.

---

## 🧭 Core Architecture

Nexora follows a **modular, layered architecture** in which the frontend, backend, ML capabilities, and data/model artifacts remain separated.

```text
                         ┌─────────────────────────────┐
                         │          END USERS          │
                         │ Analysts • Managers • Teams │
                         └──────────────┬──────────────┘
                                        │
                                        ▼
                         ┌─────────────────────────────┐
                         │       REACT FRONTEND        │
                         │ TypeScript • MUI • Router   │
                         │ Axios • Visual Analytics    │
                         └──────────────┬──────────────┘
                                        │
                                  REST / JSON
                                        │
                                        ▼
                         ┌─────────────────────────────┐
                         │       FASTAPI BACKEND       │
                         │ API • Validation • Services │
                         │ Config • Logging • ML Flow  │
                         └──────────────┬──────────────┘
                                        │
                    ┌───────────────────┼───────────────────┐
                    ▼                   ▼                   ▼
             ML Inference        Business Logic       Data Services
                    │                   │                   │
                    └───────────────────┼───────────────────┘
                                        ▼
                         ┌─────────────────────────────┐
                         │      MODEL CAPABILITIES     │
                         │ Segmentation • Churn • CLV │
                         │ Propensity • Anomaly • ...  │
                         └──────────────┬──────────────┘
                                        │
                                        ▼
                         ┌─────────────────────────────┐
                         │   INSIGHTS / DECISIONS      │
                         │ Business-oriented outputs   │
                         └─────────────────────────────┘
```

### Architectural principle

Each model should be able to evolve independently while sharing the platform's common infrastructure.

This keeps:

- **UI concerns** in the frontend
- **API and application concerns** in the backend
- **model-development concerns** inside the corresponding ML module
- **model artifacts** with their respective model
- **platform-wide decisions** at the project level

---

## 🤖 Model Portfolio

Nexora is planned around **eight AI/ML capabilities**.

| # | Model | Current Status |
|---|---|---|
| 01 | **Customer Segmentation** | ✅ Available |
| 02 | **Customer Churn Prediction** | ✅ Available |
| 03 | **Customer Lifetime Value (CLV) Prediction** | 🔜 Coming Soon |
| 04 | **Purchase Propensity Prediction** | ⏸️ Deferred |
| 05 | **Anomaly Detection** | ⏸️ Deferred |
| 06 | **Sales & Demand Forecasting** | 🔜 Coming Soon |
| 07 | **Recommendation System** | 🔜 Coming Soon |
| 08 | **Dynamic Risk Scoring** | 🔜 Coming Soon |

> **Scope note:** Next Best Action and AI Decision Assistant were previously considered but are **not part of the current eight-model scope**.

### Model documentation boundary

The root README intentionally stays at the **platform level**.

Detailed information such as:

- datasets
- feature engineering
- training experiments
- hyperparameters
- model-specific metrics
- thresholds
- explainability
- model limitations
- inference implementation

belongs inside the corresponding model's own documentation.

This prevents the root README from becoming dependent on the implementation details of all eight models.

---

## ✨ Key Capabilities

### Platform

- Modular Enterprise AI architecture
- Centralized model registry
- Independent model integration
- RESTful inference APIs
- Interactive business-facing dashboard
- Reusable backend infrastructure
- Structured logging
- Centralized configuration
- Responsive frontend
- Git-based version control
- Model-level documentation

### Machine Learning

- Reproducible ML workflows
- Model comparison and evaluation
- Independent model artifacts
- Backend inference integration
- Explainability-oriented model development
- Business-readable prediction/segmentation outputs

### Engineering

- Separation of concerns
- Modular service architecture
- API-first communication
- Environment-based configuration
- Maintainable project organization
- Expandable model portfolio

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Language** | Python, TypeScript |
| **Frontend** | React |
| **Frontend Build Tool** | Vite |
| **UI Framework** | Material UI (MUI) |
| **Routing** | React Router |
| **HTTP Client** | Axios |
| **Backend** | FastAPI |
| **Validation** | Pydantic |
| **Configuration** | Pydantic Settings |
| **Machine Learning** | Scikit-learn |
| **Data Processing** | Pandas, NumPy |
| **Visualization** | Matplotlib, Seaborn, Plotly |
| **Notebook Environment** | Jupyter Notebook, IPykernel |
| **Testing** | Pytest; Vitest planned |
| **Package Management** | pip, npm |
| **Version Control** | Git & GitHub |
| **Database** | SQLite for development; PostgreSQL planned |
| **Containerization** | Docker planned |
| **Deployment** | Render / Vercel planned |

> Planned technologies are explicitly marked where applicable; they should not be interpreted as currently implemented features.

---

## 📁 Repository Structure

```text
the-enterprise-ai-decision-intelligence-platform/
│
├── backend/                         # FastAPI application
│   ├── app/                         # API, services, ML inference, config
│   ├── data/                        # Backend-side data resources
│   ├── logs/                        # Runtime/application logs
│   ├── models/                      # Backend model resources
│   ├── notebooks/                   # Existing development notebooks
│   └── README.md                    # Backend documentation
│
├── frontend/                        # React application
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── models/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── theme/
│   │   ├── types/
│   │   └── utils/
│   └── README.md                    # Frontend documentation
│
├── ml/                              # Model-level ML projects
│   ├── model_01_customer_segmentation/
│   │   └── README.md
│   │
│   └── model_02_customer_churn/
│       └── README.md
│
├── data/                             # Project-level/shared data resources
├── .gitignore
├── README.md                         # This document
└── LICENSE
```

### Documentation hierarchy

```text
Project Root
│
├── README.md
│   └── Platform-level overview
│
├── backend/README.md
│   └── Backend architecture & API layer
│
├── frontend/README.md
│   └── Frontend architecture & UI layer
│
└── ml/
    ├── model_01_.../README.md
    │   └── Model 01 documentation
    │
    └── model_02_.../README.md
        └── Model 02 documentation
```

This hierarchy keeps documentation **discoverable without mixing responsibilities**.

---

## 🔄 End-to-End Platform Flow

```text
Business Data
      ↓
Data Preparation
      ↓
Model Development
      ↓
Model Evaluation
      ↓
Model Artifact
      ↓
Backend Inference Service
      ↓
REST API
      ↓
React Frontend
      ↓
Business Insight
      ↓
Decision Support
```

The important design choice is that the frontend does **not** directly implement Machine Learning logic.

Instead:

> **Frontend → API → Backend → ML Service → Result → Frontend**

---

## 🚀 Development Setup

### Prerequisites

- Python 3.14+
- Node.js (LTS)
- npm
- Git
- Visual Studio Code
- Jupyter Notebook
- Modern web browser

### Backend

```bash
cd backend
python -m venv .venv
```

**Windows**

```bash
.venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Start the development server:

```bash
uvicorn app.main:app --reload
```

Backend:

```text
http://127.0.0.1:8000
```

API documentation:

```text
http://127.0.0.1:8000/docs
```

### Frontend

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend:

```text
http://localhost:5173
```

During development, both services should run simultaneously.

---

## 📌 Current Platform Milestone

The platform has progressed beyond its initial foundation and now contains two model-level implementations:

### Model 01 — Customer Segmentation

The first fully working model establishes the initial end-to-end pattern:

```text
Model → Backend → API → Frontend → Business Output
```

### Model 02 — Customer Churn Prediction

The second model follows the same platform integration philosophy while maintaining its own model-specific development, artifacts, inference logic, and documentation.

This establishes the reusable pattern required for the remaining model capabilities.

> Model-specific metrics and implementation details are intentionally kept in the individual model READMEs.

---

## 🗺️ Development Philosophy

Nexora is developed incrementally rather than attempting to build all eight models simultaneously.

The general development pattern is:

```text
Plan
 ↓
Build Model
 ↓
Validate
 ↓
Integrate Backend
 ↓
Integrate Frontend
 ↓
Document
 ↓
Lock Stable Milestone
 ↓
Move to Next Capability
```

This approach reduces unnecessary coupling and allows each model to be independently validated before becoming part of the wider platform.

---

## 🔮 Future Direction

The architecture is intentionally prepared for further expansion.

Potential future capabilities include:

- Advanced recommendation strategies
- Improved demand forecasting
- Explainable AI (XAI)
- Real-time analytics
- Automated model retraining / MLOps
- CI/CD automation
- Docker and Kubernetes deployment
- Cloud deployment
- Enterprise authentication
- OAuth2 / SSO
- Role-Based Access Control (RBAC)
- PostgreSQL production integration
- Model monitoring and performance tracking
- Business report generation
- Multi-tenant enterprise support

These represent the platform's **future direction**, not necessarily currently implemented functionality.

---

## 🎓 Examiner / Viva — 30-Second Explanation

> **"Nexora is an Enterprise AI Decision Intelligence Platform that combines multiple Machine Learning capabilities into a single full-stack application. Each model is developed independently and integrated through a centralized FastAPI backend, while a React frontend provides the business-facing interface. The architecture separates model development, inference services, APIs, and presentation so that new models can be added without redesigning the complete platform. The current platform includes Customer Segmentation and Customer Churn Prediction as implemented capabilities, with additional models planned or deferred."**

### One-line architecture answer

> **React Frontend → FastAPI API → ML/Business Services → Model Artifacts → Structured Business Output**

---

## 📚 Documentation Strategy

Nexora follows a layered documentation strategy:

| Documentation | Responsibility |
|---|---|
| **Root README** | Platform identity, architecture, portfolio, setup, roadmap |
| **Backend README** | Backend architecture, APIs, services, configuration, logging |
| **Frontend README** | UI architecture, routing, components, themes, frontend workflow |
| **Model 01 README** | Customer Segmentation model |
| **Model 02 README** | Customer Churn Prediction model |
| **Future Model READMEs** | Individual documentation for Models 03–08 |

This keeps the documentation professional and scalable as the project grows.

---

## 📄 License

This project is licensed under the **MIT License**.

Copyright (c) 2026 Anurag Shukla

---

<div align="center">

<img src="./frontend/src/assets/nexora-icon.png" alt="Nexora" width="54"/>

### Nexora
**Enterprise AI Decision Intelligence System**

*From data → intelligence → decisions.*

</div>
