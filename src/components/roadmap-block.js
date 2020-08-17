import React from "react";

const RoadMapBlock = (props) => (
  <div style={{borderLeft: 'solid 6px' +  props.bannerColour}} className="rectangle rectangle-block">
    <div className="roadmap-block-text">{props.text}</div>
  </div>
);

export default RoadMapBlock;