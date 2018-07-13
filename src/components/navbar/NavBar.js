import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

/* the logo of our app will be added to this navBar and by clicking the logo the user can go back to the main page.*/

const NavBar = () => <AppBar position="static" color="default" > 
<Toolbar>
  <Typography variant="title" color="inherit">
    Readdit 
  </Typography>
  </Toolbar>
</AppBar>;

export default NavBar;