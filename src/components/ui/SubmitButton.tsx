"use client";

import React from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="glass_effect px-6 py-2 rounded-lg shadow-md  font-lora text-lg  hover:shadow-lg  transition-all ease-out duration-200 "
    >
      {pending ? "Submiting..." : "Submit"}
    </button>
  );
};

export default SubmitButton;
