"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

import {
  loginSchema,
  LoginFormValues,
} from "@/lib/validations/auth";

import PasswordInput from "./PasswordInput";
import { createClient } from "@/lib/supabase/client";


export default function LoginForm() {

  const {
    register,
    handleSubmit,
    formState:{
      errors,
      isSubmitting
    }
  } = useForm<LoginFormValues>({
    resolver:zodResolver(loginSchema),
  });


const onSubmit = async(values: LoginFormValues)=>{
  console.log(values);
 const supabase = createClient();

 const {data,error}=await supabase.auth.getSession();

 console.log(data);
 console.log(error);

};

  const supabase = createClient();


  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >

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
        register={register("password")}
        error={errors.password?.message}
      />


      {/* Forgot Password */}

      <div className="flex justify-end">

             
             <Link
     href="/forgot-password" 
     className="         
     text-sm         
     text-green-500        
     hover:text-green-400       
          "          
       >        
       Forgot password?       
             </Link>       

      </div>


      {/* Submit */}

      <button
        disabled={isSubmitting}
        type="submit"
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
          ? "Signing in..."
          : "Login"
        }

      </button>
      <div className="text-center text-sm text-zinc-400">
   New challenger?{" "}
  <Link
    href="/signup"
    className="
      font-medium
      text-green-500
      hover:text-green-400
      transition
    "
  >
    Join ArenaET
  </Link>
</div>


    </form>
  );
}