import { Hero } from "@/sections/Hero";
import { Rsvp } from "@/sections/Rsvp";
import { Schedule } from "@/sections/Schedule";
import { Sidebar } from "@/sections/Sidebar";
import { Story } from "@/sections/Story";
import { Tidbits } from "@/sections/Tidbits";

export default function Home() {
  return (
    <main>
      <Sidebar />
      <Hero />
      <Rsvp />
      <Story />
      <Tidbits />
      <Schedule />
    </main>
  );
}
