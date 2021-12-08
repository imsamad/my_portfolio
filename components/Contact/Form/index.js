import { useState } from "react";
import TextField from "./TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";

import validEmail from "../../../lib/validEmail";
import Alert from "../../Alert";
const index = () => {
  const [loading, setLoading] = useState();
  const [headMsg, setHeadMsg] = useState({ open: false });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const handleChange = ({ target: { value, name } }) => {
    headMsg.open && setHeadMsg({ open: false });
    setError((pre) => ({ ...pre, [name]: false }));
    setFormData((pre) => ({ ...pre, [name]: value }));
  };
  const submitForm = async (e) => {
    e.preventDefault();
    if (formData.name.length === 0) {
      setError((pre) => ({ ...pre, name: true }));
    } else if (formData.email.length === 0 || !validEmail(formData.email)) {
      setError((pre) => ({ ...pre, email: true }));
    } else {
      setLoading(true);
      try {
        const res = await fetch("/api/mail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        // console.log("data ", data);
        if (!data.success) {
          setHeadMsg({
            open: true,
            type: "error",
            message: "Error in sending,please try again!",
          });
        } else {
          setHeadMsg({
            open: true,
            type: "success",
            message: "Sent successfully!",
          });
        }
      } catch (err) {
        // console.log("Err from submitContactForm", err);
        setHeadMsg({
          open: true,
          type: "error",
          message: "Error in sending,please try again!",
        });
      }
      setLoading(false);
    }
  };
  const getProps = (val) => ({
    name: val,
    value: formData[val],
    error: error[val],
    onChange: handleChange,
  });
  return (
    <form onSubmit={submitForm}>
      <TextField
        label="Name"
        helperText="Name is required"
        {...getProps("name")}
      />
      <TextField
        label="Email"
        helperText="Valid Email is required"
        {...getProps("email")}
      />
      <TextField label="Subject / Idea" {...getProps("subject")} />
      <TextField label="Message" multiline rows={4} {...getProps("message")} />
      <Alert
        open={headMsg.open}
        type={headMsg.type}
        toggleOpen={() => setHeadMsg({ open: !headMsg.open })}
        message={headMsg.message}
      />
      <LoadingButton
        type="submit"
        onClick={submitForm}
        loadingPosition="end"
        loading={loading}
        variant="contained"
        endIcon={<SendIcon />}
        color="info"
        disableElevation
        sx={{ borderRadius: 4, py: 0.75, mt: 1 }}
      >
        Send Message
      </LoadingButton>
    </form>
  );
};

export default index;
