import React from 'react';
import { GameProvider, defaultValues } from './helpers/GameContext';

//components
import LandinPage from './components/LandingPage';
import Game from './components/Game';
class App extends React.Component {

  constructor() {
    super();

    this.state = {
      isUserRegistered: false
    }
  }

  initializeGame = () => {
    this.setState({ isUserRegistered: true });
  }

  render() {
    return(
      <GameProvider value={defaultValues}>
        {
          this.state.isUserRegistered ? (
            <Game />
          ) : ( 
            <LandinPage initializeGame={this.initializeGame} />
          )
        }
        
      </GameProvider>
    );
  }
}

export default App;
