import React from "react";
import Header from "./header";
import "./layout.css";
import Footer from "./footer";
import Head from "./head";
import CookiesConsent from "./cookie-consent";

const Layout = ({ path, children }) => (
  <>
    <Head/>
    <CookiesConsent/>
    <Header/>
    {children}
    <Footer/>
  </>
);
export default Layout;
