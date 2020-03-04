import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const NavItems = [
  { name: "About", href: "/about_sub_pages/cop" },
  { name: "Documentation", href: "https://training.cop.homeoffice.gov.uk/" },
  { name: "Sign-in", href: "https://sso.digital.homeoffice.gov.uk/auth/realms/cop-prod/protocol/saml?SAMLRequest=jZJRb9sgFIX%2FCuLdxna81EZxqqxR1UjtFjXuHvYyEfs6QcXgcSHd%2Fv2ovUyZtFV9hXO%2Fc7iHxfWPXpETWJRGVzSNE0pAN6aV%2BlDRp%2Fo2Kuj1coGiVwNfeXfUj%2FDdAzoS5jTy8aKi3mpuBErkWvSA3DV8t3q451mc8MEaZxqjKFkhgnXB6MZo9D3YHdiTbODp8b6iR%2BcG5IyhHwZjXdyYIT6aHkzXBUl8MKfYP7NB%2BYPUyALopMCxV38mQi5K1iGV1MKND%2FlDQxO38iCdUP%2BgvQ4yC0L1yIJfFKK27Jx3ZFOyWVf0W9m1bQmzokmyPG%2BuZvt9uS%2Fa7ipP5iXMuyLIED1sNDqhXUWzJEuiZBYleZ3OeV7wbB6n5YevlGx%2F0z9KPe34rdXtJxHyu7reRtvPu5qSL%2BeugoBOzfDR3F5U8jZWnHugy3dtfcEuXCbLbOCfAnez3holm58X1tn7v4NS5uUmrN9BRZ31QMmtsb1w%2FwekcTqeyDbqRin3GgdoZCehpWw5Jf37py5%2FAQ%3D%3D&RelayState=%2F&SigAlg=http%3A%2F%2Fwww.w3.org%2F2001%2F04%2Fxmldsig-more%23rsa-sha256&Signature=fSkVl%2FcTPJGkqskrqkWzOhF0PXXuJig9BPdKo9w6%2FbZpzfxJYEswDmW%2FUBeH7AhcjlafgFWVftrW%0ArYn9FeQsMCjYIF7XQRRvZ0NzDkj0crroe6wYRIULft84sI4piN46%2BydeUMhJgdelyYtP9rj5vwmo%0A4wettQtQhI28C%2BMucCHwM%2FL6fSlkyc5fW%2BO7sJ9cmeCcerpYQw%2BWF8%2B8aS5UzBn9kNieWLvVZ1xr%0ApfxMFcdFVWni2xmwWJ42fad" }
];

const Header = (props) => {
  return (
    <>
      <header className="govuk-header " role="banner" data-module="header">
        <div className="govuk-header__container govuk-width-container">

          <div className="govuk-header__logo" style={{
            width: `52%`
          }}>
            <Link to="/" className="govuk-header__link govuk-header__link--homepage">
        <span className="govuk-header__logotype">
          <span className="govuk-header__logotype-text">
            GOV.UK
          </span>
        </span>

              <span className="govuk-header__product-name">
          Central Operations Platform
        </span>

            </Link>
          </div>

          <div className="govuk-header__content" style={{
            width: `48%`
          }}>


            <button type="button" className="govuk-header__menu-button js-header-toggle"
                    aria-controls="navigation" aria-label="Show or hide Top Level Navigation">Menu
            </button>


            <nav>
              <ul id="navigation" className="govuk-header__navigation govuk-header__navigation--end"
                  aria-label="Top Level Navigation">
                {NavItems.map((value, index) => {
                  if (value.name === "Documentation" || value.name === "Sign-in") {
                    return <li className="govuk-header__navigation-item"
                               key={index}>
                      <div
                        className={props.currentPage === `${value.href}/` ? "govuk-header__navigation-item--active" : ""}>
                        <a href={value.href} className="govuk-header__link header-nav-items">
                          {value.name}
                        </a>
                      </div>
                    </li>;
                  } else if (value.name === "About") {
                    return <li className="govuk-header__navigation-item"
                               key={index}>
                      <div
                        className={props.currentPage && props.currentPage.includes("about_sub_pages") ? "govuk-header__navigation-item--active" : ""}>
                        <Link to={value.href} className="govuk-header__link header-nav-items">
                          {value.name}
                        </Link>
                      </div>
                    </li>;
                  } else {
                    return <li className="govuk-header__navigation-item"
                               key={index}>
                      <div
                        className={props.currentPage === `${value.href}/` ? "govuk-header__navigation-item--active" : ""}>
                        <Link to={value.href} className="govuk-header__link header-nav-items">
                          {value.name}
                        </Link>
                      </div>
                    </li>;
                  }
                })}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ""
};

export default Header;
