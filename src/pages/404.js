import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <div className="govuk-width-container main-height">
      <main className="govuk-main-wrapper govuk-main-wrapper--l" id="main-content" role="main">
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-two-thirds">
            <h1 className="govuk-heading-xl">Page not found</h1>
            <p className="govuk-body">
              If you typed the web address, check it is correct.
            </p>

            <p className="govuk-body">
              If you pasted the web address, check you copied the entire address.
            </p>

            <p className="govuk-body">
            If you're still having problems go to our <Link to="/" className="govuk-link" >homepage</Link> or <Link to="/help/contact/" className="govuk-link">contact us</Link> if you can't find what you're looking for.
            </p>
          </div>
        </div>
      </main>
    </div>
  </Layout>
)

export default NotFoundPage