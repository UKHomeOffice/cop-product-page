import React from "react";
import Header from "./header";
import "./layout.css";
import Footer from "./footer";
import Head from "./head";

const Layout = ({ path, children }) => (
  <>
    <Head/>
    <Header currentPage={path} isLandingPage={true}/>
    {children}
    <Footer/>
  </>
);
export default Layout;
