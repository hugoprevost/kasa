import React from "react";
import Banniere from "../../components/Banniere";
import imgBanniere from "../../assets/banniere2.png";
import Drop from "../../components/Drop";
import DropData from "../../datas/drop.json"
import "../../utils/style/drop.css"



const Apropos = () => {
    return (
      <div>
        <Banniere image={imgBanniere}/>
        <div>
          <div>
            {DropData.map((item) => {
              return (
                <div key={item.id}>
                  <Drop description={item.description} titre={item.titre} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  
  export default Apropos;