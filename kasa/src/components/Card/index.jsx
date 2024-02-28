import React from 'react';
import "../../utils/style/card.scss";

function Card({image, title}) {

    return (
      <div className="card">
        <img src={image} alt={title} className="card-img"/>
        <div className="card-overlay"></div>
        <p className="card-title">{title}</p>
      </div>
    );
}

export default Card;




