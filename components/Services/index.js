import Grid from "@mui/material/Grid";
import ServiceCard from "./ServiceCard";

import Title from "../UI/Title";
import SubTitle from "../UI/SubTitle";
import Message from "../UI/Message";
import Layout from "../Layout";

const index = ({ services }) => {
  return (
    <Layout id="services">
      <SubTitle text={services.subtitle} />
      <Title text={services.title} />
      <Message text={services.message} />
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="stretch"
      >
        {services.list.map((service) => (
          <Grid
            key={service.id || service._id || service.name}
            xs={12}
            sm={6}
            md={4}
            item
            sx={{ height: "100%" }}
          >
            <ServiceCard service={service} />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default index;
