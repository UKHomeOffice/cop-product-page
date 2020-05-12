import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import LargeTitle from "../components/large-title";
import BreakLine from "../components/Break-line";
import { MDXRenderer } from "gatsby-plugin-mdx";
import SubNavigation from "../components/sub_navigation-help";
import { navItems } from "../config/help-nav-items";

export const HelpPageTemplate = ({ title, content }) => {
  return (
    <div>
      <div className="govuk-width-container main-height">
        <BreakLine pixels={"40"}/>
        <div className="grid-row">
            <SubNavigation navItems={navItems}/>
          <div className="column-five-eighths">
            <LargeTitle text={title}/>
            <MDXRenderer>{content}</MDXRenderer>
          </div>
        </div>
      </div>
    </div>
  );
};

HelpPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const HelpPage = ({ data }) => {
  const { mdx: post } = data;

  return (
    <Layout>
      <HelpPageTemplate
        title={post.frontmatter.title}
        content={post.body}
      />
    </Layout>
  );
};

HelpPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default HelpPage;

export const helpPageQuery = graphql`
  query HelpPage($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
      }
    }
  }
`;
