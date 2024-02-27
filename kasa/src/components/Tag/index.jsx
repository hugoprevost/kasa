import React from "react";
import "../../utils/style/tag.css"

const Tags = ({ citytag }) => {
    return (
        <div className="tag-city">
            <p className="tag-city-text">{citytag}</p>
        </div>
    );
};

export default Tags;