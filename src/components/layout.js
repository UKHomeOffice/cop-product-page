import React from "react";
import Header from "./header";
import "./layout.scss";
import Footer from "./footer";
import Head from "./head";

const Layout = ({ children }) => {
  const { props } = children
    ? children
    : { props: { title: "Central Operations Platform" } };
  return (
    <>
      <Head data={props} />
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
