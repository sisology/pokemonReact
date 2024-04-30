import {useEffect, useState} from "react";
import {getPokemonDetail} from "../api/PokemonAPI";
import {useParams} from "react-router-dom";

function PokemonDetail() {

    const { id } = useParams();

    const [pokemon, setPokemon] = useState();

    useEffect(() => {
        getPokemonDetail(id).then(data => setPokemon(data));
    }, []);

    return (
        pokemon &&
        <>
            <div className="info">
                <img src={pokemon.sprites.front_default}/>
                <h2>No. {pokemon.id}</h2>
                <h3>name : {pokemon.name}</h3>
            </div>
        </>
    );
}

export default PokemonDetail;