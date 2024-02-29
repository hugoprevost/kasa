import { Navigate, useParams } from "react-router-dom";
import Products from "../../datas/index.json"
import Drop from "../../components/Drop";
import Tags from "../../components/Tag";
import Carrousel from "../../components/Carrousel";
import Hote from "../../components/Hote"
import Note from "../../components/Note";
import "../../utils/style/appartement.scss"


function Location() {
    const { id } = useParams();
    const product = Products.find((product) => product.id === id);
    console.log(product)
    if (!product) {
        return <Navigate to="/404" />;
    }
    const {
        equipments,
        description,
        rating,
        pictures,
        tags,
        host,
        title,
        location,
    } = product;

    const equipementsLocation = equipments.map((equipment, index) => {
        return <li key={index}>{equipment}</li>;
    });

    return (
        <>
            <div className="logement">
                <Carrousel pictures={pictures} />
                <div className="logement__contenu">
                    <div className="logement__information">
                        <div>
                            <h1 className="logement__information__titre">{title}</h1>
                            <p className="logement__information__adresse">{location}</p>
                        </div>
                        <div className="logement__information__tag">
                            {tags.map((tag, index) => (
                                <Tags key={index} citytag={tag} />
                            ))}
                        </div>
                    </div>
                    <div className="logement__note">
                        <Hote host={host} />
                        <Note ratingScale={rating} />
                    </div>
                </div>
                <div className="logement__description">
                    <Drop
                        titre="Description"
                        description={description}
                    />
                    <Drop
                        titre="Équipements"
                        description={equipementsLocation}
                    />
                </div>
            </div>
        </>
    );
}

export default Location;