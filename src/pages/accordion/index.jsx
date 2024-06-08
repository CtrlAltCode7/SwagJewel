import React, { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  FormControlLabel,
  Typography, Box
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import axios from 'axios';

function AccordionComponent({ data, currentPage, catId, getFilteredData }) {
  const [expanded, setExpanded] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [loadingAccordion, setLoadingAccordion] = useState(null);


  useEffect(() => {
    let categories = data.length > 0 && data.map((item) => item.title);
    let catObj = categories.length > 0 && categories.reduce((obj, key) => {
      obj[key] = [];
      return obj;
    }, {});
    setSelectedFilters(catObj);
  }, [data]);

  console.log("categories", selectedFilters);

  let options = data.length > 0 && data.reduce((obj, item) => {
    obj[item.title] = item.contents.map(content => content.text);
    return obj;
  }, {});

  console.log("result", options);

  const handleCheckboxChange = (category, option) => {
    setSelectedFilters(prevState => {
      const categoryFilters = prevState[category];
      if (categoryFilters.includes(option)) {
        return {
          ...prevState,
          [category]: categoryFilters.filter(item => item !== option)
        };
      } else {
        return {
          ...prevState,
          [category]: [...categoryFilters, option]
        };
      }
    });
  };

  useEffect(() => {
    applyFilters();
  }, [selectedFilters]);

  const applyFilters = async () => {
    const subcategories = Object.entries(selectedFilters).map(([type, values]) => ({
      Type: type,
      Values: values.map(value => ({ Value: value }))
    })).filter(item => item.Values.length > 0);

    //get method
    // try {
    //   const response = await axios.get('https://api.swagjewelers.com/api/stuller', {
    //     params: {
    //       PageSize: 10,
    //       Page: currentPage,
    //       CategoryIds: [catId],
    //       Include: [1],
    //       Filter: [5],
    //       AdvancedProductFilters: subcategories
    //     },
    //   });
    //   getFilteredData(response)
    //   console.log("filteredResponse,", response.data);
    // } catch (error) {
    //   console.error('Error fetching data:', error);
    // }

    //post method
    try {
      const response = await axios.post('https://api.swagjewelers.com/api/stuller', {
        PageSize: 10,
        Page: currentPage,
        CategoryIds: [catId],
        Include: [1],
        Filter: [5],
        AdvancedProductFilters: subcategories
      });
      getFilteredData(response);
      console.log("filteredResponse,", response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }

  };




  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
    if (isExpanded) {
      setLoadingAccordion(panel);
      setTimeout(() => {
        setLoadingAccordion(null);
      }, 1000);
    }
  };

  return (
    <div>
      {Object.entries(options).map(([category, items]) => (
        <Accordion
          key={category}
          expanded={expanded === category}
          onChange={handleAccordionChange(category)}
          sx={{
            marginBottom: "1rem",
          }}
        >
          <AccordionSummary
            aria-controls={`${category}-content`}
            id={`${category}-header`}
            sx={{
              backgroundColor: "#eee",
              color: "#555",
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            <Typography
              sx={{
                color: "#555",
                fontWeight: "bold",
              }}
            >{category}</Typography>
            <Typography component={"span"} ml={1}>
              {items.length}
            </Typography>
            {expanded === category ? <RemoveCircleIcon style={{ color: "#6fa8d1" }} /> : <AddCircleIcon style={{ color: "#999" }} />}
          </AccordionSummary>
          <AccordionDetails sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {loadingAccordion === category ? (
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
              </Box>) :
              items.map(option => (
                <FormControlLabel
                  key={option}
                  control={
                    <Checkbox
                      checked={selectedFilters[category]?.includes(option)}
                      onChange={() => handleCheckboxChange(category, option)}
                    />
                  }
                  label={option}
                />
              ))
            }
            {/* {items.map(option => (
              <FormControlLabel
                key={option}
                control={
                  <Checkbox
                    checked={selectedFilters[category]?.includes(option)}
                    onChange={() => handleCheckboxChange(category, option)}
                  />
                }
                label={option}
              />
            ))} */}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};
export default AccordionComponent;



//reserved

// import React, { useState } from "react";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import Checkbox from "@mui/material/Checkbox";
// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
// import { useEffect } from "react";

// function AccordionComponent({ data }) {
//   console.log("data", data);
//   let categories = data.map((item) => item.title);
//   let catObj = categories.reduce((obj, key) => {
//     obj[key] = [];
//     return obj;
//   }, {});

//   console.log("categories", catObj);

//   let result = data.reduce((obj, item) => {
//     obj[item.title] = item.contents.map(content => content.text);
//     return obj;
//   }, {});

//   console.log("result", result);
//   const [loadingAccordion, setLoadingAccordion] = useState(null);

//   const handleChange = (panel) => (event, isExpanded) => {
//     setExpanded(isExpanded ? panel : null);
//     if (isExpanded) {
//       setLoadingAccordion(panel);
//       setTimeout(() => {
//         setLoadingAccordion(null);
//       }, 1000);
//     }
//   };

//   const [expanded, setExpanded] = useState(null);
//   const [checkedItems, setCheckedItems] = useState({});

//   const handleCheckboxChange = (contentId, title) => (event) => {
//     const isChecked = event.target.checked;
//     setCheckedItems((prevCheckedItems) => ({
//       ...prevCheckedItems,
//       [contentId]: { ...prevCheckedItems[contentId], [title]: isChecked },
//     }));
//   };

//   useEffect(() => {
//     const sendDataToAPI = async () => {
//       const checkedData = {};
//       Object.entries(checkedItems).forEach(([contentId, checked]) => {
//         Object.entries(checked).forEach(([title, isChecked]) => {
//           if (isChecked) {
//             checkedData[title] = checkedData[title] || [];
//             checkedData[title].push(contentId);
//           }
//         });
//       });
//     };
//     console.log("checkedItems", checkedItems);
//     sendDataToAPI();
//   }, [checkedItems]);


//   return (
//     <div>
//       {data?.map((accordion, index) => (
//         <Accordion
//           key={index}
//           expanded={expanded === `panel${index}`}
//           onChange={handleChange(`panel${index}`)}
//           sx={{
//             marginBottom: "1rem",
//           }}
//         >
//           <AccordionSummary
//             expandIcon={
//               expanded === `panel${index}` ? (
//                 <RemoveCircleIcon style={{ color: "#6fa8d1" }} />
//               ) : (
//                 <AddCircleIcon style={{ color: "#999" }} />
//               )
//             }
//             aria-controls={`panel${index}-content`}
//             id={`panel${index}-header`}
//             sx={{
//               backgroundColor: "#eee",
//               color: "#555",
//               textTransform: "uppercase",
//             }}
//           >
//             <Typography
//               sx={{
//                 color: "#555",
//                 fontWeight: "bold",
//               }}
//             >
//               {accordion.title}
//               <Typography component={"span"} ml={1}>
//                 {`(${accordion?.contents?.length || 0})`}
//               </Typography>
//             </Typography>
//           </AccordionSummary>
//           <AccordionDetails
//             sx={{
//               maxHeight: "240px",
//               overflowY: "auto",
//               "&::-webkit-scrollbar": {
//                 width: "7px",
//                 backgroundColor: "#e6e6e6",
//               },
//               "&::-webkit-scrollbar-thumb": {
//                 backgroundColor: "#6fa8d1",
//                 borderRadius: "10px",
//               },
//             }}
//           >
//             {loadingAccordion === `panel${index}` ? (
//               <Box
//                 sx={{
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   height: "100%",
//                   width: "100%",
//                 }}
//               >
//                 Loading...
//               </Box>
//             ) : (
//               expanded === `panel${index}` &&
//               accordion.contents.map((content) => (
//                 <Box
//                   key={content.id}
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                   }}
//                 >
//                   <Checkbox
//                     checked={
//                       checkedItems[content.id] &&
//                       checkedItems[content.id][accordion.title]
//                     }
//                     onChange={handleCheckboxChange(content.id, accordion.title)}
//                     style={{ color: "#999" }}
//                   />
//                   <Typography
//                     sx={{
//                       color: "#555",
//                       fontSize: "14px",
//                     }}
//                   >
//                     {content.text}
//                   </Typography>
//                 </Box>
//               ))
//             )}
//           </AccordionDetails>
//         </Accordion>
//       ))}
//     </div>
//   );
// }
// export default AccordionComponent;
