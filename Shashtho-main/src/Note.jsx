import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const Note = (props) =>{

  const deleteNote = () => {
      props.deleteItem(props.id);
  };

return (
  <>
  <div className='note'>
  <h1 className="noteText"> {props.title} </h1>
  <br/>
  <p id="category"> Doctor Name </p>
  <p> {props.docname} </p>
  <p id="category"> Visit details </p>
  <p> {props.content} </p>

  <button className='btn' onClick={deleteNote}>
  <DeleteIcon className='deleteIcon' />
  </button>
  </div>
</>
);
};

export default Note;
