import React from "react";
import { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";

const ToolTip = ({ children, title, placement, backgroundcolor }) => {
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: backgroundcolor,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 13,
    },
  }));

  return (
    <LightTooltip title={title} placement={placement}>
      {children}
    </LightTooltip>
  );
};

export default ToolTip;
