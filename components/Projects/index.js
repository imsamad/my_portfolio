import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

import PojectCard from "./PojectCard";
import Title from "../UI/Title";
import SubTitle from "../UI/SubTitle";
import Message from "../UI/Message";
import Layout from "../Layout";

const index = ({ projects }) => {
  return (
    <Layout id="projects">
      <SubTitle text={projects.subtitle} />
      <Title text={projects.title} />
      <Message
        text={projects.message}
        extra={
          <Link href="https://github.com/imsamad" target="_blank">
            Github.
          </Link>
        }
      />

      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="stretch"
      >
        {projects.list.map((project) => (
          <PojectCard project={project} key={project.id || project._id} />
        ))}
      </Grid>
    </Layout>
  );
};

export default index;
