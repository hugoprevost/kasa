import React from "react";
import Location from '../../components/Location'
import Banniere from "../../components/Banniere";
import imgBanniere from "../../assets/banniere.png";


function Home() {
  return (
    <div>
      <Banniere texte="Chez vous, partout et ailleurs" image={imgBanniere}/>
      <Location/>
    </div>
  );
}

export default Home;
