const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

// 포켓몬 전체 조회
export async function getPokemonList() {
    const url = `${BASE_URL}`;

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    return data.results;
}

// 포켓몬 상세 조회
export async function getPokemonDetail(id) {

    const url = `${BASE_URL}/${id}`;

    const response = await fetch(url);
    const data = await response.json();

    console.log(data)

    return data;
}

// 랜덤 포켓몬 뽑기
const getRandomNum = () => {
    const pokeNum = Math.floor(Math.random() * 151);
    return `${pokeNum}`
}

// 뽑은 포켓몬 조회
export async function getRandomPokemon() {
    const url = `${BASE_URL}other/official-artwork/${getRandomNum()}.png`;

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    return data;
}