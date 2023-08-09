import React from 'react';
import logo from './Images/Family.svg';

const IntroCardStatus = () =>{
  return (
    <>
      <div className="introCard">
        <img className="logostyle" src={logo} alt="logo" style={{height: 50}} />
        <p><b>Status</b> page stores all the details you might want to store about medical information in the family.</p>
      </div>
    </>
  );
};

export default IntroCardStatus
