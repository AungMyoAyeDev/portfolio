import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import {
    Field,
    FieldGroup,
    FieldLabel,
} from "@/src/components/ui/field"
import { FormState, sendEmail } from "../lib/send-email";
import { useActionState } from "react";
const initialState: FormState = {
    success: false,
    message: "",
};
const ContactForm = () => {
    const [state, formAction, isPending] = useActionState(sendEmail, initialState);

    return (
        <Card className=" rounded-2xl shadow-xl">
            <CardContent >
                <form action={formAction}>

                    <h3 className=" text-xl lg:text-2xl font-bold mb-4">Let&apos;s Contact</h3>
                    <FieldGroup>
                        <Field>
                            <FieldLabel htmlFor="name">Name</FieldLabel>
                            <Input
                                id="name"
                                name="name"
                                placeholder="Your name"
                                required />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="email">Email</FieldLabel>
                            <Input
                                name="email"
                                id="email"
                                type="email"
                                placeholder="name@example.com"
                                required
                            />

                        </Field>
                        <Field>
                            <FieldLabel htmlFor="message">
                                Your message
                            </FieldLabel>
                            <Textarea name="message" rows={6} placeholder="Your text" required />
                        </Field>
                        <Field orientation="horizontal" className="justify-end">
                            <Button type="submit"
                                disabled={isPending}

                            >

                                {
                                    isPending ? "Submitting..." : "Submit"
                                }

                            </Button>
                        </Field>

                    </FieldGroup>
                    {state?.message && (
                        <p className={`mt-4 p-2 text-center ${state.success ? "text-green-600" : "text-red-600"}`}>
                            {state.message}
                        </p>
                    )}
                </form>
            </CardContent>
        </Card>
    )
}

export default ContactForm