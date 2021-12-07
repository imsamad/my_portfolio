import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";

import SocialLinks from "../SocialLinks";
import BottomNav from "../BottomNav";
const index = ({ copyright }) => {
  return (
    <Box
      component="section"
      id="copyright"
      sx={{
        width: "100%",
        bgcolor: "#96c8e3",
        py: "2rem",
        px: "1rem",
        align: "center",
        textAlign: "center",
      }}
    >
      <Container fixed>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <BottomNav />
          <Typography
            color="grey.1000"
            sx={{ fontSize: { sm: "1.25rem", md: "1.5rem" }, fontWeight: 700 }}
          >
            Abdus Samad
          </Typography>
          <Typography align="center" sx={{ mb: 2 }}>
            {copyright.headingOne}
          </Typography>
          <SocialLinks iconLg />
          <Typography variant="body2" sx={{ mt: 2 }}>
            {copyright.headingTwo}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default index;
