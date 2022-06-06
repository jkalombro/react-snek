import React from 'react';
import { GameProvider, defaultValues } from './helpers/GameContext';

//components
import LandinPage from './components/LandingPage';
import Game from './components/Game';
import { Suspense } from 'react/cjs/react.production.min';
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
            <Suspense>
              <Game />
            </Suspense>
            
          ) : ( 
            <Suspense>
              <LandinPage initializeGame={this.initializeGame} />
            </Suspense>
          )
        }
        
      </GameProvider>
    );
  }
}

export default App;
