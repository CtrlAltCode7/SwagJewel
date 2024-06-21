import React, { useEffect, useState, useMemo, useCallback } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  FormControlLabel,
  Typography,
  CircularProgress,
  Backdrop
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { FixedSizeList as List } from 'react-window';
// import { commonOptions } from './Data';
import { commonOptions } from "../../constants/commonOptions";
import axios from 'axios';

const AccordionComponent = ({ currentPage, catId, getFilteredData, setCurrentPage }) => {
  console.log("currentPageppp", currentPage);
  const [expanded, setExpanded] = useState(false);
  // const [firstPage , setFirstPage] = useState(null)
  const [selectedFilters, setSelectedFilters] = useState({
    ProductType: [],
    MetalQuality: [],
    StoneShape: [],
    StoneFamily: [],
    StoneColor: [],
    StoneQuality: [],
    StoneUniqueness: [],
    StoneCut: [],
    StoneSize: [],
  });
  const [loading, setLoading] = useState(true);
  const convertDataStructure = useCallback((input) => {
    const result = {};
    for (const key in input) {
      if (Array.isArray(input[key])) {
        result[key] = input[key].map(item => item.Value);
      }
    }
    return result;
  }, []);

  const options = useMemo(() => convertDataStructure(commonOptions), [convertDataStructure]);

  const handleCheckboxChange = useCallback((category, option) => {
    setSelectedFilters((prevState) => {
      const categoryFilters = prevState[category];
      if (categoryFilters.includes(option)) {
        return {
          ...prevState,
          [category]: categoryFilters.filter((item) => item !== option),
        };
      } else {
        return {
          ...prevState,
          [category]: [...categoryFilters, option],
        };
      }

    });
  }, []);

  useEffect(() => {
    setCurrentPage(1);
    applyFilters(1);
  }, [selectedFilters]);

  useEffect(() => {
    applyFilters(currentPage);
  }, [currentPage, catId]);

  const applyFilters = useCallback(async (page) => {
    const subcategories = Object.entries(selectedFilters)
      .map(([type, values]) => ({
        Type: type,
        Values: values.map((value) => ({ Value: value })),
      }))
      .filter((item) => item.Values.length > 0);

    try {
      setLoading(true);
      const response = await axios.post('https://api.swagjewelers.com/api/stuller', {
        PageSize: 10,
        Page: page,
        CategoryIds: [catId],
        Include: [1],
        Filter: [5],
        AdvancedProductFilters: subcategories
        // AdvancedProductFilters: [{ "Type": "StoneShape",  "Values": [{"Value": "Straight Baguette"}] }]
      });
      getFilteredData(response);
      console.log("filteredResponse,", response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    finally {
      setLoading(false);
    }
  }, [selectedFilters, currentPage, catId]);

  const handleAccordionChange = useCallback((panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  }, []);

  const renderRow = ({ index, style, data }) => {
    const { category, items } = data;
    const option = items[index];
    return (
      <FormControlLabel
        key={option}
        control={
          <Checkbox
            checked={selectedFilters[category].includes(option)}
            onChange={() => handleCheckboxChange(category, option)}
          />
        }
        label={option}
        style={style}
      />
    );
  };


  if (loading) {
    return (
      <Backdrop
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, color: "#fff" }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }
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
            >{category.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')}</Typography>
            <Typography component={"span"} ml={1}>
              {`(${items.length})`}
            </Typography>
            {expanded === category ? <RemoveCircleIcon style={{ color: "#6fa8d1" }} /> : <AddCircleIcon style={{ color: "#999" }} />}
          </AccordionSummary>
          <AccordionDetails>
            <List
              height={200}
              itemCount={items.length}
              itemSize={35}
              width="100%"
              itemData={{ category, items }}
            >
              {renderRow}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};
export default AccordionComponent;


