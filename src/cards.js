import "./cards.css";
import MoviePoster from "./images/01.webp"

function Cardfront() {
    return (
        <>
            <div className="card-front">
                <img src={MoviePoster} alt="Poster de filme" />
            </div>
        </>
    );
}

function Cardback() {

    return (
        <>
            <div className="card-back">
                <h2> Nome do Filme </h2>
                <h3> Preço: 00€ </h3>
                <button class="card-back-alugar"> Alugar </button>
            </div>
        </>
    )
}

function Card () {
    return (
        <>
            <div className="card">
                <Cardfront />
                <Cardback />
            </div>
        </>
    )
}

export default Card;