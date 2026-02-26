// components/sections/ContactSection.tsx

"use client";

import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";



export default function ContactSection() {
    return (
        <section
            id="contact"
            className="min-h-screen relative py-24 px-6 lg:px-8 max-w-6xl mx-auto"
        >
            <p className="text-sm uppercase tracking-widest text-violet-500 font-medium">
                Contact
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* LEFT SIDE - Contact Info */}
                <div>


                    <h2 className="mt-4 text-3xl lg:text-4xl font-bold">
                        Let’s Work Together
                    </h2>

                    <p className="mt-6 text-default-600 leading-relaxed">
                        I'm currently open to remote opportunities and collaboration
                        on scalable backend or full-stack projects.
                        Feel free to reach out — I’ll respond as soon as possible.
                    </p>


                </div>

                {/* RIGHT SIDE - Contact Form */}
                <Card className="bg-background/60 backdrop-blur-xl border border-default-200 rounded-2xl shadow-xl">
                    <CardContent className="p-8 space-y-6">
                        <Input

                            placeholder="Enter your name"

                        />

                        <Input
                            placeholder="Enter your email"
                            type="email"


                        />

                        <Textarea

                            placeholder="Write your message..."


                        />

                        <Button


                        >
                            Send Message
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
