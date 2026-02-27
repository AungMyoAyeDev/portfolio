import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/src/components/ui/field"
import { sendEmail } from "../lib/send-email";
import { useTransition } from "react";

const ContactForm = () => {
    const [isPending, startTransition] = useTransition();
    const handleSubmit = (formData: FormData) => {
        startTransition(() => {
            sendEmail(formData)
        })


    }
    console.log(isPending)
    return (
        <Card className=" rounded-2xl shadow-xl">
            <CardContent >
                <form action={handleSubmit}>

                    <h3 className=" text-xl lg:text-2xl font-bold mb-4">Let's Contact</h3>
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
                            <Button type="submit" >Submit</Button>
                        </Field>

                    </FieldGroup>

                </form>
            </CardContent>
        </Card>
    )
}

export default ContactForm