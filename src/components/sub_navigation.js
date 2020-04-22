import React from "react";
import { Link } from "gatsby";

const SubNavigation = (props) => {
  const navItems = [
    { name: "About COP", href: "/about/" },
    { name: "How COP helps you", href: "/about/benefits/" },
    { name: "Get started", href: "/about/get_started/" },
    { name: "Roadmap", href: "/about/roadmap/" },
    { name: "Security", href: "/about/security/" }
  ];
  return (<>
      <div style={{marginBottom: '30px', paddingRight: '15px'}}>
        <nav>
          <ol>
            {navItems.map((value, index) => {
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
    </>
  );
};


export default SubNavigation;