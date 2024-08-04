import React, { useState } from 'react';

const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <li>
      <span id='player'>
        {isEditing ? (
          <input type='text' required />
        ) : (
          <span className='player-name'>{name}</span>
        )}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEdit}>Edit</button>
    </li>
  );
};

export default Player;
