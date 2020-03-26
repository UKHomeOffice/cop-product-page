import React from 'react'


const Image = (props) => (
  <img id={props.id} style={{maxWidth: '100%'}} src={props.source} alt={props.alt}/>
);
export default Image


