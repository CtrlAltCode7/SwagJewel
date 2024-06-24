import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, TextField, Typography, useMediaQuery, MenuItem } from '@mui/material';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,

} from '@mui/material';
import { styled } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const StyledTableHeadCell = styled(TableCell)({
    fontWeight: 'bold',
    backgroundColor: 'white',
});

const StyledTableRow = styled(TableRow)({
    backgroundColor: '#e0e0e0',
    '&:not(:last-child)': {
        // marginBottom: '10px',
        borderBottom: "15px solid white"
    }
});

const dummyData = [
    {
        shape: 'Round',
        cut: 'Excellent',
        color: 'D',
        quality: 'VVS1',
        uniqueness: 'High',
        mmSize: '5.0',
        sizeCt: '1.0',
        priceCt: '$5000',
        estPrice: '$5000'
    },
    {
        shape: 'Oval',
        cut: 'Very Good',
        color: 'G',
        quality: 'VS1',
        uniqueness: 'Medium',
        mmSize: '6.0',
        sizeCt: '1.5',
        priceCt: '$4000',
        estPrice: '$6000'
    },
    // Add more dummy data as needed
];

const StoneSearchResult = ({ isOpen, setIsOpen }) => {
    const isMobile = useMediaQuery("(max-width:600px)");
    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <Dialog
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                // sx={{ '& .MuiPaper-root': { width: '1600px' } }}
                fullWidth
                maxWidth={isMobile ? "sm" : "lg"}
            >
                <Box>
                    <CloseIcon sx={{ position: "absolute", right: "10px", cursor: "pointer" }} onClick={handleClose} />
                </Box>
                <DialogTitle id="alert-dialog-title" sx={{ fontWeight: "bold", marginTop: '30px' }}>
                    Stone Search Result
                </DialogTitle>

                <DialogContent>

                    <Box sx={{ display: "flex", flexDirection: isMobile ? 'column' : 'row' }}>

                        <Box >
                            <Box>
                                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }} >
                                    <Box sx={{ width: '5px', height: '5px', borderRadius: '50%', border: '1px solid black', margingTop: '10px', backgroundColor: 'black' }}></Box>
                                    <Typography sx={{ fontSize: '10px' }} >2 Rounds 1.7mm SH</Typography>
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }} ><Box sx={{ width: '5px', height: '5px', borderRadius: '50%', border: '1px solid black', margingTop: '10px', backgroundColor: 'black' }}></Box>
                                    <Typography sx={{ fontSize: '10px' }} >2 Rounds 1.7mm SH</Typography>
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "row",alignItems: "center", gap: "10px" }} ><Box sx={{ width: '5px', height: '5px', borderRadius: '50%', border: '1px solid black', margingTop: '10px', backgroundColor: 'black' }}></Box>
                                    <Typography sx={{ fontSize: '10px' }} >2 Rounds 1.7mm SH</Typography>
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "row",alignItems: "center", gap: "10px" }} ><Box sx={{ width: '5px', height: '5px', borderRadius: '50%', border: '1px solid black', margingTop: '10px', backgroundColor: 'black' }}></Box>
                                    <Typography sx={{ fontSize: '10px' }} >2 Rounds 1.7mm SH</Typography>
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "row",alignItems: "center", gap: "10px" }} ><Box sx={{ width: '5px', height: '5px', borderRadius: '50%', border: '1px solid black', margingTop: '10px', backgroundColor: 'black' }}></Box>
                                    <Typography sx={{ fontSize: '10px' }} >2 Rounds 1.7mm SH</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "row" }}>
                                <Box sx={{ width: '15px', height: '15px', borderRadius: '50%', border: '1px solid black', marginTop: '20px' }}>  </Box>
                                <Box sx={{ width: '15px', height: '15px', borderRadius: '50%', border: '1px solid black', marginTop: '16px' }}>  </Box>
                                <Box sx={{ width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black', marginTop: '12px' }}>  </Box>
                                <Box sx={{ width: '25px', height: '25px', borderRadius: '50%', border: '1px solid black', marginTop: '8px' }}>  </Box>
                                <Box sx={{ width: '30px', height: '30px', borderRadius: '50%', border: '1px solid black', marginTop: '4px' }} >  </Box>
                                <Box sx={{ width: '35px', height: '35px', borderRadius: '50%', border: '1px solid black', marginTop: '10px' }}>  </Box>
                                <Box sx={{ width: '30px', height: '30px', borderRadius: '50%', border: '1px solid black', marginTop: '4px' }}>  </Box>
                                <Box sx={{ width: '25px', height: '25px', borderRadius: '50%', border: '1px solid black', marginTop: '8px' }}>  </Box>
                                <Box sx={{ width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black', marginTop: '12px' }}>  </Box>
                                <Box sx={{ width: '15px', height: '15px', borderRadius: '50%', border: '1px solid black', marginTop: '16px' }}>  </Box>
                                <Box sx={{ width: '15px', height: '15px', borderRadius: '50%', border: '1px solid black', marginTop: '20px' }}>  </Box>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "row", marginTop: '50px' }}>

                                <Box sx={{ width: '15px', height: '15px', borderRadius: '50%', border: '1px solid black', marginTop: '4px' }}>  </Box>
                                <Box sx={{ width: '15px', height: '15px', borderRadius: '50%', border: '1px solid black', marginTop: '8px' }}>  </Box>
                                <Box sx={{ width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black', marginTop: '12px' }}>  </Box>
                                <Box sx={{ width: '25px', height: '25px', borderRadius: '50%', border: '1px solid black', marginTop: '16px' }}>  </Box>
                                <Box sx={{ width: '30px', height: '30px', borderRadius: '50%', border: '1px solid black', marginTop: '20px' }} >  </Box>
                                <Box sx={{ width: '35px', height: '35px', borderRadius: '50%', border: '1px solid black', marginTop: '10px' }}>  </Box>
                                <Box sx={{ width: '30px', height: '30px', borderRadius: '50%', border: '1px solid black', marginTop: '20px' }}>  </Box>
                                <Box sx={{ width: '25px', height: '25px', borderRadius: '50%', border: '1px solid black', marginTop: '16px' }}>  </Box>
                                <Box sx={{ width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black', marginTop: '12px' }}>  </Box>
                                <Box sx={{ width: '15px', height: '15px', borderRadius: '50%', border: '1px solid black', marginTop: '8px' }}>  </Box>
                                <Box sx={{ width: '15px', height: '15px', borderRadius: '50%', border: '1px solid black', marginTop: '4px' }}>  </Box>
                            </Box>
                        </Box>
                        <Box>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                                <Button onClick={handleClose} sx={{ color: 'black', border: '1px solid black', right: "30px", cursor: "pointer", width: isMobile ? "75px" : "150px" }}><ArrowBackIosNewIcon /> Back</Button>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "row", gap: "10px", marginTop: "50px", marginLeft: "10px" }}>
                                <Typography sx={{ fontWeight: "bold" }}>Stone 1</Typography>
                                <Box
                                    component="img"
                                    sx={{
                                        width: '25px',
                                        height: '25px',
                                    }}
                                    alt="Stone Locations"
                                    src="https://www.shutterstock.com/image-vector/realistic-vector-illustration-top-view-600nw-2098946590.jpg"
                                />
                                <Typography>1.00 mm</Typography>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "row", gap: "10px", marginTop: "10px", marginLeft: "10px" }}>

                                <Typography sx={{ fontWeight: "bold" }}>Results - Imitation Diamond - Calibrated (1)</Typography>
                            </Box>
                            <Button sx={{ background: '#547f9e', color: 'white', marginTop: '10px', marginLeft: '10px', borderRadius: '10px 10px 0 0', textAlign: 'center', fontWeight: 'bold', padding: '10px' }}>
                                Without Grading Report(1)
                            </Button>
                            <Box sx={{ background: '#e0e0e0', height: isMobile ? '470px' : '150px', width: '100%', marginLeft: '10px', paddingTop: '20px' }}>
                                <Box sx={{ display: "flex", flexDirection: isMobile ? 'column' : "row", gap: "10px", marginLeft: "10px" }}>
                                    {/* <TextField
                                        sx={{ width: '300px' ,background: '#fff'}}
                                        select
                                        size="small" >
                                        <MenuItem value="1">1</MenuItem>    
                                    </TextField>
                                    <TextField
                                        select />
                                    <TextField
                                        select /> */}
                                    <div style={{ margingTop: "10px", display: 'flex', flexDirection: 'column', gap: "10px" }}>
                                        <label style={{ fontWeight: "bold" }}>Cut</label>
                                        <select style={{ width: isMobile ? '250px' : '280px', height: '40px' }}>
                                            <option value="1">1</option>
                                            <option value="1">1</option>
                                            <option value="1">1</option>
                                        </select>
                                    </div>
                                    <div style={{ margingTop: "10px", display: 'flex', flexDirection: 'column', gap: "10px" }}>
                                        <label style={{ fontWeight: "bold" }}>Cut</label>
                                        <select style={{ width: isMobile ? '250px' : '280px', height: '40px' }}>
                                            <option value="1">1</option>
                                            <option value="1">1</option>
                                            <option value="1">1</option>
                                        </select>
                                    </div>
                                    <div style={{ margingTop: "10px", display: 'flex', flexDirection: 'column', gap: "10px" }}>
                                        <label style={{ fontWeight: "bold" }}>Cut</label>
                                        <select style={{ width: isMobile ? '250px' : '280px', height: '40px' }}>
                                            <option value="1">1</option>
                                            <option value="1">1</option>
                                            <option value="1">1</option>
                                        </select>
                                    </div>
                                </Box>
                                <Box sx={{ display: "flex",flexDirection: isMobile ? 'column' : "row", gap:isMobile ? "1px" : "10px" ,marginTop: "10px", marginLeft: "10px", justifyContent: 'space-between' }}>
                                    <FormControl>
                                        <RadioGroup
                                            row={!isMobile}
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="row-radio-buttons-group"
                                        >
                                            <FormControlLabel value="female" control={<Radio />} label="All" />
                                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                                            <FormControlLabel value="disabled" control={<Radio />} label="other" />
                                        </RadioGroup>
                                    </FormControl>
                                    {/* <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}> */}
                                    <Button sx={{
                                        color: 'red', background: 'white', border: '1px solid red',
                                        cursor: 'pointer', width: isMobile ? '75px' : '150px', marginRight: '10px',
                                        marginLeft: isMobile && '170px',
                                    }}>Reset</Button>
                                    {/* </Box> */}
                                </Box>
                            </Box>

                            <Box sx={{ margin: '0 10px' }}>
                                <Typography sx={{ fontWeight: 'bold' }}>1 result</Typography>
                                <Typography>Showing Imitaiton</Typography>
                            </Box>

                            <TableContainer sx={{ marginLeft: "10px" }} component={Paper}>

                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableHeadCell>Shape</StyledTableHeadCell>
                                            <StyledTableHeadCell>Cut</StyledTableHeadCell>
                                            <StyledTableHeadCell>Color</StyledTableHeadCell>
                                            <StyledTableHeadCell>Quality</StyledTableHeadCell>
                                            <StyledTableHeadCell>Uniqueness</StyledTableHeadCell>
                                            <StyledTableHeadCell>MM Size</StyledTableHeadCell>
                                            <StyledTableHeadCell>Size Ct</StyledTableHeadCell>
                                            <StyledTableHeadCell>Price/ct</StyledTableHeadCell>
                                            <StyledTableHeadCell>Est. Price</StyledTableHeadCell>
                                            <StyledTableHeadCell>Actions</StyledTableHeadCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {dummyData.map((row, index) => (
                                            <StyledTableRow component="tr" sx={{ backgroundColor: '#e0e0e0', mb: 1 }} key={index}>
                                                <TableCell>{row.shape}</TableCell>
                                                <TableCell>{row.cut}</TableCell>
                                                <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
                                                    <Box sx={{border: '1px solid black', width: '15px', height: '15px',borderRadius: '50%' ,backgroundColor:'white'}}></Box>
                                                    {row.color}</TableCell>
                                                <TableCell>{row.quality}</TableCell>
                                                <TableCell>{row.uniqueness}</TableCell>
                                                <TableCell>{row.mmSize}</TableCell>
                                                <TableCell>{row.sizeCt}</TableCell>
                                                <TableCell>{row.priceCt}</TableCell>
                                                <TableCell>{row.estPrice}</TableCell>
                                                <TableCell>
                                                    <Button variant="contained" color="primary">
                                                        Set
                                                    </Button>
                                                </TableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </Box>
                </DialogContent>
            </Dialog>
        </div>
    )
}
export default StoneSearchResult;

