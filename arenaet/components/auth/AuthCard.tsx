import { ReactNode } from "react";

interface AuthCardProps {
  title: string;
  description: string;
  children: ReactNode;
}

export default function AuthCard({
  title,
  description,
  children,
}: AuthCardProps) {
  return (
    <div
      className="
      w-full
      max-w-md
      rounded-3xl
      border
      border-white/10
      bg-white/5
      p-8
      shadow-2xl
      backdrop-blur-xl
      "
    >
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">
          {title}
        </h1>

        <p className="mt-3 text-sm text-zinc-400">
          {description}
        </p>
      </div>

      {children}
    </div>
  );
}