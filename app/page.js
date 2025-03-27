import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Team from "@/components/Team";
import About2 from "@/components/About2";
import ParallaxComponent from "@/components/ParallaxComponent";
import Testimonials from "@/components/Testimonials";
import Areas from "@/components/Areas";

export default function Home() {
  return (
  
    <>
<Hero />
<ParallaxComponent/>
<About />
<About2 />
<Services />
<Team />
<Testimonials />
<Areas />
</>

  );
}
