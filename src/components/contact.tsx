"use client";
import { Download, Mail, MapPin, PhoneCall } from "lucide-react";
import Link from "next/link";
import ContactForm from "./contact-form";


export default function ContactSection() {


    return (
        <section
            id="contact"
            className=""
        >
            <p className="text-sm uppercase tracking-widest text-primary font-medium my-4">
                Contact
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* LEFT SIDE - Contact Info */}
                <div className="space-y-4">


                    <h2 className=" text-3xl lg:text-4xl font-bold">
                        Let’s Work Together
                    </h2>

                    <p className=" text-default-600 leading-relaxed">
                        I'm currently open to remote opportunities and collaboration
                        on scalable backend or full-stack projects.

                    </p>
                    <p className=" text-default-600 leading-relaxed">
                        Feel free to reach out — I’ll respond as soon as possible.
                    </p>
                    <p
                        className="flex items-center gap-4">
                        <PhoneCall /> +959443573871
                    </p>
                    <Link
                        href={'/mailto:aungmyoayedev@gmail.com'}
                        className="flex items-center gap-4">
                        <Mail /> aungmyoayedev@gmail.com
                    </Link>
                    <p
                        className="flex items-center gap-4">
                        <MapPin /> Mandalay , Myanmar
                    </p>
                    <Link
                        href={'/globe.svg'}
                        target="_blank"
                        download
                        className="flex items-center gap-4"

                    >
                        <Download /> Download resume
                    </Link>


                </div>

                {/* RIGHT SIDE - Contact Form */}
                <ContactForm />

            </div>
        </section>
    );
}
