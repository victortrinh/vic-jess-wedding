import { Hero } from "@/sections/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://vicandjess.love"),
  title: "Victor and Jessica's Love Story",
  description: " Follow along as Victor and Jessica embark on their journey to happily ever after. Learn more about their love story, wedding details, and special moments shared with family and friends as they celebrate their union.",
  openGraph: {
    title: "Victor and Jessica's Love Story",
    description: " Follow along as Victor and Jessica embark on their journey to happily ever after. Learn more about their love story, wedding details, and special moments shared with family and friends as they celebrate their union.",
    images: ["/jess-vic.jpg"]
  }
};

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
