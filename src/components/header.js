import { Link } from "gatsby";
import React from "react";
import Logo from "./logo";
import {navItems} from "../config/header-nav-items";

const showMobileButton = () => {
  const menuButton = document.getElementById("menuButton");
  const navigation = document.getElementById("navigation");
  const headerButtonOpenClass = 'govuk-header__menu-button--open';
  if (menuButton) {
    if (!menuButton.classList.contains(headerButtonOpenClass)) {
      menuButton.classList.add(headerButtonOpenClass);
      navigation.classList.add("govuk-header__navigation--open");
      menuButton.setAttribute("aria-expanded", "true");
      navigation.setAttribute("aria-hidden", "false");
    } else {
      menuButton.classList.remove(headerButtonOpenClass);
      navigation.classList.remove("govuk-header__navigation--open");
      menuButton.setAttribute("aria-expanded", "false");
      navigation.setAttribute("aria-hidden", "true");
    }
  }
};

const isAboutPartiallyActive = ({ isPartiallyCurrent }) => {
  return isPartiallyCurrent
    ? { style: { color: "#1d8feb" } }
    : {};
};

const isHelpPartiallyActive = ({ isPartiallyCurrent, location }) => {
  return isPartiallyCurrent || location.pathname.includes('help')
    ? { style: { color: "#1d8feb" } }
    : {};
};

const Header = () => (
  <>
    <header className="govuk-header " role="banner" data-module="header">
      <div className="govuk-header__container govuk-width-container">

        <div className="govuk-header__logo">
          <Link to="/" className="govuk-header__link govuk-header__link--homepage">
                      <span style={{ marginRight: "6px" }}>
                        <Logo id="logo-image" source={"/images/logo.png"}/>
                        </span>
            <span id='service-name' className="govuk-header__product-name service-name"/>
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
              {navItems.map((value, index) => {
                if (value.name === "Sign-in") {
                  return <li className="govuk-header__navigation-item"
                             key={index}>
                    <a href={value.href} target='_blank' rel="noreferrer" className="govuk-header__link header-nav-items">
                      {value.name}
                    </a>
                  </li>;
                } else if (value.name === "About") {
                  return <li className="govuk-header__navigation-item"
                             key={index}>
                    <Link to={value.href} getProps={isAboutPartiallyActive}
                          className="govuk-header__link header-nav-items">
                      {value.name}
                    </Link>
                  </li>;
                } else if (value.name === "Help") {
                return <li className="govuk-header__navigation-item"
                key={index}>
                <Link to={value.href} getProps={isHelpPartiallyActive}
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

export default Header;

export const testables = {
  showMobileButton: showMobileButton
};
