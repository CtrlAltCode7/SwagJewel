import React from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";

const AccountTypeSelector = ({ handleChange, selectedRadioValue }) => {
  return (
    <div className="form-input-group">
      <FormControl component="fieldset">
        {/* <FormLabel component="legend">Account Type</FormLabel> */}
        <RadioGroup
          aria-label="account-type"
          name="account-type"
          value={selectedRadioValue}
          onChange={handleChange}
        >
          <FormControlLabel
            value="professional"
            control={<Radio sx={{ color: "#999" }} />}
            label="Professional"
            sx={{
              color: "#bbb",
              "& .Mui-checked": {
                color: "#547f9e !important",
              },
            }}
          />
          <FormControlLabel
            value="student"
            control={<Radio sx={{ color: "#999" }} />}
            label="Jewelry Student"
            sx={{
              color: "#bbb",
              "& .Mui-checked": {
                color: "#547f9e !important",
              },
            }}
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default AccountTypeSelector;
