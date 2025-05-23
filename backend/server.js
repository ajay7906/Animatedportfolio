const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors({ origin: "https://your-portfolio-website.com" })); // Replace with your frontend URL
app.use(bodyParser.json());

// Email Config (Using Gmail)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail (store in .env)
    pass: process.env.EMAIL_PASS, // App Password (not regular password)
  },
});

// POST endpoint to handle form submissions
app.post("/send-email", async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Input validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  // Email options
  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.YOUR_EMAIL, // Where you want to receive messages
    subject: `New Message: ${subject}`,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email." });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});