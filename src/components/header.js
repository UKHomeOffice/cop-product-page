import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const NavItems = [
  { name: "About", href: "/about_sub_pages/cop" },
  { name: "Documentation", href: "https://training.cop.homeoffice.gov.uk/" },
  { name: "Sign-in", href: "https://www.cop.homeoffice.gov.uk/" }
];

const Header = (props) => {
  return (
    <>
      <header className="govuk-header " role="banner" data-module="header">
        <div className="govuk-header__container govuk-width-container">

          <div className="govuk-header__logo" style={{
            width: `60%`
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
            <strong className="govuk-tag govuk-phase-banner__content__tag">
              beta
            </strong>
          </div>

          <div className="govuk-header__content" style={{
            width: `40%`
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
