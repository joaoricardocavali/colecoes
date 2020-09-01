import React, { useEffect, useState } from 'react';
import CharacterPokeList from '../../../components/character-poke-list';
import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';

const CharactersPoke = ({ setCharacters }) => {
    const { page } = useParams();
    const history = useHistory();
    const [characters, setCharactersAPI] = useState([]);

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
        const pokemons = [];
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=150`)
            .then((res) => res.json())
            .then(({ results }) =>
                results.map((item) => {
                    const brokenUrl = item.url.split("/")
                    const id = brokenUrl[brokenUrl.length - 2]
                    pokemons.push({
                        name: item.name,
                        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
                    })
                })
            )
            .then(() => setCharactersAPI(pokemons || []));



    }, [history, page, setCharacters]);

    console.log(characters)

    return (
        <CharacterPokeList
            onSelect={handleOnSelect}
            characters={characters}
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