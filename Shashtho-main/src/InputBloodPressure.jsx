import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
class Inputs extends React.Component {
  constructor(props)
    {
      super(props);
      this.addFormData = this.addFormData.bind(this);
    }
  //Form Submission
  addFormData(evt)
    {
      evt.preventDefault();
      const fd = new FormData();
      fd.append('myDate1', this.refs.myDate1.value);
      fd.append('myValue1', this.refs.myValue1.value);

      axios.post('http://localhost/insertbloodpressure.php', fd
      ).then(res=>
      {
      //Success alert

    this.myFormRef.reset();
    window.location.reload();
    }
    );
    }



  render() {

    return (
      <>

      <div className="maincontainer">

              <div>
              <p className="trackerInputText">Input <b>Blood Pressure</b> date & value below:</p>
                <form className="InputForumContainer" ref={(el) => this.myFormRef = el}>

                  <div className="InputForum">
                    <input type="date"  className="inputDate" placeholder="Enter Date"  ref="myDate1" />
                    <p> ..</p>
                    <input type="number" className="inputValue" placeholder="Enter Value" ref="myValue1" />


                  <button className ="trackerBtn" type="submit" onClick={this.addFormData} >
                    <AddCircleOutlineIcon className='tracker_plus_sign'/>
                  </button>
                  </div>
                </form>


              </div>

            </div>
      </>



)
};
}
  export default Inputs
