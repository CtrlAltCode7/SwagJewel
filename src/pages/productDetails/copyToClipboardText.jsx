import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const CopyToClipboardText = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleCopy = () => {
    const textToCopy = "126912:105:P";
    navigator.clipboard.writeText(textToCopy);

    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 1000);
  };

  return (
    <div
      style={{ display: "inline-block" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Tooltip
        open={showTooltip}
        title="Copied!"
        placement="top"
        arrow
        enterTouchDelay={0}
        onClose={() => setShowTooltip(false)}
      >
        <div style={{ display: "inline-block" }}>
          <ContentCopyIcon
            fontSize="small"
            style={{
              verticalAlign: "middle",
              cursor: "pointer",
              marginRight: 5,
              color: hovered ? "#888" : "#555", // Change icon color based on hover state
            }}
            onClick={handleCopy}
            onMouseEnter={() => setHovered(true)} // Set hovered state on mouse enter
            onMouseLeave={() => setHovered(false)} // Reset hovered state on mouse leave
          />
          <span
            className="copy-text"
            onClick={handleCopy}
            style={{
              cursor: "pointer",
              fontSize: "14px",
              color: hovered ? "#888" : "#555", // Change text color based on hover state
              transition: "color 0.3s", // Added transition effect
            }}
            onMouseEnter={() => setHovered(true)} // Set hovered state on mouse enter
            onMouseLeave={() => setHovered(false)} // Reset hovered state on mouse leave
          >
            Item # 126912:105:P
          </span>
        </div>
      </Tooltip>
    </div>
  );
};

export default CopyToClipboardText;
