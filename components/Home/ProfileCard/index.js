import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/system/Box";
import DownloadIcon from "@mui/icons-material/Download";

import SocialLinks from "../../SocialLinks";
import Image from "../../Image";

const index = ({ intro }) => {
  return (
    <Box
      sx={{
        py: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: 150,
          height: 150,
          borderRadius: "50%",
          overflow: "hidden",
          border: 1,
          borderColor: "info.dark",
        }}
      >
        <Image src={intro.myPic} width="150" height="150" alt="AbdusSamad" />
      </Box>
      <Typography
        variant="h6"
        component="h1"
        align="center"
        color="info.light"
        sx={{ mt: 2, fontSize: { xs: "1.5rem", mxs: "2rem" }, fontWeight: 700 }}
      >
        Abdus Samad
      </Typography>
      <Typography
        variant="subtitle2"
        align="center"
        gutterBottom
        color="info.dark"
      >
        Full Stack Developer
      </Typography>
      <SocialLinks />
      <Link href={intro.resumeLink} style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          color="info"
          disableElevation
          startIcon={<DownloadIcon />}
        >
          Resume
        </Button>
      </Link>
    </Box>
  );
};

export default index;
