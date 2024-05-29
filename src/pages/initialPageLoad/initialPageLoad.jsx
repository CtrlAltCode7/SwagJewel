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
    // Redirect to another page
    navigate("/home");
  };



  useEffect(() => {
    setOpen(true);
    const hashedPassword = md5("swagjewel");
    console.log("Entered password (MD5):", hashedPassword);
    localStorage.setItem("isLoggedIn", false);

    // window.addEventListener('beforeunload', handleBeforeUnload);

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
    // Hash the entered password using MD5
    const hashedPassword = md5(password);

    // Retrieve the hashed password from local storage
    const storedHashedPassword = localStorage.getItem("swag-jewelers");
    console.log("storedHashedPassword", storedHashedPassword);

    // Compare the hashed passwords
    if (hashedPassword === storedHashedPassword) {
      localStorage.setItem("isLoggedIn", true);

      // Passwords match
      //   console.log("Password matched.");
      setError(false);
      setOpen(false);
      // Passwords do not match
      //   console.log("Password did not match.");
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
