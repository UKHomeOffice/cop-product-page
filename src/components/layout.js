import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'
import Footer from "./footer";

const Layout = ({ path, children }) => (

      <>
        <Header currentPage={path} />
        <div
          className="govuk-main-wrapper govuk-width-container main-height"
        >
          {children}
        </div>
        <Footer/>
      </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
