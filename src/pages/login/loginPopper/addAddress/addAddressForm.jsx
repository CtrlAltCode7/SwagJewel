import React, { useEffect, useState } from 'react';
import { Grid, TextField, Button, Typography, RadioGroup, Radio, FormControlLabel, Select, MenuItem, FormControl, InputLabel, FormLabel, Box, IconButton, Popover } from '@mui/material';
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

    console.log('editIndex23223233', editIndex);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handlePopoverOpen = (event, index) => {
        setAnchorEl(event.currentTarget);
        setIsOpen(true);
        setEditIndex(index); // Set the edit index when opening the popover
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
        setIsOpen(false);
        setEditIndex(null); // Reset the edit index when closing the popover
    };

    const handleEdit = (index ,id) => {
        setExpanded(true);
        setFormData(addresses[index]);
        setEditMode(true);
        handlePopoverClose();
        setEditIndex(id);
        setErrors({});
    };

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
                setAddresses(result.data);
                return result;
            })
            .catch((error) => {
                console.error(error);
                throw error;
            });
    }

    useEffect(() => {
        getAddressData()
    }, []);

    const addNewAddress = (newAddress) => {
        const errors = validate(formData);
        if (Object.keys(errors).length === 0) {
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
                    getAddressData();
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
                    setExpanded(false);
        })
      }
      else {
          setErrors(errors);
      }
    };

    // Function to update an existing address
    const updateAddress = (updatedAddress ,id) => {

        let paylaoad = {
            name: updatedAddress.name,
            phone: updatedAddress.phone,
            email: updatedAddress.email,
            addressLine1: updatedAddress.addressLine1,
            addressLine2: updatedAddress.addressLine2,
            city: updatedAddress.city,
            state: updatedAddress.state,
            zipcode: updatedAddress.zipcode,
            landmark: updatedAddress.landmark,
            locationTypeTag: updatedAddress.locationTypeTag,
            type : updatedAddress.type ? updatedAddress.type : ''
        }

          fetch(`https://api.swagjewelers.com/api/address/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userData.token}`
                },
                body: JSON.stringify(paylaoad)
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    getAddressData();
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
                    setExpanded(false);
                    setEditIndex(null);
                    setEditMode(false);
                })
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
                getAddressData();
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
    return (
        <Box sx={{ padding: 2 }}>
            <Typography
                variant="body1"
                gutterBottom
                onClick={handleExpandCollapse}
                sx={{
                    border: "1px solid #f1f3f6",
                    paddingBlock: "1rem",
                    paddingLeft: ".5rem",
                    verticalAlign: "center"
                }}
            >
                <AddIcon sx={{ verticalAlign: "top" }} />
                ADD A NEW ADDRESS
            </Typography>
            {expanded && (
                // <form >
                    <Box>
                    {/* <form onSubmit={handleSubmit}> */}
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Full Name"
                                name="name"
                                required
                                fullWidth
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && <Typography color="error">{errors.name}</Typography>}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Phone Number"
                                name="phone"
                                required
                                fullWidth
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            {errors.phone && <Typography color="error">{errors.phone}</Typography>}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Email"
                                name="email"
                                required
                                fullWidth
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <Typography color="error">{errors.email}</Typography>}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Address Line 1"
                                name="addressLine1"
                                required
                                fullWidth
                                value={formData.addressLine1}
                                onChange={handleChange}
                            />
                            {errors.addressLine1 && <Typography color="error">{errors.addressLine1}</Typography>}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Address Line 2"
                                name="addressLine2"
                                required
                                fullWidth
                                value={formData.addressLine2}
                                onChange={handleChange}
                            />
                            {errors.addressLine2 && <Typography color="error">{errors.addressLine2}</Typography>}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="City"
                                name="city"
                                required
                                fullWidth
                                value={formData.city}
                                onChange={handleChange}
                            />
                            {errors.city && <Typography color="error">{errors.city}</Typography>}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="State"
                                name="state"
                                required
                                fullWidth
                                value={formData.state}
                                onChange={handleChange}
                            />
                            {errors.state && <Typography color="error">{errors.state}</Typography>}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Zipcode"
                                name="zipcode"
                                required
                                fullWidth
                                value={formData.zipcode}
                                onChange={handleChange}
                            />
                            {errors.zipcode && <Typography color="error">{errors.zipcode}</Typography>}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Landmark"
                                name="landmark"
                                fullWidth
                                value={formData.landmark}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="location-type-tag-label">Location Type</InputLabel>
                                <Select
                                    labelId="location-type-tag-label"
                                    name="locationTypeTag"
                                    value={formData.locationTypeTag}
                                    onChange={handleChange}
                                >
                                    <MenuItem value=""><em>None</em></MenuItem>
                                    <MenuItem value="home">Home</MenuItem>
                                    <MenuItem value="work">Work</MenuItem>
                                    <MenuItem value="other">Other</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Box sx={{ marginTop: 2 }}>

                        {/* <Button type="submit" variant="contained" color="primary">
                            {editMode ? "Update Address" : "Add Address"}
                        </Button> */}
                {
                    editMode ? <Button type="submit" variant="contained" color="primary" sx={{ marginRight: 2 }} onClick={()=>updateAddress(formData , editIndex)}>
                        Update Address
                    </Button> : <Button type="submit" variant="contained" color="primary" sx={{ marginRight: 2 }} onClick={()=>addNewAddress(formData)}>
                        Add Address
                    </Button>
                }

                        <Button onClick={handleCancel} variant="outlined" color="secondary" sx={{ marginLeft: 2 }}>
                            Cancel
                        </Button>
                    </Box>
                    </Box>
                // </form>
            )}
            {addresses && addresses.map((address, index) => (
                <Box key={index} sx={{ border: '1px solid #ccc', padding: 2, marginBottom: 2,marginTop: 2, position: 'relative' , display: 'flex', flexWrap: 'nowrap', justifyContent: 'space-between'}}>
                    <Typography>{address.name}</Typography>
                    <Typography>{address.phone}</Typography>
                    <Typography>{address.email}</Typography>
                    <Typography>{address.addressLine1}</Typography>
                    <Typography>{address.addressLine2}</Typography>
                    <Typography>{address.city}</Typography>
                    <Typography>{address.state}</Typography>
                    <Typography>{address.zipcode}</Typography>
                    <Typography>{address.landmark}</Typography>
                    <Typography>{address.locationTypeTag}</Typography>
                    <IconButton
                        onClick={(event) => handlePopoverOpen(event, index)}
                        sx={{ position: 'absolute', top: 0, right: 0 }}
                    >
                        <MoreVertIcon />
                    </IconButton>
                    <Popover
                        open={isOpen && editIndex === index}
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
                        <Box sx={{ padding: 2 }}>
                            <Button onClick={() => handleEdit(index , address.id)}>Edit</Button>
                            <Button onClick={() => deleteAddress(address.id)}>Delete</Button>
                            {/* <Button onClick={() => handleDelete(address.id)}>Delete</Button> */}
                        </Box>
                    </Popover>
                </Box>
            ))}
        </Box>
    );
};
export default AddAddressForm;





// import React, { useEffect, useState } from 'react';
// import { Grid, TextField, Button, Typography, RadioGroup, Radio, FormControlLabel, Select, MenuItem, FormControl, InputLabel, FormLabel, Container, Box, IconButton, Popover } from '@mui/material';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import CloseIcon from '@mui/icons-material/Close';
// import AddIcon from '@mui/icons-material/Add';
// import { useSelector } from 'react-redux';

// const AddAddressForm = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         phone: '',
//         email: '',
//         addressLine1: '',
//         addressLine2: '',
//         city: '',
//         state: '',
//         zipcode: '',
//         landmark: '',
//         locationTypeTag: ''
//     });
//     const [isOpen, setIsOpen] = useState(false);
//     const [anchorEl, setAnchorEl] = useState(null);
//     const [errors, setErrors] = useState({});
//     const [addresses, setAddresses] = useState([]);
//     const [editIndex, setEditIndex] = useState(null);
//     const [expanded, setExpanded] = useState(false);
//     const userData = useSelector((state) => state.user.user);
//     const [editMode, setEditMode] = useState(false);
//     const [addData, setAddData] = useState([]);

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const errors = validate(formData);
//         if (Object.keys(errors).length === 0) {
//             if (editIndex !== null) {
//                 // Update existing address
//                 const updatedAddresses = addresses.map((address, index) =>
//                     index === editIndex ? formData : address
//                 );
//                 setAddresses(updatedAddresses);
//                 setEditIndex(null);
//             } else {
//                 //Fresh address tobe added hete
//                 addNewAddress(formData);
//                 setAddresses([...addresses, formData]);
//             }

//             // Clear the form fields after saving
//             setFormData({
//                 name: '',
//                 phone: '',
//                 email: '',
//                 addressLine1: '',
//                 addressLine2: '',
//                 city: '',
//                 state: '',
//                 zipcode: '',
//                 landmark: '',
//                 locationTypeTag: ''
//             });
//         } else {
//             setErrors(errors);
//         }
//     };

//     const validate = (data) => {
//         let errors = {};
//         if (!data.name.trim()) errors.name = 'Full Name is required';
//         if (!data.phone.trim()) {
//             errors.phone = 'Phone number is required';
//         } else if (!/^\d{10}$/.test(data.phone)) {
//             errors.phone = 'Phone number must be 10 digits';
//         }
//         if (!data.email.trim()) {
//             errors.email = 'Email is required';
//         } else if (!/\S+@\S+\.\S+/.test(data.email)) {
//             errors.email = 'Invalid email address';
//         }
//         if (!data.addressLine1.trim()) errors.addressLine1 = 'Address Line 1 is required';
//         if (!data.addressLine2.trim()) errors.addressLine2 = 'Address Line 2 is required';
//         if (!data.city.trim()) errors.city = 'City is required';
//         if (!data.state.trim()) errors.state = 'State is required';
//         if (!data.zipcode.trim()) errors.zipcode = 'Zipcode is required';
//         return errors;
//     };

//     const handlePopoverOpen = (event) => {
//         setAnchorEl(event.currentTarget);
//         setIsOpen(true);
//     };

//     const handlePopoverClose = () => {
//         setAnchorEl(null);
//         setIsOpen(false);
//     };

//     const handleEdit = (index, updateId) => {
//         console.log('index', index);
//         console.log('index updateId', index, "====>", updateId);
//         setExpanded(true);
//         setFormData(addresses[index]);
//         setEditIndex(index);
//         setEditMode(true);
//         handlePopoverClose();
//     };

//     console.log('addresses', addresses);
//     const handleExpandCollapse = () => {
//         setExpanded(!expanded);
//     };

//     const handleCancel = () => {
//         setExpanded(!expanded);
//         setFormData({
//             name: '',
//             phone: '',
//             email: '',
//             addressLine1: '',
//             addressLine2: '',
//             city: '',
//             state: '',
//             zipcode: '',
//             landmark: '',
//             locationTypeTag: ''
//         });
//         setEditIndex(null);
//         setEditMode(false);


//     }

//     const addNewAddress = (newAddress) => {
//         try {
//             const myHeaders = new Headers();
//             myHeaders.append("Content-Type", "application/json");
//             myHeaders.append("Authorization", `Bearer ${userData.token}`);

//             const raw = JSON.stringify(newAddress);

//             const requestOptions = {
//                 method: "POST",
//                 headers: myHeaders,
//                 body: raw,
//                 redirect: "follow"
//             };

//             fetch("https://api.swagjewelers.com/api/address/store", requestOptions)
//                 .then((response) => {
//                     if (!response.ok) {
//                         throw new Error('Network response was not ok');
//                     }
//                     return response.json();
//                 })
//                 .then((result) => {
//                     console.log(result);
//                     // Handle success if needed
//                 })
//                 .catch((error) => {
//                     console.error('There was a problem with the fetch operation:', error);
//                     // Handle errors
//                 });
//         } catch (error) {
//             console.error('Error occurred:', error);
//             // Handle errors
//         }
//     };

//     // Function to update an existing address
//     const updateAddress = (updatedAddress) => {
//         try {
//             fetch(`https://api.swagjewelers.com/api/user/address/${updatedAddress.id}`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': `Bearer ${userData.token}`
//                 },
//                 body: JSON.stringify(updatedAddress)
//             })
//                 .then(response => {
//                     if (!response.ok) {
//                         throw new Error('Network response was not ok');
//                     }
//                     return response.json();
//                 })
//                 .then(data => {
//                     // Handle successful response (if needed)
//                     const updatedAddresses = [...addresses];
//                     updatedAddresses[editIndex] = data;
//                     setAddresses(updatedAddresses);
//                 })
//                 .catch(error => {
//                     console.error('There was a problem with the fetch operation:', error);
//                     // Handle errors
//                 });
//         } catch (error) {
//             console.error('Error occurred:', error);
//             // Handle errors
//         }
//     };

//     const handleDelete = (deleteId) => {
//         console.log('deleteId', deleteId)
//         setFormData({
//             name: '',
//             phone: '',
//             email: '',
//             addressLine1: '',
//             addressLine2: '',
//             city: '',
//             state: '',
//             zipcode: '',
//             landmark: '',
//             locationTypeTag: ''
//         });
//         setEditIndex(null);
//         setEditMode(false);
//         if (deleteId) {
//             deleteAddress(deleteId)
//                 .then((data) => {
//                 })
//                 .catch((error) => {
//                 });
//         }
//     }

//     function isValidEditIndex(editIndex) {
//         return typeof editIndex === "number" && editIndex >= 0;
//     }

//     function getAddressData() {
//         const myHeaders = new Headers();
//         myHeaders.append("Authorization", `Bearer ${userData.token}`);

//         const requestOptions = {
//             method: "GET",
//             headers: myHeaders,
//             redirect: "follow"
//         };

//         return fetch("https://api.swagjewelers.com/api/address/user", requestOptions)
//             .then((response) => response.json())
//             .then((result) => {
//                 console.log("result", result);
//                 setAddresses(result.data);
//                 return result;
//             })
//             .catch((error) => {
//                 console.error(error);
//                 throw error;
//             });
//     }
   
//     useEffect(() => {
//         getAddressData()
//     }, [])
//     function deleteAddress(addressId) {
//         const myHeaders = new Headers();
//         myHeaders.append("Authorization", `Bearer ${userData.token}`);

//         const requestOptions = {
//             method: "DELETE",
//             headers: myHeaders,
//             redirect: "follow"
//         };

//         return fetch(`https://api.swagjewelers.com/api/address/${addressId}`, requestOptions)
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.text();
//             })
//             .then((result) => {
//                 console.log(result);
//                 return result; // Returning result for further processing if needed
//             })
//             .catch((error) => {
//                 console.error('There was a problem with the fetch operation:', error);
//                 throw error; // Re-throwing the error for handling outside this function if needed
//             });
//     }

//     console.log('editIndex', editIndex);

//     return (
//         <Box sx={{
//             padding: 2
//         }}>
//             <Typography variant="body1" gutterBottom onClick={handleExpandCollapse} sx={{
//                 border: "1px solid #f1f3f6",
//                 paddingBlock: "1rem",
//                 paddingLeft: ".5rem",
//                 verticalAlign: "center"
//             }}>
//                 <AddIcon sx={{
//                     verticalAlign: "top"
//                 }} />
//                 ADD A NEW ADDRESS
//             </Typography>
//             {
//                 expanded && (
//                     <form onSubmit={handleSubmit}>
//                         <Grid container spacing={2}>
//                             <Grid item xs={12} sm={6}>
//                                 <TextField
//                                     label="Full Name"
//                                     name="name"
//                                     required
//                                     fullWidth
//                                     value={formData?.name}
//                                     onChange={handleChange}
//                                     error={!!errors.name}
//                                     helperText={errors.name ? errors.name : ''}
//                                 />
//                             </Grid>
//                             <Grid item xs={12} sm={6}>
//                                 <TextField
//                                     label="10-digit mobile number"
//                                     name="phone"
//                                     required
//                                     fullWidth
//                                     value={formData?.phone}
//                                     onChange={handleChange}
//                                     error={!!errors.phone}
//                                     helperText={errors.phone ? errors.phone : ''}
//                                 />
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <TextField
//                                     label="Email"
//                                     name="email"
//                                     required
//                                     fullWidth
//                                     value={formData?.email}
//                                     onChange={handleChange}
//                                     error={!!errors.email}
//                                     helperText={errors.email ? errors.email : ''}
//                                 />
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <TextField
//                                     label="Address line 1"
//                                     name="addressLine1"
//                                     required
//                                     fullWidth
//                                     value={formData?.addressLine1}
//                                     onChange={handleChange}
//                                     error={!!errors.addressLine1}
//                                     helperText={errors.addressLine1 ? errors.addressLine1 : ''}
//                                 />
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <TextField
//                                     label="Address line 2"
//                                     name="addressLine2"
//                                     fullWidth
//                                     value={formData?.addressLine2}
//                                     onChange={handleChange}
//                                     error={!!errors.addressLine2}
//                                     helperText={errors.addressLine2 ? errors.addressLine2 : ''}
//                                 />
//                             </Grid>
//                             <Grid item xs={12} sm={6}>
//                                 <TextField
//                                     label="City"
//                                     name="city"
//                                     required
//                                     fullWidth
//                                     value={formData?.city}
//                                     onChange={handleChange}
//                                     error={!!errors.city}
//                                     helperText={errors.city ? errors.city : ''}
//                                 />
//                             </Grid>
//                             <Grid item xs={12} sm={6}>
//                                 <FormControl fullWidth error={!!errors.state}>
//                                     <InputLabel id="state-label">Country</InputLabel>
//                                     <Select
//                                         labelId="state-label"
//                                         label="State"
//                                         name="state"
//                                         required
//                                         value={formData?.state}
//                                         onChange={handleChange}
//                                         disableScrollLock={true}
//                                         MenuProps={{ disableScrollLock: true }}
//                                     >
//                                         <MenuItem value="">--Select State--</MenuItem>
//                                         <MenuItem value="usa">USA</MenuItem>
//                                         {/* Add other states here */}
//                                     </Select>
//                                     {errors.state && <p style={{ color: 'red' }}>{errors.state}</p>}
//                                 </FormControl>
//                             </Grid>
//                             <Grid item xs={6}>
//                                 <TextField
//                                     label="Zipcode"
//                                     name="zipcode"
//                                     required
//                                     fullWidth
//                                     value={formData?.zipcode}
//                                     onChange={handleChange}
//                                     error={!!errors.zipcode}
//                                     helperText={errors.zipcode ? errors.zipcode : ''}
//                                 />
//                             </Grid>
//                             <Grid item xs={12} sm={6}>
//                                 <TextField
//                                     label="Landmark (Optional)"
//                                     name="landmark"
//                                     fullWidth
//                                     value={formData?.landmark}
//                                     onChange={handleChange}
//                                 />
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <FormControl component="fieldset" fullWidth>
//                                     <FormLabel component="legend">Address Type</FormLabel>
//                                     <RadioGroup
//                                         row
//                                         aria-label="locationTypeTag"
//                                         name="locationTypeTag"
//                                         value={formData?.locationTypeTag}
//                                         onChange={handleChange}
//                                     >
//                                         <FormControlLabel value="home" control={<Radio />} label="Home" />
//                                         <FormControlLabel value="work" control={<Radio />} label="Work" />
//                                     </RadioGroup>
//                                 </FormControl>
//                             </Grid>
//                             <Grid item xs={12}
//                             >
//                                 {
//                                     editMode ? <Button variant="contained" color="primary" type="submit" sx={{
//                                         marginRight: 2
//                                     }}>
//                                         Update
//                                     </Button> : <Button variant="contained" color="primary" type="submit" sx={{
//                                         marginRight: 2
//                                     }}>
//                                         Save
//                                     </Button>
//                                 }

//                                 <Button variant="outlined" color="secondary" type="button" onClick={handleCancel}>
//                                     Cancel
//                                 </Button>
//                             </Grid>
//                         </Grid>
//                     </form>

//                 )
//             }

//             {addresses && addresses?.map((address, index) => (
//                 <Box key={index} sx={{
//                     border: "1px solid #f1f3f6",
//                     padding: "1rem",
//                     marginTop: "1rem",
//                     borderRadius: "1px",
//                 }}>
//                     <Typography>{address.locationTypeTag}</Typography>
//                     <Box sx={{
//                         display: "flex",
//                         justifyContent: "space-between",
//                     }}>
//                         <Box sx={{
//                             display: "flex", gap: 2
//                         }}>
//                             <Typography sx={{
//                                 fontWeight: "bold"
//                             }}>{address.name}</Typography>
//                             <Typography>{address.phone}</Typography>
//                         </Box>
//                         <Box>
//                             <IconButton
//                                 aria-label="more"
//                                 aria-haspopup="true"
//                                 onClick={(event) => { handlePopoverOpen(event); setEditIndex(index); }}
//                             >
//                                 <MoreVertIcon />
//                             </IconButton>
//                             <Popover
//                                 open={isOpen}
//                                 anchorEl={anchorEl}
//                                 onClose={handlePopoverClose}
//                                 anchorOrigin={{
//                                     vertical: 'bottom',
//                                     horizontal: 'center',
//                                 }}
//                                 transformOrigin={{
//                                     vertical: 'top',
//                                     horizontal: 'center',
//                                 }}
//                             >
//                                 <Box sx={{
//                                     display: "flex",
//                                     justifyContent: "end"
//                                 }}>
//                                     <IconButton sx={{}}
//                                         onClick={handlePopoverClose}
//                                     >
//                                         <CloseIcon fontSize='small' />
//                                     </IconButton>
//                                 </Box>
//                                 <Box paddingInline={2} display="flex" flexDirection="column">
//                                     <Box sx={{ display: "flex", flexDirection: "column" }}>
//                                         <Button variant="text" fullWidth onClick={(event) => {
//                                             handlePopoverOpen(event);
//                                             handleEdit(index, address.id)
//                                         }}
//                                         >Edit</Button>
//                                         <Button variant="text" fullWidth onClick={() => {
//                                             setAddresses(addresses.filter((_, i) => i !== index));
//                                             handlePopoverClose();
//                                             handleDelete(address.id);
//                                         }}>Delete</Button>
//                                     </Box>
//                                 </Box>
//                             </Popover>
//                         </Box>
//                     </Box>
//                     <Box>
//                         <Typography component={"span"}>{address.addressLine1}</Typography>,
//                         <Typography component={"span"}>{address.addressLine2}</Typography>,
//                         <Typography component={"span"}>{address.city}</Typography>,
//                         <Typography component={"span"}>{address.state}</Typography>-
//                         <Typography component={"span"}>{address.zipcode}</Typography>
//                     </Box>
//                 </Box>
//             ))}
//         </Box>
//     );
// };
// export default AddAddressForm;
