import React from "react";

const SubNavigation = () => {
  const navItems = [
    { name: "Central Operations Platform (COP)", href: "cop" },
    { name: "Benefits of using COP", href: "benefits" },
    { name: "Accessing COP", href: "accessing" },
    { name: "Roadmap", href: "roadmap" },
    { name: "Security", href: "security" }
  ];
  return (
    <div>
      <nav>
        <ol itemScope="" itemType="http://schema.org/ItemList">
          {navItems.map((value, index) => {
            return <li
              className="sub-navigation__item  sub-navigation__item--active " itemProp="itemListElement"
              key={index}
              itemScope="" itemType="http://schema.org/ListItem">
              <a className="govuk-link govuk-link--no-visited-state" href={value.href} itemProp="item">
                <span itemProp="name">{value.name}</span>
              </a>
            </li>;
          })}
        </ol>
      </nav>
    </div>
  );
};


export default SubNavigation;