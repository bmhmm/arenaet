import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="p-10">
        <h1 className="text-4xl font-bold">
          Welcome to ArenaET
        </h1>
      </section>

    </main>
  );
}