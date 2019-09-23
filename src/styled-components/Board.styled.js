import styled from 'styled-components';

export const GridWrapper = styled.div`
  ${props => `height: ${props.size}px;
              width: ${props.size}px;`};

  ${props => props.screenmode==="web" ? `
            margin-top: -5%
            flex: 1;` 
            : `
            margin-top: -10%
            flex: 5;`};

  &:hover, &:focus, &:active {
    outline: none;
  }
`;

export const Grid = styled.div`
    box-sizing: content-box;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    position: relative;

    ${props => `height: ${props.size}px;
                width: ${props.size}px;`};

    &:hover, &:focus, &:active {
        outline: none;
    }
`;

export const GridCell = styled.div`
    ${props => `height: ${props.size}px;
                width: ${props.size}px;`};

    background-color: ${props => props.foodCell ? 'orange' : 
                                 props.snakeCell ? 'cyan' : 
                                 props.wallCell ? 'darkgray' : 'black'};
                                 
    border: ${props => props.foodCell || 
                       props.snakeCell || 
                       props.wallCell ? "1px solid black": "0px"};
`;

export const BoardheadWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 7px;
    ${props => props.screenmode==="mobile" ? `
            margin-left: 5%;
            width: 90%;
            font-size: 1rem;`
            : `
            width: 100%;
            font-size: 1.5rem;`};
`;

export const PlayernameWrapper = styled.span`
    color: orange;
    font-weight: 600;
    margin-left: 5px;
`;

export const ScoreWrapper = styled.div`
    color: yellow;
    font-weight: 600;
`;