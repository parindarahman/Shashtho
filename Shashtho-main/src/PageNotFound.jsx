import React from 'react';
import logo from './Images/404.JPG';

const PageNotFound = () =>{
  return (
    <>
    <div className="pageNotFoundBg">
      <div className="pageNotFound">
        <img className="notFoundPicture" src={logo} alt="logo" />
      </div>
      <div className="pageNotFoundText">
      <h2>Page not found. Sorry!</h2>
      </div>
    </div>
    </>
  );
};

export default PageNotFound
