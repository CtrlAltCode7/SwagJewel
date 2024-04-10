import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AdbIcon from "@mui/icons-material/Adb";
import StullerLogo from "../../assets/swag-logo.png";
import {
  Collapse,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import NestedList from "./ListItem/NestedList";
import CustomizedSearchInput from "./CustomizedSearchInput";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    // backgroundColor: alpha(theme.palette.common.white, 0.25),
    // backgroundColor: "red"
  },
  marginLeft: 0,
  // minWidth: "400px",

  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
    // backgroundColor: "red",
    minWidth: "400px"
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#eee" }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#eee",
          padding: "1rem 0",
          borderBottom: "1px solid #cecece",
        }}
      >
        <Toolbar sx={{
          justifyContent: "space-between"
        }}>
          <AdbIcon sx={{ display: { xs: "none", md: "none" }, mr: 1 }} />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{
                mr: 1,
                display: { xs: "flex", md: "none" },
                backgroundColor: "#000",
                justifyContent: "space-between",
              }}
              onClick={(e) => handleClick(e)}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              sx={{
                display: { xs: "flex", md: "none" },
                color: "#000",
              }}
            >
              Menu
            </Typography>
          </Box>

          {/* <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
            <List
              className={{
                width: 250,
              }}
            >
              <ListItem button>
                <ListItemText primary="Home" />
              </ListItem>

              <ListItem button>
                <ListItemText primary="About" />
              </ListItem>

              <ListItem button>
                <ListItemText primary="Contact" />
              </ListItem>

              <ListItem button>
                <ListItemText primary="Services" />
              </ListItem>
            </List>
          </Drawer> */}
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            sx={{
              width: "360px",
              padding: "0 !important",
            }}
            style={{
              padding: "0 !important",
            }}
          >
            <NestedList handleClose={handleClose} />
          </Menu>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "none", md: "block", lg: "block" },
            }}
          >
            <img src={StullerLogo} width={180} />
          </Typography>
          {/* <Search
            sx={{
              backgroundColor: "#fff",
              borderRadius: "1rem",
              color: "#000",
              ":focus": {
                color: "red",
                backgroundColor: "red",
              },
              placeSelf: "end"
            }}
          >
            <SearchIconWrapper>
              <SearchIcon color="red" />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search> */}
          <CustomizedSearchInput />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
