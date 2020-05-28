import React, { useState } from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search'
import { FormHelperText } from '@material-ui/core';
import {inputContext, charactersContext} from '../../сontexts';
import { useStyles, Container, ErrorTextWrapper } from './styledInput';


export default function TextInput() {
    const {inputValue, changeInputValue} = React.useContext(inputContext);
    const { getCharacters, data, changeList} = React.useContext(charactersContext);
    const [isErrorMessage, setError] = useState(false);
    const classes = useStyles();

    function checkInputValue() {
        if (inputValue) {
            if (inputValue.length === 0) {
                setError(true);
            } else setError(false);
        }
    }

    function handleInputValue(e: any) {
        changeInputValue(e.target.value);
        setError(false);
        if (inputValue.trim().length > 1) {
            changeList(data);
            getCharacters({variables: {name: e.target.value}});
        } else {changeList(null)
            getCharacters({variables: {name: null}})};
    }

    return (
        <Container>
            <FormControl variant='outlined' className={classes.textContainer}>
                <InputLabel className={classes.label} htmlFor="input-with-icon-adornment">Input character name</InputLabel>
                <Input
                id="input-with-icon-adornment"
                onChange={(e) => handleInputValue(e)}
                onBlur={() => checkInputValue()}
                value={inputValue}
                className={classes.input}
                startAdornment={
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                }
                error={isErrorMessage}
                aria-describedby="component-error-text"
                />

                {
                 isErrorMessage ?
                    (<ErrorTextWrapper>
                        <FormHelperText id="component-error-text" className={classes.error}>
                            Please, enter something
                        </FormHelperText>
                    </ErrorTextWrapper>) : null
                }

            </FormControl>
        </Container>
        )
}
