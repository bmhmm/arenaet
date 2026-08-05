"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createClient } from "@/lib/supabase/client";
import { useState } from "react";   

import PasswordInput from "./PasswordInput";

import {
  signupSchema,
  SignupFormValues,
} from "@/lib/validations/auth";

import Link from "next/link";


export default function SignupForm() {
      const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState:{
      errors,
      isSubmitting
    }
  } = useForm<SignupFormValues>({
    resolver:zodResolver(signupSchema),
  });


const onSubmit = async(values: SignupFormValues)=>{

  setErrorMessage("");
  setSuccessMessage("");

  const supabase = createClient();


  const {
    data,
    error
  } = await supabase.auth.signUp({

    email: values.email,

    password: values.password,

  });



  if(error){

    setErrorMessage(error.message);

    return;

  }



  if(data.user){


    const {error: profileError}=await supabase
      .from("profiles")
      .insert({

  id:data.user.id,

  username: values.username,

  full_name:null,

  avatar_url:null,

})



  if(profileError){

  console.log(profileError);

  setErrorMessage(profileError.message);

  return;

}


  }



  setSuccessMessage(
    "Account created successfully!"
  );


};

 

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
    
      <div className="space-y-2">
  <label
    htmlFor="username"
    className="text-sm text-zinc-300"
  >
    Username
  </label>

  <input
    id="username"
    type="text"
    placeholder="Enter your Arena name"
    {...register("username")}
    className="
      w-full
      rounded-xl
      border
      border-zinc-700
      bg-zinc-900
      px-4
      py-3
      text-white
      outline-none
      focus:border-green-500
    "
  />

  {errors.username && (
    <p className="text-sm text-red-500">
      {errors.username.message}
    </p>
  )}
</div>

      {/* Email */}

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
          placeholder="you@example.com"
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



      {/* Password */}


      <PasswordInput

        id="password"

        label="Password"

        placeholder="Create a strong password"

        register={register("password")}

        error={errors.password?.message}

      />



      {/* Confirm Password */}


      <PasswordInput

        id="confirmPassword"

        label="Confirm Password"

        placeholder="Repeat your password"

        register={register("confirmPassword")}

        error={errors.confirmPassword?.message}

      />

 {
 errorMessage && (
   <p className="text-sm text-red-500">
     {errorMessage}
   </p>
 )
}


{
 successMessage && (
   <p className="text-sm text-green-500">
     {successMessage}
   </p>
 )
}


      {/* Submit Button */}


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
          ? "Creating account..."
          : "Create Account"
        }


      </button>
      <div className="text-center text-sm text-zinc-400">
   Already part of the arena?{" "}
  <Link
    href="/login"
    className="
      font-medium
      text-green-500
      hover:text-green-400
      transition
    "
  >
    Sign in
  </Link>
</div>


    </form>
  );
}