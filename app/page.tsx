import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Image from "next/image";

export default function Home() {
  return (
   <main className="bg-black-100 flex justify-center items-center flex-col sm:px-10 px-5 ">
    <div className="w-full max-w-7xl">
      <FloatingNav navItems={[{name:'Home', link: '/'},{name:'About', link: '/about'}]}/>
      <Hero/>
      <Grid/>
    </div>
   </main>
  );
}
