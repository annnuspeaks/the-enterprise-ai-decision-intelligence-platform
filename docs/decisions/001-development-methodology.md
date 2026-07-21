# Engineering Decision Record (EDR-001)

# Development Methodology

## Decision

Adopt a hybrid development methodology:

- **Agile** for overall project management.
- **CRISP-DM** for every Machine Learning model lifecycle.

---

## Options Explored

### SDLC

- Waterfall
- Agile ✅
- Spiral

### ML Lifecycle

- Waterfall
- Agile-only
- CRISP-DM ✅

---

## Final Workflow

Project Planning
↓
Agile Sprint
↓
ML Module
↓
CRISP-DM
↓
Backend Integration
↓
Frontend Integration
↓
Testing
↓
Documentation
↓
Release

---

## Sprint Strategy

Each project phase is treated as one sprint.

A sprint is complete only after:

- Model Development
- Backend Integration
- Frontend Integration
- Testing
- Documentation
- GitHub Release

---

## Git Workflow

```text
main
│
└── dev
     ├── feature/customer-segmentation
     ├── feature/churn-prediction
     ├── feature/dashboard
     └── ...
```

Merge Flow:

```
feature
   ↓
dev
   ↓
main
```

---

## Documentation Workflow

Documentation is maintained in parallel with development.

Every sprint updates:

- README
- API Documentation
- Screenshots
- Architecture
- Decision Records

---

## Release Strategy

- v0.1
- v0.2
- ...
- v1.0 (Semester 3)
- v2.0 (Semester 4)

---

## Reason

- Flexible development
- Industry-standard ML lifecycle
- Continuous portfolio growth
- Better interview preparation
- Maintainable Git history

---

## Trade-offs

### Advantages

- Flexible
- Modular
- Easy to maintain
- Better documentation
- Continuous releases

### Disadvantages

- Requires discipline
- Slightly more Git management
- More documentation effort

---

## Locked

- Agile for project management
- CRISP-DM for ML development
- Phase-based sprints
- GitHub Flow branching
- Parallel documentation
- Versioned releases

---

**Status:** 🔒 Locked
