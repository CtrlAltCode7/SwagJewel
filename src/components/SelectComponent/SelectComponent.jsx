import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

export default function SelectComponent({title,minWidthSize}) {
  console.log('minWidthSize', minWidthSize);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Grid
      sx={{
        background: "#eee",
        borderRadius: "5px",
        // padding: "1rem 0"
      }}
    >
      <Grid
        sx={
          {
            // padding: 2
          }
        }
      >
        <FormControl
          fullWidth
          sx={{
            // m: 1,
            minWidth: parseInt(minWidthSize),
            minHeight: 35,
            gap: "1rem",
            "@media (max-width: 1200px) and (min-width: 600px)": {
              /* This rule will apply when the screen width is between 300px and 600px */
              width: "260px !important",
            },
          }}
        >
          {title && (
            <Typography
              sx={{
                alignSelf: "baseline",
                fontSize: "18px",
                fontWeight: "bold",
                color: "#555",
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
                },
              },
            }}

            // sx={{
            //   padding: "10px 14px !important"
            // }}
          >
            <MenuItem value="">
              <span>Select</span>
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
