import React, { useState } from 'react';
import { Grid, TextField, Button, Typography, RadioGroup, Radio, FormControlLabel, Select, MenuItem, FormControl, InputLabel, FormLabel, Container, Box, IconButton, Popover } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

const AddAddressForm = () => {
    const [formData, setFormData] = useState({
        fullname: '',
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
                // Add new address
                setAddresses([...addresses, formData]);
            }

            // Clear the form fields after saving
            setFormData({
                fullname: '',
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
        if (!data.fullname.trim()) errors.fullname = 'Full Name is required';
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

    const handleEdit = (index) => {
        setExpanded(true);
        setFormData(addresses[index]);
        setEditIndex(index);
        handlePopoverClose();
    };

    console.log('addresses', addresses);
    const handleExpandCollapse = () => {
        setExpanded(!expanded);
    };

    const handleCancel = () => {
        setExpanded(!expanded);
        setFormData({
            fullname: '',
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

    }

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
                                    name="fullname"
                                    required
                                    fullWidth
                                    value={formData.fullname}
                                    onChange={handleChange}
                                    error={!!errors.fullname}
                                    helperText={errors.fullname ? errors.fullname : ''}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="10-digit mobile number"
                                    name="phone"
                                    required
                                    fullWidth
                                    value={formData.phone}
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
                                    value={formData.email}
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
                                    value={formData.addressLine1}
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
                                    value={formData.addressLine2}
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
                                    value={formData.city}
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
                                        value={formData.state}
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
                                    value={formData.zipcode}
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
                                    value={formData.landmark}
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
                                        value={formData.locationTypeTag}
                                        onChange={handleChange}
                                    >
                                        <FormControlLabel value="home" control={<Radio />} label="Home" />
                                        <FormControlLabel value="work" control={<Radio />} label="Work" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}
                            >
                                <Button variant="contained" color="primary" type="submit" sx={{
                                    marginRight: 2
                                }}>
                                    Save
                                </Button>
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
                            }}>{address.fullname}</Typography>
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
                                        <Button variant="text" fullWidth onClick={() => handleEdit(index)}>Edit</Button>
                                        <Button variant="text" fullWidth onClick={() => {
                                            setAddresses(addresses.filter((_, i) => i !== index));
                                            handlePopoverClose();
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
