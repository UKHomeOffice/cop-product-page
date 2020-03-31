import React from "react";


const Video = (props) => (
  <div className="responsive-video">
    <video width={props.width} height={props.height} controls playsInline>
      <source src={props.source} type="video/mp4"/>
    </video>
  </div>
);
export default Video;