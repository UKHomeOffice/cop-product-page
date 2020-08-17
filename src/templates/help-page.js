import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import LargeTitle from "../components/large-title";
import BreakLine from "../components/Break-line";
import { MDXRenderer } from "gatsby-plugin-mdx";
import SubNavigation from "../components/sub_navigation-help";
import { navItems } from "../config/help-nav-items";

export const HelpPageTemplate = ({ title, subTitle, content, subject }) => {
  return (
    <div>
      <div className="govuk-width-container main-height">
        <BreakLine pixels={"40"} />
        <div className="grid-row">
          <div className="column-one-quarter-help">
            <SubNavigation navItems={navItems} />
          </div>
          <div className="column-five-eighths-help">
            <LargeTitle text={title} />
            <h1 className="govuk-heading-help-sub-title">{subTitle}</h1>
            <MDXRenderer>{content}</MDXRenderer>
          </div>
        </div>
      </div>
    </div>
  );
};

HelpPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const HelpPage = ({ data }) => {
  const { mdx: post } = data;
  return (
    <Layout>
      <HelpPageTemplate
        title={post.frontmatter.title}
        subTitle={post.frontmatter.subTitle}
        content={post.body}
        subject={post.frontmatter.subject}
      />
    </Layout>
  );
};

HelpPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default HelpPage;

export const helpPageQuery = graphql`
  query HelpPage($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        subTitle
        subject
      }
    }
  }
`;
