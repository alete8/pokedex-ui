import React from 'react';

import {
  BugIcon,
  FireIcon,
  GrassIcon,
  WaterIcon,
  NormalIcon,
  PoisonIcon,
  ElectIcon,
  GroundIcon,
  FairyIcon,
  FightIcon,
  PsycIcon,
  RockIcon,
  GhostIcon,
  IceIcon,
  DragonIcon,
} from './StyledIconTypes';

const poketypes = {
  bug: BugIcon,
  fire: FireIcon,
  grass: GrassIcon,
  water: WaterIcon,
  normal: NormalIcon,
  poison: PoisonIcon,
  electric: ElectIcon,
  ground: GroundIcon,
  fairy: FairyIcon,
  fighting: FightIcon,
  psychic: PsycIcon,
  rock: RockIcon,
  ghost: GhostIcon,
  ice: IceIcon,
  dragon: DragonIcon,
};

const IconType = ({ poketype, size }) => {
  const Img = poketypes[poketype];

  return <Img size={size} />;
};

export default IconType;
