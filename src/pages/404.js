import React from 'react'
import Layout from '../components/layout'

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
              If the web address is correct or you selected a link or button, <a href="#" className="govuk-link">contact the
              COP Team </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  </Layout>
)

export default NotFoundPage