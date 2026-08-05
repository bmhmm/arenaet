import {
  Trophy,
  Users,
  Medal,
  ShieldCheck
} from "lucide-react";

import { motion } from "framer-motion";


const features = [
  {
    icon: Trophy,
    title: "Competitive Tournaments",
    description:
      "Join organized competitions and challenge the best players."
  },
  {
    icon: Medal,
    title: "Player Rankings",
    description:
      "Track your performance and climb the leaderboard."
  },
  {
    icon: Users,
    title: "Gaming Community",
    description:
      "Connect with Ethiopian gamers and grow together."
  },
  {
    icon: ShieldCheck,
    title: "Fair Competition",
    description:
      "Transparent rules and structured matches for everyone."
  }
];


export default function WhyArena(){

return (

<section className="bg-black px-6 py-24">


<div className="mx-auto max-w-7xl">


<div className="text-center">

<p className="text-sm uppercase tracking-widest text-green-400">
Why ArenaET
</p>


<h2 className="mt-4 text-4xl font-bold text-white">
Built for competitive gamers
</h2>


<p className="mt-4 text-white/60">
More than a game. A platform where players compete, improve,
and become elite.
</p>


</div>



<div className="mt-14 grid gap-6 md:grid-cols-2">


{features.map((feature,index)=>{

const Icon = feature.icon;


return (

<motion.div

key={feature.title}

whileHover={{y:-5}}

className="
rounded-3xl
border
border-white/10
bg-white/5
p-8
backdrop-blur
"

>


<div className="
mb-5
flex
h-12
w-12
items-center
justify-center
rounded-xl
bg-green-500/10
text-green-400
">

<Icon/>

</div>


<h3 className="text-xl font-semibold text-white">
{feature.title}
</h3>


<p className="mt-3 text-white/60">
{feature.description}
</p>


</motion.div>


)

})}


</div>


</div>


</section>

)

}