import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import InboxIcon from "@mui/icons-material/Inbox";

import toCapitalise from "../../../lib/toCapitalise";

const indexx = ({ skill }) => (
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
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell colSpan={3} align="center" sx={{ border: 0, p: 0 }}>
                <Typography align="center" variant="h6" color="info.main">
                  {toCapitalise(skill.name)}
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {skill.list.map((list) => (
              <TableRow key={list.name}>
                <TableCell sx={{ border: 0, p: 1 }}>
                  <InboxIcon size="small" color="info" />
                </TableCell>
                <TableCell sx={{ border: 0, p: 1 }}>
                  <Typography>{list.name}</Typography>
                  <Typography
                    sx={{
                      height: 5,
                      width: `${list.percentage}%`,
                      bgcolor: "info.main",
                      mt: 0.5,
                    }}
                  />
                </TableCell>
                <TableCell sx={{ border: 0, p: 1 }}>
                  {list.percentage}%
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </CardContent>
  </Card>
);

export default indexx;
