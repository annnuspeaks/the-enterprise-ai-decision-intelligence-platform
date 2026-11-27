```{=html}
<p align="center">
```
`<img src="src/assets/nexora-logo.png" alt="Nexora — The Enterprise AI Decision Intelligence Platform" width="520" />`{=html}
```{=html}
</p>
```
```{=html}
<h1 align="center">
```
Nexora --- Frontend
```{=html}
</h1>
```
```{=html}
<p align="center">
```
`<strong>`{=html}The Enterprise AI Decision Intelligence
Platform`</strong>`{=html}`<br />`{=html} From business data to
intelligent decisions.
```{=html}
</p>
```
```{=html}
<p align="center">
```
`<a href="https://nexoratas.vercel.app/">`{=html}Live
Platform`</a>`{=html} ·
`<a href="https://the-enterprise-ai-decision-intelligence.onrender.com/docs">`{=html}Backend
API Docs`</a>`{=html} ·
`<a href="https://github.com/annnuspeaks/the-enterprise-ai-decision-intelligence-platform">`{=html}Source
Repository`</a>`{=html}
```{=html}
</p>
```

------------------------------------------------------------------------

## Overview

The Nexora frontend is the user-facing web application for an
enterprise-oriented AI decision intelligence platform. It gives users a
consistent interface to enter business data, submit prediction requests,
and review model-generated insights.

The frontend is designed as a single-page application (SPA) and
communicates with the Nexora FastAPI backend over HTTP. The backend
performs model inference; the frontend handles the user experience,
request submission, and presentation of returned results.

> **Implementation status:** Models 01--04 are the current model
> integrations. Models 05--08 are reserved for upcoming platform
> capabilities and should not be treated as implemented until their
> individual workflows are released.

## Live Environments

  ---------------------------------------------------------------------------------------------------------------------
  Resource                            URL
  ----------------------------------- ---------------------------------------------------------------------------------
  Frontend application                https://nexoratas.vercel.app/

  Backend service                     https://the-enterprise-ai-decision-intelligence.onrender.com

  Interactive API documentation       https://the-enterprise-ai-decision-intelligence.onrender.com/docs

  API OpenAPI schema                  https://the-enterprise-ai-decision-intelligence.onrender.com/openapi.json

  GitHub repository                   https://github.com/annnuspeaks/the-enterprise-ai-decision-intelligence-platform
  ---------------------------------------------------------------------------------------------------------------------

The frontend is deployed on Vercel and the API is hosted separately on
Render. Keep the production API base URL in the frontend environment
configuration rather than hard-coding it across components.

## Model Portfolio

Nexora is being developed incrementally, with each model integrated as a
distinct business workflow.

  Model          Capability                                 Status
  -------------- ------------------------------------------ ------------
  **Model 01**   Customer Segmentation                      Integrated
  **Model 02**   Customer Churn Prediction                  Integrated
  **Model 03**   Customer Lifetime Value (CLV) Prediction   Integrated
  **Model 04**   Purchase Propensity Prediction             Integrated
  **Model 05**   Upcoming model capability                  Planned
  **Model 06**   Upcoming model capability                  Planned
  **Model 07**   Upcoming model capability                  Planned
  **Model 08**   Upcoming model capability                  Planned

The exact scope and names of Models 05--08 will be documented here when
those capabilities are confirmed and implemented. Do not interpret the
planned entries as live prediction workflows.

## Technology Stack

-   **React** --- component-based user interface
-   **TypeScript** --- typed application code
-   **Vite** --- development server and production build tooling
-   **Material UI (MUI)** --- interface components and layout primitives
-   **HTTP API integration** --- communicates with the FastAPI backend
-   **Vercel** --- frontend deployment

Refer to `package.json` for the exact dependency versions and available
scripts.

## How the Application Works

``` text
User
  │
  ▼
Nexora React + TypeScript Frontend
  │  Collects and validates form input
  ▼
API Client
  │  Sends an HTTP request to the configured API base URL
  ▼
Nexora FastAPI Backend (Render)
  │  Validates input and runs the selected model
  ▼
JSON Prediction Response
  │
  ▼
Frontend Result View
```

The frontend does not load or train model artifacts in the browser.
Prediction and inference logic belong to the backend service.

## Getting Started

### Prerequisites

Install the following before running the frontend locally:

-   Node.js --- use an active LTS release
-   npm (included with Node.js)
-   Git

### 1. Clone the repository

Run these commands from a terminal:

``` bash
git clone https://github.com/annnuspeaks/the-enterprise-ai-decision-intelligence-platform.git
cd the-enterprise-ai-decision-intelligence-platform/frontend
```

### 2. Install dependencies

``` bash
npm install
```

### 3. Configure the environment

Create a local `.env` file in the `frontend/` directory. Use
`.env.example` as the reference if it is present.

``` env
VITE_API_BASE_URL=https://the-enterprise-ai-decision-intelligence.onrender.com
```

For local backend development, set the value to the local API origin,
for example:

``` env
VITE_API_BASE_URL=http://127.0.0.1:8000
```

Use the production URL for the deployed frontend and the local URL only
when intentionally running the backend on your own machine. Do not add
secret keys to frontend environment variables: Vite exposes variables
prefixed with `VITE_` to browser-side code.

After changing `.env`, restart the Vite development server so the new
value is loaded.

### 4. Start the development server

``` bash
npm run dev
```

Vite will print the local development URL in the terminal. Open that
address in your browser.

### 5. Create a production build

``` bash
npm run build
```

### 6. Preview the production build locally

``` bash
npm run preview
```

Check `package.json` for the scripts supported by the current repository
version.

## Environment Configuration

  Variable              Required   Purpose
  --------------------- ---------- ------------------------------------------
  `VITE_API_BASE_URL`   Yes        Base URL used by the frontend API client

Example production value:

``` env
VITE_API_BASE_URL=https://the-enterprise-ai-decision-intelligence.onrender.com
```

Configuration notes:

-   Set environment variables in Vercel for the appropriate deployment
    environments.
-   After changing a Vercel environment variable, create a new
    deployment for the change to take effect.
-   Keep the base URL as the API origin; API route paths should be
    appended by the API client or feature service.
-   Avoid trailing-slash inconsistencies if the API client already
    normalizes the base URL.
-   Never place credentials, private tokens, or other server secrets in
    `VITE_*` variables.

## Backend Integration and Troubleshooting

The production backend is available at:

-   **API base:**
    `https://the-enterprise-ai-decision-intelligence.onrender.com`
-   **Swagger UI:**
    `https://the-enterprise-ai-decision-intelligence.onrender.com/docs`

Use Swagger UI to inspect the currently registered routes, request
schemas, and response formats. It is the source of truth for the
deployed API contract.

### If predictions fail

1.  Open the browser Developer Tools.
2.  Select **Network**, then submit a prediction again.
3.  Open the failed request and check its **Request URL**, **Status
    Code**, and **Response**.
4.  Confirm `VITE_API_BASE_URL` points to the Render API origin, not
    `127.0.0.1` in production.
5.  If the browser console reports a CORS error, verify that the backend
    allows the deployed frontend origin.
6.  Check the Render service logs for server-side errors.
7.  Compare the frontend request payload with the schema shown in the
    deployed Swagger documentation.

A backend endpoint returning `200 OK` when tested directly does not by
itself guarantee browser integration is working. The browser request can
still fail because of CORS, an incorrect URL, a mismatched payload, or
frontend response handling.

## CORS and Deployment Notes

The backend must allow the deployed frontend origin, including the exact
scheme and hostname. For example:

``` text
https://nexoratas.vercel.app
```

If the frontend uses another production domain or a Vercel preview URL,
that origin must also be handled according to the backend's CORS
configuration. Avoid using a broad wildcard together with credentialed
requests.

For production deployment:

1.  Set `VITE_API_BASE_URL` in Vercel.
2.  Confirm the Render backend is running and its `/docs` page opens.
3.  Build and deploy the frontend.
4.  Test each model workflow in the browser.
5.  Inspect Network and Console output for failed requests.
6.  Verify the deployed site is using the latest commit and environment
    configuration.

## Suggested Project Structure

The exact structure can evolve; the repository itself is the source of
truth. The frontend is organized around application entry points,
reusable UI, feature pages, and API integration.

``` text
frontend/
├── public/                 # Public static assets, if present
├── src/
│   ├── assets/             # Nexora logo, icon, and other assets
│   ├── components/         # Shared UI components
│   ├── pages/              # Page-level views and model workflows
│   ├── services/            # API client and request helpers, if present
│   ├── App.tsx              # Application shell and routes
│   └── main.tsx             # Frontend entry point
├── .env.example             # Environment-variable template, if present
├── package.json             # Scripts and dependencies
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite configuration
```

This is a high-level guide, not a guarantee that every optional
directory exists in every revision.

## Development Guidelines

-   Keep API communication in the existing API client/service layer
    rather than duplicating request logic across pages.
-   Keep model-specific form fields and result presentation aligned with
    the backend request and response schemas.
-   Show clear loading, success, empty, and error states for prediction
    workflows.
-   Do not silently replace failed API responses with fabricated
    prediction values.
-   Keep labels and validation messages understandable to business
    users.
-   Use shared components and consistent spacing, typography, and
    responsive behavior.
-   Document newly released model workflows and update the Model
    Portfolio table when their implementation status changes.

## Testing and Release Checklist

Before considering a frontend release complete:

-   [ ] Dependencies install successfully.
-   [ ] `npm run build` completes without errors.
-   [ ] The deployed frontend loads without runtime errors.
-   [ ] `VITE_API_BASE_URL` points to the intended backend.
-   [ ] The deployed backend `/docs` page is reachable.
-   [ ] Each released model submits a request using the expected
    payload.
-   [ ] Successful responses render the expected result.
-   [ ] Failed requests show a useful error message.
-   [ ] CORS works from the production frontend origin.
-   [ ] Desktop and mobile layouts remain usable.
-   [ ] README links, model statuses, and setup instructions match the
    current release.

## Related Documentation

-   [Main platform README](../README.md)
-   [Backend README](../backend/README.md)
-   [Interactive API
    documentation](https://the-enterprise-ai-decision-intelligence.onrender.com/docs)
-   [OpenAPI
    schema](https://the-enterprise-ai-decision-intelligence.onrender.com/openapi.json)

If a linked documentation file is not present in the current branch, use
the corresponding documentation in the repository or add the missing
file as part of the documentation cleanup.

## License

This project is distributed under the repository's [MIT
License](../LICENSE). Refer to the root `LICENSE` file for the complete
terms.
