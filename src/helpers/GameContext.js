import React from 'react'

const GameContext = React.createContext({});

export const GameProvider = GameContext.Provider;
export const GameConsumer = GameContext.Consumer;

//get screensize to determine grid
const { innerHeight, innerWidth } = window;
const size = innerHeight < innerWidth ? innerHeight * 0.8 : innerWidth;
const screenmode = innerHeight < innerWidth ? "web" : "mobile";

export const defaultValues = { size, screenmode };

export default GameContext;