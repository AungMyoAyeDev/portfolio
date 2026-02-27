"use server";
import { Resend } from "resend";


export type FormState = {
    success: boolean,
    message: string
}
export const sendEmail = async (formData: FormData): Promise<FormState> => {
    console.log(formData, "In ")
    try {
        const api_key = process.env.RESEND_API_KEY;
        console.log(api_key)
        const resend = new Resend(api_key);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const message = formData.get("message") as string;
        console.log(name, email, message)
        const success = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "aungmyoaye101@gmail.com",
            subject: `New message from ${name}`,
            replyTo: email,
            html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });
        console.log(success)
        return { success: true, message: "Message sent! We'll be in touch." };
    } catch (error) {
        return { success: false, message: "Failed to send message. Try again later." };
    }

}