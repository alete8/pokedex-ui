const buildType = (pokemontype, types) => {
  if (!types) {
    types = pokemontype.type.name;
  } else {
    types = types + ' - ' + pokemontype.type.name;
  }
  return types;
};

export const buildPokemon = (pokemonData) => {
  let types = '';

  pokemonData.types.forEach(
    (pokemontype) => (types = buildType(pokemontype, types))
  );

  const pokemon = {
    name: pokemonData.name,
    id: pokemonData.id,
    image: pokemonData.sprites.front_default,
    type: types,
  };

  return pokemon;
};
