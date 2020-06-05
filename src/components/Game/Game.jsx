import React from 'react';
import Controls from '../Controls/Controls';
import Results from '../Results/Results';
import { useSocketSelector } from 'react-socket-io-hooks';

const Game = () => {
  const started = useSocketSelector(state => state.started);

  if(!started) return <h1>Waiting for players...</h1>;

  return (
    <>
      <Controls />
      <Results />
    </>
  );

};

export default Game;
