import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { resetState } from '../../redux/slices/LoginSlice';
import './NavBar.css';

function NavBar() {
  const { loginUserStatus, currentUser } = useSelector((state) => state.LoginReducer);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(resetState());
    navigate('/home')
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          CampuSutra
        </Typography>
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
          {loginUserStatus ? (
            <>
              {currentUser.userType === 'user' && (
                <>
                  <Button color="inherit" component={NavLink} to="/user-profile/halls" sx={{ mx: 1 }}>
                    Available Halls
                  </Button>
                  <Button color="inherit" component={NavLink} to="/user-profile" sx={{ mx: 1 }}>
                    Profile
                  </Button>
                  <Button color="inherit" component={NavLink} to="/user-profile/bookings" sx={{ mx: 1 }}>
                    Bookings
                  </Button>
                </>
              )}
              {currentUser.userType === 'admin' && (
                <>
                  <Button color="inherit" component={NavLink} to="/admin-profile" sx={{ mx: 1 }}>
                    Bookings
                  </Button>
                  <Button color="inherit" component={NavLink} to="/admin-profile/halls" sx={{ mx: 1 }}>
                    Halls
                  </Button>
                </>
              )}
              <Typography variant="body1" sx={{ fontWeight: 'bold', mr: 2, textTransform: 'capitalize' }}>
                {currentUser.username} ({currentUser.userType})
              </Typography>
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" component={NavLink} to="/home" sx={{ mx: 1 }}>
                Home
              </Button>
              <Button color="inherit" component={NavLink} to="/clubs" sx={{ mx: 1 }}>
                Our Clubs
              </Button>
              <Button color="inherit" component={NavLink} to="/register" sx={{ mx: 1 }}>
                Register
              </Button>
              <Button color="inherit" component={NavLink} to="/login" sx={{ mx: 1 }}>
                Login
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
