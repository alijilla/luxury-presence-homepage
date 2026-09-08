import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/sections/Hero"
import {MarciIntro} from "@/components/sections/MarciIntro"
import {Stats} from "@/components/sections/Stats"
import  {ContactForm} from "@/components/sections/Contact"
import { GetItSold } from "@/components/sections/GetItSold"

export default function Home() {
  return (
    <div>
      <main className="bg-foreground/95 min-h-screen w-full overflow-hidden">
        <Navbar />
        <section className="relative bg-[url('/bg_image.png')] bg-cover bg-center ">
          <Hero />
        </section>
         <MarciIntro />
         <Stats />
         <GetItSold/>
        <section>
          <ContactForm />
        </section>

        <footer>
          <Footer />
        </footer>
      </main>
    </div>
  )
}
