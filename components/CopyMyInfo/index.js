import React from "react";

import CopyAllIcon from "@mui/icons-material/CopyAll";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/system/Box";
import Tooltip from "@mui/material/Tooltip";
import CheckIcon from "@mui/icons-material/Check";

const infoObj = {
  name: "Abdus Samad",
  phoneNo: "+91+9870645161",
  whatsapp: "+91+9870645161",
  github: "github.com/imsamad",
  website: "imsamad.com",
  email: "imsamad00@gmail.com",
  linkedIn: "linkedin.com/in/imsamad/",
  twitter: "twitter.com/imsamad06",
};
const index = () => {
  const [copied, setCopied] = React.useState(false);
  const [hover, setHover] = React.useState(false);

  return (
    <Box sx={{ position: "absolute", top: 0, left: 200 }}>
      <Tooltip
        title={copied ? "Copied" : "Copy Info"}
        open={hover || copied}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <IconButton
          onClick={() => {
            navigator.clipboard.writeText(JSON.stringify(infoObj));
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }}
        >
          {copied ? <CheckIcon /> : <CopyAllIcon color="success" />}
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default index;
