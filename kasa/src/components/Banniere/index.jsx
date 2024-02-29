import React from 'react';
import "../../utils/style/banniere.scss";

function Banniere({ image, texte }) {
    return (
      <div className='banniere'>
        <img className="banniere__img"src={image} alt="Bannière" />
        <div className="banniere__sombre"></div>
        <span className="banniere__texte">{texte}</span>
      </div>
    );
  }
  
  export default Banniere;