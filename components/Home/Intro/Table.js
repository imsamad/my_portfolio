import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import PhoneIcon from '@mui/icons-material/LocalPhoneTwoTone';
// import EmailIcon from '@mui/icons-material/MailOutlineTwoTone';
import EmailIcon from '@mui/icons-material/AlternateEmail';
import TwitterIcon from '@mui/icons-material/Twitter';
import TableHead from '@mui/material/TableHead';
import ContactIcon from '@mui/icons-material/ContactMail';
import { Typography } from '@mui/material';
const Info = [
  {
    icon: <PhoneIcon fontSize="small" color="info" />,
    label: '+91-9870645161',
  },
  {
    icon: <EmailIcon fontSize="small" color="info" />,
    label: 'asdevlpr1206@gmail.com',
  },
  { icon: <TwitterIcon fontSize="small" color="info" />, label: 'imsamad06' },
];
const TR = ({ icon, label }) => (
  <TableRow>
    <TableCell sx={{ border: 0 }}>{icon}</TableCell>
    <TableCell sx={{ border: 0 }}>{label}</TableCell>
  </TableRow>
);
export default function BasicTable() {
  return (
    <TableContainer>
      <Table sx={{ maxWidth: 200 }}>
        <TableHead>
          <TableRow>
            <TableCell colSpan={2}>
              <Typography
                variant="h5"
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                <ContactIcon sx={{ mr: 2, color: 'info.dark' }} />
                Information
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Info.map(({ label, icon }) => (
            <TR key={label} icon={icon} label={label} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
