import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, TextField, Button, FormControl, RadioGroup, FormControlLabel, Radio, Alert } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { LoginThunk, resetState } from '../../redux/slices/LoginSlice';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [userType, setUserType] = useState('student'); // Default to 'Student'
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isPending, loginUserStatus, errorOccured, errMsg, userType: loggedInUserType } = useSelector((state) => state.LoginReducer || {});

  // Redirect on successful login
  useEffect(() => {
    if (loginUserStatus) {
      switch (loggedInUserType) {
        case 'student':
          navigate('/student-profile');
          break;
        case 'user':
          navigate('/user-profile');
          break;
        case 'admin':
          navigate('/admin-profile');
          break;
        default:
          break;
      }
    }
  }, [loginUserStatus, loggedInUserType, navigate]);

  // Validation schema using Yup
  const validationSchema = yup.object({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),
    username: yup.string().required('Username is required'),
    userType: yup.string().oneOf(['student', 'user', 'admin'], 'Please select a valid user type').required('User type is required'),
  });

  // Formik form handling
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      username: '',
      userType: userType, // Set initial value based on state
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log('Form Values:', values); // Debug log to check form values
      dispatch(LoginThunk(values));
    },
  });

  // Handle radio button change
  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
    formik.setFieldValue('userType', event.target.value); // Update formik value
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
          <FormControl component="fieldset" fullWidth sx={{ mt: 1 }}>
            <RadioGroup
              row
              aria-label="user-type"
              name="userType"
              value={userType}
              onChange={handleUserTypeChange} // Handle change event
              sx={{ justifyContent: 'center' }} // Center the radio buttons
            >
              <FormControlLabel value="student" control={<Radio />} label="Student" />
              <FormControlLabel value="user" control={<Radio />} label="User" />
              <FormControlLabel value="admin" control={<Radio />} label="Admin" />
            </RadioGroup>
          </FormControl>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={isPending}
          >
            {isPending ? 'Signing In...' : 'Sign In'}
          </Button>
          {errorOccured && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {errMsg}
            </Alert>
          )}
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
