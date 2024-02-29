import React from "react";
import "../../utils/style/tag.scss"

const Tags = ({ citytag }) => {
    return (
        <div className="tag__ville">
            <p className="tag__ville__texte">{citytag}</p>
        </div>
    );
};

export default Tags;