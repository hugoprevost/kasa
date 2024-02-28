import React from "react";
import { Link } from "react-router-dom";
import logements from "../../datas/index.json";
import Card from "../Card";
import "../../utils/style/location.scss";

const Gallery = () => {
  return (
    <div className="cardWrapper">
      {logements.map((logement) => {
        return (
          <article className="cardLogement" key={logement.id}>
            <Link to={`/products/${logement.id}`}>
              <Card image={logement.cover} title={logement.title} />
            </Link>
          </article>
        );
      })}
    </div>
  );
};

export default Gallery;