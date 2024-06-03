import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useEffect } from "react";

function AccordionComponent({ data }) {
  const [loadingAccordion, setLoadingAccordion] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
    if (isExpanded) {
      setLoadingAccordion(panel);
      setTimeout(() => {
        setLoadingAccordion(null);
      }, 1000);
    }
  };

  const [expanded, setExpanded] = useState(null);
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (contentId, title) => (event) => {
    const isChecked = event.target.checked;
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [contentId]: { ...prevCheckedItems[contentId], [title]: isChecked },
    }));
  };

  useEffect(() => {
    const sendDataToAPI = async () => {
      const checkedData = {};
      Object.entries(checkedItems).forEach(([contentId, checked]) => {
        Object.entries(checked).forEach(([title, isChecked]) => {
          if (isChecked) {
            checkedData[title] = checkedData[title] || [];
            checkedData[title].push(contentId);
          }
        });
      });
    };

    sendDataToAPI();
  }, [checkedItems]);

  return (
    <div>
      {data?.map((accordion, index) => (
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
                <AddCircleIcon style={{ color: "#999" }} />
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
              }}
            >
              {accordion.title}
              <Typography component={"span"} ml={1}>
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
            {loadingAccordion === `panel${index}` ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  width: "100%",
                }}
              >
                Loading...
              </Box>
            ) : (
              expanded === `panel${index}` &&
              accordion.contents.map((content) => (
                <Box
                  key={content.id}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Checkbox
                    checked={
                      checkedItems[content.id] &&
                      checkedItems[content.id][accordion.title]
                    }
                    onChange={handleCheckboxChange(content.id, accordion.title)}
                    style={{ color: "#999" }}
                  />
                  <Typography
                    sx={{
                      color: "#555",
                      fontSize: "14px",
                    }}
                  >
                    {content.text}
                  </Typography>
                </Box>
              ))
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default AccordionComponent;
