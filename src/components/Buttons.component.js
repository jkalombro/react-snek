import React from 'react';
import styled from 'styled-components';
import { IoMdArrowDropup, IoMdArrowDropdown, IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';

export const GameButton = styled.button`
    background-color : blue;
    color: white;
    border-radius: 3px;
    border: 2px solid blue;
    padding: .75rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    box-shadow: 0 0 10px black;

    &:hover, &:focus, &:active {
        outline: none;
    }
`;

export const ArrowTableWrapper = styled.table`
    border: 0;
    position: absolute;
    left: 50%;
    margin-left: -126px;
    bottom: 3.5rem;
    border-spacing: 0;
    border-collapse: collapse;
`;

//*********** START PRIVATE COMPONENTS ******************//
const KeyboardButton = styled.button`
    background-color : #eee;
    color: rgb(51, 51, 51);
    border-radius: 3px;
    border: 0;
    padding: 1.25rem 1.5rem;
    font-size: 2rem;
    cursor: pointer;
    margin: 0.3rem;
    /* box-shadow: 0 0 10px black; */

    &:hover, &:focus, &:active {
        outline: none;
        background-color : #A9A9A9;
    }
`;
//*********** END PRIVATE COMPONENTS ******************//

//*********** START FUNCTIONAL COMPONENTS ******************//
export const ArrowButton = props => {

    switch(props.direction) {
        case "up": return <KeyboardButton onClick={() => props.setDirection({keyCode: 38})}><IoMdArrowDropup /></KeyboardButton>;
        case "down": return <KeyboardButton onClick={() => props.setDirection({keyCode: 40})}><IoMdArrowDropdown /></KeyboardButton>;
        case "left": return <KeyboardButton onClick={() => props.setDirection({keyCode: 37})}><IoMdArrowDropleft /></KeyboardButton>;
        case "right": return <KeyboardButton onClick={() => props.setDirection({keyCode: 39})}><IoMdArrowDropright /></KeyboardButton>;
        default: return null;
    }
}
//*********** END FUNCTIONAL COMPONENTS ******************//