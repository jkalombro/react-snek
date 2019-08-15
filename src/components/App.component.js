import styled from 'styled-components';

export const AppWrapper = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: ${props => props.screenmode==="web" ? '100vh': '92vh'};
  display: flex;
  flex-direction: ${props => props.screenmode==="web" ? 'row' : 'column'};
  align-items: center;
  justify-content: center;
  color: white;
`;

export const GridWrapper = styled.div`
  height: ${props => props.size + "px"};
  width: ${props => props.size + "px"};
  flex: 1;

  &:hover, &:focus, &:active {
    outline: none;
  }
`;

export const KeyboardWrapper = styled.div`
  flex: 1;
  position: relative;
  height: ${props => props.screenmode==="web" ? '100vh': 'auto'};
`;

export const LeaderBoardsWrapper = styled.div`
  flex: 1;
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
  z-index: 1021;
`;

export const IntroOverlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: #030321;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.2rem;
  z-index: 1021;
`;

export const MB1 = styled.div`
  margin-bottom: 1rem;
`;