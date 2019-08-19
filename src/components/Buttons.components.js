import styled from 'styled-components';

export const GameButton = styled.button`
    background-color : blue;
    color: white;
    border-radius: 3px;
    border: 2px solid blue;
    padding: .75rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    box-shadow: 0 0 10px black;

    ${props => props.screenmode==="mobile" ? `margin-top: -30%`: ''};

    &:hover, &:focus, &:active {
        outline: none;
    }
`;

export const IntroPageButton = styled.button`
    width: 250px;
    background-color : #003d98;
    color: white;
    border-radius: 50px;
    border: 0;
    padding: 1rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    box-shadow: 0 0 10px black;
    letter-spacing: 0.2rem;

    &:hover, &:focus, &:active {
        background-color : #002356;
        outline: none;
    }
`;

export const ArrowTableWrapper = styled.table`
    border: 0;
    position: absolute;
    left: 50%;
    margin-left: -126px;
    bottom: ${props => props.screenmode==="web" ? '3.5rem': '0.5rem' };
    border-spacing: 0;
    border-collapse: collapse;
`;

export const KeyboardButton = styled.button`
    color: rgb(51, 51, 51);
    border-radius: 3px;
    border: 0;
    cursor: pointer;
    margin: 0.3rem;
    background-color : ${props => props.isClicked ? '#A9A9A9' : '#eee' };
    padding: ${props => props.screenmode==="web" ? "1.25rem 1.5rem" : "1rem 1.5rem"};
    font-size: ${props => props.screenmode==='web' ? '2rem' : '1.5rem'};
    /* box-shadow: 0 0 10px black; */

    &:focus {
        outline: none;
    }

    &:hover, &:active {
        outline: none;
        background-color : #A9A9A9;
    }
`;