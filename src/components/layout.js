import React from "react";
import Header from "./header";
import "./layout.css";
import Footer from "./footer";
import SubNavigation from "./sub_navigation";

const Layout = ({ path, children }) => (
  <>
    <Header currentPage={path}/>
    <div className="govuk-main-wrapper govuk-width-container main-height">
      <LayoutManager path={path} children={children}/>
    </div>
    <Footer/>
  </>
);

const LayoutManager = (props) => {
  if (!props.path.includes("/about")) {
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
