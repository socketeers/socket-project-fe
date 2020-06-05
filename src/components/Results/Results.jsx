import React from 'react';
import { useSocketSelector, useSocket } from 'react-socket-io-hooks';

const Results = () => {
  const socket = useSocket();
  const role = useSocketSelector(state => state.role);
  const winner = useSocketSelector(state => state.winner);

  if(!winner) return null;

  const handleClick = () => {
    socket.emit('JOIN');
  };

  return (
    <section>
      <h3>Results</h3>
      <p>{winner === role ? 'won' : 'lost'}</p>
      <button onClick={handleClick}>Join new game</button>
    </section>
  ); 

};
export default Results;
