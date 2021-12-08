import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const index = ({ project }) => {
  return (
    <Grid xs={12} sm={6} md={4} item>
      <Card
        sx={{
          bgcolor: "inherit",
          boxShadow: 0,
          border: 0.5,
          borderRadius: 2,
          borderColor: "info.main",
        }}
      >
        <CardMedia
          sx={{ p: 1 }}
          component="img"
          height="250"
          width="100%"
          image={project.image}
          alt={project.name}
        />

        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            sx={{ fontWeight: 600 }}
          >
            {project.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {project.description}
          </Typography>
        </CardContent>
        <CardActions>
          {project.links.map((link) => (
            <a
              key={link._id || link.id || Math.random()}
              href={link.link}
              style={{ textDecoration: "none" }}
            >
              <Button size="small">{link.label}</Button>
            </a>
          ))}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default index;
