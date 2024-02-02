import nodemailer from "nodemailer";

const email = 'bettenock968@gmail.com';
const pass = 'pyqmzrbtdrkqggbn';

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};