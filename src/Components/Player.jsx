import React, { useState } from 'react';

const Player = ({ name: initialName, symbol, isActive }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(initialName);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <li className={isActive ? 'active' : ''}>
      <span id='player'>
        {isEditing ? (
          <input
            type='text'
            value={name}
            onChange={handleNameChange}
            required
          />
        ) : (
          <span className='player-name'>{name}</span>
        )}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditToggle}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
};

export default Player;
