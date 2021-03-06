import React from "react";
import { Helmet } from "react-helmet";

const Head = (props) => {
  const { title, subTitle, subject } = props.data;
  let siteTitle = '';
  if (subTitle && subject) {
    siteTitle = `Central Operations Platform - ${title} - ${subTitle} - ${subject}`;
  } else if (subTitle && !subject) {
    siteTitle = `Central Operations Platform - ${title} - ${subTitle}`;
  } else {
    siteTitle = `Central Operations Platform - ${title}`;
  }
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{siteTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <meta name="theme-color" content="blue" />

      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <link rel="stylesheet" type="text/x-scss" href="/stylesheets/layout.scss" />
      <link rel="apple-touch-icon" sizes="57x57" href="/images/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/images/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/images/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/images/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/images/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/images/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/images/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/images/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/images/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
      <link rel="manifest" href="/images/manifest.json" />
      <meta name="msapplication-TileImage" content="/images/ms-icon-144x144.png" />
      <body className="js-enabled govuk-template__body govuk-main-wrapper--auto-spacing " />
    </Helmet>
  )
}

export default Head;