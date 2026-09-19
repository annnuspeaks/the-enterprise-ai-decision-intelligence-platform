import { ArrowLeft, Compass, Home, SearchX } from "lucide-react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css";

function NotFoundPage() {
  return (
    <main className="not-found-page">
      <div className="not-found-page__ambient not-found-page__ambient--one" />
      <div className="not-found-page__ambient not-found-page__ambient--two" />

      <section className="not-found-page__shell" aria-labelledby="not-found-title">
        <div className="not-found-page__visual" aria-hidden="true">
          <div className="not-found-page__orbit not-found-page__orbit--one" />
          <div className="not-found-page__orbit not-found-page__orbit--two" />

          <div className="not-found-page__core">
            <SearchX size={52} strokeWidth={1.45} />
          </div>

          <span className="not-found-page__node not-found-page__node--one" />
          <span className="not-found-page__node not-found-page__node--two" />
          <span className="not-found-page__node not-found-page__node--three" />
        </div>

        <div className="not-found-page__content">
          <span className="not-found-page__eyebrow">
            ERROR 404 · ROUTE NOT FOUND
          </span>

          <h1 id="not-found-title">
            This decision path
            <span>doesn’t exist.</span>
          </h1>

          <p>
            The page you’re looking for may have moved, the URL may be
            incorrect, or this route may not be available yet. Let’s get you
            back to a valid Nexora destination.
          </p>

          <div className="not-found-page__actions">
            <Link to="/" className="not-found-page__primary-action">
              <Home size={18} strokeWidth={2} />
              Back to Home
            </Link>

            <Link to="/dashboard" className="not-found-page__secondary-action">
              <Compass size={18} strokeWidth={2} />
              Open Dashboard
            </Link>
          </div>

          <button
            type="button"
            className="not-found-page__back-link"
            onClick={() => window.history.back()}
          >
            <ArrowLeft size={16} />
            Go back to the previous page
          </button>
        </div>
      </section>
    </main>
  );
}

export default NotFoundPage;
