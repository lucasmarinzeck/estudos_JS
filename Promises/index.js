const axios = require('axios');
function fetchPokemon(){
  let getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}/`;
  const promisesArray = [];

  for(let i = 1; i<=2; i++){
    promisesArray.push(axios.get(getPokemonUrl(i)));  
  }
  
  Promise.all(promisesArray)
    .then(pokemon => console.log(pokemon)).catch(err => console.log(err));
}

fetchPokemon();

// axios.get('https://dog.ceo/api/breeds/image/random')
//   .then(dogData => {
//     if(!dogData.status == 200)
//       throw new Error({message: 'Deu ruim'})
//     return dogData;
//   })
//   .then(result => console.log(result))
//   .catch(err => console.log(err));

// const getDog = async () => {
//   return await axios.get('https://dog.ceo/api/breeds/image/random');
// }

// getDog().then(result => console.log(result))