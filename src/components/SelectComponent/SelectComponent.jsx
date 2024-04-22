import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

export default function SelectComponent({ title, minWidthSize,placeholder }) {
  console.log("minWidthSize", minWidthSize);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Grid
      item
      lg={3} // For large screens, each item takes up 3 out of 12 columns (4 items in a row)
      md={6} // For medium screens, each item takes up 6 out of 12 columns (2 items in a row)
      xs={12} // For small screens, each item takes up 12 out of 12 columns (1 item in a row)
      sx={{
        // background: "#eee",
        borderRadius: "5px",
        minHeight: "35px",
        marginBottom: "1rem", // Add margin between items
      }}
    >
      <FormControl fullWidth sx={{
        // padding: 2,
        backgroundColor: "ButtonHighlight"
      }}>
        {title && (
          <Typography
            sx={{
              alignSelf: "baseline",
              fontSize: "18px",
              fontWeight: "bold",
              color: "#555",
              margin: "0 0 5px",
              padding: "0 0 10px"
            }}
          >
            {title}
          </Typography>
        )}

        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          disableScrollLock={true}
          MenuProps={{ disableScrollLock: true }}
          slotProps={{
            root: {
              sx: {
                backgroundColor: "#fff",
                "& .MuiSelect-outlined": {
                  display: "flex",
                  padding: "10px 14px !important",
                },
                ".MuiNativeSelect-icon": {
                  color: "red",
                },
                // width: "90%"
              },
            },
          }}
          sx={{ minWidth: parseInt(minWidthSize) }}
        >
          <MenuItem value="">
            {placeholder ? <span>{placeholder}</span> : <span>Select</span>}
            
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  );
}
