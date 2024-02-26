import React from 'react';
import Etoile from "../../assets/etoile.png";
import EtoileVide from "../../assets/etoile-vide.png";
import "../../utils/style/note.css"


function Ratings(props) {
  const ratingScale = props.ratingScale
  const order = [1, 2, 3, 4, 5]

  return (
      <div className="rental-ratings">
          {order.map((orderElem) =>
              ratingScale >= orderElem ?
                  <img key={orderElem} src={Etoile} alt="Rating Scale" /> :
                  <img key={orderElem} src={EtoileVide} alt="Rating Scale" />
          )}
      </div>
  )
}

export default Ratings;