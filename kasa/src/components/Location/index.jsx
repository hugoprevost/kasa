import React from "react";
import { Link } from "react-router-dom";
import logements from "../../datas/index.json";
import Card from "../Card";
import styled from 'styled-components'
import "../../utils/style/location.css";


/*display: flex;
    padding: 15px;
    background-color: #f7f7f7;
    border-radius: 30px;
    margin: 10px
    width: 30%;*/
const CardWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    padding: 60px;
    margin: 100px;
    background-color: #f7f7f7;
    border-radius: 25px;
`
const CardLogement = styled.article`
    width: 30%;
    height: 340px;
    bottom: 0;
    color: white;
    font-size: 18px;
    font-weight:700;
    text-decoration: none;
`

const Gallery = () => {
  return (
    <CardWrapper>
      {logements.map((logement) => {
        return (
          <CardLogement key={logement.id}>
            <Link to={`/logement/${logement.id}`}>
              <Card image={logement.cover} title={logement.title} />
            </Link>
          </CardLogement>
        );
      })}
    </CardWrapper>
  );
};

export default Gallery;