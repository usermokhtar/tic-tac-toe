import React, { useState } from 'react';

const Player = ({ name: initialName, symbol, isActive }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editLabel, setEditLabel] = useState('Edit');
  const [name, setName] = useState(initialName);

  const handleEditToggle = () => {
    setEditLabel(isEditing ? 'Edit' : 'Save');
    setIsEditing(!isEditing);
  };

  const handleNameChange = (event) => {
    if (isEditing) {
      setName(event.target.value);
    }
  };

  return (
    <li className={isActive ? 'active' : undefined}>
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
      <button onClick={handleEditToggle}>{editLabel}</button>
    </li>
  );
};

export default Player;
