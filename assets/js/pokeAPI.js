
const PokeApi = {}

PokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
    .then((response) =>response.json())
}

PokeApi.getPokemons = (offset = 0, limit = 10) => {

    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`

    return fetch(url)
    .then((response) => {
        return response.json()
    })
    .then((jsonBody) => {
        return jsonBody.results
    })
    .then((pokemons) => pokemons.map((PokeApi.getPokemonDetail)))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonDetails) => {
        return pokemonDetails
    })
    .catch((error) =>{
        console.log(error)
    })
}

