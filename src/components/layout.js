import React from "react";
import Header from "./header";
import "./layout.css";
import Footer from "./footer";
import AboutPage from "./page-structure/about-page";
import Head from "./head";

const Layout = ({ path, children }) => (
  <>
    <Head/>
    <Header currentPage={path} isLandingPage={true}/>
    <LayoutManager path={path} children={children}/>
    <Footer/>
  </>
);

const LayoutManager = (props) => {
  return (
    <div>
      {props.path && props.path.includes("/about_sub_pages") && (<div> <AboutPage children={props.children} path={props.path}/> </div>)}
      {props.path && !props.path.includes("/about_sub_pages") && (<div> {props.children} </div>)}
    </div>
  );
};

export default Layout;
