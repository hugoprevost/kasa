import React from 'react';
import "../../utils/style/hote.css"

function Hote({ host }) {
    return (
        <div className="host-display">
            <div className="host-name">{host.name}</div>
            <img className="host-picture" src={host.picture} alt={host.name} />
        </div>
    );
}

export default Hote