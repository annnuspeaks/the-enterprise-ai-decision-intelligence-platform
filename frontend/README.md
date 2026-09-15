::: {align="center"}
`<img src="src/assets/nexora-logo.png" alt="Nexora — Enterprise Decision Intelligence System" width="780"/>`{=html}

### The Enterprise AI Decision Intelligence Platform

*Intelligent interfaces for enterprise analytics, prediction, and
decision support.*
:::

------------------------------------------------------------------------

# Nexora --- Frontend Documentation

## The Enterprise AI Decision Intelligence Platform

> **Frontend role:** Deliver the user-facing experience through which
> business users navigate Nexora, provide inputs, consume backend
> services, and understand AI-driven results.

------------------------------------------------------------------------

## 1. Frontend Overview

The Nexora frontend is a modern **Single Page Application (SPA)** built
with:

-   **React**
-   **TypeScript**
-   **Vite**
-   **Material UI (MUI)**
-   **React Router**
-   **Axios**

It serves as the **presentation layer** of the Enterprise AI Decision
Intelligence Platform.

The frontend is responsible for the experience users interact with:
pages, navigation, forms, dashboards, visualizations, themes, and
presentation of backend responses.

Business logic, Machine Learning inference, and data processing remain
on the backend.

``` text
┌─────────────────────────────┐
│        Nexora Frontend      │
│                             │
│  Pages • UI • Navigation    │
│  Forms • Visualizations     │
│  Theme • User Interaction   │
└──────────────┬──────────────┘
               │ REST / JSON
               ▼
┌─────────────────────────────┐
│       FastAPI Backend       │
│                             │
│ Validation • Services       │
│ ML Inference • Processing   │
└─────────────────────────────┘
```

------------------------------------------------------------------------

## 2. Core Responsibilities

The frontend is responsible for:

-   Providing the platform's user interface.
-   Managing client-side navigation.
-   Collecting and presenting user input.
-   Consuming backend REST APIs.
-   Visualizing AI and business results.
-   Providing reusable UI components.
-   Maintaining a consistent design system.
-   Supporting responsive layouts.
-   Managing client-side presentation state.
-   Providing a scalable foundation for future platform modules.

### Architectural boundary

A simple rule governs the frontend/backend relationship:

> **Frontend presents and interacts; backend processes and decides.**

This keeps the UI independent from internal business and Machine
Learning implementation.

------------------------------------------------------------------------

## 3. Technology Stack

  Category          Technology           Role
  ----------------- -------------------- ----------------------------------
  Language          TypeScript           Type-safe frontend development
  UI Framework      React                Component-based application
  Build Tool        Vite                 Development and production build
  UI System         Material UI (MUI)    Design system and components
  Routing           React Router         Client-side navigation
  HTTP Client       Axios                Backend communication
  Styling           MUI Styling System   Consistent component styling
  Icons             Material UI Icons    Interface iconography
  Package Manager   npm                  Dependency management
  Version Control   Git / GitHub         Source control
  IDE               Visual Studio Code   Development environment

------------------------------------------------------------------------

## 4. Architecture

The frontend follows a modular component-based architecture.

``` text
                         React Application
                                │
          ┌─────────────────────┼─────────────────────┐
          │                     │                     │
          ▼                     ▼                     ▼
       Pages               Components             Services
          │                     │                     │
          │                     │                     ▼
          │                     │                Axios API
          │                     │                     │
          └──────────────┬──────┴─────────────────────┘
                         ▼
                    React Router
                         │
                         ▼
                 FastAPI Backend
```

### Separation of concerns

  Layer        Responsibility
  ------------ -------------------------------------------------
  Pages        Screen-level application experiences
  Components   Reusable UI building blocks
  Layouts      Shared page structure
  Routes       Navigation and URL mapping
  Services     API communication
  Theme        Global visual system
  Types        TypeScript contracts
  Constants    Shared fixed application values
  Hooks        Reusable React behavior
  Utils        Generic helper functionality
  Assets       Images, icons, fonts and other static resources

------------------------------------------------------------------------

## 5. Folder Structure

The frontend follows a modular structure:

``` text
frontend/
│
├── public/                    # Static public assets
│
├── src/
│   ├── api/                   # API configuration
│   ├── assets/                # Images, icons, fonts
│   ├── components/            # Reusable UI components
│   ├── constants/             # Application constants
│   ├── hooks/                 # Custom React hooks
│   ├── layouts/               # Shared layouts
│   ├── pages/                 # Application pages
│   ├── routes/                # Route configuration
│   ├── services/              # API/service layer
│   ├── store/                 # Future global state
│   ├── theme/                 # MUI theme configuration
│   ├── types/                 # TypeScript interfaces/types
│   ├── utils/                 # Utility functions
│   ├── App.tsx                # Application composition
│   └── main.tsx               # Application entry point
│
├── .env
├── .env.development
├── .env.production
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

> The structure is modular by design. Individual feature modules may
> evolve their internal organization as the application grows.

------------------------------------------------------------------------

### Nexora Brand Assets

The frontend keeps the platform's visual identity available as reusable
assets:

``` text
src/assets/
├── nexora-icon.png    # Nexora symbol / app icon
└── nexora-logo.png    # Full Nexora wordmark
```

The full logo is used where the complete product identity is
appropriate, while the icon is suitable for compact UI surfaces such as
favicons, navigation, badges, and application chrome.

------------------------------------------------------------------------

## 6. Application Entry Point

The frontend starts from:

``` text
src/main.tsx
```

The entry point initializes the React application and connects global
application concerns before rendering the main application.

The primary application composition is handled through:

``` text
src/App.tsx
```

This separation keeps bootstrapping concerns distinct from
application-level composition.

------------------------------------------------------------------------

## 7. Routing

Client-side navigation is handled by **React Router**.

Because Nexora is a SPA, navigation between application views can occur
without traditional full-page reloads.

### Routing responsibilities

-   Map URLs to application pages.
-   Organize feature routes.
-   Support nested/shared layouts.
-   Provide a scalable navigation structure.
-   Prepare the application for protected routes as authentication
    evolves.

Conceptually:

``` text
URL
 │
 ▼
React Router
 │
 ▼
Route Definition
 │
 ▼
Page / Layout
 │
 ▼
Rendered Experience
```

### Current platform direction

The frontend documentation defines routes/modules for capabilities such
as:

-   Landing Dashboard
-   Business Dashboard
-   Customer Segmentation
-   Customer Churn Prediction
-   Customer Lifetime Value
-   Purchase Propensity
-   Anomaly Detection
-   Settings
-   Profile

Some of these represent planned or evolving modules rather than claiming
that every route is currently implemented.

------------------------------------------------------------------------

## 8. Component Architecture

Reusable React components are a core part of the frontend architecture.

Instead of implementing the same interface pattern independently on
every page, shared components can provide common behavior and
presentation.

Examples include:

-   navigation elements,
-   cards,
-   buttons,
-   forms,
-   layout containers,
-   charts,
-   feedback states,
-   and other shared interface elements.

### Benefits

-   Less duplication
-   Consistent UI
-   Easier maintenance
-   Faster feature development
-   Centralized visual improvements
-   Better scalability

------------------------------------------------------------------------

## 9. Theme and Design System

The frontend uses **Material UI ThemeProvider** to establish a
centralized design system.

The theme provides a common foundation for:

-   color palette,
-   typography,
-   component styling,
-   responsive breakpoints,
-   design tokens,
-   and theme customization.

``` text
Theme Provider
      │
      ├── Colors
      ├── Typography
      ├── Components
      ├── Breakpoints
      └── Design Tokens
             │
             ▼
       Application UI
```

Centralized theming prevents individual pages from developing unrelated
visual rules and makes future design changes easier to manage.

------------------------------------------------------------------------

## 10. API Communication

The frontend communicates with the FastAPI backend through REST APIs.

**Axios** provides the HTTP communication layer.

The service layer acts as the boundary between UI components and network
operations:

``` text
UI Component
     │
     ▼
Frontend Service
     │
     ▼
Axios
     │
     ▼
FastAPI API
     │
     ▼
JSON Response
     │
     ▼
Frontend Service
     │
     ▼
UI
```

### Why use a service layer?

Keeping API calls outside presentation components:

-   reduces component complexity,
-   centralizes API behavior,
-   improves reusability,
-   simplifies testing,
-   and makes backend integration easier to maintain.

------------------------------------------------------------------------

## 11. Environment Configuration

The frontend supports environment-based configuration.

An API base URL can be provided through a Vite environment variable:

``` env
VITE_API_BASE_URL=http://127.0.0.1:8000
```

Environment-specific files can be maintained for different deployment
contexts:

``` text
.env.development
.env.production
```

Environment configuration prevents API endpoints and deployment-specific
values from being hard-coded throughout the application.

> Actual environment values should be reviewed against the current
> deployment configuration before production release.

------------------------------------------------------------------------

## 12. Frontend ↔ Backend Workflow

A typical Nexora interaction follows:

``` text
1. User opens a feature
          │
          ▼
2. React renders the page
          │
          ▼
3. User enters/selects information
          │
          ▼
4. Frontend validates presentation-level requirements
          │
          ▼
5. Service sends REST request
          │
          ▼
6. FastAPI validates and processes request
          │
          ▼
7. Backend performs business / ML processing
          │
          ▼
8. Backend returns JSON
          │
          ▼
9. Frontend interprets response
          │
          ▼
10. UI displays the result
```

This keeps the user's experience separate from server-side computation.

------------------------------------------------------------------------

## 13. Machine Learning Presentation

The frontend does not train or execute Machine Learning models directly.

Instead:

``` text
ML Model
   │
   ▼
FastAPI Inference Layer
   │
   ▼
Structured API Response
   │
   ▼
Frontend Service
   │
   ▼
Visualization / Interpretation
```

This architecture allows the UI to remain model-agnostic at the
infrastructure level.

Individual model pages can then present model-specific information such
as:

-   prediction results,
-   risk levels,
-   scores/probabilities,
-   cluster assignments,
-   recommendations,
-   and explanations.

The exact presentation depends on the model and its backend response
contract.

------------------------------------------------------------------------

## 14. Responsive Design

The frontend is designed to support different screen sizes.

Responsive behavior is handled through the UI system and layout
architecture.

The goal is to maintain:

-   readable content,
-   usable controls,
-   sensible spacing,
-   adaptive layouts,
-   and consistent navigation

across desktop, tablet, and mobile environments.

Responsive support should be evaluated at feature level as new modules
are introduced.

------------------------------------------------------------------------

## 15. Accessibility

Accessibility is treated as an important frontend quality consideration.

The architecture supports improvements such as:

-   semantic interface structure,
-   keyboard-friendly interactions,
-   readable typography,
-   consistent focus behavior,
-   appropriate component labeling,
-   and responsive layouts.

Further WCAG-focused refinement can be incorporated as the product
matures.

------------------------------------------------------------------------

## 16. Development Workflow

### Prerequisites

Install:

-   Node.js (LTS)
-   npm
-   Git
-   Visual Studio Code

### Installation

From the project root:

``` bash
cd frontend
npm install
```

### Development server

``` bash
npm run dev
```

Default development URL:

``` text
http://localhost:5173
```

Vite provides:

-   Hot Module Replacement (HMR)
-   Fast Refresh
-   automatic recompilation
-   rapid browser updates

------------------------------------------------------------------------

## 17. Production Build

Create an optimized production build:

``` bash
npm run build
```

The generated production assets are placed in:

``` text
dist/
```

### Preview the production build

``` bash
npm run preview
```

This provides a local way to verify the built application before
deployment.

------------------------------------------------------------------------

## 18. Deployment Direction

The frontend can be deployed as a static web application after the
production build.

The original project documentation identifies platforms such as:

-   Vercel
-   Netlify
-   GitHub Pages
-   Firebase Hosting
-   AWS S3 + CloudFront

Deployment configuration should ensure that the frontend's environment
variables point to the correct backend API.

For SPA deployments, server-side fallback configuration may also be
required so that client-side routes resolve correctly after direct
navigation.

------------------------------------------------------------------------

## 19. Quality and Maintainability Principles

The frontend follows these core principles:

### Component-based development

Build interfaces from reusable components rather than large monolithic
pages.

### Separation of concerns

Keep presentation, routing, API communication, configuration, and
utilities in their appropriate layers.

### Type safety

Use TypeScript interfaces and types to reduce accidental contract
mismatches.

### Centralized API communication

Keep HTTP logic within services/API modules rather than scattering Axios
calls across UI components.

### Consistent design

Use the centralized MUI theme and reusable components to maintain visual
consistency.

### Incremental scalability

Add new platform capabilities as modular features instead of tightly
coupling them to existing pages.

------------------------------------------------------------------------

## 20. Planned Expansion

As Nexora evolves, the frontend can support additional capabilities such
as:

### AI / Analytics modules

-   Customer Segmentation
-   Customer Churn Prediction
-   Customer Lifetime Value
-   Purchase Propensity
-   Anomaly Detection
-   Recommendation System
-   Time-Series / Demand Forecasting
-   AI-powered Business Assistant

### Enterprise capabilities

-   Authentication and authorization
-   Role-Based Access Control
-   User profiles
-   Team and organization management
-   Notifications
-   Audit logs
-   Report generation
-   CSV / Excel / PDF export
-   Real-time analytics

### Technical improvements

-   Global state management
-   Lazy loading
-   Code splitting
-   Error boundaries
-   Unit and integration testing
-   Performance optimization
-   Progressive Web App support
-   CI/CD integration
-   Docker-based deployment

These represent the platform's expansion direction and should not be
interpreted as all being currently implemented.

------------------------------------------------------------------------

# Examiner / Viva Explanation

### What is the role of the frontend?

The frontend is the presentation layer of Nexora. It provides the
interface through which users navigate the platform, enter information,
consume backend services, and understand AI-generated results.

### Why did you use React?

React provides a component-based architecture that allows complex
interfaces to be divided into reusable and maintainable UI components.

### Why TypeScript instead of plain JavaScript?

TypeScript adds static typing, which helps catch incorrect data
structures and API contract mismatches during development and makes a
growing application easier to maintain.

### Why Vite?

Vite provides a fast development experience and an efficient production
build workflow for modern frontend applications.

### Why Material UI?

MUI provides reusable, accessible UI components and a centralized
theming system, allowing Nexora to maintain a consistent enterprise
interface.

### How does the frontend communicate with the ML models?

It does not communicate with models directly. The frontend calls FastAPI
endpoints, and the backend handles validation, business logic, and ML
inference.

### Why separate services from components?

Components should focus primarily on presentation and interaction.
Services encapsulate API communication, which keeps UI code cleaner and
easier to maintain.

### What happens when a user submits a prediction?

The frontend collects the required input, sends it through the
appropriate service to the FastAPI backend, receives the structured
prediction response, and renders the result for the user.

### Why is client-side routing used?

React Router allows users to move between application views within the
SPA without requiring a full browser page reload for every navigation.

### How can the frontend support more AI models?

Each model can be introduced as a modular feature with its own pages,
services, types, and UI while continuing to use the shared routing,
layout, theme, and API architecture.

------------------------------------------------------------------------

## One-Line Architecture

> **React + TypeScript UI → React Router / Components → Axios Services →
> FastAPI Backend → Structured AI Results → Visual Presentation**

------------------------------------------------------------------------

## Frontend in the Nexora Architecture

``` text
                    NEXORA
        Enterprise AI Decision Intelligence
                         │
                         ▼
                ┌────────────────┐
                │    FRONTEND    │
                │ React + TS +   │
                │ MUI + Vite     │
                └───────┬────────┘
                        │
                    REST / JSON
                        │
                        ▼
                ┌────────────────┐
                │    BACKEND     │
                │    FastAPI     │
                └───────┬────────┘
                        │
             ┌──────────┼──────────┐
             ▼          ▼          ▼
           Logic       Data        ML
                        │          │
                        └────┬─────┘
                             ▼
                       API Response
                             │
                             ▼
                       Nexora UI
```

------------------------------------------------------------------------

## Documentation Boundary

This README documents the **frontend layer** of Nexora.

It intentionally does not document:

-   backend implementation details,
-   individual model training workflows,
-   model datasets,
-   feature engineering,
-   model-specific metrics,
-   model artifacts,
-   or production infrastructure internals.

Those concerns belong to their respective documentation.

The frontend's responsibility is to provide a clean, responsive,
maintainable interface over those underlying platform capabilities.
