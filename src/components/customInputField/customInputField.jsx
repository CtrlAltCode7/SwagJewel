import React, { useEffect } from "react";
import "./customInputField.css";
import { InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";

export default function CustomInputField({
  label,
  className,
  value,
  onChange,
  error,
  countryCode,
  setCountryCode
}) {
  const capitalizedLabel = label.charAt(0).toUpperCase() + label.slice(1);


  const handleCountryCodeChange = (event) => {
    setCountryCode(event.target.value);
  };

  return (
    <>
      <InputLabel htmlFor="" shrink className={`input-label ${className}`}>
        {capitalizedLabel && capitalizedLabel}
      </InputLabel>
      <TextField
        id=""
        name={label}
        fullWidth
        size="small"
        sx={{}}
        className="custom-textfield"
        value={value}
        onChange={onChange}
        error={!!error}
        helperText={error}
        type={
          label === "password" || label === "confirmpassword"
            ? "password"
            : "text"
        }
        InputProps={{
          startAdornment: label === "phone" && (
            <Select
              value={countryCode}
              onChange={handleCountryCodeChange}
              className="country-code-select"
              MenuProps={{ disableScrollLock: true }}
              sx={{
                "&.MuiOutlinedInput-root": {
                  padding: 0,
                  outline: "none",
                },
                border: 0,
                marginRight: 1
              }}
            >
              <MenuItem value="+1">+1</MenuItem>
              <MenuItem value="+91">+91</MenuItem>
              {/* Add more country codes as needed */}
            </Select>
          ),
        }}
      />
    </>
  );
}
