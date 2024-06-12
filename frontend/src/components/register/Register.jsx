import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button, Alert } from '@mui/material';
import { useFormik } from 'formik';
import CheckIcon from '@mui/icons-material/Check';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for making API requests
import './Register.css';

function Register() {
    let navigate = useNavigate();

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Validation schema using Yup
    const validationSchema = yup.object({
        rollNumber: yup.string().required('Roll Number is required'),
        name: yup.string().required('Name is required'),
        email: yup.string().email('Invalid email').required('Email is required'),
        password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
        // agree: yup.boolean().oneOf([true], 'You must agree to the terms and conditions'),
    });

    // Formik form handling
    const formik = useFormik({
        initialValues: {
            rollNumber: '',
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            agree: false,
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                const response = await axios.post('http://localhost:4000/student-api/student', {
                    rollNumber: values.rollNumber,
                    username: values.name,
                    email: values.email,
                    password: values.password,
                });

                if (response.data.message === 'New student created') {
                    setSuccessMessage('Registration successful! Redirecting to login...');
                    setTimeout(() => {
                        navigate('/Login');
                    }, 2000);
                } else {
                    setErrorMessage(response.data.message);
                }
            } catch (error) {
                setErrorMessage('An error occurred during registration. Please try again.');
            }
        },
    });

    return (
        <Container component="main" maxWidth="xs" sx={{ backgroundColor: 'transparent' }}>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Create an Account
                </Typography>
                <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="roll-number"
                        label="Roll Number"
                        name="rollNumber"
                        autoComplete="rollNumber"
                        autoFocus
                        value={formik.values.rollNumber}
                        onChange={formik.handleChange}
                        error={formik.touched.rollNumber && Boolean(formik.errors.rollNumber)}
                        helperText={formik.touched.rollNumber && formik.errors.rollNumber}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
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
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        id="confirm-password"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                    />
                    {/* <FormControlLabel
                        control={<Checkbox name="agree" color="primary" checked={formik.values.agree} onChange={formik.handleChange} />}
                        error={formik.touched.agree && Boolean(formik.errors.agree)}
                        helperText={formik.touched.agree && Boolean(formik.errors.agree)}
                        label={<span>I agree to the <Link href="#" variant="body2">terms and conditions</Link></span>}
                    /> */}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Register
                    </Button>
                </Box>
                {successMessage && (
                    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                        {successMessage}
                    </Alert>
                )}
                {errorMessage && (
                    <Alert severity="error">
                        {errorMessage}
                    </Alert>
                )}
            </Box>
        </Container>
    );
}

export default Register;
