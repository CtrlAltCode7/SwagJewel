import * as React from "react";
import { Box, Checkbox, Button, TextField, Typography, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomComponent from "../loginUserContent/loginUserContent";
import { AccountCircle, Logout, Lock, PersonAdd } from "@mui/icons-material";
import { clearUser } from "../../../../slices/userSlice";
import { useDispatch } from "react-redux";

export default function LoginContent() {
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  const handleAccountOpen = () => {
    navigate("/signup");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(clearUser());
    navigate("/home");
  };
  const token = localStorage.getItem("token");
  const message = token ? "Logout" : "Login";
  return (
    <Box
      className="text-center menu-dropdown-container w-100 u-regular-font-size"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <form onSubmit={handleSubmit} className="u-relative">
        <Box>
          {token ? (
            <div className="mb-4">
              <CustomComponent handleLogout={handleLogout} />
            </div>
          ) : (
            <div className="mb-4">
              <List>
                <ListItem sx={{ '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.04)' }, cursor: "pointer" }} onClick={handleLogin}>
                  <ListItemIcon>
                    <AccountCircle />
                  </ListItemIcon>
                  <ListItemText primary="Login" />
                </ListItem>
                <ListItem sx={{ '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.04)' }, cursor: "pointer" }} onClick={handleAccountOpen}>
                  <ListItemIcon>
                    <PersonAdd />
                  </ListItemIcon>
                  <ListItemText primary="Apply for Account" />
                </ListItem>
              </List>
            </div>
          )}
        </Box>
      </form>
    </Box>
  );
}
