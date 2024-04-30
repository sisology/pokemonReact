import {Link} from "react-router-dom";

function Main() {
    return(
        <>
            <Link to="/pokemon">
            <div>
                <h1>포켓몬 도감</h1>
            </div>
            </Link>
        </>
    );
}

export default Main;