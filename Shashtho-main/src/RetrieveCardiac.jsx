import React, { useState, useEffect } from 'react'
import CreateCard from './CreateCard';
import Axios from 'axios';
import DeleteIcon from '@material-ui/icons/Delete';
import $ from 'jquery';

const RetrieveCardiac=() =>{
  const [data, setData] = useState([]);

    useEffect(() => {
         debugger;
         Axios
             .get("http://localhost/retrievevalCardiac.php")
             .then(result => setData(result.data));
         console.log(data);
         debugger;
     }, []);

     function sub(item) {
       $.post("http://localhost/deletevalCardiac.php",item);
       console.log(data);
       window.location.reload();
     }

     return (
         <div>
             <div className="row" style={{ 'margin': "10px" }}>
                 <div className="col-sm-12 btn btn-info">

                  </div>
             </div>

             <table class="table" >
                 <thead class="tableHeader">
                     <tr>
                         <th scope="col" class="thx"></th>
                         <th scope="col" class="th1">Title</th>
                         <th scope="col" class="th2">Description</th>
                     </tr>
                 </thead>

                 <tbody className="tableBody" >
                     {data.map((item, index) => {
                         return <tr className="tableCard" key={index} bgcolor="white">
                             <td >
                               <form action="deleteval.php" method="post">
                                 <a  className ="trashBtn"  onClick={()=>{sub(item)}}>
                                  <DeleteIcon fontSize="small" className='trash_sign'/>
                                 </a>
                               </form>
                             </td>
                             <td className="td">{item.title}</td>
                             <td className="td">{item.description}</td>

                         </tr>
                     })}
                 </tbody>
             </table>

         </div>
     )
 }

export default RetrieveCardiac
