import React from "react";
import { Link } from "gatsby";

const SubNavigation = (props) => {
  if (props.isHelp) {
    const location = window.location;
    console.log(location.pathname);
    return (
      <div className="sub-navigation-custom-help sub-nav-sticky">
        <nav>
          <ol>
            {props.navItems.map((value, index) => {
              return <div key={index}>
                <li className="sub-navigation__item">
                  <Link partiallyActive={true} activeClassName="sub-navigation__item--active" style={{ color: "black" }}
                        className="govuk-link subnav" to={value.href}>
                    <span>{value.name}</span>
                  </Link>
                </li>
                {value.href && value.href.includes(`${location.pathname}`)
                  ? value.subItems.map((v, index) => {
                  return <li
                    className="sub-navigation__item"
                    key={index} style={{ paddingLeft: '30px' }}>
                    <Link activeClassName="sub-navigation__item--active"
                          className="govuk-link subnav" to={v.href}>
                      <span style={{ color: "#005ea5" }}>{v.name}</span>
                    </Link>
                  </li>;
                }) : console.log(value.href, 'ffff')}
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
              <Link activeClassName="sub-navigation__item--active" style={{ color: "black" }} className="govuk-link subnav" to={value.href}>
                <span>{value.name}</span>
              </Link>
            </li>;
          })}
        </ol>
      </nav>
    </div>
    )
  }
};
export default SubNavigation;

