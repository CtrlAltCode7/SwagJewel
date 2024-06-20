import React, { useState } from "react";
import { TextField, Button, Box, Autocomplete } from "@mui/material";
import { Link } from "react-router-dom";

const QuickOrderSearch = () => {
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState([]);

  const handleInputChange = (event, newInputValue) => {
    setInputValue(newInputValue);
    if (newInputValue.length >= 2) {
      setOptions(["Option 1", "Option 2", "Option 3"]);
    } else {
      setOptions([]);
    }
  };

  const handleSelect = (event, value) => {
    if (value) {
      console.log("Selected value:", value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Input value on submit:", inputValue);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", alignItems: "center" }}
    >
      <Autocomplete
        freeSolo
        options={options}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        onChange={handleSelect}
        renderInput={(params) => (
          <TextField
            {...params}
            id="quickordersearch"
            placeholder="Enter Series, Item Number, or Stone Type"
            variant="outlined"
            size="small"
            required
          />
        )}
        fullWidth
      />
      <Button
        id="btnShowItems"
        type="submit"
        variant="contained"
        color="primary"
        sx={{
          lineHeight: "29px",
          backgroundColor: "#75b0da"
        }}
      >
        Go
      </Button>
    </Box>
  );
};

export default QuickOrderSearch;
