import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import md5 from "md5";
import { useNavigate } from "react-router-dom";

export default function InitialPageLoad() {
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleHomepage = () => {
    navigate("/home");
  };



  useEffect(() => {
    setOpen(true);
    const hashedPassword = md5("swagjewel");
    console.log("Entered password (MD5):", hashedPassword);
    localStorage.setItem("isLoggedIn", false);
    if (!localStorage.getItem("swag-jewelers")) {
      localStorage.setItem("swag-jewelers", hashedPassword);
    }
  }, []);
  const handleClose = () => {
    setOpen(false);
    window.location.reload();
  };

  const handleBeforeUnload = () => {
    localStorage.setItem('isLoggedIn', 'false');
  };

  const handleSubmit = () => {
    const hashedPassword = md5(password);
    const storedHashedPassword = localStorage.getItem("swag-jewelers");
    if (hashedPassword === storedHashedPassword) {
      localStorage.setItem("isLoggedIn", true);
      setError(false);
      setOpen(false);
      setError(true);
      handleHomepage();
    } else {
      setOpen(false);
      navigate("*");
    }
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Enter Password</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
