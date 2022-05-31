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
    hp:pokemonData.stats[0].base_stat,
    attack:pokemonData.stats[1].base_stat,
    defense:pokemonData.stats[2].base_stat,
    specialAttack:pokemonData.stats[3].base_stat,
    specialDefense:pokemonData.stats[4].base_stat,
    speed:pokemonData.stats[5].base_stat,
  };

  return pokemon;
};
