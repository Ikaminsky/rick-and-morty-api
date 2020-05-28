import { createContext } from 'react';
import { data } from './types/contextInterfaces'

type InputType = {
     inputValue: string,
     changeInputValue: (e: React.FormEvent<HTMLInputElement>) => void;
 }

 type CharactersType = {
    getCharacters: (data: object) => void,
    data: data,
    changeList: (data: object) => void;
    loading: boolean,
    error: Error,
    deletedList: string[],
    moveToDeleted: (array: string[]) => void;
 }

 type PartyType = {
    addToParty: (sate: object) => void;
 }

export const inputContext = createContext<Partial<InputType>>({});
export const charactersContext = createContext<Partial<CharactersType>>({});
export const partyContext = createContext<Partial<PartyType>>({});
