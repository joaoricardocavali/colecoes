import React from "react";
import CharacterRMList from "../../components/character-rm-list";

const Home = ({ characters, setCharacters }) => {
  const handleOnSelect = ({ name }) => {
    setCharacters(characters.filter((character) => character.name !== name));
  };

  return (
    <CharacterRMList
      onSelect={handleOnSelect}
      header="Sua coleção!"
      characters={characters}
    />
  );
};

export default Home;
