import React, { useState } from 'react'
import chevron from "../../assets/chevron.svg";

function Drop({ titre, description }) {
    const [open, setOpen] = useState(false)

    return (
        <div className="collapse" id={`collapse-${titre}`} onClick={
            () => setOpen(!open)}>
            <div className="collapse-content">
                <div className="collapse-titre">{titre}</div>
                <span
                    className={`collapse-arrow ${open}`}
                    onClick={() => setOpen(!open)}
                >
                    <img src={chevron} alt="Open this collapse" />
                </span>
            </div>
            {
                open && <div className="collapse-description">{description}</div>
            }
        </div >
    )
}

export default Drop;