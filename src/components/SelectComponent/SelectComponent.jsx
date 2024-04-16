import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";

export default function SelectComponent() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={6} md={4}>
        <FormControl fullWidth sx={{ m: 1 }}>
          <Select
            value={age}
            onChange={handleChange}
            displayEmpty
          >
            <MenuItem value="">
              <em>Select</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          {/* <FormHelperText>Without label</FormHelperText> */}
        </FormControl>
      </Grid>
    </Grid>
  );
}
