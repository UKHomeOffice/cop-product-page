import React from "react";

const Image = (props) => {
  if (props.noMobile) {
    return (
      <img
        className="noMobile-image"
        style={{ maxWidth: "100%" }}
        src={props.source}
        alt={props.alt}
      />
    );
  } else {
    return (
      <img style={{ maxWidth: "100%" }} src={props.source} alt={props.alt} />
    );
  }
};

export default Image;
