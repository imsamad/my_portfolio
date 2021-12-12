import Grid from "@mui/material/Grid";

import SubTitle from "../UI/SubTitle";
import Title from "../UI/Title";
import Layout from "../Layout";
import Frontend from "./SkillCard/Frontend";
import Backend from "./SkillCard/Backend";
import Database from "./SkillCard/Database";
const index = ({ skills }) => {
  return (
    <Layout id="skills">
      <SubTitle text={skills.subtitle} />
      <Title text={skills.title} />
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="stretch"
      >
        <Grid xs={12} sm={6} md={4} item>
          <Frontend />
        </Grid>
        <Grid xs={12} sm={6} md={4} item>
          <Backend />
        </Grid>
        <Grid xs={12} sm={6} md={4} item>
          <Database />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default index;
