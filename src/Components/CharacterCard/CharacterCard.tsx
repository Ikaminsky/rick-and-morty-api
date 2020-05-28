import React from 'react';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import { Card, CrossButton, Photo} from './styledCard';

interface CardInterface {
    image: any,
    clickToParty: () => void;
    deleteFromList: () => void;
}

export default function CharCard(props: CardInterface) {
    const {
        image,
        clickToParty,
        deleteFromList
    } = props;

    return (
        <Card  onClick={clickToParty}>
            <Photo src={image} alt="image"/>
            <CrossButton onClick={deleteFromList}>
                <CancelOutlinedIcon fontSize='large'/>
            </CrossButton>
        </Card>
    )
}
