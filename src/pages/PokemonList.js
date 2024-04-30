import {useEffect, useState} from "react";
import {getPokemonList} from "../api/PokemonAPI";
import Pokemon from "../component/Pokemon";

function PokemonList() {

    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        getPokemonList().then(data => setPokemonList(data));

    }, []);

    return(
        <>
            <div className="content-row">
                {pokemonList && pokemonList.map(poke => <Pokemon key={poke.id} pokemon={poke}/>)}
            </div>
        </>
    );
}

export default PokemonList;