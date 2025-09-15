// pages/api/feedback.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Only POST allowed" });
    }

    const { name, email, message } = req.body;

    try {
        // Configure transporter (use Gmail or any SMTP)
        const transporter = nodemailer.createTransport({
            host: "smtp.example.com",
            port: 587,
            secure: false, // upgrade later with STARTTLS
            auth: {
                user: "anungmyoayedev@gmail.com",
                pass: "ama123456",
            },
        });

        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_USER, // send to your own email
            subject: `Portfolio Feedback from ${name}`,
            text: message,
            html: `<p><b>Name:</b> ${name}</p>
             <p><b>Email:</b> ${email}</p>
             <p><b>Message:</b> ${message}</p>`,
        });

        res.status(200).json({ success: true, message: "Feedback sent successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to send feedback." });
    }
}
