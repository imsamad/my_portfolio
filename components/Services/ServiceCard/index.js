import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const index = ({ service }) => {
  return (
    <Card
      sx={{
        bgcolor: "inherit",
        boxShadow: 0,
        border: 0.5,
        borderRadius: 2,
        borderColor: "info.main",
      }}
    >
      <CardContent>
        <Typography
          align="center"
          sx={{ fontSize: "1.2rem", fontWeight: 700 }}
          color="grey.700"
          gutterBottom
        >
          {service.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default index;
