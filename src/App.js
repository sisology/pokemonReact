import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import PokemonList from "./pages/PokemonList";
import Layout from "./layouts/Layout";
import PokemonDetail from "./pages/PokemonDetail";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route index element={<Main/>}/>
                        <Route path="pokemon">
                            <Route index element={<PokemonList/>}/>
                            <Route path=":id" element={<PokemonDetail/>}/>
                        </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
