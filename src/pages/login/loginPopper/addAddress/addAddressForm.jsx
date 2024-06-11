import React, { useEffect, useState } from 'react';
import { Grid, TextField, Button, Typography, RadioGroup, Radio, FormControlLabel, Select, MenuItem, FormControl, InputLabel, FormLabel, Container, Box, IconButton, Popover } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import { useSelector } from 'react-redux';

const AddAddressForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        zipcode: '',
        landmark: '',
        locationTypeTag: ''
    });
    const [isOpen, setIsOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [errors, setErrors] = useState({});
    const [addresses, setAddresses] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [expanded, setExpanded] = useState(false);
    const userData = useSelector((state) => state.user.user);
    const [editMode, setEditMode] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate(formData);
        if (Object.keys(errors).length === 0) {
            if (editIndex !== null) {
                // Update existing address
                const updatedAddresses = addresses.map((address, index) =>
                    index === editIndex ? formData : address
                );
                setAddresses(updatedAddresses);
                setEditIndex(null);
            } else {
                //Fresh address tobe added hete
                addNewAddress(formData);
                setAddresses([...addresses, formData]);
            }

            // Clear the form fields after saving
            setFormData({
                name: '',
                phone: '',
                email: '',
                addressLine1: '',
                addressLine2: '',
                city: '',
                state: '',
                zipcode: '',
                landmark: '',
                locationTypeTag: ''
            });
        } else {
            setErrors(errors);
        }
    };

    const validate = (data) => {
        let errors = {};
        if (!data.name.trim()) errors.name = 'Full Name is required';
        if (!data.phone.trim()) {
            errors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(data.phone)) {
            errors.phone = 'Phone number must be 10 digits';
        }
        if (!data.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Invalid email address';
        }
        if (!data.addressLine1.trim()) errors.addressLine1 = 'Address Line 1 is required';
        if (!data.addressLine2.trim()) errors.addressLine2 = 'Address Line 2 is required';
        if (!data.city.trim()) errors.city = 'City is required';
        if (!data.state.trim()) errors.state = 'State is required';
        if (!data.zipcode.trim()) errors.zipcode = 'Zipcode is required';
        return errors;
    };

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
        setIsOpen(true);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
        setIsOpen(false);
    };

    const handleEdit = (index, updateId) => {
        console.log('index', index);
        console.log('index updateId',index ,"====>", updateId);
        setExpanded(true);
        setFormData(addresses[index]);
        setEditIndex(index);
        setEditMode(true);
        handlePopoverClose();
    };

    console.log('addresses', addresses);
    const handleExpandCollapse = () => {
        setExpanded(!expanded);
    };

    const handleCancel = () => {
        setExpanded(!expanded);
        setFormData({
            name: '',
            phone: '',
            email: '',
            addressLine1: '',
            addressLine2: '',
            city: '',
            state: '',
            zipcode: '',
            landmark: '',
            locationTypeTag: ''
        });
        setEditIndex(null);
        setEditMode(false);


    }

    const addNewAddress = (newAddress) => {
        try {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", `Bearer ${userData.token}`);

            const raw = JSON.stringify(newAddress);

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
            };

            fetch("https://api.swagjewelers.com/api/address/store", requestOptions)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((result) => {
                    console.log(result);
                    // Handle success if needed
                })
                .catch((error) => {
                    console.error('There was a problem with the fetch operation:', error);
                    // Handle errors
                });
        } catch (error) {
            console.error('Error occurred:', error);
            // Handle errors
        }
    };

    // Function to update an existing address
    const updateAddress = (updatedAddress) => {
        try {
            fetch(`https://api.swagjewelers.com/api/user/address/${updatedAddress.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userData.token}`
                },
                body: JSON.stringify(updatedAddress)
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    // Handle successful response (if needed)
                    const updatedAddresses = [...addresses];
                    updatedAddresses[editIndex] = data;
                    setAddresses(updatedAddresses);
                })
                .catch(error => {
                    console.error('There was a problem with the fetch operation:', error);
                    // Handle errors
                });
        } catch (error) {
            console.error('Error occurred:', error);
            // Handle errors
        }
    };

    const handleDelete = (deleteId) => {
        console.log('deleteId', deleteId)
        setFormData({
            name: '',
            phone: '',
            email: '',
            addressLine1: '',
            addressLine2: '',
            city: '',
            state: '',
            zipcode: '',
            landmark: '',
            locationTypeTag: ''
        });
        setEditIndex(null);
        setEditMode(false);
        if (deleteId) {
            deleteAddress(deleteId)
                .then((data) => {
                })
                .catch((error) => {
                });

        }



    }

    function isValidEditIndex(editIndex) {
        return typeof editIndex === "number" && editIndex >= 0;
    }

    function getAddressData() {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${userData.token}`);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        return fetch("https://api.swagjewelers.com/api/address/user", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                setAddresses(result.data);
                return result;
            })
            .catch((error) => {
                console.error(error);
                throw error;
            });
    }

    function deleteAddress(addressId) {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${userData.token}`);

        const requestOptions = {
            method: "DELETE",
            headers: myHeaders,
            redirect: "follow"
        };

        return fetch(`https://api.swagjewelers.com/api/address/${addressId}`, requestOptions)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then((result) => {
                console.log(result);
                return result; // Returning result for further processing if needed
            })
            .catch((error) => {
                console.error('There was a problem with the fetch operation:', error);
                throw error; // Re-throwing the error for handling outside this function if needed
            });
    }




    useEffect(() => {
        // Example usage:
        getAddressData()
            .then((data) => {
                // Handle data if needed
                console.log(data)
            })
            .catch((error) => {
                // Handle error if needed
            });

    }, [])




    console.log('editIndex', editIndex);


    return (
        <Box sx={{
            padding: 2
        }}>
            <Typography variant="body1" gutterBottom onClick={handleExpandCollapse} sx={{
                border: "1px solid #f1f3f6",
                paddingBlock: "1rem",
                paddingLeft: ".5rem",
                verticalAlign: "center"
            }}>
                <AddIcon sx={{
                    verticalAlign: "top"
                }} />
                ADD A NEW ADDRESS
            </Typography>
            {
                expanded && (
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Full Name"
                                    name="name"
                                    required
                                    fullWidth
                                    value={formData?.name}
                                    onChange={handleChange}
                                    error={!!errors.name}
                                    helperText={errors.name ? errors.name : ''}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="10-digit mobile number"
                                    name="phone"
                                    required
                                    fullWidth
                                    value={formData?.phone}
                                    onChange={handleChange}
                                    error={!!errors.phone}
                                    helperText={errors.phone ? errors.phone : ''}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Email"
                                    name="email"
                                    required
                                    fullWidth
                                    value={formData?.email}
                                    onChange={handleChange}
                                    error={!!errors.email}
                                    helperText={errors.email ? errors.email : ''}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Address line 1"
                                    name="addressLine1"
                                    required
                                    fullWidth
                                    value={formData?.addressLine1}
                                    onChange={handleChange}
                                    error={!!errors.addressLine1}
                                    helperText={errors.addressLine1 ? errors.addressLine1 : ''}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Address line 2"
                                    name="addressLine2"
                                    fullWidth
                                    value={formData?.addressLine2}
                                    onChange={handleChange}
                                    error={!!errors.addressLine2}
                                    helperText={errors.addressLine2 ? errors.addressLine2 : ''}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="City"
                                    name="city"
                                    required
                                    fullWidth
                                    value={formData?.city}
                                    onChange={handleChange}
                                    error={!!errors.city}
                                    helperText={errors.city ? errors.city : ''}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth error={!!errors.state}>
                                    <InputLabel id="state-label">Country</InputLabel>
                                    <Select
                                        labelId="state-label"
                                        label="State"
                                        name="state"
                                        required
                                        value={formData?.state}
                                        onChange={handleChange}
                                        disableScrollLock={true}
                                        MenuProps={{ disableScrollLock: true }}
                                    >
                                        <MenuItem value="">--Select State--</MenuItem>
                                        <MenuItem value="usa">USA</MenuItem>
                                        {/* Add other states here */}
                                    </Select>
                                    {errors.state && <p style={{ color: 'red' }}>{errors.state}</p>}
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="Zipcode"
                                    name="zipcode"
                                    required
                                    fullWidth
                                    value={formData?.zipcode}
                                    onChange={handleChange}
                                    error={!!errors.zipcode}
                                    helperText={errors.zipcode ? errors.zipcode : ''}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Landmark (Optional)"
                                    name="landmark"
                                    fullWidth
                                    value={formData?.landmark}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl component="fieldset" fullWidth>
                                    <FormLabel component="legend">Address Type</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-label="locationTypeTag"
                                        name="locationTypeTag"
                                        value={formData?.locationTypeTag}
                                        onChange={handleChange}
                                    >
                                        <FormControlLabel value="home" control={<Radio />} label="Home" />
                                        <FormControlLabel value="work" control={<Radio />} label="Work" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}
                            >
                                {
                                    editMode ? <Button variant="contained" color="primary" type="submit" sx={{
                                        marginRight: 2
                                    }}>
                                        Update
                                    </Button> : <Button variant="contained" color="primary" type="submit" sx={{
                                        marginRight: 2
                                    }}>
                                        Save
                                    </Button>
                                }

                                <Button variant="outlined" color="secondary" type="button" onClick={handleCancel}>
                                    Cancel
                                </Button>
                            </Grid>
                        </Grid>
                    </form>

                )
            }

            {addresses && addresses?.map((address, index) => (
                <Box key={index} sx={{
                    border: "1px solid #f1f3f6",
                    padding: "1rem",
                    marginTop: "1rem",
                    borderRadius: "1px",
                }}>
                    <Typography>{address.locationTypeTag}</Typography>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}>
                        <Box sx={{
                            display: "flex", gap: 2
                        }}>
                            <Typography sx={{
                                fontWeight: "bold"
                            }}>{address.name}</Typography>
                            <Typography>{address.phone}</Typography>
                        </Box>
                        <Box>
                            <IconButton
                                aria-label="more"
                                aria-haspopup="true"
                                onClick={(event) => { handlePopoverOpen(event); setEditIndex(index); }}
                            >
                                <MoreVertIcon />
                            </IconButton>
                            <Popover
                                open={isOpen}
                                anchorEl={anchorEl}
                                onClose={handlePopoverClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                            >
                                <Box sx={{
                                    display: "flex",
                                    justifyContent: "end"
                                }}>
                                    <IconButton sx={{}}
                                        onClick={handlePopoverClose}
                                    >
                                        <CloseIcon fontSize='small' />
                                    </IconButton>
                                </Box>
                                <Box paddingInline={2} display="flex" flexDirection="column">
                                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                                        <Button variant="text" fullWidth onClick={(event) => {
                                            handlePopoverOpen(event);
                                            handleEdit(index, address.id)
                                        }}
                                        >Edit</Button>
                                        <Button variant="text" fullWidth onClick={() => {
                                            setAddresses(addresses.filter((_, i) => i !== index));
                                            handlePopoverClose();
                                            handleDelete(address.id);
                                        }}>Delete</Button>
                                    </Box>
                                </Box>
                            </Popover>
                        </Box>
                    </Box>
                    <Box>
                        <Typography component={"span"}>{address.addressLine1}</Typography>,
                        <Typography component={"span"}>{address.addressLine2}</Typography>,
                        <Typography component={"span"}>{address.city}</Typography>,
                        <Typography component={"span"}>{address.state}</Typography>-
                        <Typography component={"span"}>{address.zipcode}</Typography>
                    </Box>
                </Box>
            ))}
        </Box>
    );
};

export default AddAddressForm;
