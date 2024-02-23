import { Hero } from "@/sections/Hero";
import { Sidebar } from "@/sections/Sidebar";

export default function Home() {
  return (
    <main className="w-full h-full relative">
      <Sidebar />
      <Hero />
    </main>
  );
}
