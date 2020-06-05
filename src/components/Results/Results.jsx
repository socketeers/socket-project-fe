import React from 'react';
import { useSocketSelector, useSocket } from 'react-socket-io-hooks';

const Results = () => {
  const socket = useSocket();
  const role = useSocketSelector(state => state.role);
  const winner = useSocketSelector(state => state.winner);
  const tie = useSocketSelector(state => state.tie);
  console.log(tie);
  if(!winner && !tie) return null;

  const handleClick = () => {
    socket.emit('JOIN');
  };

  if(tie) {
    return (
      <section>
        <h1>Draw, pick another!</h1>
      </section>
    );
  } else {
    return (
      <section>
        <h3>Results</h3>
        <p>{winner === role ? 'won' : 'lost'}</p>
        <button onClick={handleClick}>Join new game</button>
      </section>
    ); 
  }


};
export default Results;
