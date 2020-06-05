import React from 'react';
import { useSocket } from 'react-socket-io-hooks';
import { useHistory } from 'react-router-dom';

const Home = () => {


  const socket = useSocket();
  const history = useHistory();
  
  
  const handleClick = () => {
    //use socket.emit to send events, the string name is how it ties to listener
    socket.emit('HELLO');
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
