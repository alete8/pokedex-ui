import axios from 'axios';

export const getPokemonById = (id) => {};

export async function getAllPokemons() {
  let requests = [];

  for (var i = 1; i <= 150; i++) {
    requests.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`));
  }

  try {
    const response = await axios.all(requests);
    return response;
  } catch (error) {
    console.error(error);
  }
}
