import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
const index = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        mb: 2,
      }}
    >
      <MyLink href="#home" label="AboutMe" />
      <MyLink href="#skills" label="Skills" />
      <MyLink href="#services" label="Services" />
      <MyLink href="#projects" label="Projects" />
      <MyLink href="#contact" label="ContactMe" />
    </Box>
  );
};

export default index;
const MyLink = ({ href, label }) => (
  <Link
    underline="hover"
    href={href}
    sx={{
      fontWeight: 600,
      mr: 2,
      mb: 1,
      color: "grey.700",
      letterSpacing: 2,
      fontSize: { sm: "1rem", md: "1.25rem" },
    }}
  >
    {label}
  </Link>
);
