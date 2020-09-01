import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import CharactersRM from "./pages/characters/rickandmorty";
import CharactersPoke from './pages/characters/pokemon';
import Home from "./pages/home";
import { MdCollections } from "react-icons/md";
import { GiMaterialsScience } from "react-icons/gi";
import { CgPokemon } from 'react-icons/cg'

import styled from "styled-components";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);

  return (
    <div className="App">
      <TopBar>
        <StyledLink to="/">
          <MdCollections />
        </StyledLink>
        <StyledLink to="/rick-and-morty/1">
        <GiMaterialsScience />
        </StyledLink>
        <StyledLink to="/pokemon/">
          <CgPokemon />
        </StyledLink>
      </TopBar>

      <Body>
        <Switch>
          <Route path="/rick-and-morty/:page">
            <CharactersRM setCharacters={setCharacters} />
          </Route>
          <Route path="/pokemon/">
            <CharactersPoke setCharacters={setCharacters} />
          </Route>
          <Route path="/">
            <Home characters={characters} setCharacters={setCharacters} />
          </Route>
        </Switch>
      </Body>
    </div>
  );
}

export default App;

const TopBar = styled.div`
  background-color: white;
  width: 100%;
  position: fixed;
  top: 0;
  padding: 5px;
  z-index: 10;
`;

const Body = styled.div`
  margin-top: 38px;
`;

const StyledLink = styled(Link)`
  margin: 30px;
`;
