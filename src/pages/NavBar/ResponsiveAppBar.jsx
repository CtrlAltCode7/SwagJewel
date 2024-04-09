import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import CallIcon from "@mui/icons-material/Call";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import StullerLogo from "../../assets/swag-logo.png";
import { Link } from "react-router-dom";

const pages = [
  "Contact Us",
  "Catalogs + Publications",
  "Stuller Blog ",
  "Locate a Jeweler",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCall = () => {
    const confirmed = window.confirm(
      "Are you sure you want to dial 8008777777?"
    );
    if (confirmed) {
      // Proceed with call initiation
      window.location.href = "tel:8008777777";
    }
  };

  return (
    <AppBar position="static">
      <Container
        maxWidth="xl"
        sx={{
          backgroundColor: "#fff",
          borderBottom: "1px solid #cecece",
        }}
      >
        <Toolbar disableGutters>
          {/* <Box component="span" sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
          <a
            href="tel:+18008777777"
            className="text-nowrap c-primary-dk-1 f-roboto-bold d-flex align-items-center f6"
          >
            800-877-7777
          </a>
        </Box> */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex" }} onClick={handleCall}>
              <CallIcon
                sx={{
                  display: { xs: "none", md: "flex" },
                  mr: 1,
                  color: "#547f9e!important",
                }}
              />
              <Typography
                sx={{
                  color: "#547f9e!important",
                }}
                variant="subtitle2"
              >
                8008777777
              </Typography>
            </Box>

            <Typography
              variant="caption"
              sx={{
                color: "#777",
              }}
            >
              Weekdays 8am - 7pm Central
            </Typography>
          </Box>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              // mr: 2,
              display: { xs: "flex", md: "none" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "red",
              textDecoration: "none",
            }}
          >
            <img src={StullerLogo} width={180} />
          </Typography>

          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              // mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGOddd
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", alignItems: "center" },
            }}
          >
            {pages.map((page, index) => (
              // console.log('page', pages.length-1,index)
              <>
                {/* <Button
                  key={page}
                  onClick={handleCloseNavMenu}
       
                > */}
                <Link
                  to={"home"}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      // my: 2,
                      color: "#555",
                      display: "block",
                      padding: "6px 8px",
                      ":hover": {
                        // bgcolor: "red", // theme.palette.primary.main
                        color: "#75b0da",
                        cursor: "pointer",
                      },
                    }}
                  >
                    {page}
                    {page == "Stuller Blog " && (
                      <Typography
                        component={"span"}
                        sx={{
                          backgroundColor: "#00997A",
                          padding: "0.1rem 0.5rem",
                          borderRadius: "50px",
                          textTransform: "uppercase",
                          color: "#fff",
                          fontSize: "0.6rem",
                          border: "1px solid transparent",
                          mr: 1,
                        
                        }}
                      >
                        <Typography
                          component="span"
                          fontWeight="bold"
                          variant="caption"
                          sx={{
                            fontSize: "0.6rem",
                            mr: "0.2rem",
                          }}
                        >
                          New
                        </Typography>
                        posts
                      </Typography>
                    )}
                  </Typography>
                </Link>

                {/* </Button> */}
                {pages.length - 1 !== index && (
                  <span
                    className="px-3 c-gray-lt-2"
                    style={{
                      color: "#555",
                    }}
                  >
                    |
                  </span>
                )}
              </>
            ))}
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              padding: "0rem 1.5rem .1rem",
              textAlign: "center",
              ":hover": {
                bgcolor: "#999", // theme.palette.primary.main
                color: "red",
                "& .MuiTypography-root": {
                  color: "#fff", // Change text color on hover
                },
                "& .MuiSvgIcon-root": {
                  color: "#fff", // Change icon color on hover
                },
              },
              borderLeft: "1.5px solid #ddd",
            }}
          >
            {/* <Tooltip title="Open settings"> */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                <ShoppingCartIcon />
              </IconButton>
              <Typography
                sx={{
                  color: "#777",
                  fontWeight: "500",
                  ":hover": {
                    color: "red",
                  },
                  fontSize: "0.6rem",
                  letterSpacing: "0.1rem",
                }}
                variant="caption"
              >
                CART
              </Typography>
            </Box>

            {/* </Tooltip> */}
            {/* <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
          <Box
            sx={{
              flexGrow: 0,
              padding: "0rem 1.5rem .1rem",
              textAlign: "center",
              ":hover": {
                bgcolor: "#999", // theme.palette.primary.main
                "& .MuiTypography-root": {
                  color: "#fff", // Change text color on hover
                },
                "& .MuiSvgIcon-root": {
                  color: "#fff", // Change icon color on hover
                },
              },
              borderLeft: "1.5px solid #ddd",
            }}
          >
            {/* <Tooltip title="Open settings"> */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                <PersonIcon />
              </IconButton>
              <Typography
                sx={{
                  color: "#777",
                  fontWeight: "500",
                  ":hover": {
                    color: "red",
                  },
                  fontSize: "0.6rem",
                  letterSpacing: "0.1rem",
                }}
                variant="caption"
              >
                LOG IN
              </Typography>
            </Box>

            {/* </Tooltip> */}
            {/* <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
