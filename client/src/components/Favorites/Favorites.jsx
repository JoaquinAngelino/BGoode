import React, { useState } from "react";
import './Favorites.css';
import FavCard from "./FavCard";


export default function Favorites() {
    const [favoriteInstruments, setFavoriteInstruments] = useState(JSON.parse(localStorage.getItem('favList')))

    const renderInstruments = () => {
        if (!favoriteInstruments || favoriteInstruments.length === 0) {
            return (
                <h4>
                    The favorites list is empty.
                </h4>
            );
        }

        const deleteFav = (id) => {
            let arr = favoriteInstruments.filter(instrument => instrument.id !== id)
            localStorage.setItem('favList', JSON.stringify(arr))
            setFavoriteInstruments(arr)
        }

        let instrumentsMap = favoriteInstruments.map((instrument, idx) => <FavCard // usar fav card
            key={idx}
            id={instrument.id}
            name={instrument.name}
            price={instrument.price}
            brand={instrument.brand}
            rating={instrument.rating}
            image={instrument.image}
            deleteFav={deleteFav} />);
        return (
            <div className="favoriteCards">
                {instrumentsMap}
            </div>
        );
    }

    return (
        <div className="containerHome">
            <h1>Favorites</h1>
            {renderInstruments()}
        </div>
    );
}
