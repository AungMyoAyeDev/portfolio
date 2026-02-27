"use server";
export type FormState = {
    success: boolean,
    message: string
}
export const sendEmail = async (formData: FormData): Promise<FormState> => {
    console.log(formData, "In ")
    try {
        const name = formData.get("name")
        const email = formData.get("email")
        const message = formData.get("message")
        console.log(name, email, message)
        return { success: true, message: "Message sent! We'll be in touch." };
    } catch (error) {
        return { success: false, message: "Failed to send message. Try again later." };
    }

}