import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/system/Box";

const index = ({ children, id }) => {
  return (
    <Box
      component="section"
      id={id}
      sx={{ width: "100%", bgcolor: "grey.100", pt: 1 }}
    >
      <Container fixed>
        <Divider />
        <Toolbar />
        {children}
        <Toolbar />
      </Container>
    </Box>
  );
};

export default index;
