
function convertPokemonToLi(pokemon){
    return `
    <li class="pokemon ${pokemon.type}">
    <span class="number">#${pokemon.number}</span>
    <span class="name">${pokemon.name}</span>

    <div class="detail">
        <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
        </ol>
        <img src="${pokemon.photo}" alt="${pokemon.name}">
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