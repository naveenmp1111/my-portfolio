"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { useForm as useReactHookForm } from "react-hook-form";
import { useForm as useFormspree } from "@formspree/react";
import { Label } from "./ui/Label";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/TextArea";

export default function SignupFormDemo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useReactHookForm();
  console.log('Formspree Key:', process.env.NEXT_PUBLIC_FORM_SPREE_KEY);
  const formSpreeId: string = process.env.NEXT_PUBLIC_FORM_SPREE_KEY as string
  console.log('FormspreeId:', formSpreeId);
  const [state, formspreeSubmit] = useFormspree(formSpreeId); // Replace YOUR_FORMSPREE_ID with your Formspree endpoint ID
  const [emailSent, setEmailSent] = useState(false);

  const onSubmit = async (data: any) => {
    try {

      const response = await formspreeSubmit(data);
      console.log('response is ', response)
      if (state.succeeded) {
        setEmailSent(true);
        reset(); // Clear form after successful submission
        setTimeout(() => {
          setEmailSent(false)
        }, 10000)
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-md md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <form className="mt-3" onSubmit={handleSubmit(onSubmit)}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="firstname">Full Name</Label>
          <Input
            id="firstname"
            placeholder="Kendrick Lamar"
            type="text"
            {...register("name", {
              required: "Full Name is required",
              minLength: { value: 3, message: "Name must be at least 3 characters" },
            })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors?.name?.message as string}</p>
          )}
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="xyz@gmail.com"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message as string}</p>
          )}
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="subject">Subject</Label>
          <Input
            id="subject"
            placeholder="Topic"
            type="text"
            {...register("subject", {
              required: "Subject is required",
              minLength: { value: 3, message: "Subject must be at least 3 characters" },
            })}
          />
          {errors.subject && (
            <p className="text-red-500 text-sm">{errors.subject.message as string}</p>
          )}
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Desc"
            {...register("message", {
              required: "Message is required",
              minLength: { value: 10, message: "Message must be at least 10 characters" },
            })}
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message as string}</p>
          )}
        </LabelInputContainer>

        <button
          disabled={state.submitting}
          className={`cursor-pointer bg-gradient-to-br relative group/btn block w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] 
    ${state.submitting
              ? 'opacity-50 cursor-not-allowed bg-gray-500 shadow-none' // Styles when disabled
              : 'from-black to-neutral-600 dark:from-zinc-900 dark:to-zinc-900 dark:bg-zinc-800 shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]' // Styles when enabled
            }`}
          type="submit"
        >
          {state.submitting ? 'Submitting...' : 'Send Message'}
          <BottomGradient />
        </button>
      </form>
      {emailSent && (
        <div className="w-full p-1 flex justify-center items-center bg-green-700 my-2 rounded-lg">
          <span className="text-green-200">Thank You for your Message.</span>
        </div>
      )}
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
