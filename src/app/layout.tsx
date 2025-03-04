import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { createClient, repositoryName } from "@/prismicio";
import { PrismicPreview } from "@prismicio/next";

const urbanist = Urbanist({
  subsets: ["latin"],
});

export const generateMetadata = async (): Promise<Metadata> => {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return {
    title: settings.data.meta_title,
    description: settings.data.meta_description,
  };
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-slate-900 text-[#f5efed]">
      <body className={clsx(urbanist.className, "relative min-h-screen")}>
        <Header />
        {children}
        <div className="bg-radial-[at_50%_25%] from-slate-500 via-slate-900 to-slate-900 absolute inset-0 -z-50 max-h-screen" />
        <div className="pointer-events-none absolute inset-0 -z-40 h-full bg-[url('/noisetexture.jpg')] opacity-20 mix-blend-soft-light" />
        <Footer />
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
