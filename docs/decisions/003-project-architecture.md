# Engineering Decision Record (EDR-003)

# Project Architecture

## Decision

Adopt a **Modular Monolith Architecture** with a **Monorepo** repository structure, a **Layered FastAPI backend**, a **Feature-driven React frontend**, and a **Notebook-to-Production ML workflow**.

---

## Options Explored

### System Architecture
- Monolithic
- Microservices
- **Modular Monolith ✅**

### Repository Strategy
- Multi Repo
- **Monorepo ✅**

### Backend Architecture
- MVC
- Clean Architecture
- **Layered Architecture ✅**

### Frontend Architecture
- Component Driven
- Atomic Design
- **Feature Driven + Reusable Components ✅**

### API Architecture
- REST ✅
- GraphQL
- gRPC

### ML Workflow
- Notebook Only
- Scripts Only
- **Notebook → Production Pipeline ✅**

---

## Final Architecture

```text
React Dashboard
        │
     REST API
        │
FastAPI Backend
        │
 ├── API Layer
 ├── Service Layer
 ├── ML Layer
 ├── Database Layer
 └── Utilities
        │
 PostgreSQL / SQLite
```

---

## System Flow

```text
User
   │
React Frontend
   │
FastAPI
   │
Business Services
   │
ML Models
   │
Database
   │
Prediction Response
```

---

## ML Workflow

```text
Dataset
   │
Validation
   │
Cleaning
   │
Feature Engineering
   │
Training
   │
Evaluation
   │
Model Serialization
   │
Prediction API
   │
Dashboard
```

---

## Reason

- Simple and scalable.
- Production-inspired without unnecessary complexity.
- Clear separation of concerns.
- Easier debugging and maintenance.
- Suitable for a 3-member development team.

---

## Trade-offs

### Advantages

- Modular
- Easy to maintain
- Easy deployment
- Clean architecture
- Interview-friendly

### Disadvantages

- Less scalable than microservices.
- Future migration required for very large systems.

---

## Locked

- Modular Monolith
- Monorepo
- Layered Backend
- Feature-driven Frontend
- REST API
- Notebook → Production ML Workflow
- Relational Database
- Centralized Backend

---

**Status:** 🔒 Locked
