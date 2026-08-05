"use client";
import { ArrowRight, Trophy, Users, Gamepad2 } from "lucide-react";
import { motion } from "framer-motion";


export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-black">

      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.15),transparent_40%)]" />


      {/* Stadium overlay placeholder */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,black)]" />


      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-32 text-center">


        <motion.h1
          initial={{opacity:0, y:20}}
          animate={{opacity:1, y:0}}
          transition={{duration:0.6}}
          className="max-w-4xl text-5xl font-bold tracking-tight text-white md:text-7xl"
        >
          Compete.
          <span className="block text-green-500">
            Rise.
          </span>
          Become Elite.
        </motion.h1>


        <motion.p
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:0.3}}
          className="mt-6 max-w-2xl text-lg text-white/70"
        >
          ArenaET brings Ethiopian gamers together through organized
          tournaments, competitive rankings, and unforgettable matches.
        </motion.p>


        {/* Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">


          <button className="flex items-center justify-center gap-2 rounded-full bg-green-500 px-8 py-3 font-semibold text-black">
            Join Tournament
            <ArrowRight size={18}/>
          </button>


          <button className="rounded-full border border-white/20 px-8 py-3 text-white">
            Explore Matches
          </button>


        </div>



        {/* Stats */}

        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-3">


          <Stat
            icon={<Users />}
            value="100+"
            label="Players"
          />


          <Stat
            icon={<Trophy />}
            value="10+"
            label="Tournaments"
          />


          <Stat
            icon={<Gamepad2 />}
            value="1"
            label="Current Game"
          />


        </div>


      </div>


    </section>
  );
}



function Stat({
  icon,
  value,
  label,
}:{
  icon:React.ReactNode;
  value:string;
  label:string;
}){

return (

<div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">

<div className="mb-3 text-green-400">
{icon}
</div>

<h3 className="text-3xl font-bold text-white">
{value}
</h3>

<p className="text-white/60">
{label}
</p>

</div>

)

}