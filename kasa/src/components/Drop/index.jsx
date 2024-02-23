import React, { useState } from 'react'
import chevron from "../../assets/chevron.svg";

const Drop = ({titre, contenu}) => {
    const [open, setOpen] = useState(false)
 
    // const display = () => {
    //     setIsOpen(!isOpen);
    //   };

    return (
        <div className="drop" id={`drop-${titre}`} onClick={
            () => setOpen(!open)}>
            <div className="drop-content">
                <div className="drop-titre">{titre}</div>
                <span
                    className={`drop-chevron ${open}`}
                    onClick={() => setOpen(!open)}
                >
                    <img src={chevron} alt="Ouverture" />
                </span>
            </div>
            {
                open && <div className="drop-description">{contenu}</div>
            }
        </div >
    )
}

export default Drop