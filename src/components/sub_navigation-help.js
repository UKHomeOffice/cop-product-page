import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import $ from 'jquery';


const isPartiallyActive = ({ isPartiallyCurrent }) => {
  return isPartiallyCurrent
    ? { className: "sub-navigation__item--active" }
    : {};
};

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "sub-navigation__item--active sub-nav-active" } : {};
};

const updateHashUrlOnViewPoint = (url) => {
  let hash = `#${url.split('#')[1]}`;
console.log(hash);
  // $(window).scroll(function() {
  //   let hT = $(hash).offset().top,
  //     hH = $(hash).outerHeight(),
  //     wH = $(window).height(),
  //     wS = $(this).scrollTop();
  //   if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
  //     window.location.hash = hash;
  //   }
  // });
  $(hash).on('inview', function (event, visible) {
    if (visible === true) {
      // element is now visible in the viewport
      console.log('blah');
    } else {
      // element has gone out of viewport
      console.log('no blah');
    }
  });


};


const SubNavigation = (props) => {

  let isBrowser = typeof window !== `undefined`;

  useEffect(() => {
    isBrowser = typeof window !== `undefined`;
    if (props.isSticky) {
      const subNavContainer = document.getElementById("subNavContainer");
      if (!subNavContainer.classList.contains("sub-nav-sticky-container")) {
        subNavContainer.classList.add("sub-nav-sticky-container");
        document.getElementById("subNav").classList.add("sub-nav-sticky");
      }
    }
  });

  useEffect(() => {
    for (let i = 0; i < props.navItems.length; i++) {
      for (let j of props.navItems[i].subItems) {
        if (j.href.includes('#')) {
          updateHashUrlOnViewPoint(j.href);
        }
      }
    }
  }, []);

  return (
    <div className= "column-one-quarter" id="subNavContainer">
      <div className="sub-navigation-custom-help" id="subNav">
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
                        <Link style={{ color: "#005ea5" }} getProps={isActive}
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

