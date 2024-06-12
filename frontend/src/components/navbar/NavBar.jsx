import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          CampuSutra
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', flexGrow: 1 }}>
          <Button
            color="inherit"
            component={NavLink}
            to="/home"
            exact
            sx={{ textDecoration: 'none', color: 'inherit', mx: 1 }}
            activeClassName="active-link"
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            to="/clubs"
            exact
            sx={{ textDecoration: 'none', color: 'inherit', mx: 1 }}
            activeClassName="active-link"
          >
            Our Clubs
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            to="/register"
            sx={{ textDecoration: 'none', color: 'inherit', mx: 1 }}
            activeClassName="active-link"
          >
            Register
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            to="/login"
            sx={{ textDecoration: 'none', color: 'inherit', mx: 1 }}
            activeClassName="active-link"
          >
            Login
          </Button>

        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;