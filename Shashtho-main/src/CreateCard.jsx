import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Retrieve from './Retrieve';
import $ from 'jquery';


const CreateNote = (props) => {

  const [expand, setExpand] = useState(false);

  const [note, setNote] = useState({title:'',docname:'',content:''});

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
        content:'',
        docname:'',
      });
  };

  const expandIt = () =>{
    setExpand(true);
  }
  const dontExpandIt = () =>{
    setExpand(false);
  }

  function sub() {
 $.post("http://localhost/insertval.php",note);
 window.location.reload();
  }

  return (
    <>
        <div className="main_note">
          <form action="insertval.php" method="post">
            <input type='text'
              className="mainNoteTextArea"
              name='title'
              value={note.title}
              onChange={InputEvent}
              placeholder ="Visit Title"
              autoComplete='off'
              onClick={expandIt}
              />


            {expand?
            <textarea
              className="mainNoteTextArea"
              rows=''
              column=''
              name='docname'
              value={note.docname}
              onChange={InputEvent}
              placeholder="Doctor's Name...">
            </textarea> : null}

            {expand?
            <textarea
              className="mainNoteTextArea"
              rows=''
              column=''
              name='content'
              value={note.content}
              onChange={InputEvent}
              placeholder="Details regarding your doctor's visit...">
            </textarea> : null}

            <Button onClick={()=>{addEvent();dontExpandIt();sub();}}>
              <AddIcon className= 'plus_sign'
              //onClick={dontExpandIt,sub()}
              //onClick={sub()}
              />
            </Button>

          </form>
        </div>
  </>
);
};

export default CreateNote;
