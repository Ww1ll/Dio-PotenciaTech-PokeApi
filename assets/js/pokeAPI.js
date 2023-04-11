
const PokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon()

    pokemon.number = pokeDetail.order
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon

}

PokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
    .then((response) =>response.json())
    .then(convertPokeApiDetailToPokemon)
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

