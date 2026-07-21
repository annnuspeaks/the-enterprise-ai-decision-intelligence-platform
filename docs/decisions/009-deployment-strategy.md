# Engineering Decision Record (EDR-009)

# Deployment Strategy

## Decision

Adopt a stage-wise deployment process with separate Development, Staging, and Production environments. Use modern cloud platforms while keeping Semester 3 simple and introducing CI/CD in Semester 4.

---

## Deployment Lifecycle

```text
Development
      ↓
Local Testing
      ↓
Sprint Release
      ↓
Staging
      ↓
Production
```

---

## Deployment Platforms

### Frontend

- Vercel

### Backend

- Render

### Database

- SQLite (Development)
- Neon PostgreSQL (Production)

---

## Model Storage

Semester 3:

```text
backend/
└── models/
    └── artifacts/
```

Semester 4:

- Cloud Object Storage (AWS S3 or equivalent)

---

## Environment Variables

Use:

- `.env`
- `.env.example`

Examples:

- DATABASE_URL
- JWT_SECRET
- API_KEY
- MODEL_PATH

Never commit secrets.

---

## CI/CD

Semester 3:

- Manual deployment

Semester 4:

- GitHub Actions

---

## Versioning

Semantic Versioning:

```text
v0.1
v0.2
...
v1.0
```

Semester 4:

```text
v2.0
```

---

## Release Checklist

Before every release:

- Tests pass
- Documentation updated
- README updated
- Version incremented
- Git tag created
- Deployment verified
- Screenshots refreshed

---

## Backup Strategy

Maintain backups of:

- Source code
- Database
- Trained models
- Documentation

---

## Production Monitoring

Monitor:

- Uptime
- API Health
- Error Logs
- Performance Metrics

Advanced monitoring deferred to Semester 4.

---

## Reason

- Structured release process
- Reliable deployments
- Strong portfolio presentation
- Easy transition to production
- Reduced deployment risk

---

## Trade-offs

### Advantages

- Predictable releases
- Professional deployment workflow
- Clear separation of environments
- Future-ready architecture

### Disadvantages

- Requires maintaining multiple environments
- Slightly more deployment management

---

## Locked

- Stage-wise deployment
- Environment separation
- Vercel frontend
- Render backend
- SQLite → Neon migration
- Environment variables
- CI/CD roadmap
- Semantic versioning
- Release checklist
- Backup strategy
- Monitoring approach

---

**Status:** 🔒 Locked
