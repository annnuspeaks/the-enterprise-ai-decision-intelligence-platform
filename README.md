::: {align="center"}
`<img src="./frontend/src/assets/nexora-logo.png" alt="Nexora — Enterprise AI Decision Intelligence Platform" width="720"/>`{=html}

# NEXORA

### The Enterprise AI Decision Intelligence Platform

**From business data to intelligent decisions.**

```{=html}
<p>
```
`<img src="./frontend/src/assets/nexora-icon.png" alt="Nexora icon" width="64"/>`{=html}
```{=html}
</p>
```
```{=html}
<p>
```
`<a href="https://nexoratas.vercel.app/">`{=html}`<strong>`{=html}🌐
Live Platform`</strong>`{=html}`</a>`{=html}  • 
`<a href="https://the-enterprise-ai-decision-intelligence.onrender.com/docs">`{=html}`<strong>`{=html}📘
Live API Documentation`</strong>`{=html}`</a>`{=html}  • 
`<a href="https://github.com/annnuspeaks/the-enterprise-ai-decision-intelligence-platform">`{=html}`<strong>`{=html}💻
Source Code`</strong>`{=html}`</a>`{=html}
```{=html}
</p>
```
```{=html}
<p>
```
`<img src="https://img.shields.io/badge/Python-Backend-3776AB?logo=python&logoColor=white" alt="Python"/>`{=html}
`<img src="https://img.shields.io/badge/FastAPI-API-009688?logo=fastapi&logoColor=white" alt="FastAPI"/>`{=html}
`<img src="https://img.shields.io/badge/React-Frontend-61DAFB?logo=react&logoColor=20232A" alt="React"/>`{=html}
`<img src="https://img.shields.io/badge/TypeScript-Frontend-3178C6?logo=typescript&logoColor=white" alt="TypeScript"/>`{=html}
`<img src="https://img.shields.io/badge/Scikit--learn-ML-F7931E?logo=scikitlearn&logoColor=white" alt="Scikit-learn"/>`{=html}
`<img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="MIT License"/>`{=html}
```{=html}
</p>
```
:::

------------------------------------------------------------------------

## Table of Contents

-   [Platform Overview](#-platform-overview)
-   [Project Vision](#-project-vision)
-   [Model Portfolio and Status](#-model-portfolio-and-status)
-   [Platform Highlights](#-platform-highlights)
-   [System Architecture](#-system-architecture)
-   [Technology Stack](#-technology-stack)
-   [Repository Structure](#-repository-structure)
-   [Live Deployment and API
    Documentation](#-live-deployment-and-api-documentation)
-   [Run Locally](#-run-locally)
-   [Prediction Workflow](#-prediction-workflow)
-   [Development Roadmap](#-development-roadmap)
-   [Documentation Guide](#-documentation-guide)
-   [Project Status and Scope](#-project-status-and-scope)
-   [Academic Project Overview](#-academic-project-overview)
-   [Contributing](#-contributing)
-   [License](#-license)

------------------------------------------------------------------------

## ✦ Platform Overview

**Nexora** is a modular, full-stack **Enterprise AI Decision
Intelligence Platform** that brings multiple Machine Learning
capabilities together through a unified application.

The platform is designed around a simple principle:

> **Convert business data into useful predictions, customer insights,
> and decision-support signals.**

Instead of treating every ML model as a standalone experiment, Nexora
provides a shared engineering foundation: a React-based user interface,
a FastAPI backend, REST APIs, model-specific inference logic, and
business-oriented result presentation.

The project is being developed incrementally. The first four models form
the current model portfolio; Models 05--08 are planned roadmap
capabilities and are clearly marked as upcoming.

## 🎯 Project Vision

Organizations collect large volumes of customer and business data, but
turning that data into actionable decisions can be challenging. Nexora
aims to bring complementary predictive capabilities into one place so
users can explore questions such as:

-   Which customer segment does a customer most closely resemble?
-   Is a customer likely to churn?
-   What is the estimated lifetime value of a customer?
-   How likely is a visitor or customer to make a purchase?
-   Which additional predictive capabilities could support future
    business decisions?

Nexora is intended to evolve as a collection of independently developed
model capabilities connected through a common application architecture.

------------------------------------------------------------------------

## 🤖 Model Portfolio and Status

Nexora's planned portfolio contains **eight ML models**. The status
below distinguishes the four current model implementations from
capabilities planned for future development.

  ----------------------------------------------------------------------------
  \#                Model              Capability            Status
  ----------------- ------------------ --------------------- -----------------
  **01**            **Customer         Groups customers      ✅ Implemented
                    Segmentation**     using customer-level  
                                       behavioural and       
                                       purchasing features.  

  **02**            **Customer Churn   Estimates customer    ✅ Implemented
                    Prediction**       churn risk from       
                                       relevant customer     
                                       features.             

  **03**            **Customer         Estimates customer    ✅ Implemented
                    Lifetime Value     lifetime value to     
                    (CLV) Prediction** support               
                                       customer-value        
                                       analysis.             

  **04**            **Purchase         Estimates purchase    ✅ Implemented
                    Propensity         propensity from       
                    Prediction**       session and           
                                       acquisition-related   
                                       features.             

  **05**            **Anomaly          Planned capability    🔜 Upcoming
                    Detection**        for identifying       
                                       unusual patterns in   
                                       relevant data.        

  **06**            **Sales & Demand   Planned forecasting   🔜 Upcoming
                    Forecasting**      capability for sales  
                                       or demand trends.     

  **07**            **Recommendation   Planned capability    🔜 Upcoming
                    System**           for generating        
                                       relevant              
                                       recommendations.      

  **08**            **Dynamic Risk     Planned capability    🔜 Upcoming
                    Scoring**          for producing         
                                       risk-oriented scores  
                                       from relevant         
                                       signals.              
  ----------------------------------------------------------------------------

> **Status convention:** "Implemented" identifies the four current model
> workflows in the project. "Upcoming" identifies roadmap items, not
> features currently available for production use. Model-specific
> metrics, datasets, limitations, and implementation details should be
> verified in each model's documentation before being quoted.

### Current implementation pattern

The first four models use the shared platform integration pattern:

``` text
Model-specific features
        ↓
Model inference logic
        ↓
FastAPI endpoint
        ↓
React frontend
        ↓
Prediction / business-oriented output
```

Each model keeps its own input schema, inference behaviour, artifacts,
and documentation while using the common platform structure.

------------------------------------------------------------------------

## ✨ Platform Highlights

### Application and API

-   React + TypeScript frontend
-   FastAPI backend with REST endpoints
-   JSON-based request and response flow
-   Pydantic-based request validation
-   Configurable CORS middleware
-   Centralized application configuration and logging

### Machine Learning

-   Four current model workflows
-   Model-specific input features and inference logic
-   Separate model artifacts and documentation
-   Business-readable prediction outputs
-   Extensible structure for additional model integrations

### Engineering

-   Separation between frontend, API, and ML inference
-   Modular project organization
-   Environment-based configuration
-   Git and GitHub version control
-   Dedicated roadmap for the remaining four models

------------------------------------------------------------------------

## 🏗️ System Architecture

``` text
┌─────────────────────────────────────────────────────┐
│                    USER / ANALYST                   │
└──────────────────────────┬──────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────┐
│                  REACT + TYPESCRIPT                 │
│          Forms • Dashboard • Prediction UI           │
└──────────────────────────┬──────────────────────────┘
                           │ HTTPS / JSON
                           ▼
┌─────────────────────────────────────────────────────┐
│                    FASTAPI BACKEND                  │
│       Routing • Validation • Configuration          │
└──────────────────────────┬──────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────┐
│                  MODEL INFERENCE LAYER              │
│                                                     │
│  01 Segmentation       02 Churn Prediction          │
│  03 CLV Prediction     04 Purchase Propensity       │
└──────────────────────────┬──────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────┐
│              STRUCTURED PREDICTION RESPONSE         │
└──────────────────────────┬──────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────┐
│             BUSINESS-ORIENTED USER OUTPUT           │
└─────────────────────────────────────────────────────┘
```

### Architecture principles

-   **Separation of concerns:** the frontend handles presentation; the
    backend handles API orchestration and inference integration.
-   **Model independence:** each model has its own features and
    inference logic.
-   **Shared integration pattern:** models connect to the frontend
    through backend APIs rather than running ML logic in the browser.
-   **Incremental delivery:** new models are integrated and documented
    as they become ready.

------------------------------------------------------------------------

## 🛠️ Technology Stack

  -----------------------------------------------------------------------
  Layer                               Technologies
  ----------------------------------- -----------------------------------
  Programming languages               Python, TypeScript, JavaScript

  Frontend                            React, Vite

  UI and routing                      Material UI (MUI), React Router

  API client                          Axios

  Backend                             FastAPI, Uvicorn

  Validation and configuration        Pydantic, Pydantic Settings

  Machine Learning                    Scikit-learn

  Data processing                     Pandas, NumPy

  Visualization / analysis            Matplotlib, Seaborn, Plotly,
                                      Jupyter

  Testing                             Pytest; frontend test tooling
                                      should be confirmed in its package
                                      configuration

  Version control                     Git, GitHub

  Frontend hosting                    Vercel

  Backend hosting                     Render
  -----------------------------------------------------------------------

> The stack table describes technologies used or referenced by the
> project. It does not imply that every possible tool or capability is
> active in production.

------------------------------------------------------------------------

## 📁 Repository Structure

``` text
the-enterprise-ai-decision-intelligence-platform/
│
├── assets/                         # Project-level visual/document assets
├── backend/
│   ├── app/
│   │   ├── api/                    # API routes and routers
│   │   ├── core/                   # Configuration and logging
│   │   ├── ml/                     # ML inference / model-loading logic
│   │   └── main.py                 # FastAPI application entry point
│   ├── models/                     # Model artifacts/resources
│   ├── tests/                      # Backend tests, if present in checkout
│   ├── requirements.txt             # Backend dependencies
│   └── README.md                   # Backend setup and API details
│
├── docs/                           # Project documentation
├── essentials_update/              # Additional project/model materials
├── frontend/
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
│   └── README.md                   # Frontend documentation
│
├── ml/
│   ├── model_01_customer_segmentation/
│   ├── model_02_customer_churn/
│   ├── model_03_customer_lifetime_value/
│   └── model_04_purchase_propensity/
│
├── .env.example                    # Example configuration (if maintained)
├── .gitignore
├── requirements.txt                # Root-level Python dependencies
├── README.md                       # Platform overview (this document)
└── LICENSE
```

> Folder contents can change as development progresses. Use the current
> repository tree as the source of truth if a folder name or optional
> directory differs in your checkout.

------------------------------------------------------------------------

## 🌐 Live Deployment and API Documentation

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Resource                            Link
  ----------------------------------- -------------------------------------------------------------------------------------------------------------------------------------
  **Live Nexora frontend**            [nexoratas.vercel.app](https://nexoratas.vercel.app/)

  **Live backend base URL**           [the-enterprise-ai-decision-intelligence.onrender.com](https://the-enterprise-ai-decision-intelligence.onrender.com/)

  **Interactive API documentation     [OpenAPI /docs](https://the-enterprise-ai-decision-intelligence.onrender.com/docs)
  (Swagger UI)**                      

  **Alternative API documentation     [OpenAPI /redoc](https://the-enterprise-ai-decision-intelligence.onrender.com/redoc)
  (ReDoc)**                           

  **OpenAPI schema**                  [openapi.json](https://the-enterprise-ai-decision-intelligence.onrender.com/openapi.json)

  **GitHub repository**               [the-enterprise-ai-decision-intelligence-platform](https://github.com/annnuspeaks/the-enterprise-ai-decision-intelligence-platform)
  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The hosted API documentation is the preferred reference for the current
deployed API surface. Local URLs such as `http://127.0.0.1:8000/docs`
are for local development only.

### Current prediction endpoint paths

The frontend should use the deployed backend base URL:

``` text
https://the-enterprise-ai-decision-intelligence.onrender.com
```

The current endpoint paths include:

``` text
POST /customer-segmentation/predict
POST /customer-churn/predict
POST /customer-lifetime-value/predict
POST /purchase-propensity/predict
```

Open the live Swagger UI to confirm request schemas and exact route
availability:

**[View live API
documentation](https://the-enterprise-ai-decision-intelligence.onrender.com/docs)**

------------------------------------------------------------------------

## 💻 Run Locally

### Prerequisites

-   Git
-   Python version supported by the backend dependencies
-   Node.js LTS and npm
-   A modern web browser

### 1. Clone the repository

``` bash
git clone https://github.com/annnuspeaks/the-enterprise-ai-decision-intelligence-platform.git
cd the-enterprise-ai-decision-intelligence-platform
```

### 2. Set up the backend

``` bash
cd backend
python -m venv .venv
```

Activate the environment on Windows:

``` powershell
.venv\Scripts\Activate.ps1
```

If PowerShell blocks activation, use Command Prompt:

``` bat
.venv\Scripts\activate.bat
```

Install dependencies:

``` bash
python -m pip install --upgrade pip
pip install -r requirements.txt
```

Start the API from the `backend` directory:

``` bash
uvicorn app.main:app --reload
```

Local backend URLs:

-   API base: `http://127.0.0.1:8000`
-   Swagger UI: `http://127.0.0.1:8000/docs`
-   ReDoc: `http://127.0.0.1:8000/redoc`

### 3. Set up the frontend

Open a second terminal at the repository root:

``` bash
cd frontend
npm install
```

Configure the frontend API base URL using the environment-variable name
already expected by the frontend code. For a Vite application,
client-exposed variables generally use the `VITE_` prefix.

Example value for local development:

``` env
VITE_API_BASE_URL=http://127.0.0.1:8000
```

Example value for the deployed frontend:

``` env
VITE_API_BASE_URL=https://the-enterprise-ai-decision-intelligence.onrender.com
```

Use the exact variable name read by the existing frontend
service/client. After changing a Vite environment variable, restart the
development server or trigger a new production deployment for the change
to take effect.

Start the frontend:

``` bash
npm run dev
```

Vite commonly serves the local app at `http://localhost:5173`. Use the
URL printed by the terminal if a different port is selected.

### 4. Verify the integration

1.  Open the frontend.
2.  Open the browser's Developer Tools → **Network**.
3.  Submit a prediction form.
4.  Confirm the request is sent to the intended backend host.
5.  Inspect the response status and response body if a prediction fails.
6.  Open the live or local `/docs` page to test the API independently.

------------------------------------------------------------------------

## 🔄 Prediction Workflow

``` text
User enters model-specific values
              ↓
Frontend validates / prepares request
              ↓
HTTP POST request to FastAPI
              ↓
Backend validates the request schema
              ↓
Model inference runs
              ↓
Backend returns JSON response
              ↓
Frontend renders prediction / insight
```

If the API works in Swagger but not in the browser, check the browser
console and Network tab for CORS errors, request URL mismatches, payload
differences, or failed preflight requests.

------------------------------------------------------------------------

## 🗺️ Development Roadmap

### Current milestone --- Models 01--04

-   [x] Model 01 --- Customer Segmentation
-   [x] Model 02 --- Customer Churn Prediction
-   [x] Model 03 --- Customer Lifetime Value (CLV) Prediction
-   [x] Model 04 --- Purchase Propensity Prediction
-   [x] Shared frontend/backend integration pattern
-   [x] Deployed frontend and backend
-   [ ] Continue validating deployed predictions and edge cases
-   [ ] Keep model documentation and API examples synchronized with
    implementation

### Upcoming milestone --- Models 05--08

-   [ ] Model 05 --- Anomaly Detection
-   [ ] Model 06 --- Sales & Demand Forecasting
-   [ ] Model 07 --- Recommendation System
-   [ ] Model 08 --- Dynamic Risk Scoring
-   [ ] Integrate each model into the shared backend and frontend
-   [ ] Add model-specific documentation, evaluation evidence, and tests

### Longer-term platform improvements

These are potential future enhancements, not claims of current
implementation:

-   Explainability and feature-level interpretation
-   Model monitoring and performance tracking
-   Automated retraining and MLOps workflows
-   CI/CD automation
-   Containerized deployment
-   Role-based access control and enterprise authentication
-   Production database integration
-   Exportable business reports

------------------------------------------------------------------------

## 📚 Documentation Guide

  -----------------------------------------------------------------------
  Documentation                       Purpose
  ----------------------------------- -----------------------------------
  Root `README.md`                    Platform overview, architecture,
                                      model portfolio, setup, and roadmap

  `backend/README.md`                 Backend setup, configuration,
                                      routes, and API usage

  `frontend/README.md`                Frontend setup, UI structure, API
                                      client, and environment variables

  Model 01 documentation              Customer Segmentation

  Model 02 documentation              Customer Churn Prediction

  Model 03 documentation              Customer Lifetime Value Prediction

  Model 04 documentation              Purchase Propensity Prediction

  `docs/`                             Additional project and milestone
                                      documentation
  -----------------------------------------------------------------------

For endpoint schemas and interactive requests, use the **[deployed
Swagger
documentation](https://the-enterprise-ai-decision-intelligence.onrender.com/docs)**.

------------------------------------------------------------------------

## 📌 Project Status and Scope

Nexora is being developed in milestones. The current scope comprises
four implemented model workflows and four upcoming roadmap capabilities.
Each model's metrics, training details, data assumptions, and
limitations should be documented at the model level and supported by
actual evaluation results.

The platform is an academic and engineering project intended to
demonstrate the integration of ML inference into a full-stack
application. Prediction outputs should be interpreted within the context
and limitations of their underlying datasets and models.

------------------------------------------------------------------------

## 🎓 Academic Project Overview

**Project title:** The Enterprise AI Decision Intelligence Platform\
**Platform name:** Nexora\
**Architecture:** React + TypeScript frontend, FastAPI backend, modular
ML inference services\
**Current model milestone:** Four implemented model workflows\
**Planned portfolio:** Eight ML models

### 30-second project explanation

> Nexora is an Enterprise AI Decision Intelligence Platform that brings
> multiple Machine Learning capabilities into a unified full-stack
> application. A React and TypeScript frontend communicates with a
> FastAPI backend through REST APIs. The backend validates incoming
> requests and routes them to model-specific inference logic, returning
> structured results to the user interface. Four model workflows are
> currently implemented, while four additional capabilities are planned
> for future milestones. The modular architecture allows each model to
> be developed and documented independently while following a consistent
> integration pattern.

### One-line architecture

**React + TypeScript → FastAPI REST API → Model Inference → Structured
Prediction → Business-Facing UI**

------------------------------------------------------------------------

## 🤝 Contributing

Contributions and constructive feedback are welcome.

1.  Review the existing project structure and model documentation.
2.  Create a focused branch for your change.
3.  Keep model-specific logic separate from shared platform code where
    practical.
4.  Update relevant documentation and tests.
5.  Open a pull request with a concise description of the change and how
    it was validated.

Do not commit API keys, credentials, private datasets, or other secrets.

------------------------------------------------------------------------

## 📄 License

This project is licensed under the **MIT License**. See
[`LICENSE`](./LICENSE) for details.

Copyright © 2026 Anurag Shukla.

------------------------------------------------------------------------

::: {align="center"}
`<img src="./frontend/src/assets/nexora-icon.png" alt="Nexora" width="52"/>`{=html}

### NEXORA

**Enterprise AI Decision Intelligence Platform**

*From data → intelligence → decisions.*
:::
