import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Typography, useMediaQuery } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import StoneSearchResult from './StoneSearchResult';
import { Link } from 'react-router-dom';
const StoneTypeCategory = ({ open, setOpen }) => {
    const [openStoneSearch, setOpenStoneSearch] = useState(false);
    const isMobile = useMediaQuery("(max-width:600px)");
    const handleClose = () => {
        setOpen(false);
    };

    const openStoneSearchResult = () => {
        setOpenStoneSearch(true);
    }

    return (
        <div>
            <Dialog
                open={open}
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
                    StoneType
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
                                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }} ><Box sx={{ width: '5px', height: '5px', borderRadius: '50%', border: '1px solid black', margingTop: '10px', backgroundColor: 'black' }}></Box>
                                    <Typography sx={{ fontSize: '10px' }} >2 Rounds 1.7mm SH</Typography>
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }} ><Box sx={{ width: '5px', height: '5px', borderRadius: '50%', border: '1px solid black', margingTop: '10px', backgroundColor: 'black' }}></Box>
                                    <Typography sx={{ fontSize: '10px' }} >2 Rounds 1.7mm SH</Typography>
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }} ><Box sx={{ width: '5px', height: '5px', borderRadius: '50%', border: '1px solid black', margingTop: '10px', backgroundColor: 'black' }}></Box>
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
                                <Box
                                    component="img"
                                    sx={{
                                        width: '45px',
                                        height: '45px',
                                    }}
                                    alt="Stone Locations"
                                    src="https://meteor.stullercloud.com/das/119231635"
                                />
                                <Typography sx={{ fontSize: "30px", color: "gray" }}>Diamond</Typography>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: "10px", marginTop: "10px", marginLeft: "10px" }}>
                                <Button
                                    variant={"contained"}
                                    sx={{
                                        borderRadius: 1,
                                        textTransform: "none",
                                        padding: ".5rem 1.5rem",
                                        background: "#fff",
                                        color: "black",
                                        width: isMobile ? "300px" : "425px",
                                        border: '1px solid black',
                                        height: isMobile ? "60px" : "auto",
                                        "&:hover": {
                                            backgroundColor: "#999",
                                        }
                                    }}
                                    onClick={openStoneSearchResult}
                                >
                                    <Typography sx={{ fontWeight: "bold", textAlign: "center" }}>Imitation</Typography>
                                </Button>
                                <Box
                                    variant={"contained"}
                                    sx={{
                                        borderRadius: 1,
                                        textTransform: "none",
                                        padding: ".5rem 1.5rem",
                                        background: "#fff",
                                        color: "black",
                                        width: isMobile ? "250px" : "375px",
                                        border: '1px solid black',

                                        "&:hover": {
                                            backgroundColor: "#999",
                                        }
                                    }}
                                    onClick={openStoneSearchResult}
                                >
                                    <Typography sx={{ fontWeight: "bold", textAlign: "center" }}>Lab Grown</Typography>
                                    <Typography sx={{ textAlign: "center" }}>Without Grading Report</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: "10px", marginTop: "10px", marginLeft: "10px" }}>
                                <Box
                                    variant={"contained"}
                                    sx={{
                                        borderRadius: 1,
                                        textTransform: "none",
                                        padding: ".5rem 1.5rem",
                                        background: "#fff",
                                        color: "black",
                                        width: isMobile ? "250px" : "375px",
                                        border: '1px solid black',

                                        "&:hover": {
                                            backgroundColor: "#999",
                                        }
                                    }}
                                    onClick={openStoneSearchResult}
                                >
                                    <Typography sx={{ fontWeight: "bold", textAlign: "center" }}>Diamond</Typography>
                                    <Typography sx={{ textAlign: "center" }}>Without Grading Report</Typography>
                                </Box>
                                <Button
                                    variant={"contained"}
                                    sx={{
                                        borderRadius: 1,
                                        textTransform: "none",
                                        padding: ".5rem 1.5rem",
                                        background: "#6fa8d1",
                                        color: "#fff",
                                        width: isMobile ? "300px" : "425px",
                                        borderColor: "#6fa8d1",
                                        height: isMobile ? "60px" : "auto",
                                        "&:hover": {
                                            backgroundColor: "#999",
                                        }
                                    }}
                                    onClick={openStoneSearchResult}
                                >
                                    View All
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </DialogContent>
                <StoneSearchResult isOpen={openStoneSearch} setIsOpen={setOpenStoneSearch} />
            </Dialog>
        </div>
    )
}
export default StoneTypeCategory

