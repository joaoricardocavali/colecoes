import React, { useEffect, useState } from 'react';
import CharacterPokeList from '../../../components/character-poke-list';
import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';

const CharactersPoke = ({ setCharacters }) => {
    const { page } = useParams();
    const history = useHistory();
    const [characters, setCharactersAPI] = useState([]);
    // const [images, setImages] = useState([]);

    const handleOnSelect = (newCharacter) => {

        setCharacters((prevState) =>
            prevState.find(
                (character) => character.name === newCharacter.name)
                ?
                prevState
                :
                [...prevState, newCharacter]
        );
    };

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=150`)
            .then((res) => res.json())
            .then(({ results }) => 
                setCharactersAPI(results));
                // setImages(characters.url)
                
            
    }, [history, page, setCharacters]);
    // console.log(characters)
    // const url = characters.url
    // const image = ""
    // const brokenUrl = url.split("/");
    // const id = brokenUrl[brokenUrl.length - 1]
    // setCharactersAPI(...characters, image:imagem)
    const id = 132;

return (
    <CharacterPokeList
        onSelect={handleOnSelect}
        characters={characters}
        id={id}
        header={
            <StyledControl>
                <p>Os Primeiros 150 Pokémon</p>
            </StyledControl>
        }
    />
);
};

export default CharactersPoke;

const StyledControl = styled.div`
  padding: 10px;
  max-width: 500px;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;