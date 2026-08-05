"use client";

import { Trophy, Users, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";


export default function TournamentPreview() {

  return (
    // <section className="bg-black px-6 py-20">
    <section
className="
relative
overflow-hidden
bg-black
px-6
py-24
"
> 
     <div className="
absolute
left-1/2
top-0
h-72
w-72
-translate-x-1/2
rounded-full
bg-green-500/10
blur-3xl
"/>

      <div className="mx-auto max-w-7xl">


        {/* Heading */}

        <div className="mb-12 text-center">

          <p className="text-sm uppercase tracking-widest text-green-400">
            Featured Tournament
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white">
            Compete with the best
          </h2>

          <p className="mt-4 text-white/60">
            Join upcoming competitions and prove your skills.
          </p>

        </div>



        {/* Card */}

        <motion.div
          whileHover={{ y:-8 }}
          className="
          mx-auto max-w-4xl
          rounded-3xl
          border border-white/10
          bg-white/5
          p-8
          backdrop-blur
          "
        >


          <div className="flex items-center justify-between">


            <div>

              <h3 className="text-2xl font-bold text-white">
                Ethiopian Elite Cup
              </h3>

              <p className="mt-2 text-white/60">
                Dream League Soccer Tournament
              </p>

            </div>


            <Trophy className="text-yellow-400" size={35}/>


          </div>



          <div className="mt-8 grid grid-cols-3 gap-4">


            <Info
              icon={<Users/>}
              value="78/100"
              label="Players"
            />


            <Info
              icon={<CalendarDays/>}
              value="Aug 15"
              label="Deadline"
            />


            <Info
              icon={<Trophy/>}
              value="100 ETB"
              label="Entry"
            />


          </div>



          <button
          className="
          mt-8 w-full
          rounded-full
          bg-green-500
          py-3
          font-semibold
          text-black
          transition
          hover:bg-green-400
          "
          >
            Join Tournament
          </button>



        </motion.div>


      </div>


    </section>
  );
}




function Info({
 icon,
 value,
 label
}:{
 icon:React.ReactNode;
 value:string;
 label:string;
}){

return (

<div className="rounded-xl bg-black/40 p-4 text-center">

<div className="mb-2 flex justify-center text-green-400">
{icon}
</div>

<p className="font-bold text-white">
{value}
</p>

<p className="text-sm text-white/50">
{label}
</p>

</div>

)

}