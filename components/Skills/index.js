import Grid from "@mui/material/Grid";

import SkillCard from "./SkillCard";
import SubTitle from "../UI/SubTitle";
import Title from "../UI/Title";
import Layout from "../Layout";

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
        {skills.list.map((skill) => (
          <Grid
            key={skill?.id || skill?._id || skill?.name}
            xs={12}
            sm={6}
            md={4}
            item
          >
            <SkillCard skill={skill} />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default index;
