import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import { SiNodedotjs, SiFirebase, SiStrapi, SiExpress } from "react-icons/si";

import Icon from "../Icon";
const indexx = ({ skill }) => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "inherit",
        boxShadow: 0,
        border: 0.5,
        borderRadius: 2,
        borderColor: "info.main",
        p: 2,
      }}
    >
      <Typography
        align="center"
        variant="h5"
        sx={{ fontWeight: 700 }}
        color="info.main"
      >
        Backend
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          py: 2,
        }}
      >
        <Icon Icon={SiNodedotjs} text="NodeJS" color="green" />
        <Icon Icon={SiExpress} text="ExpressJS" color="black" />
        <Icon Icon={SiFirebase} text="Firebase" color="orange" />
        <Icon Icon={SiStrapi} text="CMS(Strapi)" color="slateblue" />
      </Box>
    </Box>
  );
};

export default indexx;
