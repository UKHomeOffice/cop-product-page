import React, { useEffect } from "react";
import { Link } from "gatsby";

const isPartiallyActive = ({ isPartiallyCurrent }) => {
  return isPartiallyCurrent
    ? { className: "sub-navigation__item--active", style: {color: "black"} }
    : {};
};

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "sub-navigation__item--active sub-nav-active", style: {color: "black", textDecoration: 'none', cursor: 'default'} } : {};
};

const SubNavigation = (props) => {
  let isBrowser = typeof window !== `undefined`;
  useEffect(() => {
    isBrowser = typeof window !== `undefined`;
  });
  return (
    <div className="column-one-quarter">
      <div className="sub-navigation-custom-help">
        <nav>
          <ol>
            {props.navItems.map((value, index) => {
              return <div key={index}>
                <li className="sub-navigation__item">
                  <Link style={{ color: "black" }}
                        className="govuk-link subnav" to={value.href}
                        getProps={isPartiallyActive}>
                    <span>{value.name}</span>
                  </Link>
                </li>
                {value.subItems && value.subItems.length > 0 && value.subItems.map((v, i) => {
                  if (isBrowser) {
                    if (window.location.pathname.includes(value.href)) {
                      return <li
                        className="sub-navigation__item"
                        key={i} style={{ paddingLeft: "30px" }}>
                        <Link style={{ color: "#005ea5", cursor: 'pointer' }} getProps={isActive}
                              className="govuk-link subnav" to={v.href}>
                          <span>{v.name}</span>
                        </Link>
                      </li>;
                    }
                  }
                })}
              </div>;
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
};
export default SubNavigation;

