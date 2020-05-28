import React, { useContext } from 'react';
import {
    PartyWrapper,
    PartyTitle,
    CardsWrapper,
    CardWrapper,
    CardText,
    PartyImage
} from './styledParty';
import { partyContext } from '../../сontexts';

interface PartyCardInterface {
    name: string;
    image: string;
}

function PartyCard(props: PartyCardInterface) {
    const { name, image } = props;

    return (
        <CardWrapper>
             {image ? (<PartyImage src={image} alt="image"/>) : null}
             <CardText>{ name }</CardText>
        </CardWrapper>
    )
}

export default function PartyBlock() {
    const { partyList } = useContext<any>(partyContext);

    return partyList ? (
        <PartyWrapper>
            <PartyTitle>Party</PartyTitle>

            <CardsWrapper>
                <PartyCard name='Morty' image={partyList.partyList.morty}/>
                <PartyCard name='Rick' image={partyList.partyList.rick}/>
            </CardsWrapper>
        </PartyWrapper>
    ) : null;
}
