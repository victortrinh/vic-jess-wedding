import type { Metadata } from "next";
import { Lusitana } from "next/font/google";
import "./globals.css";

const lusitana = Lusitana({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  assets: ["hero.jpg"],
  title: "Victor and Jessica's Love Story",
  description: " Follow along as Victor and Jessica embark on their journey to happily ever after. Learn more about their love story, wedding details, and special moments shared with family and friends as they celebrate their union.",
  openGraph: {
    title: "Victor and Jessica's Love Story",
    description: " Follow along as Victor and Jessica embark on their journey to happily ever after. Learn more about their love story, wedding details, and special moments shared with family and friends as they celebrate their union.",
    images: ["/hero.jpg"]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lusitana.className}>
        {children}
      </body>
    </html>
  );
}
