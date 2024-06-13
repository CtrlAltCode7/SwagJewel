import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Typography, useMediaQuery } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
const StoneLocation = ({ open, setOpen }) => {
    const isMobile = useMediaQuery("(max-width:600px)");
    const handleClose = () => {
        setOpen(false);
    };

    let data = [];
    for (let i = 0; i < 22; i++) {
        data.push({
            stone: `stone ${i}`,
            size: (1 + i * 0.1).toFixed(1) + ' ' + "mm",
        });
    }

    let radius = ["25px", "25px", "35px", "40px", "45px", "55px", "45px", "40px", "35px", "25px", "25px"];
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
                <DialogTitle id="alert-dialog-title" sx={{ fontWeight: "bold", marginTop: '40px' }}>
                    Stone Locations
                </DialogTitle>

                <DialogContent>

                    <Box sx={{ display: "flex", flexDirection: isMobile ? 'column' : 'row' }}>

                        <Box >
                            <Box>
                                <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }} ><Box sx={{ width: '5px', height: '5px', borderRadius: '50%', border: '1px solid black', margingTop: '10px', backgroundColor: 'black' }}></Box>
                                    <Typography sx={{ fontSize: '10px' }} >2 Rounds 1.7mm SH</Typography>
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }} ><Box sx={{ width: '5px', height: '5px', borderRadius: '50%', border: '1px solid black', margingTop: '10px', backgroundColor: 'black' }}></Box>
                                    <Typography sx={{ fontSize: '10px' }} >2 Rounds 1.7mm SH</Typography>
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }} ><Box sx={{ width: '5px', height: '5px', borderRadius: '50%', border: '1px solid black', margingTop: '10px', backgroundColor: 'black' }}></Box>
                                    <Typography sx={{ fontSize: '10px' }} >2 Rounds 1.7mm SH</Typography>
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }} ><Box sx={{ width: '5px', height: '5px', borderRadius: '50%', border: '1px solid black', margingTop: '10px', backgroundColor: 'black' }}></Box>
                                    <Typography sx={{ fontSize: '10px' }} >2 Rounds 1.7mm SH</Typography>
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }} ><Box sx={{ width: '5px', height: '5px', borderRadius: '50%', border: '1px solid black', margingTop: '10px', backgroundColor: 'black' }}></Box>
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
                        <Box sx={{ marginLeft: "20px" }}>
                            <Typography sx={{ color: "gray", fontSize: "40px", fontWeight: "200" }}>Ring</Typography>
                            {
                                data.map((item, index) => {
                                    return (
                                        <>
                                            <Box sx={{
                                                display: "flex", flexDirection: isMobile ? 'column' : 'row',
                                                gap: isMobile ? '10px' : '20px', borderTop: "1px solid gray", borderBottom: "1px solid gray"
                                            }}>
                                                <Box>
                                                    <Box sx={{ display: "flex", gap: "120px", width: "100px" }}>
                                                        <Typography sx={{ fontWeight: "bold" }}> {item.stone} </Typography>
                                                        {/* <ControlPointSharpIcon /> */}
                                                    </Box>
                                                    {/* <Typography> 22 Stones </Typography> */}
                                                </Box>
                                                <Box sx={{ display: "flex", width: "300px", gap: "20px", marginLeft: "20px", marginTop: "10px" }}>
                                                    <Box
                                                        component="img"
                                                        sx={{
                                                            width: '25px',
                                                            height: '25px',
                                                        }}
                                                        alt="Stone Locations"
                                                        src="https://picsum.photos/seed/picsum/200/300"
                                                    />
                                                    <Typography> {item.size}</Typography>
                                                </Box>
                                                <Box >
                                                    <Button
                                                        variant={"contained"}
                                                        sx={{
                                                            borderRadius: 1,
                                                            textTransform: "none",
                                                            padding: ".5rem 1.5rem",
                                                            background: "#6fa8d1",
                                                            color: "#fff",
                                                            width: '200px',
                                                            borderColor: "#6fa8d1",
                                                            marginTop: "5px",
                                                            marginBottom: "5px",
                                                            "&:hover": {
                                                                backgroundColor: "#999",
                                                            }
                                                        }}
                                                        onClick={handleClose}
                                                    >
                                                        Select
                                                    </Button>
                                                </Box>
                                                <Link style={{ color: "gray", marginTop: "10px" }} >
                                                    Use My Stone
                                                </Link>
                                            </Box>
                                        </>
                                    )
                                })
                            }
                        </Box>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant={"contained"}
                        sx={{
                            borderRadius: 1,
                            textTransform: "none",
                            padding: ".5rem 1.5rem",
                            background: "#6fa8d1",
                            color: "#fff",
                            width: '200px',
                            borderColor: "#6fa8d1",
                            marginBottom: "50px",
                            "&:hover": {
                                backgroundColor: "#999",
                            }
                        }}
                        onClick={handleClose}
                    >
                        Done
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default StoneLocation

