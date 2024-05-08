import React, { useEffect } from "react";
import "./customInputField.css";
import { InputLabel, TextField } from "@mui/material";
import { useState } from "react";

export default function CustomInputField({ label, className, value, onChange, error }) {
  const capitalizedLabel = label.charAt(0).toUpperCase() + label.slice(1);

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
      />
    </>
  );
}
