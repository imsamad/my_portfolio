import nodemailer from "nodemailer";
import validEmail from "../../lib/validEmail";
const myEmail = process.env.MY_EMAIL;
const myPwd = process.env.MY_PASSWORD;

const index = (req, res) => {
  let { name, email, subject, message } = req.body;
  if (!name || !email || !validEmail(email)) {
    return res.status(400).send("Send proper data");
  }

  if (req.method === "POST") {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: myEmail,
        pass: myPwd,
      },
    });

    message = JSON.stringify({
      fromEmail: email,
      fromName: name,
      message: message ? message : "Just Hi Message",
    });

    var mailOptions = {
      from: myEmail,
      to: myEmail,
      subject: subject ? subject : "Just Hi",
      text: message,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return res
          .status(404)
          .send("There is some error in sending mail, plz try again!");
      } else {
        console.log("Email sent: " + info.response);
        return res.status(200).send("Message been sent successfully.");
      }
    });
  } else {
    return res.status(404).send("Not found");
  }
};
export default index;
