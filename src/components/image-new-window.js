import React from "react";

const ImageNewWindow = (props) => {
  const test = () => {
    window.open(`${props.source}`, '_blank' , 'width='+100%+', height='+100%+'');
  };
  return (
    <a className="govuk-link" target="_blank" href="#" onClick={() => test(this)} >{props.text}</a>
  )
};

export default ImageNewWindow;