import Grid from "@mui/material/Grid";

import ProfileCard from "./ProfileCard";
import Intro from "./Intro";
import Layout from "../Layout";

const index = ({ intro }) => {
  const { aboutMe, ...rest } = intro;
  return (
    <Layout id="home">
      <Grid container>
        <Grid item xs={12} md={4}>
          <ProfileCard intro={rest} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Intro aboutMe={aboutMe} />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default index;
