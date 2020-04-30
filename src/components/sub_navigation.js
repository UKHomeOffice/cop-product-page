import React from "react";
import { Link } from "gatsby";

let a;
let gIndex;
const displaySubNav = (value, index) => {
  const location = window.location;
  console.log(value.href, "href");
  console.log(location.pathname, "pathname");
  a = location.pathname && location.pathname.includes(value.href);
  gIndex = index;
  console.log(a, 'includes');
};

const SubNavigation = (props) => {
  if (props.isHelp) {
    const location = window.location;
    return (
      <div className="sub-navigation-custom-help sub-nav-sticky">
        <nav>
          <ol>
            {props.navItems.map((value, index) => {
              return <div key={index}>
                <li className="sub-navigation__item">
                  <Link partiallyActive={true} activeClassName="sub-navigation__item--active" style={{ color: "black" }}
                        className="govuk-link subnav" to={value.href} onClick={() => displaySubNav(value, index)}>
                    <span>{value.name}</span>
                  </Link>
                </li>
                {value.subItems.map((v, i) => {
                  if (a && gIndex === index) {
                  return <li
                    className="sub-navigation__item"
                    key={i} style={{ paddingLeft: "30px" }}>
                    <Link activeClassName="sub-navigation__item--active"
                          className="govuk-link subnav" to={v.href}>
                      <span style={{ color: "#005ea5" }}>{v.name}</span>
                    </Link>
                  </li>;
                } else { return <div key={i}/> }}) }
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

