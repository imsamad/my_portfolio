import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import SimpleNav from "../SimpleNav";
const index = () => {
  return (
    <Box>
      <SimpleNav />
      <div className="mainbox">
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
              sm: "3rem",
              md: "7rem",
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
          body {
            overflow: hidden;
          }
          .mainbox {
            margin: auto;
            padding:0 8px,
            scroll: none;
          }
        `}</style>
      </div>
    </Box>
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

export default index;
