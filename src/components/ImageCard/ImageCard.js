import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
  <div className="card" onClick={() => props.clickCount(props.id)}>
    <div className="img-container">
      <img className="img-thumbnail" alt={props.name} src={props.image} />
    </div>
  </div>
);

export default ImageCard;