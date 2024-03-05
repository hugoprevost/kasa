import React, { useState } from 'react'
import chevron from "../../assets/chevron.svg";
import "../../utils/style/drop.scss"

function Drop({ titre, description }) {
    const [open, setOpen] = useState(false)

    return (
        
        <div className="collapse" id={`collapse__${titre}`} onClick={
            () => setOpen(!open)}>
            <div className="collapse__content">
                <div className="collapse__content__titre">{titre}</div>
                <span
                    className={`collapse__content__titre__arrow ${open}`}
                    onClick={() => setOpen(!open)}
                >
                    <img src={chevron} alt="Open this collapse" />
                </span>
            </div>
            {
                open && <div className={`collapse__description true`}>{description}</div>
            }
        </div >
    )
}

export default Drop;