import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Typography, useMediaQuery } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ControlPointSharpIcon from '@mui/icons-material/ControlPointSharp';
import StonesListing from './StonesListing';
import { fetchSingleProduct } from '../../../slices/singleProductSlice';
import { useDispatch, useSelector } from 'react-redux';
const StoneLocation = ({ open, setOpen }) => {
    const [openList, setOpenList] = React.useState(false);
    const isMobile = useMediaQuery("(max-width:600px)");
    const dispatch = useDispatch();
    const handleClose = () => {
        setOpen(false);
    };

    const openListPopUP = () => {
        setOpenList(true);
        dispatch(fetchSingleProduct());
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
                <DialogTitle id="alert-dialog-title" sx={{ fontWeight: "bold", marginTop: '40px' }}>
                    {/* {"Stone Locations"} */}
                    Stone Locations
                </DialogTitle>

                <DialogContent>

                    <Box sx={{ display: "flex", flexDirection: isMobile ? 'column' : 'row' }}>
                        <Box
                            component="img"
                            sx={{
                                width: isMobile ? '100%' : '20%',
                                height: '200px',
                                marginTop: '20px',
                            }}
                            alt="Stone Locations"
                            src="https://meteor.stullercloud.com/das/130071612?obj=metals&obj.recipe=yellow&$xlarge$"
                        />
                        <Box sx={{ marginLeft: "20px" }}>
                            <Typography sx={{ color: "gray", fontSize: "40px", fontWeight: "200" }}>Ring </Typography>
                            <Box sx={{
                                display: "flex", flexDirection: isMobile ? 'column' : 'row',
                                gap: isMobile ? '10px' : '20px', borderTop: "1px solid gray", borderBottom: "1px solid gray"
                            }}>
                                <Box>
                                    <Box sx={{ display: "flex", gap: "120px", width: "40%" }}>
                                        <Typography> Accent </Typography>
                                        <ControlPointSharpIcon sx={{ curser: "pointer" }} onClick={openListPopUP} />
                                    </Box>
                                    <Typography> 22 Stones </Typography>
                                </Box>
                                <Box sx={{ display: "flex", width: isMobile ? "100%" : "400px", gap: "20px", marginLeft: "20px", marginTop: "10px" }}>
                                    <Box
                                        component="img"
                                        sx={{
                                            width: '25px',
                                            height: '25px',
                                        }}
                                        alt="Stone Locations"
                                        src="https://www.shutterstock.com/image-vector/realistic-vector-illustration-top-view-600nw-2098946590.jpg"
                                    />
                                    <Typography> Varrying Size</Typography>
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
                </DialogActions>
                <StonesListing open={openList} setOpen={setOpenList} />
            </Dialog>
        </div>
    )
}
export default StoneLocation

