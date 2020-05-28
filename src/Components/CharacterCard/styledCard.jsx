import styled from "styled-components";

export const Card = styled.div`
    width: 20%;
    height: 220px;
    margin-right: 20px;
    margin-bottom: 20px;
    &:nth-child(4n) {
        margin-right: 0;
      }
    border: 1px solid black;
    position: relative;
`
export const Photo = styled.img`
      width: 100%;
      height: 100%;
`

export const CrossButton = styled.button`
    position: absolute;
    right: 0;
    border: none;
    background-color: transparent;
    outline: none;

    &:hover {
        opacity: 0.6
    }

    &:active {
        opacity: 0.2
    }
`
