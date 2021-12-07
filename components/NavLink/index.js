import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
const NavLink = ({ href, label, sx }) => (
  <Link href={href} underline="none" sx={sx && { ...sx }}>
    <Button
      variant="contained"
      sx={{
        bgcolor: "primary.light",
        color: "#fff",
        fontWeight: 700,
        letterSpacing: 2,
        textTransform: "none",
        letterSpacing: "2px",
        mr: 2,
        fontSize: 16,
      }}
      disableElevation
      size="small"
    >
      {label}
    </Button>
  </Link>
);
export default NavLink;
