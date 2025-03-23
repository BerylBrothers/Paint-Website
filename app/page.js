import Image from "next/image";
import Hero from "@/components/Hero";
import Parallax from "@/components/Parallax";
import About from "@/components/About";
import Services from "@/components/Services";
import Team from "@/components/Team";
import About2 from "@/components/About2";

export default function Home() {
  return (
    <>
<Hero />
<Parallax />
<About />
<About2 />
<Services />
<Team />
</>
  );
}
