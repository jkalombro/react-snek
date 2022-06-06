import React, { useState, useContext, useEffect, useRef } from 'react'
import GameContext from '../helpers/GameContext';

import { AppWrapper, KeyboardWrapper, LeaderBoardsWrapper } from '../styled-components/App.styled';
import { GridWrapper, Grid, GridCell } from '../styled-components/Board.styled';
import { shallowEquals, arrayDiff } from '../helpers/utility';

import Overlay from './sub-components/Overlay';
import KeyboardKeys from './sub-components/KeyboardKeys';
import BoardHeader from './sub-components/BoardHeader';
import LeaderBoards from './sub-components/LeaderBoards';

const Game = () => {
  const context = useContext(GameContext);
  const gridRef = useRef(null);
  const [snake, setSnake] = useState([]);
  const [food, setFood] = useState([]);
  const [status, setStatus] = useState("loading"); // [loading, standby, ingame, end]
  const [direction, setDirection] = useState(39);
  const [keypressed, setKeypressed] = useState(0);
  const [speed] = useState(150);
  
  //constants
  const { size, screenmode } = context;
  //each cell should be approximately 15px(web)/10px(mobile) wide, so calculate how many we need
  const celldivisor = screenmode === "web" ? 15 : 10;
  const numCells = Math.floor(size / celldivisor);
  const cellSize = size / numCells;
  const cellIndexes = Array.from(Array(numCells).keys());
  let moveInterval;

  useEffect(() => {
    setTimeout(() => setStatus("standby"), 2600);
    gridRef.current.focus();

    return cleanup => {
      removeTimers();
    }
  }, []);

  useEffect(() => {
    resetKeypressed()
  }, [direction, keypressed]);

  useEffect(() => {
    console.log({snake});
  }, [snake]);
  
  // randomly place snake food
  const moveFood = () => {
      let x, y;
  
      do{
        //this will prevent the food from respawning in the wall
        do x = parseInt(Math.random() * numCells - 1); while(x===0);
        do y = parseInt(Math.random() * numCells - 1); while(y===0);
  
        //this will prevent the food from respawning in snake body
      } while(!foodDoesntOverlapSnake([x, y]));
      
      setFood([x, y]);
  }
  
  const setSnakeDirection = ({ keyCode }) => {
  
      if (keyCode === 32 && (status === "standby" || status === "end")){
        startGame();
      }else{
        // if it's the same direction or simply reversing, ignore
        let changeDirection = true;
        [[38, 40], [37, 39]].forEach(dir => {
          if (dir.indexOf(direction) > -1 && dir.indexOf(keyCode) > -1) {
            changeDirection = false;
          }
        });
  
        if ( keyCode===37 || keyCode===38 || keyCode===39 || keyCode===40 ) {
          if (changeDirection) {
            setDirection(keyCode);
            setKeypressed(keyCode);
          }else{
            setKeypressed(keyCode);
          }
        } 
      }
  }
  
  //this will reset the focus of arrow buttons
  const resetKeypressed = () => {
      setTimeout(() => setKeypressed(0), 30)
  }

  const moveSnake = () => {
    try {
      let newSnake = [];
      console.log({snake});
      // set in the new "head" of the snake
      switch (direction) {
          // down
        case 40:
          newSnake[0] = [snake[0][0], snake[0][1] + 1];
          break;
          // up
        case 38:
          newSnake[0] = [snake[0][0], snake[0][1] - 1];
          break;
          // right
        case 39:
          newSnake[0] = [snake[0][0] + 1, snake[0][1]];
          break;
          // left
        case 37:
          newSnake[0] = [snake[0][0] - 1, snake[0][1]];
          break;
        default:
      }
      // now shift each "body" segment to the previous segment's position
      [].push.apply(
        newSnake,
        snake.slice(1).map((s, i) => {
          // since we're starting from the second item in the list,
          // just use the index, which will refer to the previous item
          // in the original list
          return snake[i];
        })
      );
  
      setSnake(newSnake);
  
      checkIfAteFood(newSnake);
      if (!isValid(newSnake[0]) || !doesntOverlap(newSnake)) {
        // end the game
        endGame();
      } 
    } catch (error) {
      console.log({error});
      removeTimers();
    }
  }
  
  const checkIfAteFood = newSnake => {
      if (!shallowEquals(newSnake[0], food)) return;

      // snake gets longer
      let newSnakeSegment;
      let lastSegment = newSnake[newSnake.length - 1];

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
        if (isValid(newSnakeSegment)) {
          break;
        }
      }

      setSnake(newSnake.concat([newSnakeSegment]));
      setFood([]);
      moveFood();
  }
    
  // is the cell's position inside the grid?
  const isValid = cell => {
      return (
        cell[0] > 0 &&
        cell[1] > 0 &&
        cell[0] < numCells - 1 &&
        cell[1] < numCells - 1
      );
  }
  
  const foodDoesntOverlapSnake = food => {
      return (
        snake.slice(1).filter(c => {
          return shallowEquals(food, c);
        }).length === 0
      );
  }
  
  const doesntOverlap = snake => {
      return (
        snake.slice(1).filter(c => {
          return shallowEquals(snake[0], c);
        }).length === 0
      );
  }
  
  const startGame = () => {
      removeTimers();
      
      moveInterval = setInterval(moveSnake, speed);

      setStatus("ingame");
      setSnake([[5, 5], [4, 5], [3, 5], [2, 5]]);
      setFood([10, 10]);
      setDirection(39);

      gridRef.current.focus();
  }
    
  const endGame = () => {
      removeTimers();
      setStatus("end");
  }
  
  const removeTimers = () => {
      if (moveInterval) clearInterval(moveInterval);
      // if (this.moveFoodTimeout) clearTimeout(this.moveFoodTimeout);
  }

  const cells = cellIndexes.map(y => {
    return cellIndexes.map(x => {
      const foodCell = food[0] === x && food[1] === y;
      let snakeCell = snake.filter(c => c[0] === x && c[1] === y);
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
    <AppWrapper screenmode={screenmode} >
      <LeaderBoardsWrapper screenmode={screenmode}>
        <LeaderBoards />
      </LeaderBoardsWrapper>

      <GridWrapper
        screenmode={screenmode}
        onKeyDown={setSnakeDirection}
        size={size}
        ref={gridRef}
        tabIndex={-1}>

          <BoardHeader snake={snake} />

          <Grid size={size}>
            <Overlay
              status={status}
              startGame={startGame}
              snake={snake} />
              
            {cells}
          </Grid>
          
      </GridWrapper>

      <KeyboardWrapper screenmode={screenmode}>
        <KeyboardKeys 
          setDirection={setSnakeDirection} 
          keypressed={keypressed} />
      </KeyboardWrapper>
    </AppWrapper>
  );
}

export default Game;
