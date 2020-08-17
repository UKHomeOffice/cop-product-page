import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import LargeTitle from "../components/large-title";
import BreakLine from "../components/Break-line";
import { MDXRenderer } from "gatsby-plugin-mdx";

export const GDSPageTemplate = ({ title, content }) => {
  return (
    <div>
      <BreakLine pixels={40} />
      <div className="govuk-width-container main-height">
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-two-thirds">
            <LargeTitle text={title} />
            <MDXRenderer>{content}</MDXRenderer>
          </div>
        </div>
      </div>
    </div>
  );
};

GDSPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const GDSPage = ({ data }) => {
  const { mdx: post } = data;

  return (
    <Layout>
      <GDSPageTemplate title={post.frontmatter.title} content={post.body} />
    </Layout>
  );
};

GDSPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default GDSPage;

export const GDSPageQuery = graphql`
  query GDSPage($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        subTitle
      }
    }
  }
`;
