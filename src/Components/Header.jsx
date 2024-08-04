import React from 'react';
import img1 from '../../public/game-logo.png';
const Header = () => {
  return (
    <header>
      <img src={img1} alt='img1' />
      <h1>React Tic-Tac-Toe</h1>
    </header>
  );
};

export default Header;
