import React, { useState } from "react";
import chevronGauche from "../../assets/leftArrow.svg";
import chevronDroite from "../../assets/rightArrow.svg";
import "../../utils/style/carrousel.scss"

function Carrousel({ pictures }) {
    const [current, setCurrent] = useState(0);

    const length = pictures.length;

    const rightSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const leftSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <>
            {pictures.map((picture, index) =>
                current === index && (
                    <div key={picture} className="carrousel">
                        <span className="carrousel__compte">
                            {index + 1}/{length}
                        </span>
                        <img src={picture} alt="Bien en location" className="carrousel__img" />
                        {length > 1 ? (
                            <>
                                <div className="carrousel__chevron--gauche" onClick={leftSlide}>
                                    <img src={chevronGauche} alt="Précédente" className="carrousel__chevron--gauche--img" />
                                </div>
                                <div className="carrousel__chevron--droite" onClick={rightSlide}>
                                    <img src={chevronDroite} alt="Suivante" className="carrousel__chevron--droite--img"/>
                                </div>
                            </>
                        ) : null}
                    </div>
                )
            )}
        </>
    );
}

export default Carrousel;