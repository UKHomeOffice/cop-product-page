import React from "react";
import renderer from "react-test-renderer";
import IndexPage from "../src/templates/index-page";
import { MDXRenderer } from "gatsby-plugin-mdx";
const rawData = {
  mdx: {
    body: 'function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\\\\n\\\\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\\\\n\\\\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\\\\n\\\\n/* @jsx mdx */\\\\nvar _frontmatter = {\\\\n  \\\\"templateKey\\\\": \\\\"index-page\\\\",\\\\n  \\\\"panelTitle\\\\": \\\\"Easily capture data, make better decisions\\\\",\\\\n  \\\\"panelParagraph\\\\": \\\\"Use the Central Operations Platform (COP) to capture information quickly and produce data that informs decision making.\\\\",\\\\n  \\\\"isNotify\\\\": false,\\\\n  \\\\"multipleStats\\\\": [{\\\\n    \\\\"description\\\\": \\\\"Border Force users\\\\",\\\\n    \\\\"stat\\\\": \\\\"8700+\\\\"\\\\n  }, {\\\\n    \\\\"description\\\\": \\\\"forms and reports submitted per month\\\\",\\\\n    \\\\"stat\\\\": \\\\"7500+\\\\"\\\\n  }, {\\\\n    \\\\"description\\\\": \\\\"COP visits per day\\\\",\\\\n    \\\\"stat\\\\": \\\\"500+\\\\"\\\\n  }]\\\\n};\\\\n\\\\nvar makeShortcode = function makeShortcode(name) {\\\\n  return function MDXDefaultShortcode(props) {\\\\n    console.warn(\\\\"Component \\\\" + name + \\\\" was not imported, exported, or provided by MDXProvider as global scope\\\\");\\\\n    return mdx(\\\\"div\\\\", props);\\\\n  };\\\\n};\\\\n\\\\nvar layoutProps = {\\\\n  _frontmatter: _frontmatter\\\\n};\\\\nvar MDXLayout = \\\\"wrapper\\\\";\\\\nreturn function MDXContent(_ref) {\\\\n  var components = _ref.components,\\\\n      props = _objectWithoutProperties(_ref, [\\\\"components\\\\"]);\\\\n\\\\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\\\\n    components: components,\\\\n    mdxType: \\\\"MDXLayout\\\\"\\\\n  }), mdx(MediumTitle, {\\\\n    text: \\\'Get data in and out easily\\\',\\\\n    mdxType: \\\\"MediumTitle\\\\"\\\\n  }), mdx(\\\\"p\\\\", null, \\\\"COP helps you log information \\\\\u2014 whether it be forms, reports, images or biometrics \\\\\u2014 on laptops and mobile devices. It translates the information into data that you can track, analyse and share to help Border Force make better decisions.\\\\"), mdx(\\\\"p\\\\", null, \\\\"The services currently on COP include:\\\\"), mdx(BulletList, {\\\\n    list: [\\\'Immediate Event Notification (IEN)\\\', \\\'National Security (NS) Referral\\\', \\\'Cash Detection\\\', \\\'Operational Activity Reporting (OAR)\\\', \\\'Mandatory Declarations (Man Dec)\\\', \\\'Use of Force\\\'],\\\\n    mdxType: \\\\"BulletList\\\\"\\\\n  }), mdx(\\\\"p\\\\", null, \\\\"Find out \\\\", mdx(Link, {\\\\n    to: \\\\"/help/accessing/\\\\",\\\\n    className: \\\\"govuk-link\\\\",\\\\n    mdxType: \\\\"Link\\\\"\\\\n  }, \\\\"more about these services.\\\\")));\\\\n}\\\\n;\\\\nMDXContent.isMDXComponent = true;"',
    frontmatter: {
      panelTitle: 'Easily capture data, make better decisions',
      panelParagraph: 'Use the Central Operations Platform (COP) to capture information quickly and produce data that informs decision making.',
      isNotify: false,
      multipleStats: [
        {
          description: "Border Force users",
          stat: "8700+",
        },
        {
          description: "forms and reports submitted per month",
          stat: "7500+",
        },
        {
          description: "COP visits per day",
          stat: "500+",
        },
      ]
    }
  }
};

describe("index template", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<IndexPage />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});