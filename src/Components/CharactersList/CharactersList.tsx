import React, { Context } from 'react';
import CharCard from '../CharacterCard/CharacterCard';
import { charactersContext, partyContext } from '../../сontexts';
import { CircularProgress } from '@material-ui/core';
import { ListWrapper, LoaderWrapper, ProblemWrapper } from './styledList';


function CharactersList() {
    const { addToParty } = React.useContext(partyContext)
    const { data, loading, error, deletedList, moveToDeleted } = React.useContext(charactersContext);


    function clickToParty(item) {
        if (item.name.includes('Morty')) {
            addToParty(
                prevState => ({
                    partyList: {
                        ...prevState.partyList,
                        morty: item.image,
                    }
                })
            )
        } if (item.name.includes('Rick')) {
            addToParty(
                prevState => ({
                    partyList: {
                        ...prevState.partyList,
                        rick: item.image,
                    }
                })
            )
         }
        return;
     }

     function deleteFromList(item) {
        moveToDeleted([...deletedList, item.id])
     }


     function RenderList() {
         let filtredList = data.characters.results.filter((item) => !deletedList.includes(item.id));
         return (
            <ListWrapper>
            {
                filtredList.map((item, i) =>
                    <CharCard
                        key={item.id}
                        image={item.image}
                        clickToParty={() => clickToParty(item)}
                        deleteFromList={() => deleteFromList(item)}
                />)
            }
            </ListWrapper>
         )
     }

    if (loading) {
        return (
        <LoaderWrapper>
            <CircularProgress />
        </LoaderWrapper>
        )
    }

    if ( error) {
        if (error.message === 'GraphQL error: 404: Not Found') {
            return <ProblemWrapper> Please enter another character </ProblemWrapper>
        } else return <ProblemWrapper> Network error </ProblemWrapper>
    }

    return data ? (
        RenderList()
    ) : null

}

export default CharactersList;
