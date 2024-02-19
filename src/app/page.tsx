import { Hero } from "@/sections/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  assets: ["hero.jpg"],
  title: "Victor and Jessica's Love Story",
  description: " Follow along as Victor and Jessica embark on their journey to happily ever after. Learn more about their love story, wedding details, and special moments shared with family and friends as they celebrate their union.",
  openGraph: {
    title: "Victor and Jessica's Love Story",
    description: " Follow along as Victor and Jessica embark on their journey to happily ever after. Learn more about their love story, wedding details, and special moments shared with family and friends as they celebrate their union.",
    images: [
      {
        url: "https://www.vicandjess.love/hero.jpg",
        alt: "Jess and Victor engagement"
      }
    ]
  
  }
};

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
