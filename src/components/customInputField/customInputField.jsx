import React from "react";
import "./customInputField.css";
import { InputLabel, TextField } from "@mui/material";

export default function CustomInputField({ label, className}) {
    const capitalizedLabel = label.charAt(0).toUpperCase() + label.slice(1);
  return (
    <>
      <InputLabel
        htmlFor=""
        shrink
        className={`input-label ${className}`}
        
      >
        {capitalizedLabel && capitalizedLabel}
      </InputLabel>
      <TextField
        id=""
        name=""
        fullWidth
        size="small"
        sx={{
        }}
        className="custom-textfield"
      />
    </>
  );
}
