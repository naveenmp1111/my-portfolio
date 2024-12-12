"use client"
import AboutMe from "@/components/AboutMe";
import FormGrid from "@/components/FormGrid";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import ToggleTheme from "@/components/ToggleTheme";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { TracingBeam } from "@/components/ui/Tracing-beam";
import { navItems } from "@/data";

export default function Home() {
  return (

    <main className="dark:bg-black-100 bg-slate-100 flex justify-center items-center flex-col sm:px-10 px-5 ">
      <div className="w-full max-w-7xl">
        <ToggleTheme/>
        <TracingBeam>
          <FloatingNav navItems={navItems} />
          <Hero />
          <Grid />
          <AboutMe />
          <RecentProjects />
          <FormGrid />
        </TracingBeam>
      </div>

    </main>

  );
}
