import React from 'react'


const CookiesConsent = (props) => (
  <div id="global-cookie-message" className="cop-cookie-banner" data-module="cookie-banner" role="region"
       aria-describedby="cop-cookie-banner__heading" style={{display: "block"}}>
    <div className="cop-cookie-banner__wrapper govuk-width-container">
      <h2 className="cop-cookie-banner__heading govuk-heading-m" id="cop-cookie-banner__heading">Can we store
        analytics cookies on your device?</h2>
      <p className="govuk-body">Analytics cookies help us understand how our website is being used.</p>
      <div className="cop-cookie-banner__buttons">
        <button className="govuk-button cop-cookie-banner__button cop-cookie-banner__button-accept" type="submit"
                data-accept-cookies="true" aria-describedby="cop-cookie-banner__heading">
          Yes<span className="govuk-visually-hidden">, Notify can store analytics cookies on your device</span>
        </button>
        <button className="govuk-button cop-cookie-banner__button cop-cookie-banner__button-reject" type="submit"
                data-accept-cookies="false" aria-describedby="cop-cookie-banner__heading">
          No<span className="govuk-visually-hidden">, Notify cannot store analytics cookies on your device</span>
        </button>
        <a className="govuk-link cop-cookie-banner__link" href="/cookies">How Notify uses cookies</a>
      </div>
    </div>

    <div className="cop-cookie-banner__confirmation govuk-width-container" tabIndex="-1">
      <p className="cop-cookie-banner__confirmation-message govuk-body">
        You can <a className="govuk-link" href="/cookies">change your cookie settings</a> at any time.
      </p>
      <button className="cop-cookie-banner__hide-button govuk-link" data-hide-cookie-banner="true" role="link">Hide
      </button>
    </div>
  </div>
);
export default CookiesConsent


