import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />
      <Hero />

      <section className="p-10">
        <h1 className="text-4xl font-bold">
          Welcome to ArenaET
        </h1>
      </section>

    </main>
  );
}