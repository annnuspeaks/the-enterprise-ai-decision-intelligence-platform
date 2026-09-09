import { ChevronRight, Lock, Sparkles } from "lucide-react";
import { NavLink } from "react-router-dom";
import { MODEL_NAVIGATION } from "../../../config/modelRegistry";
import "./ModelNavigation.css";

interface ModelNavigationProps {
  activeModel?: string;
}

const getStatusLabel = (status: string) => {
  if (status === "available") return "Live";
  if (status === "deferred") return "Deferred";
  return "Coming soon";
};

function ModelNavigation({ activeModel }: ModelNavigationProps) {
  return (
    <section className="model-navigation" aria-label="Model navigation">
      <div className="model-navigation__inner">
        <div className="model-navigation__context">
          <div className="model-navigation__context-icon">
            <Sparkles size={16} strokeWidth={2} />
          </div>
          <div>
            <span className="model-navigation__eyebrow">Nexora</span>
            <span className="model-navigation__context-title">
              Decision Models
            </span>
          </div>
          <ChevronRight
            className="model-navigation__context-chevron"
            size={17}
            strokeWidth={1.8}
          />
        </div>

        <div className="model-navigation__scroll" role="list">
          {MODEL_NAVIGATION.map((model) => {
            const Icon = model.icon;
            const isActive = activeModel === model.key;
            const isAvailable = model.status === "available" && Boolean(model.route);

            if (!isAvailable) {
              return (
                <div
                  key={model.key}
                  className={`model-nav-hex model-nav-hex--disabled${
                    isActive ? " model-nav-hex--active" : ""
                  }`}
                  role="listitem"
                  aria-disabled="true"
                  title={`${model.name} — ${getStatusLabel(model.status)}`}
                >
                  <span className="model-nav-hex__shape">
                    <Icon size={19} strokeWidth={1.9} />
                    <span className="model-nav-hex__name">{model.shortName}</span>
                    <Lock size={11} strokeWidth={2} />
                  </span>
                </div>
              );
            }

            return (
              <NavLink
                key={model.key}
                to={model.route!}
                className={`model-nav-hex${isActive ? " model-nav-hex--active" : ""}`}
                role="listitem"
                aria-label={model.name}
              >
                <span className="model-nav-hex__shape">
                  <Icon size={20} strokeWidth={1.9} />
                  <span className="model-nav-hex__name">{model.shortName}</span>
                  <span className="model-nav-hex__status">
                    {getStatusLabel(model.status)}
                  </span>
                </span>
              </NavLink>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ModelNavigation;
