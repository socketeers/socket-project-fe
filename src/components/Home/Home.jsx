import React from 'react';
import { useSocket } from 'react-socket-io-hooks';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const socket = useSocket();
  const history = useHistory();

  const handleClick = () => {
    socket.emit('JOIN');
    history.push('/game');
  };

  return (
    <section>
      <h2>Rock Paper Scissors!!!</h2>
      <button onClick={handleClick}>Join Game</button>
    </section>
  );

};

export default Home;
