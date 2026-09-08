import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { MarciIntro } from "@/components/sections/MarciIntro";
import { Stats } from "@/components/sections/Stats";
import { GetItSold } from "@/components/sections/GetItSold";
import { SearchListings } from "@/components/sections/SearchListings";
import { Gallery } from "@/components/sections/Gallery";
import { Services } from "@/components/sections/Services";
import { ContactForm } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="bg-black min-h-screen w-full font-[var(--font-inter)] selection:bg-white/20 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <MarciIntro />
        <Stats />
        <GetItSold />
        <SearchListings />
        <Gallery />
        <Services />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
