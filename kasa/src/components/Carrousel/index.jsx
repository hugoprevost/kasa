import React, { useState } from "react";
import leftArrow from "../../assets/leftArrow.svg";
import rightArrow from "../../assets/rightArrow.svg";
import "../../utils/style/carrousel.css"

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
                    <div key={picture} className="carrousel-pictures">
                        <span className="carrousel-count-display">
                            {index + 1}/{length}
                        </span>
                        <img src={picture} alt="Rental" />
                        {length > 1 ? (
                            <>
                                <div className="carrousel-leftArrow" onClick={leftSlide}>
                                    <img src={leftArrow} alt="Preview arrow" />
                                </div>
                                <div className="carrousel-rightArrow" onClick={rightSlide}>
                                    <img src={rightArrow} alt="Next arrow" />
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