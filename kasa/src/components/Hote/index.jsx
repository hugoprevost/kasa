import React from 'react';
import "../../utils/style/hote.scss"

function Hote({ host }) {
    return (
        <div className="hote">
            <div className="hote__name">{host.name}</div>
            <img className="hote__picture" src={host.picture} alt={host.name} />
        </div>
    );
}

export default Hote