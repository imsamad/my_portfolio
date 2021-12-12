import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import { AiFillHtml5 } from "react-icons/ai";
import { SiNextdotjs, SiJavascript } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";

import Icon from "../Icon";
const indexx = () => {
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
        Frontend
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
        <Icon Icon={SiNextdotjs} color="#00000" text="NextJS" />
        <Icon Icon={GrReactjs} color="blue" text="ReactJS" />
        <Icon Icon={SiJavascript} color="orange" text="JS" />
        <Icon Icon={AiFillHtml5} color="slateblue" text="HTML/CSS" />
      </Box>
    </Box>
  );
};

export default indexx;
