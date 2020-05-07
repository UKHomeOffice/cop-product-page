import React from "react";
import RoadMapBlock from "./roadmap-block";

const RoadMapBlockContainer = (props) => {
  console.log(props.content)
  return (

  <div>
    {props.content.map((value, index) => {
      return <RoadMapBlock key={index} text={value} bannerColour={props.bannerColour} />
    })}
  </div>
);
}

export default RoadMapBlockContainer;