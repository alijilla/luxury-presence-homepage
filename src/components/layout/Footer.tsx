import Link from "next/link";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { SiInstagram, SiYelp } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { SlSocialFacebook } from "react-icons/sl";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-12 px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Logo Text */}
        <Link href="/" aria-label="Marci Metzger" className="group">
          <h2 className="font-[var(--font-playfair)] text-2xl text-white tracking-widest font-medium group-hover:opacity-70 transition-opacity duration-500">
            MARCI METZGER
          </h2>
        </Link>
        
        {/* Copyright */}
        <p suppressHydrationWarning className="text-[10px] uppercase tracking-widest text-white/40 text-center order-3 md:order-2">
           © {currentYear} Marci Metzger &middot; The Ridge Realty Group
        </p>

        {/* Socials */}
        <div className="flex items-center gap-6 order-2 md:order-3">
          <a href="https://www.yelp.com/biz/xr3yQN_m2SgO0R_7S6p62w" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors duration-500">
            <SiYelp className="h-4 w-4" />
          </a>
          <a href="https://www.linkedin.com/in/marci-metzger-30642496/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors duration-500">
            <FaLinkedinIn className="h-4 w-4" />
          </a>
          <a href="https://www.instagram.com/marcimetzger_theridge/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors duration-500">
            <SiInstagram className="h-4 w-4" />
          </a>
          <a href="https://www.facebook.com/MarciHomes/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors duration-500">
            <SlSocialFacebook className="h-4 w-4" />
          </a>
          <a href="tel:(206) 919-6886" className="text-white/40 hover:text-white transition-colors duration-500">
            <PhoneIcon className="h-4 w-4" />
          </a>
        </div>

      </div>
    </footer>
  );
}
