import React from 'react';
import Grid from '@material-ui/core/Grid';
import {NavLink} from 'react-router-dom';
import allergy from './Images/Allergy.JPG';
import cardiac from './Images/cardiac.JPG';
import diabetes from './Images/diabetes.JPG';
import genetics from './Images/genetics.JPG';
import mental from './Images/mental.JPG';
import obesity from './Images/obesity.JPG';
const Status = () =>{

return(
<>
  <Grid container    className="statusGrid" direction="column">

    <Grid item container className="statusContainer">
        <Grid item sm={4} className="statusGridCard">
        <img className="statusImage" src={allergy} alt="logo" />
        <p>Track your and your family's history with allergies.</p>
        <NavLink className="statusLinks" exact activeClassName="active_class" to='/status/allergy'> Allergy </NavLink>
        </Grid>
        <Grid item sm={4} className="statusGridCard">
        <img className="statusImage" src={obesity} style={{height: 90}} alt="logo" />
        <p>Key to being at a healthy weight is to track your progress.</p>
        <NavLink className="statusLinks" exact activeClassName="active_class" to='/status/obesity'> Obesity </NavLink>
        </Grid>
        <Grid item sm={4} className="statusGridCard">
        <img className="statusImage" src={diabetes} alt="logo" />
        <p>Write down which family members of yours have or had diabetes.</p>
        <NavLink className="statusLinks" exact activeClassName="active_class" to='/status/diabetes'> Diabetes </NavLink>
        </Grid>
      </Grid>

      <Grid item container className="statusContainer">
        <Grid item sm={4} className="statusGridCard">
        <img className="statusImage" src={genetics} alt="logo" />
        <p>Track your and your family's genetic predispositions.</p>
        <NavLink className="statusLinks" exact activeClassName="active_class" to='/status/genetic'> Genetic </NavLink>
        </Grid>
        <Grid item sm={4} className="statusGridCard">
        <img className="statusImage" src={mental} alt="logo" />
        <p>Track your and your family's history with allergies.</p>
        <NavLink className="statusLinks" exact activeClassName="active_class" to='/status/mental'> Mental Illness </NavLink>
        </Grid>
        <Grid item sm={4} className="statusGridCard">
        <img className="statusImage" src={cardiac} alt="logo" />
        <p>Track your and your family's history with allergies.</p>
        <NavLink className="statusLinks" exact activeClassName="active_class" to='/status/cardiac'> Cardiac Health </NavLink>
        </Grid>
      </Grid>

  </Grid>
</>
);
};

export default Status;
