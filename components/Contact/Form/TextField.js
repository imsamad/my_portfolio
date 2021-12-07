import React from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
const CssTextField = styled(TextField)(({ theme }) => {
  const info = theme.palette.info;
  return {
    "& label.Mui-focused": {
      color: info.light,
    },
    "& .MuiInput-underline:after": {
      borderColor: info.light,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: info.light,
        borderRadius: 15,
      },
      "&:hover fieldset": {
        borderColor: info.light,
      },
      "&.Mui-focused fieldset": {
        borderColor: info.dark,
      },
    },
  };
});
const index = React.forwardRef((props, ref) => {
  const { name, label, ...rest } = props;
  return (
    <CssTextField
      ref={ref}
      fullWidth
      label={label}
      name={name}
      margin="normal"
      {...rest}
    />
  );
});

export default index;
