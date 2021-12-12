import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import { SiFirebase, SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

import Icon from "../Icon";
const index = () => {
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
        Database
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
        <Icon Icon={SiMongodb} text="MongoDB" color="green" />
        <Icon Icon={SiFirebase} text="Firebase" color="orange" />
        <Icon Icon={GrMysql} text="MySql" color="blue" />
      </Box>
    </Box>
  );
};

export default index;
