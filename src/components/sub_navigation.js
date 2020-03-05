import React from "react";
import { Link } from "gatsby";

const SubNavigation = (props) => {
  const navItems = [
    { name: "Central Operations Platform", href: "/about/cop" },
    { name: "Benefits of using COP", href: "/about/benefits" },
    { name: "Accessing COP", href: "/about/accessing" },
    { name: "Roadmap", href: "/about/roadmap" },
    { name: "Security", href: "/about/security" }
  ];
  return (<>
      <div>
        <nav>
          <ol>
            {navItems.map((value, index) => {
              return <li
                className="sub-navigation__item"
                key={index}>
                <div
                  className={props.currentPage === `${value.href}` ? "sub-navigation__item--active" : ""}>
                  <Link style={{ color: "black" }} className="govuk-link subnav" to={value.href}>
                    <span>{value.name}</span>
                  </Link>
                </div>
              </li>;
            })}
          </ol>
        </nav>
      </div>
    </>
  );
};


export default SubNavigation;