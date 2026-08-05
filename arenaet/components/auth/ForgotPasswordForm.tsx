"use client";

import Link from "next/link";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  forgotPasswordSchema,
  ForgotPasswordFormValues,
} from "@/lib/validations/auth";


export default function ForgotPasswordForm() {


  const {
    register,
    handleSubmit,
    formState:{
      errors,
      isSubmitting
    }

  } = useForm<ForgotPasswordFormValues>({
    resolver:zodResolver(forgotPasswordSchema),
  });



  const onSubmit = async(
    values:ForgotPasswordFormValues
  )=>{

    console.log(values);

  };



  return (

    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >


      <div className="space-y-2">

        <label
          htmlFor="email"
          className="text-sm text-zinc-300"
        >
          Email
        </label>


        <input

          id="email"

          type="email"

          placeholder="Enter your account email"

          {...register("email")}

          className="
          w-full
          rounded-xl
          border
          border-zinc-700
          bg-zinc-900
          px-4
          py-3
          text-white
          placeholder:text-zinc-500
          outline-none
          focus:border-green-500
          "

        />


        {
          errors.email &&
          (
            <p className="text-sm text-red-500">
              {errors.email.message}
            </p>
          )
        }


      </div>



      <button

        type="submit"

        disabled={isSubmitting}

        className="
        w-full
        rounded-xl
        bg-green-500
        py-3
        font-semibold
        text-black
        transition
        hover:bg-green-400
        disabled:opacity-50
        "

      >

        {
          isSubmitting
          ? "Sending..."
          : "Send Reset Link"
        }


      </button>



      <div className="
        text-center
        text-sm
        text-zinc-400
      ">

        Remember your password?{" "}

        <Link
          href="/login"
          className="
          text-green-500
          hover:text-green-400
          "
        >
          Login
        </Link>


      </div>


    </form>

  );
}