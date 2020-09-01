import React from "react";
import CharacterRMList from "../../components/character-rm-list";
import { GiMaterialsScience } from "react-icons/gi";
import { CgPokemon } from 'react-icons/cg'

const Home = ({ characters, setCharacters }) => {
  const handleOnSelect = ({ name }) => {
    setCharacters(characters.filter((character) => character.name !== name));
  };

  return (
    <>
      <GiMaterialsScience  />
      <CgPokemon />
      <CharacterRMList
        onSelect={handleOnSelect}
        header="Sua coleção!"
        characters={characters}
        
      />
      
    </>
  );
};

export default Home;
