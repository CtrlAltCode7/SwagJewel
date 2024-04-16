import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Box } from "@mui/material";

import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
export default function AccordionExpandIcon() {
  const [expanded, setExpanded] = React.useState({});

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [panel]: isExpanded ? true : false,
    }));
  };

  const accordionData = [
    {
      id: 1,
      title: "Accordion 1",
      contents: [
        {
          id: 1,
          text: "Content 1 for Accordion 1",
        },
        {
          id: 2,
          text: "Content 2 for Accordion 1",
        },
        {
          id: 3,
          text: "Content 3 for Accordion 1",
        },
      ],
    },
    {
      id: 2,
      title: "Accordion 2",
      contents: [
        {
          id: 1,
          text: "Content 1 for Accordion 2",
        },
        {
          id: 2,
          text: "Content 2 for Accordion 2",
        },
        {
          id: 3,
          text: "Content 3 for Accordion 2",
        },
      ],
    },
    {
      id: 2,
      title: "Accordion 2",
      contents: [
        {
          id: 1,
          text: "Content 1 for Accordion 2",
        },
        {
          id: 2,
          text: "Content 2 for Accordion 2",
        },
        {
          id: 3,
          text: "Content 3 for Accordion 2",
        },
      ],
    },
    {
      id: 2,
      title: "Accordion 2",
      contents: [
        {
          id: 1,
          text: "Content 1 for Accordion 2",
        },
        {
          id: 2,
          text: "Content 2 for Accordion 2",
        },
        {
          id: 3,
          text: "Content 3 for Accordion 2",
        },
      ],
    },
    {
      id: 2,
      title: "Accordion 2",
      contents: [
        {
          id: 1,
          text: "Content 1 for Accordion 2",
        },
        {
          id: 2,
          text: "Content 2 for Accordion 2",
        },
        {
          id: 3,
          text: "Content 3 for Accordion 2",
        },
      ],
    },
    {
      id: 2,
      title: "Accordion 2",
      contents: [
        {
          id: 1,
          text: "Content 1 for Accordion 2",
        },
        {
          id: 2,
          text: "Content 2 for Accordion 2",
        },
        {
          id: 3,
          text: "Content 3 for Accordion 2",
        },
      ],
    },
    {
      id: 2,
      title: "Accordion 2",
      contents: [
        {
          id: 1,
          text: "Content 1 for Accordion 2",
        },
        {
          id: 2,
          text: "Content 2 for Accordion 2",
        },
        {
          id: 3,
          text: "Content 3 for Accordion 2",
        },
      ],
    },
    {
      id: 2,
      title: "Accordion 2",
      contents: [
        {
          id: 1,
          text: "Content 1 for Accordion 2",
        },
        {
          id: 2,
          text: "Content 2 for Accordion 2",
        },
        {
          id: 3,
          text: "Content 3 for Accordion 2",
        },
      ],
    },
    {
      id: 2,
      title: "Accordion 2",
      contents: [
        {
          id: 1,
          text: "Content 1 for Accordion 2",
        },
        {
          id: 2,
          text: "Content 2 for Accordion 2",
        },
        {
          id: 3,
          text: "Content 3 for Accordion 2",
        },
      ],
    },
    {
      id: 2,
      title: "Accordion 2",
      contents: [
        {
          id: 1,
          text: "Content 1 for Accordion 2",
        },
        {
          id: 2,
          text: "Content 2 for Accordion 2",
        },
        {
          id: 3,
          text: "Content 3 for Accordion 2",
        },
      ],
    },
    {
      id: 2,
      title: "Accordion 2",
      contents: [
        {
          id: 1,
          text: "Content 1 for Accordion 2",
        },
        {
          id: 2,
          text: "Content 2 for Accordion 2",
        },
        {
          id: 3,
          text: "Content 3 for Accordion 2",
        },
      ],
    },
    // Add more accordion items as needed
  ];

  return (
    <div>
      {accordionData.map((item) => (
        <Accordion
          key={item.id}
          expanded={expanded[`panel${item.id}`]}
          onChange={handleChange(`panel${item.id}`)}
          sx={{
            marginBottom: "1rem"
          }}
        >
          <AccordionSummary
            expandIcon={
              expanded[`panel${item.id}`] ? (
                <RemoveCircleOutlineIcon />
              ) : (
                <AddCircleOutlineIcon />
              )
            }
            aria-controls={`panel${item.id}-content`}
            id={`panel${item.id}-header`}
            sx={{
              backgroundColor: "#eee"
            }}
          >
            <span>{item.title}</span>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {item.contents.map((content,index) => (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Checkbox /> {/* Adding Checkbox under AccordionDetails */}
                <Typography key={content.id}>{content.text}</Typography>
              </Box>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
