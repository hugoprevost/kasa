import React from 'react';
import "../../utils/style/card.scss";

function Card({image, title}) {

    return (
      <div className="card">
        <img src={image} alt={title} className="card__img"/>
        <div className="card__overlay"></div>
        <p className="card__title">{title}</p>
      </div>
    );
}

export default Card;




