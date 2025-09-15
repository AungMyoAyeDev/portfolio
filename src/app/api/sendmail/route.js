
import nodemailer from 'nodemailer';

export default async function POST(req) {

    const { name, email, message } = req.body;

    let transporter = nodemailer.createTransport({
        service: 'gmail', // or your preferred email service
        auth: {
            user: process.env.SMPT_USER,
            pass: process.env.SMPT_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: process.env.SMPT_USER,
            to: "aungmyoaye@gmail.com",
            subject: "Feedback",
            text: `<div><h1>Hi I am ${name}.</h1><span>${email}</span><p>${message}</p> </div>`,
        });
        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Error sending email.' });
    }
} 
