import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

function Pokemon({pokemon}) {

    const [data, setData] = useState();

    useEffect(() => {
            fetch(pokemon.url)
                .then(response => response.json())
                .then(json => setData(json));
    }, []);

    return (
        data &&
        <Link to={`/pokemon/${data.id}`}>
            <div>
                <div className="item">
                    <h2>No. {data.id}</h2>
                    <h3>포켓몬 이름 : {pokemon.name}</h3>
                    <img src={data.sprites.front_default}/>
                </div>
                </div>
        </Link>
)
}

export default Pokemon;