import React from "react";
import PropTypes from "prop-types";

import Header from "./header";
import "./layout.css";
import Footer from "./footer";
import SubNavigation from "./sub_navigation";

const Layout = ({ path, children }) => {
  console.log(path, "path");
  if (!path.includes("/about")) {
    return (<>
        <Header currentPage={path}/>
        <div
          className="govuk-main-wrapper govuk-width-container main-height"
        >
          {children}
        </div>
        <Footer/>
      </>
    );
  } else {
    return (<>
        <Header currentPage={path}/>
        <div
          className="govuk-main-wrapper govuk-width-container main-height"
        >
          <div className="grid-row">


            <div className="column-one-quarter">

              <SubNavigation/>
            </div>
            <div className="column-five-eighths">
              {children}
            </div>
          </div>
        </div>
        <Footer/>
      </>
    );
  }
};


Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
