import { Button, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const custom404 = () => {
  return (
    <div>
      <div className="mainbox">
        <Box sx={{ display: "flex", justifyContent: "center", pt: 6, mb: 4 }}>
          <Link href="/" sx={{ textDecoration: "none", color: "#fff" }}>
            <Button
              variant="contained"
              size="large"
              sx={{ color: "#fff", fontStyle: "italic", letterSpacing: 2 }}
              disableElevation
            >
              imsamad.com
            </Button>
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: {
              xs: "2rem",
              sm: "4rem",
              md: "11rem",
            },
            fontStyle: "italic",
            color: "red",
          }}
        >
          <span style={{ marginRight: "60px" }}>4</span>
          <Rotate />
          <span>4</span>
        </Box>
        <Typography
          sx={{
            fontSize: {
              xs: "2rem",
              sm: "4rem",
              md: "11rem",
            },
            fontStyle: "italic",
            color: "red",
          }}
          align="center"
        >
          Not Found!
        </Typography>
        <Typography
          align="center"
          sx={{ maxWidth: "sm", mx: "auto", fontSize: "1.6rem" }}
        >
          Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
          existed in the first place? <br /> Let's go <a href="/">home</a> and
          try from there.
        </Typography>
        <style jsx>{`
          .mainbox {
            background-color: #95c2de;
            margin: auto;
            padding: 4px;
            height: 100vh;
            width: 100vw;
          }
        `}</style>
      </div>
    </div>
  );
};

const Rotate = () => (
  <>
    <span style={{ marginRight: "60px" }} className="rotate">
      0
    </span>
    <style jsx>{`
      .rotate {
        animation: rotation 1s infinite linear;
      }

      @keyframes rotation {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(359deg);
        }
      }
    `}</style>
  </>
);

export default custom404;
