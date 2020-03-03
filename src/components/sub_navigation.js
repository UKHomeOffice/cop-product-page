import React from "react";
import { Link } from "gatsby";

const SubNavigation = (props) => {
  const navItems = [
    { name: "Central Operations Platform", href: "about_sub_pages/cop" },
    { name: "Benefits of using COP", href: "about_sub_pages/benefits" },
    { name: "Accessing COP", href: "about_sub_pages/accessing" },
    { name: "Roadmap", href: "about_sub_pages/roadmap" },
    { name: "Security", href: "about_sub_pages/security" }
  ];
  return (
    <div>
      <nav>
        <ol>
          {navItems.map((value, index) => {
            return <li
              className="sub-navigation__item"
              key={index}>
              <div
                className={props.currentPage === `/${value.href}/` ? "sub-navigation__item--active" : ""}>
                <Link className="govuk-link" to={value.href}>
                  <span>{value.name}</span>
                </Link>
              </div>
            </li>;
          })}
        </ol>
      </nav>
    </div>
  );
};


export default SubNavigation;