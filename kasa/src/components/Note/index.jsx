import React from 'react';
import Etoile from "../../assets/etoile.png";
import EtoileVide from "../../assets/etoile-vide.png";
import "../../utils/style/note.scss"


function Ratings(props) {
    const ratingScale = props.ratingScale
    const order = [1, 2, 3, 4, 5]

    return (
        <div>
            {order.map((orderElem) => ratingScale >= orderElem ?
                <img key={orderElem} src={Etoile} alt="Rating Scale" className='note__etoile'/> :
                <img key={orderElem} src={EtoileVide} alt="Rating Scale" className='note__etoile'/>
            )}
        </div>
    )
}

export default Ratings;