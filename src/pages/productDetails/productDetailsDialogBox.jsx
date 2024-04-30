import { useEffect, Fragment, useState, useRef } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import ProductDetailSlider from "./productDetailSlider";
import ProductDetailDialogBoxContent from "./productDetailDialogBoxContent";
import ProductDetailsDialogTitle from "./productDetailsDialogTitle";
import { dialogContainer } from "./productDetailDialogBoxStyles";

export default function ScrollDialog() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  const styles = dialogContainer;

  return (
    <Fragment>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={12}>
          <ProductDetailSlider handleClick={handleClickOpen("paper")} />
        </Grid>
      </Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        maxWidth="md"
        fullWidth
      >
        <DialogTitle id="scroll-dialog-title">
          <ProductDetailsDialogTitle handleClose={handleClose} />
        </DialogTitle>
        <DialogContent
          dividers={scroll === "paper"}
          sx={styles.dialogContainer}
        >
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <ProductDetailDialogBoxContent />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
}
