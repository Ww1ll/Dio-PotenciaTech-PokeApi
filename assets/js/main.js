
// const offset = 0
// const limit = 10
// const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`

function convertPokemonToLi(pokemon){
    return `
    <li class="pokemon">
    <span class="number">#001</span>
    <span class="">${pokemon.name}</span>

    <div class="detail">
        <ol class="types">
            <li class="type">grass</li>
            <li class="type" >poison</li>

        </ol>
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt="${pokemon.name}">
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