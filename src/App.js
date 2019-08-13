import React from 'react';

//custom imports
import { AppWrapper, GridWrapper } from './components/App.component';
import { Grid, GridCell } from './components/Board.components';
import { shallowEquals, arrayDiff } from './helpers/utility';
import Overlay from './containers/Overlay';

// the main view
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      snake: [],
      food: [],
      // 0 = not started, 1 = in progress, 2= finished
      status: 0,
      // using keycodes to indicate direction
      direction: 39,
      speed: 50
    };
  }

  componentDidMount() {
    this.el.focus();
  }

  // randomly place snake food
  moveFood = () => {
    let x, y;

    do{
      //this will prevent the food from respawning in the wall
      do x = parseInt(Math.random() * this.numCells - 1); while(x===0);
      do y = parseInt(Math.random() * this.numCells - 1); while(y===0);

      //this will prevent the food from respawning in snake body
    } while(this.isFoodOverlapSnake([x, y]));
    
    this.setState({ food: [x, y] });
  }

  setDirection = ({ keyCode }) => {

    if (keyCode === 32 && (this.state.status === 0 || this.state.status === 2)){
      this.startGame();
    }else{
      // if it's the same direction or simply reversing, ignore
      let changeDirection = true;
      [[38, 40], [37, 39]].forEach(dir => {
        if (dir.indexOf(this.state.direction) > -1 && dir.indexOf(keyCode) > -1) {
          changeDirection = false;
        }
      });

      if (changeDirection && ( keyCode===37 || keyCode===38 || keyCode===39 || keyCode===40 )) 
        this.setState({ direction: keyCode });
    }
  }

  moveSnake = () => {
    const newSnake = [];
    // set in the new "head" of the snake
    switch (this.state.direction) {
        // down
      case 40:
        newSnake[0] = [this.state.snake[0][0], this.state.snake[0][1] + 1];
        break;
        // up
      case 38:
        newSnake[0] = [this.state.snake[0][0], this.state.snake[0][1] - 1];
        break;
        // right
      case 39:
        newSnake[0] = [this.state.snake[0][0] + 1, this.state.snake[0][1]];
        break;
        // left
      case 37:
        newSnake[0] = [this.state.snake[0][0] - 1, this.state.snake[0][1]];
        break;
      default:
    }
    // now shift each "body" segment to the previous segment's position
    [].push.apply(
      newSnake,
      this.state.snake.slice(1).map((s, i) => {
        // since we're starting from the second item in the list,
        // just use the index, which will refer to the previous item
        // in the original list
        return this.state.snake[i];
      })
    );

    this.setState({ snake: newSnake });

    this.checkIfAteFood(newSnake);
    if (!this.isValid(newSnake[0]) || !this.doesntOverlap(newSnake)) {
      // end the game
      this.endGame()
    } 
  }

  checkIfAteFood = newSnake => {
    if (!shallowEquals(newSnake[0], this.state.food)) return
      // snake gets longer
      let newSnakeSegment;
      const lastSegment = newSnake[newSnake.length - 1];

      // where should we position the new snake segment?
      // here are some potential positions, we can choose the best looking one
      let lastPositionOptions = [[-1, 0], [0, -1], [1, 0], [0, 1]];
      
      // the snake is moving along the y-axis, so try that instead
      if ( newSnake.length > 1 ) {
        lastPositionOptions[0] = arrayDiff(lastSegment, newSnake[newSnake.length - 2]);
      }

      for (var i = 0; i < lastPositionOptions.length; i++) {
        newSnakeSegment = [
          lastSegment[0] + lastPositionOptions[i][0],
          lastSegment[1] + lastPositionOptions[i][1]
        ];
        if (this.isValid(newSnakeSegment)) {
          break;
        }
      }

      this.setState({
        snake: newSnake.concat([newSnakeSegment]),
        food: []
      });
    this.moveFood();
  }
  
  // is the cell's position inside the grid?
  isValid = cell => {
    return (
      cell[0] > 0 &&
      cell[1] > 0 &&
      cell[0] < this.numCells - 1 &&
      cell[1] < this.numCells - 1
    );
  }

  isFoodOverlapSnake = food => {
    return (
      this.state.snake.slice(1).filter(c => {
        return shallowEquals(food, c);
      }).length > 1
    );
  }

  doesntOverlap = snake => {
    return (
      snake.slice(1).filter(c => {
        return shallowEquals(snake[0], c);
      }).length === 0
    );
  }

  startGame = () => {
    const { speed } = this.state;

    this.removeTimers();
    this.moveSnakeInterval = setInterval(this.moveSnake, speed);

    this.setState({
      status: 1,
      snake: [[5, 5], [4, 5], [3, 5], [2, 5]],
      food: [10, 10],
      direction: 39
    });

    this.el.focus();
  }
  
  endGame = () => {
    this.removeTimers();
    this.setState({
      status : 2
    })
  }

  removeTimers = () => {
    if (this.moveSnakeInterval) clearInterval(this.moveSnakeInterval);
    if (this.moveFoodTimeout) clearTimeout(this.moveFoodTimeout)
  }

  componentWillUnmount() {
    this.removeTimers();
  }

  render() {
    // each cell should be approximately 15px(web)/10px(mobile) wide, so calculate how many we need
    const celldivisor = this.props.screenmode === "web" ? 15 : 10;
    this.numCells = Math.floor(this.props.size / celldivisor);
    const cellSize = this.props.size / this.numCells;
    const cellIndexes = Array.from(Array(this.numCells).keys());
    const cells = cellIndexes.map(y => {
      return cellIndexes.map(x => {
        const foodCell = this.state.food[0] === x && this.state.food[1] === y;
        let snakeCell = this.state.snake.filter(c => c[0] === x && c[1] === y);
        snakeCell = snakeCell.length && snakeCell[0];
        const wallCell = x === 0 || y === 0 || x === cellIndexes.length - 1 || y === cellIndexes.length - 1;

        return (
          <GridCell
            foodCell={foodCell}
            snakeCell={snakeCell}
            wallCell={wallCell}
            size={cellSize}
            key={x + " " + y}
            />
        );
      });
    });

    return (
      <AppWrapper>
        <GridWrapper
          onKeyDown={this.setDirection}
          size={this.props.size}
          ref={el => (this.el = el)}
          tabIndex={-1}>
            
            <Overlay 
              status={this.state.status}
              startGame={this.startGame}
              snake={this.state.snake} />

            <Grid size={this.props.size}>
              {cells}
            </Grid>
        </GridWrapper>
      </AppWrapper>
    );
  }
}

export default App;
