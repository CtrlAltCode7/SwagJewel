import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button, Typography } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import { useNavigate } from "react-router-dom";

export default function NestedList({ handleClose }) {
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();

  const handleClick = () => {
    setOpen(!open);
  };

  const borderBottomStyle = {
    borderBottom: "1px solid #4C5A63",
  };
  const colorText = {
    color: "#fff",
  };

  const otherText = {
    color: "#ccc",
    fontSize: "small",
  };

  const handleTabClick = () => {
    // Redirect to another page
    navigate("/productlisting");
  };

  const handleQuickOrder = () => {
    navigate("/quickorder");
  };
  const handleCatalogs = () => {
    navigate("/catalogs");
  };
  const handleContactUs = () => {
    navigate("/contact-us");
  };

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 380,
        bgcolor: "background.paper",
        p: 0,
        padding: "0 !important",
        backgroundColor: "#3C474F",
      }}
      style={{
        padding: 0,
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClose} sx={borderBottomStyle}>
        <ListItemIcon>
          <ArrowBackIcon sx={colorText} />
        </ListItemIcon>
        <ListItemText primary="Close" sx={colorText} />
      </ListItemButton>
      <ListItemButton onClick={handleClick} sx={borderBottomStyle}>
        <ListItemText primary="Products" sx={[colorText]} />
        {open ? <ExpandLess sx={colorText} /> : <ExpandMore sx={colorText} />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick={handleTabClick}>
            <ListItemText primary="Engagement rings" sx={colorText} />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick={handleTabClick}>
            <ListItemText primary="Wedding Bands" sx={colorText} />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton sx={borderBottomStyle}>
        <ListItemText primary="Services" sx={colorText} />
      </ListItemButton>
      <ListItemButton sx={borderBottomStyle}>
        <ListItemText primary="Customization" sx={colorText} />
      </ListItemButton>
      <ListItemButton sx={borderBottomStyle}>
        <ListItemText primary="Events & Training" sx={colorText} />
      </ListItemButton>
      <ListItemButton sx={borderBottomStyle}>
        <ListItemText primary="Quick Order" sx={colorText} />
      </ListItemButton>
      <ListItemButton sx={borderBottomStyle} disableRipple>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            fontSize: "14px",
          }}
        >
          <ListItemText
            primary="Quick Order"
            sx={otherText}
            onClick={handleQuickOrder}
          />
          <ListItemText primary="Quick Shops" sx={otherText} />
          <ListItemText primary="Deals" sx={otherText} />
          <ListItemText primary="Stuller Blog" sx={otherText} />
          <ListItemText
            primary="Catalogs + Publication"
            sx={otherText}
            onClick={handleCatalogs}
          />

          <ListItemText
            primary="Contact Us"
            sx={otherText}
            onClick={handleContactUs}
          />
        </Box>
      </ListItemButton>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "2rem 2rem",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#4C5A63",
        }}
      >
        {/* <Button variant="contained"/> */}

        <Box
          sx={{
            display: "flex",
            backgroundColor: "#3C474F",
            padding: "0.3rem",
            borderRadius: "2rem",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CallIcon
            sx={{
              mr: 1,
              color: "#fff!important",
            }}
          />

          <Typography
            sx={{
              color: "#fff!important",
            }}
            variant="subtitle2"
          >
            {/* 8008777777 */}
          </Typography>
        </Box>
        <Box
          sx={{
            padding: "1.1rem 0 0",
            margin: "0.1rem",
          }}
        >
          <Typography
            variant="caption"
            color={"#bbb"}
            sx={{
              cursor: "pointer",
            }}
          >
            Weekdays 8AM - 7PM CST CENTRAL
          </Typography>
        </Box>

        {/* </Button> */}
      </Box>
    </List>
  );
}
