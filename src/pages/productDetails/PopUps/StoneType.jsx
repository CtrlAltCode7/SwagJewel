import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Typography, useMediaQuery } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link } from 'react-router-dom';
import StoneTypeCategory from '../../../components/popUps/StoneTypeCategory';
import { useSelector } from 'react-redux';
const StoneType = ({ isOpen, setIsOpen }) => {
    const [openStonePopUp, setOpenStonePopUp] = useState(false);
    const isMobile = useMediaQuery("(max-width:600px)");
    const singleProduct = useSelector((state) => state.singleProduct.singleProduct);
    const StoneMapImage = singleProduct?.data?.Products[0].StoneMapImage;
    const [stoneFamily , setStoneFamily]  = useState(null);
    const stoneFamilies = useSelector((state) => state?.singleProduct?.stoneFamily);
    const data = stoneFamilies?.data?.StoneFamilies
    // console.log("stoneFamily", stoneFamilies?.data?.StoneFamilies);
    const handleClose = () => {
        setIsOpen(false);
    };

    // let data = [];
    // for (let i = 0; i < 17; i++) {
    //     data.push({
    //         url: 'https://meteor.stullercloud.com/das/119231635',
    //         title: "Diamond",
    //     });
    // }

    const openStoneCategory = (data) => {
        setOpenStonePopUp(true);
        setStoneFamily(data)
    }
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
                    StoneType
                </DialogTitle>

                <DialogContent>

                    <Box sx={{ display: "flex", flexDirection: isMobile ? 'column' : 'row' }}>
                        <Box
                            component="img"
                            sx={{
                                width: '300px',
                                height: '300px',
                            }}
                            alt="Stone Locations"
                            src={StoneMapImage}
                        />

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
                            <Box  sx={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "10px", marginLeft: "10px", cursor: "pointer" }}>
                                {
                                    data && data.map((item, index) => {
                                        return (
                                            <Box onClick={()=>openStoneCategory(item)} key={index} sx={{ display: "flex", flexDirection: "column", gap: "10px", border: "1px solid gray", padding: isMobile ? "10px 20px" : "20px 30px" }}>
                                                <Box
                                                    component="img"
                                                    sx={{
                                                        width: isMobile ? '60px' : '70px',
                                                        height: isMobile ? '60px' : '70px',
                                                    }}
                                                    alt="Stone Locations"
                                                    src="https://meteor.stullercloud.com/das/119231635"
                                                />
                                                <Typography sx={{ fontWeight: "bold" }}>{item.Name}</Typography>
                                            </Box>
                                        )
                                    })
                                }
                            </Box>
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
                    <StoneTypeCategory open={openStonePopUp} setOpen={setOpenStonePopUp} stoneFamily = {stoneFamily} StoneMapImage = {StoneMapImage}/>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default StoneType

