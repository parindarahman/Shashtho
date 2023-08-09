import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Retrieve from './Retrieve';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {NavLink} from 'react-router-dom';
import $ from 'jquery';


const CreateCardGenetic = (props) => {

  const [expand, setExpand] = useState(false);
  const [note, setNote] = useState({title:'',description:''});

  const InputEvent = (event) =>{
    const {name, value} = event.target;
    setNote((prevData) =>{
      return {
        ...prevData,
        [name]: value,
      };
    });
    console.log(note);
  };

  const addEvent = () => {
      setNote({
        title:'',
        description:'',
      });
  };

  const expandIt = () =>{
    setExpand(true);
  }
  const dontExpandIt = () =>{
    setExpand(false);
  }

  function sub() {
 $.post("http://localhost/insertvalStatusGenetics.php",note);
 window.location.reload();
  }

  return (
    <>

    <div className="statusBack">
    <NavLink exact activeClassName="active_class" to='/status'>
    <button className="logout" >
      <ArrowBackIcon/>
      <span class="tooltip">Go Back</span>
     </button>
     </NavLink>
    <h1> Genetic Predisposition </h1>
    </div>

        <div className="main_note">
          <form action="insertvalStatusGenetics.php" method="post">
            <input type='text'
              className="mainNoteTextArea"
              name='title'
              value={note.title}
              onChange={InputEvent}
              placeholder ="Add a title"
              autoComplete='off'
              onClick={expandIt}
              />

            {expand?
            <textarea
              className="mainNoteTextArea"
              rows=''
              column=''
              name='description'
              value={note.description}
              onChange={InputEvent}
              placeholder="Write your description here...">
            </textarea> : null}

            <Button onClick={()=>{addEvent();dontExpandIt();sub();}}>
              <AddIcon className= 'plus_sign'/>
            </Button>

          </form>
        </div>
  </>
);
};

export default CreateCardGenetic;
