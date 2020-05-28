import React, { useState, useEffect } from 'react';
import  CharactersList from './Components/CharactersList/CharactersList';
import SearchInput from './Components/SearchInput/Search'
import PartyBlock from './Components/PartyBlock/PartyBlock';
import { useLazyQuery } from '@apollo/react-hooks';
import { GET_CHARACTERS } from './graphql/queries';
import {inputContext, charactersContext, partyContext } from './сontexts';


function App() {
  const [inputValue, changeInputValue] = useState('');
  const [getCharacters, {loading, data}] = useLazyQuery(GET_CHARACTERS);
  const [charList, changeList] = useState({charList: []});
  const [deletedList, moveToDeleted] = useState([]);
  const [partyList, addToParty] = useState({
    partyList: { rick: '', morty: ''}
  });

  return (
    <inputContext.Provider value={{inputValue, changeInputValue}}>
    <charactersContext.Provider value={{getCharacters, loading, data, charList, changeList, deletedList, moveToDeleted}}>
    <partyContext.Provider value={{partyList, addToParty}}>
      <SearchInput/>
      <CharactersList/>
      <PartyBlock/>
    </partyContext.Provider>
    </charactersContext.Provider>
    </inputContext.Provider>
  );
}

export default App;
