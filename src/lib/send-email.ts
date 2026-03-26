"use server";
import { Resend } from "resend";


export type FormState = {
    success: boolean,
    message: string
}
export const sendEmail = async (prevState: FormState, formData: FormData): Promise<FormState> => {
    try {
        const api_key = process.env.RESEND_API_KEY;
        const resend = new Resend(api_key);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const message = formData.get("message") as string;
        if (!name || !email || !message) {
            return { success: false, message: "Please fill out all fields." };
        }
        const { error } = await resend.emails.send({
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
        if (error) {
            return {
                success: false,
                message: "Failed to send email. Try again later."
            };
        }
        return {
            success: true,
            message: "Thanks you for your message . I'll conatct you as soon as possible."
        };
    } catch (error) {
        console.error("Unexpect error:", error)
        return {
            success: false,
            message: "Failed to send message. Try again later."
        };
    }

}