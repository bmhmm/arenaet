import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="border-b border-white/10 bg-black/40 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-white"
        >
          Arena<span className="text-green-500">ET</span>
        </Link>


        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">

          <Link href="/">
            Home
          </Link>

          <Link href="/tournaments">
            Tournaments
          </Link>

          <Link href="/leaderboard">
            Leaderboard
          </Link>

          <Link href="/games">
            Games
          </Link>

        </div>


        {/* Actions */}
        <div className="hidden items-center gap-4 md:flex">

          <Link href="/login" className="text-white/80">
            Login
          </Link>


          <Link href="/signup" className="rounded-full bg-green-500 px-5 py-2 font-semibold text-black">
            Join Tournament
          </Link>

        </div>


        {/* Mobile */}
        <button className="md:hidden">
          <Menu className="text-white" />
        </button>


      </div>
    </nav>
  );
}