"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface PasswordInputProps {
  id: string;
  label: string;
  placeholder?: string;
  error?: string;
  register?: any;
}

export default function PasswordInput({
  id,
  label,
  placeholder = "Enter your password",
  error,
  register,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-zinc-300"
      >
        {label}
      </label>

      <div className="relative">
        <input
          id={id}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          className={`
            w-full rounded-xl
            border
            bg-zinc-900
            px-4
            py-3
            pr-12
            text-white
            placeholder:text-zinc-500
            outline-none
            transition

            ${
              error
                ? "border-red-500 focus:border-red-500"
                : "border-zinc-700 focus:border-green-500"
            }
          `}
          {...register}
        />

        <button
  type="button"
  aria-label={showPassword ? "Hide password" : "Show password"}
  onClick={() => setShowPassword((prev) => !prev)}
  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white transition"
>
          {showPassword ? (
            <EyeOff size={20} />
          ) : (
            <Eye size={20} />
          )}
        </button>
      </div>

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}