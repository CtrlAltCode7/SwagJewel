import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import Typography from "@mui/material/Typography";
import { Box, Checkbox } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

function AccordionComponent({ data }) {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  const contentLength = data?.map((item, index) => item.contents.length) || 0;

  console.log("data", contentLength);

  return (
    <div>
      {data.map((accordion, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          sx={{
            marginBottom: "1rem",
          }}
        >
          <AccordionSummary
            expandIcon={
              expanded === `panel${index}` ? (
                <RemoveCircleIcon style={{ color: "#6fa8d1" }} />
              ) : (
                <AddCircleIcon style={{ color: "#999", backgroundColor: "" }} />
              )
            }
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            sx={{
              backgroundColor: "#eee",
              color: "#555",
              textTransform: "uppercase",
            }}
          >
            <Typography
              sx={{
                color: "#555",
                fontWeight: "bold",
                // marginRight: ".5rem"
                // gap: ".4rem"
              }}
            >
              {accordion.title}
              <Typography component={"span"}ml={1}>
                {`(${accordion?.contents?.length || 0})`}
              </Typography>
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              maxHeight: "240px",
              overflowY: "auto",
              "&::-webkit-scrollbar": {
                width: "7px",
                backgroundColor: "#e6e6e6",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#6fa8d1",
                borderRadius: "10px",
              },
            }}
          >
            {accordion.contents.map((content, index) => (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
                key={content.id}
              >
                <Checkbox style={{
                  color: "#999"
                }}/>
                <Typography
                  sx={{
                    color: "#555",
                    fontSize: "14px"
                  }}
                >
                  {content.text}
                </Typography>
              </Box>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default AccordionComponent;
