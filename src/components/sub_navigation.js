import React from "react";
import { Link } from "gatsby";

const SubNavigation = (props) => {
  const navItems = [
    { name: "About COP", href: "/about/cop" },
    { name: "Benefits of COP", href: "/about/benefits" },
    { name: "How to use COP", href: "/about/accessing" },
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