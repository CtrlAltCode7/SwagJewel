// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Popper from '@mui/material/Popper';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
// import Button from '@mui/material/Button';
// import Fade from '@mui/material/Fade';
// import Paper from '@mui/material/Paper';
// import DoneIcon from '@mui/icons-material/Done';
// import CloseIcon from '@mui/icons-material/Close';

// export default function CartMassage({ showCartMsg, setShowCartMsg,anchorEl, placement  }) {
//     return (
//         <Box sx={{ width: 500}}>
//             <Popper
//                 // Note: The following zIndex style is specifically for documentation purposes and may not be necessary in your application.
//                 sx={{ zIndex: 1200}}
//                 open={showCartMsg}
//                 anchorEl={anchorEl}
//                 placement={placement}
//                 transition

//             >
//                 {({ TransitionProps }) => (
//                     <Fade {...TransitionProps} timeout={350}>
//                         <Paper>
//                             <Box sx={{ display: "flex" }}>
//                                 <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1 }}>
//                                     <DoneIcon sx={{ color: "green", fontSize: 60 }} />
//                                     <Typography sx={{ fontSize: 20, color: "gray" }}>Added</Typography>
//                                 </Box>
//                                 <Button onClick={() => setShowCartMsg(false)} sx={{ marginLeft: "auto" }}><CloseIcon /></Button>
//                             </Box>
//                             <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", marginTop: "10px", width: "400px", gap: "10px" }}>
//                                 <Box
//                                     component="img"
//                                     sx={{
//                                         width: "10%",
//                                         height: "auto",
//                                     }}
//                                     alt="Placeholder image"
//                                     src="https://meteor.stullercloud.com/das/2174033?&$xlarge$&$sharpen$"
//                                 />
//                                 <Typography
//                                     variant="body2"
//                                     sx={{
//                                         textDecoration: "underline",
//                                         fontWeight: "bold",
//                                         color: "gray",
//                                         fontSize: "20px"
//                                     }}
//                                 >
//                                     1 mm Round Faceted AA Natural Amethyst
//                                 </Typography>
//                             </Box>
//                         </Paper>
//                     </Fade>
//                 )}
//             </Popper>
//         </Box>
//     );
// }

import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

export default function CartMassage({ showCartMsg, setShowCartMsg, anchorEl, placement }) {
    return (
        <Box sx={{ width: 500 }}>
            <Popper
                sx={{ zIndex: 1200 }}
                open={showCartMsg}
                anchorEl={anchorEl}
                placement={placement}
                transition
            >
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper>
                            <Box sx={{ display: "flex" }}>
                                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1 }}>
                                    <DoneIcon sx={{ color: "green", fontSize: 60 }} />
                                    <Typography sx={{ fontSize: 20, color: "gray" }}>Added</Typography>
                                </Box>
                                <Button onClick={() => setShowCartMsg(false)} sx={{ marginLeft: "auto" }}><CloseIcon /></Button>
                            </Box>
                            <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", marginTop: "10px", width: "400px", gap: "10px" }}>
                                <Box
                                    component="img"
                                    sx={{
                                        width: "10%",
                                        height: "auto",
                                    }}
                                    alt="Placeholder image"
                                    src="https://meteor.stullercloud.com/das/2174033?&$xlarge$&$sharpen$"
                                />
                                <Typography
                                    variant="body2"
                                    sx={{
                                        textDecoration: "underline",
                                        fontWeight: "bold",
                                        color: "gray",
                                        fontSize: "20px"
                                    }}
                                >
                                    1 mm Round Faceted AA Natural Amethyst
                                </Typography>
                            </Box>
                        </Paper>
                    </Fade>
                )}
            </Popper>
        </Box>
    );
}



