import { Trophy, Swords, Users } from "lucide-react";

export default function AuthIllustration() {
  return (
    <div className="relative hidden h-full overflow-hidden lg:flex lg:w-1/2">
      
      {/* Background Glow */}
      <div className="
        absolute
        left-20
        top-20
        h-72
        w-72
        rounded-full
        bg-green-500/20
        blur-3xl
      " />

      <div className="
        absolute
        bottom-20
        right-20
        h-80
        w-80
        rounded-full
        bg-green-400/10
        blur-3xl
      " />


      {/* Content */}
      <div className="
       
        relative
        z-10
        flex
        flex-col
        justify-center
        px-16
      ">

        {/* Logo */}
        <div className="
          mt-15
          mb-8
          flex
          items-center
          gap-3
        ">
          <div className="
            
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            bg-green-500
            text-black
          ">
            <Trophy size={28}/>
          </div>


          <span className="
            text-3xl
            font-black
            tracking-tight
            text-white
          ">
            Arena
            <span className="text-green-500">
              ET
            </span>
          </span>
        </div>


        {/* Main Text */}
        <h1 className="
          max-w-lg
          text-5xl
          font-black
          leading-tight
          text-white
        ">
          Compete.
          <br />

          Rise.
          <br />

          <span className="text-green-500">
            Become Elite.
          </span>
        </h1>


        <p className="
          mt-6
          max-w-md
          text-lg
          leading-relaxed
          text-zinc-400
        ">
          Join Ethiopia's competitive gaming community.
          Create your legacy, challenge players, and
          climb the leaderboard.
        </p>


        {/* Features */}
        <div className="
          mt-10
          space-y-4
        ">

          <Feature
            icon={<Swords size={20}/>}
            text="Competitive tournaments"
          />

          <Feature
            icon={<Users size={20}/>}
            text="Connect with elite players"
          />

          <Feature
            icon={<Trophy size={20}/>}
            text="Climb the leaderboard"
          />

        </div>

      </div>

    </div>
  );
}



function Feature({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="
      flex
      items-center
      gap-3
      text-zinc-300
    ">
      <div className="
        flex
        h-9
        w-9
        items-center
        justify-center
        rounded-lg
        bg-green-500/10
        text-green-500
      ">
        {icon}
      </div>

      <span>{text}</span>
    </div>
  );
}