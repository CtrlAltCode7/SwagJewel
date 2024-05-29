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

const StyledBox = styled("div")(({ theme }) => ({
  ...commonStyles,
  textAlign: "center",
  marginBottom: "2rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 1rem",
  flexWrap: "wrap",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const StyledImage = styled("img")({
  marginLeft: "1rem",
});

const StyledLink = styled(Link)({
  color: "#547f9e",
  fontWeight: "bold",
});

const StyledBoxDescription = styled(Box)({
  textAlign: "center",
  marginBottom: "2rem",
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

const LocateJewellery = ({ data }) => {
  return (
    <>
      <StyledBox>
        <Typography gutterBottom variant="body2">
          {data.title && (
            <Typography component={"span"} variant="body2" fontWeight={"bold"}>
              {data.title}
            </Typography>
          )}
          {data.message} <StyledLink to={data.link}>{data.linkText}</StyledLink>
          {data.subtitle && (
            <Typography component={"span"} variant="body2">
              {data.subtitle}
            </Typography>
          )}
        </Typography>
        <StyledImage src={data.imageSrc} alt={data.imageAlt} />
      </StyledBox>
      {/* <StyledBoxDescription>
        <StyledTypography variant="body2">{data.description}</StyledTypography>
        <Typography
          variant="body2"
          component="div"
          sx={{ fontWeight: "bold", mb: 1 }}
        >
          {data.question}
        </Typography>
        <Typography variant="body2" sx={commonStyles}>
          {data.answer}
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
          <StyledPhoneNumber
            variant="body1"
            component="span"
            sx={commonStyles}
            mr={1}
            ml={1}
          >
            {data.phoneNumber}
          </StyledPhoneNumber>
          <Typography
            variant="body2"
            component="span"
            sx={{ fontWeight: "bold", ...commonStyles }}
          >
            ext. <span>{data.extension}</span>
          </Typography>
        </Box>
      </StyledBoxDescription> */}
    </>
  );
};

export default LocateJewellery;
