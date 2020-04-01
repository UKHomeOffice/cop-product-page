import React from "react";
import Header from "./header";
import "./layout.css";
import Footer from "./footer";
import Head from "./head";

const Layout = ({ children }) => (
  <>
    <Head/>
    <Header/>
    {children}
    <Footer/>
  </>
);
export default Layout;
