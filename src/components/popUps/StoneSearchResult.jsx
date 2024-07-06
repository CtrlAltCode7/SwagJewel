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
import { useSelector } from 'react-redux';

const StyledTableHeadCell = styled(TableCell)({
    fontWeight: 'bold',
    backgroundColor: 'white',
});

const StyledTableRow = styled(TableRow)({
    backgroundColor: '#e0e0e0',
    '&:not(:last-child)': {
        borderBottom: "15px solid white"
    }
});

const StoneSearchResult = ({ isOpen, setIsOpen ,size }) => {
    const stoneSearchData = useSelector((state) => state.singleProduct.searchStone);
    const stoneSearch = useSelector((state) => state.singleProduct.stoneSearch);
    const singleProduct = useSelector((state) => state.singleProduct.singleProduct);
    const StoneMapImage = singleProduct && singleProduct?.data?.Products[0].StoneMapImage;

    console.log("stoneSearchData", stoneSearch);

    const isMobile = useMediaQuery("(max-width:600px)");
    const handleClose = () => {
        setIsOpen(false);
    };

    let normalizedData = stoneSearch && stoneSearch?.data?.ConfiguredStones.map((item) => item?.Product?.DescriptiveElementGroup?.DescriptiveElements);
    
    // if (normalizedData && normalizedData.length === 1) {
    //     normalizedData = [normalizedData];
    // }

    // console.log("normalizedData", normalizedData);

    return (
        <div>
            <Dialog
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
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
                        <Box
                            component="img"
                            sx={{
                                width: '250px',
                                height: '250px',
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
                                <Typography>{`${size} mm`}</Typography>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "row", gap: "10px", marginTop: "10px", marginLeft: "10px" }}>
                                <Typography sx={{ fontWeight: "bold" }}>Results - Imitation Diamond - Calibrated (1)</Typography>
                            </Box>
                            <Button sx={{ background: '#547f9e', color: 'white', marginTop: '10px', marginLeft: '10px', borderRadius: '10px 10px 0 0', textAlign: 'center', fontWeight: 'bold', padding: '10px' }}>
                                Without Grading Report(1)
                            </Button>
                            <Box sx={{ background: '#e0e0e0', height: isMobile ? '470px' : '150px', width: '100%', marginLeft: '10px', paddingTop: '20px' }}>
                                <Box sx={{ display: "flex", flexDirection: isMobile ? 'column' : "row", gap: "10px", marginLeft: "10px" }}>
                                    <div style={{ margingTop: "10px", display: 'flex', flexDirection: 'column', gap: "10px" }}>
                                        <label style={{ fontWeight: "bold" }}>Cut</label>
                                        <select style={{ width: isMobile ? '250px' : '280px', height: '40px' }}>
                                            <option value="1">1</option>
                                            <option value="1">1</option>
                                            <option value="1">1</option>
                                        </select>
                                    </div>
                                    <div style={{ margingTop: "10px", display: 'flex', flexDirection: 'column', gap: "10px" }}>
                                        <label style={{ fontWeight: "bold" }}>Color</label>
                                        <select style={{ width: isMobile ? '250px' : '280px', height: '40px' }}>
                                            <option value="1">1</option>
                                            <option value="1">1</option>
                                            <option value="1">1</option>
                                        </select>
                                    </div>
                                    <div style={{ margingTop: "10px", display: 'flex', flexDirection: 'column', gap: "10px" }}>
                                        <label style={{ fontWeight: "bold" }}>Quality</label>
                                        <select style={{ width: isMobile ? '250px' : '280px', height: '40px' }}>
                                            <option value="1">1</option>
                                            <option value="1">1</option>
                                            <option value="1">1</option>
                                        </select>
                                    </div>
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: isMobile ? 'column' : "row", gap: isMobile ? "1px" : "10px", marginTop: "10px", marginLeft: "10px", justifyContent: 'space-between' }}>
                                    <FormControl>
                                        <RadioGroup
                                            row={!isMobile}
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="row-radio-buttons-group"
                                        >
                                            <FormControlLabel value="female" control={<Radio />} label="All" />
                                            <FormControlLabel value="male" control={<Radio />} label="Natural" />
                                            <FormControlLabel value="other" control={<Radio />} label="Lab-Grown" />
                                            <FormControlLabel value="disabled" control={<Radio />} label="Imitation" />
                                        </RadioGroup>
                                    </FormControl>
                                    <Button sx={{
                                        color: 'red', background: 'white', border: '1px solid red',
                                        cursor: 'pointer', width: isMobile ? '75px' : '150px', marginRight: '10px',
                                        marginLeft: isMobile && '170px',
                                    }}>Reset</Button>
                                </Box>
                            </Box>

                            <Box sx={{ margin: '0 10px' }}>
                                <Typography sx={{ fontWeight: 'bold' }}>1 result</Typography>
                                <Typography>Showing Imitation</Typography>
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
                                        {normalizedData && normalizedData.map((row, index) => {
                                            // console.log(`Processing row ${index}`, row[0].map((item)=>item?.Name.toUpperCase()) );
                                            const shape = row?.find(item => typeof item.Name === 'string' && item.Name.toUpperCase() === 'SHAPE')?.Value ?? "";
                                            const cut = row?.find(item => typeof item.Name === 'string' && item.Name.toUpperCase() === 'CUT')?.Value ?? '';
                                            const color = row?.find(item => typeof item.Name === 'string' && item.Name.toUpperCase() === 'COLOR')?.Value?.toUpperCase() ?? "";
                                            const quality = row?.find(item => typeof item.Name === 'string' && item.Name.toUpperCase() === 'QUALITY')?.Value ?? '';
                                            const uniqueness = row?.find(item => typeof item.Name === 'string' && item.Name.toUpperCase() === 'UNIQUE')?.Value ?? '';
                                            const mmSize = row?.find(item => typeof item.Name === 'string' && item.Name.toUpperCase() === 'SIZE MM')?.Value?.replace(/\s*\(.*\)$/, '') ?? '';
                                            const sizeCt = row?.find(item => typeof item.Name === 'string' && item.Name.toUpperCase() === 'SIZE CT')?.Value?.split(" ")[0] ?? '';
                                            const size  = row?.find(item => typeof item.Name === 'string' && item.Name === 'Size')?.Value ?? '';
                                            console.log(`Shape: ${shape}, Cut: ${cut}, Color: ${color}, Quality: ${quality}, Uniqueness: ${uniqueness}, MM Size: ${mmSize}, Size Ct: ${sizeCt} Size: ${size}`);

                                            return (
                                                <StyledTableRow component="tr" sx={{ backgroundColor: '#e0e0e0', mb: 1 }} key={index}>
                                                    <TableCell>{shape}</TableCell>
                                                    <TableCell>{cut}</TableCell>
                                                    <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
                                                        <Box sx={{ border: '1px solid black', width: '15px', height: '15px', borderRadius: '50%', backgroundColor: 'white', marginTop: '5px' }}></Box>
                                                        {color}
                                                    </TableCell>
                                                    <TableCell>{quality}</TableCell>
                                                    <TableCell>{uniqueness}</TableCell>
                                                    <TableCell>{mmSize ? mmSize : size}</TableCell>
                                                    <TableCell>{sizeCt}</TableCell>
                                                    <TableCell>Price Restricted</TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell>
                                                        <Button variant="contained" color="primary">
                                                            Set
                                                        </Button>
                                                    </TableCell>
                                                </StyledTableRow>
                                            );
                                        })}
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

