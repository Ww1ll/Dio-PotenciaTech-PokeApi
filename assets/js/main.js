
function convertPokemonTypesToLi(pokemonTypes){
    return pokemonTypes.map((typeSlot) => {
        return `
        <li class="type">${typeSlot.type.name}</li>
        `
    })
}

function convertPokemonToLi(pokemon){
    return `
    <li class="pokemon">
    <span class="number">#${pokemon.order}</span>
    <span class="">${pokemon.name}</span>

    <div class="detail">
        <ol class="types">
            ${convertPokemonTypesToLi(pokemon.types).join(' ')}
        </ol>
        <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
    </div>
    </li>
    `
}

const pokemonList = document.getElementById('pokemonList')

PokeApi.getPokemons() //Trazendo o fetch de PokeAPI.js 
    .then((pokemons = []) => {

        //Utilizando função transformadora para objeto transformar em string
        const newList = pokemons.map((pokemon) =>{
            return convertPokemonToLi(pokemon)
        })

        const newHtml = newList.join('')

        pokemonList.innerHTML += newHtml
    
    })
    .catch((error) => {
        console.error(error)
    })