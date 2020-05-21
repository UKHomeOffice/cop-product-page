import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import BreakLine from "../components/Break-line";
import StatContent from "../components/stats-content";
import MediumTitle from "../components/MediumTitle";
import Hr from "../components/hr";
import Image from "../components/image";
import Panel from "../components/panel";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Notification from "./notification";

export const IndexPageTemplate = ({ panelTitle, panelParagraph, content, stats, isNotify }) => {
  return (
    <div>
      <Panel title={panelTitle}
             imageSource={"/images/home/banner.png"} imageAlt={"transform"}
             paragraphText={panelParagraph}/>

      {isNotify && <Notification/>}

      <div className="govuk-width-container">

        <BreakLine pixels={"50"}/>

        <div className="govuk-grid-row">


          <div className="govuk-grid-column-one-half">
            <MDXRenderer>{content}</MDXRenderer>
          </div>

          <div className="govuk-grid-column-one-half">
            <Image noMobile={true} source={"/images/home/group-20.png"} alt={"transform"}/>
          </div>
        </div>

        <Hr inContent={true}/>

        <div className="govuk-grid-row homepage-content-margin">
          <div className="govuk-grid-column-one-half">
            <MediumTitle text={"How COP helps frontline staff"}/>
          </div>
        </div>

        <div style={{ marginLeft: "5px" }} className="govuk-grid-row homepage-content-margin">
          <div className="govuk-grid-column-two-thirds">
            <Image source={"/images/home/group-5.png"} alt={"transform"}/>
          </div>
        </div>

        <div className="govuk-grid-row homepage-content-margin">
          <div className="govuk-grid-column-one-half">
            <p className="govuk-body">Learn more about <Link className="govuk-link" to="/about/benefits/">how COP helps
              the
              work of Border Force.</Link></p>
          </div>
        </div>

        <Hr inContent={true}/>

        <div className="govuk-grid-row homepage-content-margin">
          <div className="govuk-grid-column-one-half">
            <MediumTitle text={"How to get support"}/>
            <p className="govuk-body">Find out <Link className="govuk-link" to="/help/accessing/">how to use COP</Link> and its services, or <Link
              className="govuk-link" to="/contact/">check the contact section</Link> if you need any other help or
              assistance.
            </p>
          </div>
        </div>

        <Hr inContent={true}/>

        <StatContent title={"Used and trusted by Border Force teams"}
                     stats={stats}/>

        <div className="govuk-grid-row">
          <div className="govuk-grid-column-one-half">
            <p className="govuk-body">Learn <Link to="/about/" className="govuk-link">how COP is reducing
              work</Link> and
              capturing information faster and better. And find out how it is <Link to="/about/benefits/"
                                                                                    className="govuk-link">making the
                work of
                Border Force staff easier.</Link></p>
          </div>
        </div>

        <BreakLine pixels={"50"}/>

      </div>

    </div>
  );
};

const IndexPage = ({ data }) => {
  const { frontmatter, body } = data.mdx;
  return (
    <Layout>
      <IndexPageTemplate
        panelTitle={frontmatter.panelTitle}
        panelParagraph={frontmatter.panelParagraph}
        content={body}
        stats={frontmatter.multipleStats}
        isNotify={frontmatter.isNotify}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
query IndexPageTemplate {
  mdx(frontmatter: {templateKey: {eq: "index-page"}}) {
    body
    frontmatter {
      panelTitle
      panelParagraph
      isNotify
      multipleStats {
          description
          stat
      }
    }
  }
}
`;
