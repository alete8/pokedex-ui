import axios from 'axios';

export async function getPokemonById(ids) {
  let requests = [];

  ids.forEach((id) =>
    requests.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`))
  );

  try {
    const response = await axios.all(requests);
    return response;
  } catch (error) {
    console.error(error);
  }
}

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
