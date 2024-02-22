import React from "react";
import { Link } from "react-router-dom";
import logements from "../../datas/index.json";
import Card from "../Card";
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import "../../utils/style/location.css";


const CardWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    padding: 50px 50px 0px 50px;
    margin: 0px 100px 50px 100px;
    background-color: ${colors.secondary};
    border-radius: 25px;
`
const CardLogement = styled.article`
    width: 30%;
    height: 340px;
    bottom: 0;
    color: white;
    font-size: 15px;
    font-weight:700;
    text-decoration: none;
    padding-bottom: 50px;
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