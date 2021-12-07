import * as React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

export default function MyAlert({ open, toggleOpen, message, type }) {
  return (
    <Box sx={{ maxWidth: "sm", mx: "auto" }}>
      <Collapse in={open}>
        <Alert
          severity={type}
          action={
            <IconButton color="inherit" size="small" onClick={toggleOpen}>
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {message}
        </Alert>
      </Collapse>
    </Box>
  );
}
