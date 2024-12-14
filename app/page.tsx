"use client"
import dynamic from 'next/dynamic';
import AboutMe from "@/components/AboutMe";
import FormGrid from "@/components/FormGrid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
const DynamicFloatingNav = dynamic(() =>
  import('@/components/ui/FloatingNavbar').then((mod) => mod.FloatingNav),
  {
    ssr: false, //Disabled Server-Side Rendering 
    loading: () => <p>...</p>, //fallback
  }
);
const Grid = dynamic(() => import('@/components/Grid'), {
  ssr: false, // Optional: Disable SSR if the component uses browser-only features
  loading: () => <p>...</p>, // Optional: Provide a loading fallback
});
import { TracingBeam } from "@/components/ui/Tracing-beam";
import { navItems } from "@/data";

export default function Home() {
  return (

    <main className="dark:bg-black-100 bg-slate-100 flex justify-center items-center flex-col sm:px-10 px-5 ">
      <div className="w-full max-w-7xl">
        <TracingBeam>
          <DynamicFloatingNav navItems={navItems} />
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
