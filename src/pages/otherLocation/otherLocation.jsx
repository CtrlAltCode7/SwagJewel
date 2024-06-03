import React from "react";
import { Box, Container, Grid, Typography, Link, Button } from "@mui/material";
import { styled } from "@mui/system";
import "./otherLocation.css";

const BorderBottomTypography = styled(Typography)(({ theme }) => ({
  borderBottom: "1px solid #ccc",
  marginBottom: theme.spacing(2.5),
  width: "100%",
}));

const ContactContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  flexGrow: 1,
  textAlign: "center",
  [theme.breakpoints.up("sm")]: {
    textAlign: "left",
  },
}));

const ItalicTypography = styled(Typography)(({ theme }) => ({
  fontStyle: "italic",
  marginBottom: theme.spacing(1.25),
}));

const otherContactsData = [
  {
    label: "Gemvision",
    location: "Lafayette, LA, USA",
    phones: ["800-357-6272", "563-884-8180"],
    website: "https://www.gemvision.com",
  },
  {
    label: "TDM Solutions",
    location: "Barcelona, Spain",
    phones: ["+34937547774"],
    website: "https://www.tdmsolutions.com",
  },
  {
    label: "B&D Sales",
    location: "Cranston, RI, USA",
    phones: ["401-781-4810"],
    website: "https://www.bdsales.com",
  },
  {
    label: "Stuller Yucatan, Ltd.",
    location: "Merida, Yucatan, Mexico",
    phones: ["011-55-9999-42950"],
  },
  {
    label: "Stuller Thailand, Ltd.",
    location: "Bangrak, Bangkok, Thailand",
    phones: ["011-66-2-630-1170"],
  },
];

export default function OtherLocation() {
  return (
    <Box
      sx={{
        py: 6,
        "@media (max-width:  768px)": {
          padding: "3rem",
        },
        "@media (min-width: 769px) and (max-width: 1250px)": {
          padding: "3rem",
        },
      }}
    >
      <Container
        sx={{
          padding: 0,
        }}
      >
        <Grid
          container
          spacing={3}
          sx={{
            "&>.MuiGrid-item": {
              paddingLeft: 0,
            },
          }}
        >
          <Grid item xs={12}>
            <BorderBottomTypography
              variant="body2"
              sx={{
                fontSize: {
                  xs: 20,
                  sm: 22,
                  md: 24,
                  lg: 26,
                  xl: 27,
                },
                color: "#555",
              }}
            >
              Other locations + companies
            </BorderBottomTypography>
          </Grid>
          {otherContactsData.map((contact, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={2}
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                "@media (max-width: 600px)": {
                  flexBasis: "50%",
                  maxWidth: "50%",
                },
              }}
            >
              <ContactContainer>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#555",
                    paddingBottom: "5px",
                  }}
                >
                  <strong>{contact.label}</strong>
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#555",
                    paddingBottom: "5px",
                  }}
                >
                  {contact.location}
                </Typography>
                {contact.phones.map((phone, i) => (
                  <Box key={i}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#555",
                        paddingBottom: "5px",
                      }}
                    >
                      <strong>Phone:</strong> {phone}
                    </Typography>
                  </Box>
                ))}
                {contact.website && (
                  <Box
                    sx={{
                      display: "flex",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#555",
                        paddingBottom: "5px",
                      }}
                    >
                      <strong>Website:</strong>{" "}
                      <Link
                        href={contact.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="primary-link"
                        style={{
                          color: "#547f9e",
                          fontWeight: "bold",
                        }}
                      >
                        {new URL(contact.website).hostname.replace("www.", "")}
                      </Link>
                    </Typography>
                  </Box>
                )}
              </ContactContainer>
            </Grid>
          ))}
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "@media (max-width: 600px)": {
                flexBasis: "50%",
                maxWidth: "50%",
                textAlign: "center",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: 2,
                border: "1px solid #ccc",
                borderRadius: 1,
                backgroundColor: "#f9f9f9",
              }}
            >
              <Typography variant="body1">
                <strong>Come see us near you</strong>
              </Typography>
              <ItalicTypography variant="caption">
                Connect with the Stuller family of companies at tradeshows and
                events around the world.
              </ItalicTypography>
              <Button
                variant="contained"
                size="small"
                sx={{
                  background: "#fff",
                  color: "#000",
                  border: "1px solid #000",
                  "&:hover": {
                    color: "#fff",
                    background: "#ccc",
                    border: "1px solid #ccc",
                  },
                  fontSize: "12px",
                }}
              >
                See Global Events
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
