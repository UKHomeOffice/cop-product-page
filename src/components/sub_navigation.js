import React from "react";
import { Link } from "gatsby";

const SubNavigation = (props) => (
      <div style={{marginBottom: '30px'}}>
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
  );

export default SubNavigation;