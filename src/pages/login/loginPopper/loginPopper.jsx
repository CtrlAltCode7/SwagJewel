import * as React from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import { useState } from "react";

import { styled } from "@mui/system";
import { useEffect } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const StyledContainer = styled("div")({
  textAlign: "center",
  width: "100%",
  fontSize: "1rem", // Adjust as needed
});

const StyledForm = styled("form")({
  position: "relative",
});

const StyledInputGroup = styled("div")({
  marginBottom: "1rem", // Adjust as needed
});

const StyledCheckboxLabel = styled("label")({
  marginLeft: "-15px",
});

const StyledButton = styled("button")({
  borderRadius: "1.5rem", // Adjust as needed
  width: "100%",
  marginBottom: "1rem", // Adjust as needed
});

const StyledLink = styled("a")({
  textDecoration: "none",
  color: "blue", // Adjust as needed
  "&:hover": {
    textDecoration: "underline",
  },
});

export default function LoginPopper({ open, placement, anchorEl, setOpen }) {
  // const [open1, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (anchorRef.current && !anchorRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleCreateAccount = () => {
    navigate("/signup");
  };

  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <Box>
      <Popper
        sx={{ zIndex: 1200 }}
        open={open}
        anchorEl={anchorEl}
        placement={placement}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <StyledContainer onClick={(event) => event.stopPropagation()}>
                <StyledForm>
                  <div>
                    <StyledInputGroup>
                      <input
                        placeholder="Username..."
                        type="text"
                        spellCheck="false"
                        tabIndex="10"
                      />
                    </StyledInputGroup>
                    <StyledInputGroup>
                      <input
                        placeholder="Password..."
                        type="password"
                        spellCheck="false"
                        autoComplete="false"
                        tabIndex="11"
                      />
                    </StyledInputGroup>
                    <StyledInputGroup>
                      <input
                        id="remember-me"
                        type="checkbox"
                        tabIndex="12"
                        style={{
                          display: "inline",
                          opacity: 0,
                          visibility: "visible",
                        }}
                      />
                      <StyledCheckboxLabel htmlFor="remember-me">
                        Keep me signed in on this computer
                      </StyledCheckboxLabel>
                    </StyledInputGroup>
                  </div>
                  <StyledButton
                    type="submit"
                    tabIndex="13"
                    onClick={handleLogin}
                  >
                    Log In
                  </StyledButton>
                </StyledForm>
                <div>
                  <StyledLink href="/forgot?returnUrl=%2Faccountsignup%2F">
                    Recover username or password
                  </StyledLink>
                </div>
                <div>
                  <StyledButton
                    // href="/accountsignup/"
                    // dataTest="apply-for-an-account-button"
                    onClick={handleCreateAccount}
                  >
                    Apply for an Account
                  </StyledButton>
                </div>
              </StyledContainer>
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
        LOG IN
      </Typography>
      {/* </Grid> */}
      {/* </Grid> */}
    </Box>
  );
}
