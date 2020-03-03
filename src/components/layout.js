import React from "react";
import Header from "./header";
import "./layout.css";
import Footer from "./footer";
import SubNavigation from "./sub_navigation";
import PhaseBanner from "./phase-banner";

const Layout = ({ path, children }) => (
  <>
    <Header currentPage={path}/>
    <div className="govuk-width-container main-height">
      <PhaseBanner/>
      <LayoutManager path={path} children={children}/>
    </div>
    <Footer/>
  </>
);

const LayoutManager = (props) => {
  if (props.path && !props.path.includes("/about")) {
    return (
      <div>
        {props.children}
      </div>
    );
  } else {
    return (
      <div className="grid-row">
        <div className="column-one-quarter">
          <SubNavigation currentPage={props.path}/>
        </div>
        <div className="column-five-eighths">
          {props.children}
        </div>
      </div>
    );
  }
};

export default Layout;
