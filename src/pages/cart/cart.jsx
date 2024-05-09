import * as React from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import EmptyCart from "./emptyCart/emptyCart";

export default function Cart({open1,placement1,anchorE2,setOpen1}) {
    console.log(open1,"I am here in cart");
    return (
        <Box>
            <Popper
                sx={{ zIndex: 1200 }}
                open={open1}
                anchorEl={anchorE2}
                placement={placement1}
                transition
            >
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper>
                        <EmptyCart />

                        </Paper>
                    </Fade>
                )}
            </Popper>
            {/* <Grid container justifyContent="center"> */}
            {/* <Grid item> */}
            {/* <Button >bottom</Button> */}
            <Typography
                sx={{
                    color: "#777",
                    fontWeight: "500",
                    ":hover": {
                        color: "red",
                    },
                    fontSize: "0.6rem",
                    letterSpacing: "0.1rem",
                }}
                variant="caption"
            // onClick={handleClick("bottom")}
            >
                Cartj
            </Typography>
            {/* </Grid> */}
            {/* </Grid> */}
        </Box>
    )
}






