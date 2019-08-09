import styled from 'styled-components';

export const AppWrapper = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const GridWrapper = styled.div`
  height: ${props => props.size + "px"};
  width: ${props => props.size + "px"};

  &:hover, &:focus, &:active {
    outline: none;
  }
`;

export const AppOverlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgb(0, 0, 0, .9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.2rem;
`;

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

export const MB1 = styled.div`
  margin-bottom: 1rem;
`;