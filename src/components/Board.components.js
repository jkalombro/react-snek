import styled from 'styled-components';

export const GridWrapper = styled.div`
  height: ${props => props.size + "px"};
  width: ${props => props.size + "px"};
  flex: 1;
  margin-top: -50px;

  &:hover, &:focus, &:active {
    outline: none;
  }
`;

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

export const BoardheadWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    font-size: 1.5rem;
    margin-bottom: 7px;
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