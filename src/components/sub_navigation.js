import React, { useEffect } from "react";
import { Link } from "gatsby";


let gIndex = 0;
const displaySubNav = (index) => {
  gIndex = index;
};

const isPartiallyActive = ({ isPartiallyCurrent, location }) => {
  return isPartiallyCurrent
    ? { className: "sub-navigation__item--active" }
    : {};
};

const SubNavigation = (props) => {
  useEffect(() => {
    gIndex = 0;
  });

  if (props.isHelp) {
    return (
      <div className="sub-navigation-custom-help sub-nav-sticky">
        <nav>
          <ol>
            {props.navItems.map((value, index) => {
              return <div key={index}>
                <li className="sub-navigation__item">
                  <Link style={{ color: "black" }}
                        className="govuk-link subnav" to={value.href} onClick={() => displaySubNav(index)}
                        getProps={isPartiallyActive} state={{ index: index }}>
                    <span>{value.name}</span>
                  </Link>
                </li>


                {value.subItems.map((v, i) => {
                  if (gIndex === index) {
                    return <li
                      className="sub-navigation__item"
                      key={i} style={{ paddingLeft: "30px" }}>
                      <Link style={{ color: "#005ea5" }} activeClassName="sub-navigation__item--active sub-nav-active"
                            className="govuk-link subnav" to={v.href} onClick={() => displaySubNav(index)}>
                        <span>{v.name}</span>
                      </Link>
                    </li>;
                  }
                })}


              </div>;
            })}
          </ol>
        </nav>
      </div>
    );
  } else {
    return (
      <div className="sub-navigation-custom">
        <nav>
          <ol>
            {props.navItems.map((value, index) => {
              return <li
                className="sub-navigation__item"
                key={index}>
                <Link activeClassName="sub-navigation__item--active" style={{ color: "black" }}
                      className="govuk-link subnav" to={value.href}>
                  <span>{value.name}</span>
                </Link>
              </li>;
            })}
          </ol>
        </nav>
      </div>
    );
  }
};
export default SubNavigation;

