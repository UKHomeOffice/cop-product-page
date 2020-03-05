import React from "react";

const HyperLink = (props) => (
    <a href={props.href} className="govuk-link">{props.text}</a>
);

export default HyperLink;