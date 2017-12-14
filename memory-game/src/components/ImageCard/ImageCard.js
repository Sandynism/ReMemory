import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
    <div className="card">
        <div className="img-container">
            <img alt="geometric image" src={props.image} width="100%" />
        </div>
    </div>
);

export default ImageCard;