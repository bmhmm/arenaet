import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import TournamentPreview from "@/components/sections/TournamentPreview";
import WhyArena from "@/components/sections/WhyArena";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />
      <Hero />
      <TournamentPreview />
      <WhyArena />
      <Footer />
      <section className="p-10">
        <h1 className="text-4xl font-bold">
          Welcome to ArenaET
        </h1>
      </section>

    </main>
  );
}