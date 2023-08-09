import React from 'react';
import logo from './Images/Asset 1.svg'
const Header = () => {
  return (
    <>
    <div className="header">

    <img src={logo} alt="logo" style={{height: 35}} />

    </div>
    <div className="tagline">
    <p>Your personal health database</p>
    </div>

  </>
  );
};

export default Header;
