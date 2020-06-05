import React, { useState } from 'react';
import { useSocket } from 'react-socket-io-hooks';

const Controls = () => {
  const [choice, setChoice] = useState('');
  const socket = useSocket();

  const handleChange = ({ target }) => setChoice(target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    socket.emit('CHOICE', choice);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <input type="radio" name="choice" value="rock" onChange={handleChange}/>
        <label style={{ display: 'block' }}>Rock</label>
      </fieldset>
      <fieldset>
        <input type="radio" name="choice" value="paper" onChange={handleChange}/>
        <label style={{ display: 'block' }}>Paper</label>
      </fieldset>
      <fieldset>
        <input type="radio" name="choice" value="scissors" onChange={handleChange}/>
        <label style={{ display: 'block' }}>Scissors</label>
      </fieldset>
      <button>Throw</button>
    </form>
  );
};

export default Controls;
