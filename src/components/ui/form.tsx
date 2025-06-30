import React, { useRef, useState } from "react";
import SubmitButton from "./SubmitButton";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useFormStatus } from "react-dom";

const Form = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const { pending } = useFormStatus();
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = () => {
    if (!form.current) return;
    console.log(form.current);
    emailjs
      .sendForm(
        "service_jfthy5f",
        "template_jn7xbx8",
        form.current,
        "uE4oObU-ushf6zRRS"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setSuccess(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setError(true);
        }
      );
  };
  return (
    <motion.form
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        delay: 4,
        duration: 1,
      }}
      ref={form}
      action={sendEmail}
      className=" max-w-2xl mx-auto w-full  grid gap-4 rounded-lg shadow  bg-white/10 bg-opacity-30 backdrop-blur-sm p-4  border-2 border-white"
    >
      {success && (
        <div className="px-4 py-2 font-poppin border border-green-500 rounded-lg text-center">
          SUCCESS
        </div>
      )}
      {error && (
        <div className="px-4 py-2 font-poppin border border-red-500 rounded-lg text-center">
          Opps; Something went worng!
        </div>
      )}
      <div className="flex flex-col gap-1 ">
        <input
          type="text"
          id="Name"
          name="name"
          disabled={pending}
          placeholder="Enter your  Name"
          className="input-style"
        />
      </div>

      <div className="flex flex-col gap-1 ">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email address"
          className="input-style"
        />
      </div>

      <div className="flex flex-col gap-1  ">
        <textarea
          id="text"
          name="message"
          placeholder="I value your opinion"
          className="input-style h-28 "
        />
      </div>

      <SubmitButton />
    </motion.form>
  );
};

export default Form;
