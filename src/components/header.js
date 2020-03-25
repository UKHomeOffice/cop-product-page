import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Image from "./image";
import Logo from "./logo";

const NavItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about/" },
  { name: "Help", href: "https://training.cop.homeoffice.gov.uk/" },
  { name: "Support", href: "/support/" },
  { name: "Sign-in", href: "https://www.cop.homeoffice.gov.uk/" }
];

const Header = () => {
  const showMobileButton = () => {
    let menuButton = document.getElementById("menuButton");
    let navigation = document.getElementById("navigation");

    if (!menuButton.classList.contains("govuk-header__menu-button--open")) {
      menuButton.classList.add("govuk-header__menu-button--open");
      navigation.classList.add("govuk-header__navigation--open");
      menuButton.setAttribute("aria-expanded", "true");
      navigation.setAttribute("aria-hidden", "false");
    } else {
      menuButton.classList.remove("govuk-header__menu-button--open");
      navigation.classList.remove("govuk-header__navigation--open");
      menuButton.setAttribute("aria-expanded", "false");
      navigation.setAttribute("aria-hidden", "true");
    }
  };
  return (
    <>
      <header className="govuk-header " role="banner" data-module="header">
        <div className="govuk-header__container govuk-width-container">

          <div className="govuk-header__logo">
            <Link to="/" className="govuk-header__link govuk-header__link--homepage">
                      <span className="cop-logo">
                        <Logo id="logo-image" source={"/images/logo.png"}/>
                        </span>
              <span className="govuk-header__product-name">Central Operations Platform</span>
              <strong className="govuk-tag govuk-phase-banner__content__tag">
                beta
              </strong>
            </Link>
          </div>
          <div className="govuk-header__content">


            <button id="menuButton" type="button" role="button" className="govuk-header__menu-button js-header-toggle"
                    aria-controls="navigation" aria-label="Show or hide Top Level Navigation"
                    onClick={() => showMobileButton()} onKeyPress={() => showMobileButton()}>Menu
            </button>
            <nav>
              <ul id="navigation" className="govuk-header__navigation govuk-header__navigation--end"
                  aria-label="Top Level Navigation">
                {NavItems.map((value, index) => {
                  if (value.name === "Help" || value.name === "Sign-in") {
                    return <li className="govuk-header__navigation-item"
                               key={index}>
                      <a href={value.href} className="govuk-header__link header-nav-items">
                        {value.name}
                      </a>
                    </li>;
                  } else if (value.name === "About") {
                    return <li className="govuk-header__navigation-item"
                               key={index}>
                      <Link to={value.href} partiallyActive={true} activeStyle={{ color: "#1d8feb" }}
                            className="govuk-header__link header-nav-items">
                        {value.name}
                      </Link>
                    </li>;
                  } else {
                    return <li className="govuk-header__navigation-item"
                               key={index}>
                      <Link to={value.href} activeStyle={{ color: "#1d8feb" }}
                            className="govuk-header__link header-nav-items">
                        {value.name}
                      </Link>
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
