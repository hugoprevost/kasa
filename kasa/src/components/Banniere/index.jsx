import React from 'react';
import "../../utils/style/banniere.css";

function Banniere({ image, texte }) {
    return (
      <div className='banniere'>
        <img className="banniere-img"src={image} alt="Bannière" />
        <div className="banniere-sombre"></div>
        <span className="banniere-texte">{texte}</span>
      </div>
    );
  }
  
  export default Banniere;