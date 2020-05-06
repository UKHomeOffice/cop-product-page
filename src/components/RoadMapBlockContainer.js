import React from "react";
import RoadMapBlock from "./roadmap-block";

const RoadMapBlockContainer = (props) => (
  <div>
    {props.content.map((value, index) => {
      return <RoadMapBlock key={index} text={value} bannerColour={props.bannerColour} />
    })}
  </div>
);

export default RoadMapBlockContainer;