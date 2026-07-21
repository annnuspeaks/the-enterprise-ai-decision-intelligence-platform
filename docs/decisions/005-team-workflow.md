# Engineering Decision Record (EDR-005)

# Team Workflow

## Decision

Adopt a **Hybrid Ownership Model** where responsibilities are divided by expertise while each feature progresses through a shared sprint workflow.

---

## Options Explored

### Option 1
Layer-based Ownership

### Option 2
Feature-based Ownership

### ✅ Option 3 (Selected)
Hybrid Ownership

---

## Team Roles

### Project Lead / ML Engineer

- Project Architecture
- Data Engineering
- Machine Learning Models
- Model Evaluation
- Integration
- Master Documentation
- Final Review

---

### Backend Engineer

- FastAPI
- Database
- Authentication
- APIs
- Deployment
- Backend Documentation

---

### Frontend Engineer

- React
- Dashboard
- UI Components
- Charts
- Frontend Documentation

---

## Sprint Workflow

```text
Research
    ↓
ML Development
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
```

---

## Communication

- Weekly Sprint Review
- Discuss progress
- Resolve blockers
- Plan next sprint

---

## Git Workflow

```text
feature/*
      ↓
Pull Request
      ↓
Review
      ↓
dev
      ↓
main
```

No direct commits to `main`.

---

## Merge Rules

Before merging:

- Code builds successfully
- Tests pass
- Documentation updated
- Approved by Project Lead

---

## Documentation Ownership

### Project Lead

- Master README
- Architecture
- Engineering Decision Records

### Backend Engineer

- Backend README
- API Documentation
- Deployment Guide

### Frontend Engineer

- Frontend README
- User Guide
- Screenshots

---

## Team Principles

- Respect ownership
- Small feature branches
- Frequent commits
- Documentation with development
- Sprint completion before new work
- Keep `main` stable

---

## Reason

- Clear responsibilities
- Balanced workload
- Smooth collaboration
- Reduced merge conflicts
- Better project management

---

## Trade-offs

### Advantages

- Structured collaboration
- High accountability
- Easier integration
- Clear ownership

### Disadvantages

- Requires coordination between members
- Integration depends on timely handoffs

---

## Locked

- Hybrid ownership
- Defined team roles
- Sprint-based workflow
- Weekly sprint reviews
- Pull request workflow
- Merge approval process
- Documentation ownership
- Team principles

---

**Status:** 🔒 Locked
