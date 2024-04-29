import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function ProductDetailDropdown() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
      <FormControl sx={{ m: 0, minWidth: "100%" }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
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
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        {/* <FormHelperText>Without label</FormHelperText> */}
      </FormControl>
  );
}
