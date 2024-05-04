import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";


const commonStyles = {
  color: "#555",
};

const StyledSection = styled("section")({
  padding: "50px 0",
  backgroundColor: "#eee",
});

const StyledBox = styled("div")({
  ...commonStyles,
  textAlign: "center",
  marginBottom: "2rem",
  display: "flex",
  justifyContent: "center",
  alignUtems: "center",
  margin: "0 1rem",
});

const StyledImage = styled("img")({
  marginLeft: "1rem",
});

const StyledLink = styled(Link)({
  color: "#547f9e",
  fontWeight: "bold",
});

const StyledBoxDescription = styled(Box)({
  textAlign: "center",
  marginBottom: "2rem"
});

const StyledTypography = styled(Typography)({
  ...commonStyles,
  maxWidth: 700,
  margin: "2rem auto",

});

const StyledIconButton = styled(IconButton)({
  // Add your IconButton styles here if needed
});

const StyledPhoneNumber = styled(Typography)({
  fontSize: "2rem",
  mx: 1,
});

export default function LocateJewellery() {
  return (
    <>
      <StyledBox>
        <Typography gutterBottom variant="body2">
          If you are not a member of the jewelry trade, you can{" "}
          <StyledLink href="/locateajeweler">locate a jeweler</StyledLink> near
          you to purchase Stuller products.
        </Typography>
        <StyledImage
          src="//meteor.stullercloud.com/das/56392816?scl=3.4"
          alt="Locate a Jeweler"
        />
      </StyledBox>
      <StyledBoxDescription>
        <StyledTypography variant="body2">
          Stuller uses a third-party service provider to verify the accuracy and
          validity of the information submitted for establishing a Stuller
          account. Such verification is not a credit check.
          {/* If you have any questions or concerns, please contact Stuller Customer Administration at 337-262-7700 option 2 or email at customer_admin@stuller.com. */}
        </StyledTypography>
        <Typography
          variant="body2"
          component="div"
          sx={{ fontWeight: "bold", mb: 1 }}
        >
          Want to know more about how Stuller can help your business succeed?
        </Typography>
        <Typography variant="body2" sx={commonStyles}>
          Our New Account specialists can answer any of your questions
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 2,
          }}
        >
          <StyledIconButton>
            <LocalPhoneIcon />
          </StyledIconButton>
          <StyledPhoneNumber variant="body1" component="span" sx={commonStyles} mr={1} ml={1}>
            800-877-7777
          </StyledPhoneNumber>
          <Typography
            variant="body2"
            component="span"
            sx={{ fontWeight: "bold", ...commonStyles }}
          >
            ext. <span>500</span>
          </Typography>
        </Box>
      </StyledBoxDescription>
    </>
  );
}
