import React from "react";

const ImageNewWindow = (props) => {
  const openWindow = () => {
    window.open(`${props.source}`, '_blank' , 'width='+100%+', height='+100%+'');
  };
  return (
    <a className="govuk-link" target="_blank" href="#" onClick={() => openWindow()} >{props.text}</a>
  )
};

export default ImageNewWindow;