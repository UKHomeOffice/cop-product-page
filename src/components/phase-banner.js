import React from "react";

const PhaseBanner = () => (
  <div className="govuk-phase-banner" style={{ marginBottom: "40px" }}>
    <p className="govuk-phase-banner__content">
      <strong className="govuk-tag govuk-phase-banner__content__tag">
        beta
      </strong>
      <span className="govuk-phase-banner__text">
        This is a new service – your{" "}
        <a className="govuk-link" href="https://gov.uk">
          feedback
        </a>{" "}
        will help us to improve it.
      </span>
    </p>
  </div>
);

export default PhaseBanner;
