"use client";

import Link from "next/link";
import { Trophy, Send } from "lucide-react";
import { FaTelegram, FaDiscord, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 border-t border-zinc-800">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-2 text-2xl font-extrabold text-white tracking-tight">
              <Trophy className="h-7 w-7 text-green-500" />
              <span>
                Arena<span className="text-green-500">ET</span>
              </span>
            </div>

            <p className="text-sm leading-relaxed text-zinc-400">
              {/* The #1 platform for competitive gaming tournaments in Ethiopia. Join, compete, and become elite. */}
              Ethiopia's competitive gaming platform where players compete, connect, and become elite.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {/* Telegram */}
              <Link
                href="https://t.me/your_telegram"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:border-green-500 hover:bg-zinc-800 hover:text-green-400 transition-colors"
                aria-label="Telegram"
              >
                <FaTelegram className="h-4 w-4" />
              </Link>

              {/* Discord */}
              <Link
                href="https://discord.gg/your_invite"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:border-green-500 hover:bg-zinc-800 hover:text-green-400 transition-colors"
                aria-label="Discord"
              >
                <FaDiscord className="h-4 w-4" />
              </Link>

              {/* Instagram */}
              <Link
                href="https://instagram.com/your_handle"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:border-green-500 hover:bg-zinc-800 hover:text-green-400 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Tournaments
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Leaderboard
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Players
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Support
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Rules
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Dispute Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Legal
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Newsletter
            </h3>
            <p className="text-sm mb-4 text-zinc-400">
              Subscribe for updates on tournaments, news, and exclusive offers.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg bg-zinc-900 border border-zinc-800 px-3.5 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-green-500 transition-colors"
              />
              <button
                type="submit"
                className="flex items-center justify-center rounded-lg bg-green-500 px-4 text-black font-semibold hover:bg-green-400 transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-zinc-800/80 pt-8 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} ArenaET. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}