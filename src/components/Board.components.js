import styled from 'styled-components';

export const Grid = styled.div`
    height: ${props => props.size + "px"};
    width: ${props => props.size + "px"};
    box-sizing: content-box;
    padding: 0;
    display: flex;
    flex-wrap: wrap;

    &:hover, &:focus, &:active {
        outline: none;
    }
`;

export const GridCell = styled.div`
    height: ${props => props.size + "px"};
    width: ${props => props.size + "px"};
    background-color: ${props => props.foodCell ? 'orange' : 
                                 props.snakeCell ? 'cyan' : 
                                 props.wallCell ? 'darkgray' : 'black'};
                                 
    border: ${props => props.foodCell || 
                       props.snakeCell || 
                       props.wallCell ? "1px solid black": "0px"};
`;