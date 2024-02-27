import { Navigate, useParams } from "react-router-dom";
import Products from "../../datas/index.json"
import Drop from "../../components/Drop";
import Tags from "../../components/Tag";
import Carrousel from "../../components/Carrousel";
import Hote from "../../components/Hote"
import Note from "../../components/Note";
import "../../utils/style/appartement.css"


function Rental() {
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

    const equipementsRental = equipments.map((equipment, index) => {
        return <li key={index}>{equipment}</li>;
    });

    return (
        <>
            <div className="rental-display">
                <Carrousel pictures={pictures} />
                <div className="rental-content">
                    <div className="rental-informations">
                        <div className="w-rental-title-location">
                            <h1 className="rental-title">{title}</h1>
                            <p className="rental-location">{location}</p>
                        </div>
                        <div className="rental-tags">
                            {tags.map((tag, index) => (
                                <Tags key={index} citytag={tag} />
                            ))}
                        </div>
                    </div>
                    <div className="rental-rating-host">
                        <Hote host={host} />
                        <Note ratingScale={rating} />
                    </div>
                </div>
                <div className="rental-description-equipments">
                    <Drop
                        className="rental-description"
                        titre="Description"
                        description={description}
                    />
                    <Drop
                        className="rental-equipment"
                        titre="Équipements"
                        description={equipementsRental}
                    />
                </div>
            </div>
        </>
    );
}

export default Rental;