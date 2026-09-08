import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/sections/Hero"
import {MarciIntro} from "@/components/sections/MarciIntro"

export default function Home() {
  return (
    <div>
      <main className="bg-foreground/95">
        <Navbar />
        <section className="relative min-h-screen bg-[url('/bg_image.png')] bg-cover bg-center ">
          <Hero />
        </section>
         <MarciIntro />
        <section></section>
        <section></section>

        <footer>
          <Footer />
        </footer>
      </main>
    </div>
  )
}
