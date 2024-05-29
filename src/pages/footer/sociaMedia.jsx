import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button } from "@mui/material";

const socialLinks = [
  {
    id: 1,
    icon: <FacebookIcon />,
    url: "https://www.facebook.com/Stullerinc/",
  },
  {
    id: 2,
    icon: <InstagramIcon />,
    url: "https://www.instagram.com/StullerInc/",
  },
  {
    id: 3,
    icon: <YouTubeIcon />,
    url: "https://www.youtube.com/StullerInc",
  },
  {
    id: 4,
    icon: <XIcon />,
    url: "https://twitter.com/StullerInc",
  },
  {
    id: 5,
    icon: <PinterestIcon />,
    url: "https://www.pinterest.com/StullerInc/",
  },
  {
    id: 6,
    icon: <LinkedInIcon />,
    url: "https://www.linkedin.com/company/stuller-inc-/",
  },
];

const SociaMedia = () => {
  const handleSocialLinkClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      {socialLinks.map((link) => (
          <button onClick={() => handleSocialLinkClick(link.url)} style={{
            border: 0,
            cursor: "pointer"
          }}>
            {link.icon}
          </button>
      ))}
    </>
  );
};

export default SociaMedia;
