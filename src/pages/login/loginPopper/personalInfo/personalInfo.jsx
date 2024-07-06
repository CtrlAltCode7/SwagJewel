import React, { useState } from 'react';
import { Box, Button, FormControlLabel, Grid, InputLabel, Paper, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import AddAddressForm from '../addAddress/addAddressForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { setUser } from '../../../../slices/userSlice';


export default function PersonalInfo() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        email: '',
        phone: ''
    });

    const [editMode, setEditMode] = useState(false);
    const [editModeEmail, setEditModeEmail] = useState(false);
    const [editModeMobile, setEditModeMobile] = useState(false);
    const userData = useSelector((state) => state.user.user);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleEdit = () => {
        setEditMode(true);
    };

    const handleEditEmail = () => {
        setEditModeEmail(true);
    };

    const handleEditMobile = () => {
        setEditModeMobile(true);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('userData.token', userData.token);
        if (validateForm()) {
            console.log(formData);

            try {
                const myHeaders = new Headers();
                const tokenToSend = userData.token;
                console.log("tokenToSend", tokenToSend)
                myHeaders.append("Content-Type", "application/json");
                myHeaders.append(`Authorization`, `Bearer ${tokenToSend}\n`);

                const raw = JSON.stringify({
                    ...formData
                });

                const requestOptions = {
                    method: "PUT",
                    headers: myHeaders,
                    body: raw,
                    redirect: "follow"
                };

                fetch("https://api.swagjewelers.com/api/user/", requestOptions)
                    .then((response) => response.json())
                    .then((result) => {
                        console.log('after the update', result);
                        dispatch(setUser(result?.data));
                    })
                    .catch((error) => console.error(error));
            } catch (error) {
                setError(error);
            }

            // let data = JSON.stringify({
            //     firstName: "mahi"
            // });

            // let config = {
            //     method: 'put',
            //     maxBodyLength: Infinity,
            //     url: 'https://api.swagjewelers.com/api/user',
            //     headers: {
            //         // 'Content-Type': 'application/json',
            //         'Authorization': `Bearer ${userData.token}`
            //     },
            //     data: data
            // };

            // axios.request(config)
            //     .then((response) => {
            //         console.log(JSON.stringify(response.data));
            //     })
            //     .catch((error) => {
            //         console.log(error);
            //     });

            // const config = { headers: { Authorization: `Bearer ${userData.token}` } };
            // axios.put(`https://api.swagjewelers.com/api/user`, { firstName: "Test with team" }, config)


            setEditMode(false);
            setEditModeEmail(false);
            setEditModeMobile(false);
        }
    };

    const validateForm = () => {
        return (
            validateName(formData.firstName) ||
            validateName(formData.lastName) ||
            validateEmail(formData.email) &&
            validatePhone(formData.phone)
        );
    };

    const validateName = (name) => {
        return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\s]+$/.test(name.trim()) || /^[A-Za-z\s]+$/.test(name.trim());
    };


    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    };

    const handleCancel = () => {
        setEditMode(false);
        setEditModeEmail(false);
        setEditModeMobile(false);
    };

    useEffect(() => {
        if (userData && Object.keys(userData).length > 0) {
            const last10Digits = userData.phone.slice(-10);
            setFormData({
                firstName: userData.firstName || '',
                lastName: userData.lastName || '',
                email: userData.email || '',
                phone: last10Digits || ''
            });
        }
    }, [userData]);

    return (
        <Grid container spacing={2} mt={4} mb={6}>
            <Grid item xs={12} md={2}></Grid>
            <Grid item xs={12} md={6}>
                <Paper elevation={2}>
                    <Box sx={{ display: "flex", gap: 2, padding: 2 }}>
                        <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>Personal Information</Typography>
                        {editMode ?
                            <Typography variant='body2' sx={{ color: "#2874f0", alignSelf: "flex-end", cursor: "pointer" }} onClick={handleCancel}>Cancel</Typography> :
                            <Typography variant='body2' sx={{ color: "#2874f0", alignSelf: "flex-end", cursor: "pointer" }} onClick={handleEdit}>Edit</Typography>
                        }
                    </Box>
                    <form onSubmit={handleSubmit}>
                        <Box sx={{ display: "flex", gap: 3, padding: 2 }}>
                            <TextField
                                id="outlined-basic1"
                                variant="outlined"
                                name="firstName"
                                label="First Name"
                                required
                                autoComplete="name"
                                tabIndex={1}
                                value={formData.firstName}
                                onChange={handleChange}
                                disabled={!editMode}
                                error={!validateName(formData.firstName)}
                                helperText={!validateName(formData.firstName) && "Please enter a valid first name."}
                            />
                            <TextField
                                id="outlined-basic2"
                                variant="outlined"
                                name="lastName"
                                required
                                label="Last Name"
                                autoComplete="name"
                                tabIndex={2}
                                value={formData.lastName}
                                onChange={handleChange}
                                disabled={!editMode}
                                error={!validateName(formData.lastName)}
                                helperText={!validateName(formData.lastName) && "Please enter a valid last name."}

                            />
                            {editMode && <Button variant="contained" type='submit'>Save</Button>}
                        </Box>
                        <Box sx={{ display: "flex", gap: 3, padding: 2 }}>
                            {/* <Typography variant='body2'>Your gender</Typography> */}
                            <TextField
                                id="outlined-basic4"
                                variant="outlined"
                                label={"User Name"
                                    // <InputLabel htmlFor="outlined-basic4">User Name</InputLabel>
                                }
                                value={userData?.userName}
                                disabled={true}
                            />
                        </Box>
                        <Box sx={{ paddingLeft: 2 }}>
                            {/* <RadioGroup value={formData.gender} name="gender" onChange={handleChange} sx={{ flexDirection: "row" }}>
                                <FormControlLabel
                                    value="Male"
                                    control={<Radio />}
                                    label="Male"
                                    disabled={!editMode}
                                    defaultChecked
                                />
                                <FormControlLabel
                                    value="Female"
                                    control={<Radio />}
                                    label="Female"
                                    disabled={!editMode}
                                />
                            </RadioGroup> */}
                        </Box>
                    </form>
                    <Box sx={{ display: "flex", gap: 2, padding: 2 }}>
                        <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>Email Address</Typography>
                        {editModeEmail ?
                            <Typography variant='body2' sx={{ color: "#2874f0", alignSelf: "flex-end", cursor: "pointer" }} onClick={handleCancel}>Cancel</Typography> :
                            <Typography variant='body2' sx={{ color: "#2874f0", alignSelf: "flex-end", cursor: "pointer" }} onClick={handleEditEmail}>Edit</Typography>
                        }
                    </Box>
                    <form onSubmit={handleSubmit}>
                        <Box sx={{ display: "flex", gap: 3, padding: 2 }}>
                            <TextField
                                id="outlined-basic3"
                                variant="outlined"
                                name="email"
                                label="Email"
                                required
                                autoComplete="email"
                                tabIndex={3}
                                value={formData.email}
                                onChange={handleChange}
                                disabled={!editModeEmail}
                                error={!validateEmail(formData.email)}
                                helperText={!validateName(formData.email) && "Please enter a valid email."}

                            />
                            {editModeEmail && <Button variant="contained" disabled={!validateEmail(formData.email)} type='submit'>Save</Button>}
                        </Box>
                    </form>
                    <Box sx={{ display: "flex", gap: 2, padding: 2 }}>
                        <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>Mobile Number</Typography>
                        {editModeMobile ?
                            <Typography variant='body2' sx={{ color: "#2874f0", alignSelf: "flex-end", cursor: "pointer" }} onClick={handleCancel}>Cancel</Typography> :
                            <Typography variant='body2' sx={{ color: "#2874f0", alignSelf: "flex-end", cursor: "pointer" }} onClick={handleEditMobile}>Edit</Typography>
                        }
                    </Box>
                    <form onSubmit={handleSubmit}>
                        <Box sx={{ display: "flex", gap: 3, padding: 2 }}>
                            <TextField
                                id="outlined-basic4"
                                variant="outlined"
                                name="phone"
                                label="Phone"
                                required
                                autoComplete="phone"
                                tabIndex={4}
                                value={formData.phone}
                                onChange={handleChange}
                                disabled={!editModeMobile}
                                error={!validatePhone(formData.phone)}
                                helperText={!validateName(formData.phone) && "Please enter a valid phone."}

                            />
                            {editModeMobile && <Button variant="contained" disabled={!validatePhone(formData.phone)} type='submit'>Save</Button>}
                        </Box>
                    </form>
                </Paper>
                <Paper elevation={2} sx={{
                    marginTop: "1rem"
                }}>
                    <AddAddressForm />
                </Paper>
            </Grid>
        </Grid>
    );
}
