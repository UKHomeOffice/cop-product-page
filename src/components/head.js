import React from "react"
import { Helmet } from "react-helmet";

const Head = () => (
  <Helmet>
    <meta charSet="utf-8"/>
    <title>GOV.UK - Central Operations Platform</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
    <meta name="theme-color" content="blue"/>

    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>

    <link rel="shortcut icon" sizes="16x16 32x32 48x48" href="/images/favicon.ico" type="image/x-icon"/>
    <link rel="mask-icon" href="/images/govuk-mask-icon.svg" color="blue"/>
    <link rel="apple-touch-icon" sizes="180x180" href="/images/govuk-apple-touch-icon-180x180.png"/>
    <link rel="apple-touch-icon" sizes="167x167" href="/images/govuk-apple-touch-icon-167x167.png"/>
    <link rel="apple-touch-icon" sizes="152x152" href="/images/govuk-apple-touch-icon-152x152.png"/>
    <link rel="apple-touch-icon" href="/images/govuk-apple-touch-icon.png"/>
    <link href="/stylesheets/all.css" rel="stylesheet"/>
  </Helmet>
);

export default Head