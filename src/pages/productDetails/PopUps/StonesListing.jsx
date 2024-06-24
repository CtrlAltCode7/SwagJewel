import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Typography, useMediaQuery } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import StoneType from './StoneType';
import {fetchStoneFamily} from '../../../slices/singleProductSlice';
import { useSelector,useDispatch } from 'react-redux';
import { Loader } from '../../../components/lazyLoader';
// import useMyStone from '../../../components/popUps/useMyStone';
import useMyStone from '../../../components/popUps/useMyStone';
const StoneListing = ({ open, setOpen }) => {
    const [openStoneType, setOpenStoneType] = useState(false);
    const [isUseMyStone, setIsUseMyStone] = useState(false);
    const singleProduct = useSelector((state) => state.singleProduct.singleProduct);
    const status = useSelector((state) => state.singleProduct.status);
    const dispatch = useDispatch();
    console.log("singleProductStatus", status);

    const SettingOptions = singleProduct?.data?.Products[0].ConfigurationModel?.SettingOptions;
    const StoneMapImage =  singleProduct && singleProduct?.data?.Products[0].StoneMapImage;
    const ConfigurationModelID = singleProduct?.data?.Products[0].ConfigurationModel?.Id; 

    const isMobile = useMediaQuery("(max-width:600px)");
    const handleClose = () => {
        setOpen(false);
    };
    const HandleOpenStoneType = (LocationNumber,Dimension1,Dimension2,Dimension3,Shape,SettingType,ConfigurationModelID) => {
        dispatch(fetchStoneFamily({LocationNumber,Dimension1,Dimension2,Dimension3,Shape,SettingType,ConfigurationModelID})); 
        setOpenStoneType(true)
        console.log("open stone type")
    }

    const openUseMyStone = () => {
        setIsUseMyStone(true);
    }
    return (
        <div>
            {status === "loading" ? <Loader /> :
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

                            <Box
                                component="img"
                                sx={{
                                    width: '300px',
                                    height: '300px',
                                }}
                                alt="Stone Locations"
                                src={StoneMapImage}
                            />
                            <Box sx={{ marginLeft: "20px" }}>
                                <Typography sx={{ color: "gray", fontSize: "40px", fontWeight: "200" }}>Ring</Typography>

                                {
                                    SettingOptions && SettingOptions.map((item, index) => {
                                        return (
                                            <>
                                                <Box sx={{
                                                    display: "flex", flexDirection: isMobile ? 'column' : 'row',
                                                    gap: isMobile ? '10px' : '20px', borderTop: "1px solid gray", borderBottom: "1px solid gray"
                                                }}>
                                                    <Box>
                                                        <Box sx={{ display: "flex", gap: "120px", width: "100px" }}>
                                                            <Typography sx={{ fontWeight: "bold", paddingTop: '10px' }}> {item.Description} </Typography>
                                                            {/* <ControlPointSharpIcon /> */}
                                                        </Box>
                                                        {/* <Typography> 22 Stones </Typography> */}
                                                    </Box>
                                                    <Box sx={{ display: "flex", width: isMobile ? '100%' : "300px", gap: "20px", marginLeft: "20px", marginTop: "10px" }}>
                                                        <Box
                                                            component="img"
                                                            sx={{
                                                                width: '25px',
                                                                height: '25px',
                                                            }}
                                                            alt="Stone Locations"
                                                            src="https://www.shutterstock.com/image-vector/realistic-vector-illustration-top-view-600nw-2098946590.jpg"
                                                        />
                                                        <Typography> {item.SizeMM}</Typography>
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
                                                            onClick={()=>HandleOpenStoneType(item.LocationNumber,item.Dimension1,item.Dimension2,item.Dimension3,item.Shape,item.SettingType,ConfigurationModelID)}
                                                        >
                                                            Select
                                                        </Button>
                                                    </Box>
                                                    <Button onClick={openUseMyStone} style={{ color: "gray", marginTop: "10px" }} >
                                                        Use My Stone
                                                    </Button>
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
                    <StoneType isOpen={openStoneType} setIsOpen={setOpenStoneType} />
                    <useMyStone />
                </Dialog>
            }
        </div>
    )
}
export default StoneListing

