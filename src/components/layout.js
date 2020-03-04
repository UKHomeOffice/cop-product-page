import React from "react";
import Header from "./header";
import "./layout.css";
import Footer from "./footer";
import AboutPage from "./page-structure/about-page";

const Layout = ({ path, children }) => (
  <>
    <Header currentPage={path} isLandingPage={true}/>

    <LayoutManager path={path} children={children}/>

    <Footer/>
  </>
);

const LayoutManager = (props) => {
  if (props.path === "/") {
    return (
      <div>
        {props.children}
      </div>
    );
  } else if (props.path && !props.path.includes("/about")) {
    return (
      <div className="govuk-width-container main-height" style={{marginTop: '30px'}}>
        {props.children}
      </div>
    );
  } else {
    return (
      <AboutPage children={props.children} path={props.path}/>
    );
  }
};

export default Layout;
