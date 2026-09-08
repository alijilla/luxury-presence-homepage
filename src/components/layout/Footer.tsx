
import Image from "next/image";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { EnvelopeIcon, ArrowDownTrayIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { SiGithub, SiInstagram, SiYelp } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { SlSocialFacebook } from "react-icons/sl";


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className=" bg-foreground border-t border-border mt-16 md:mt-24 mx-auto px-6 lg:px-8 py-5 ">
   
      
     
      <div className="flex flex-row gap-6 md:basis-1/2 ">
        <div className="space-y-4">
        <Link href="/" aria-label="Marci Metzger Homes">
          <Image
            src="/header_logo.png"
            alt="Marci Metzger Homes"
            width={220}
            height={75}
            className="h-auto w-[180px] invert"
            priority
          />
        </Link>
        </div>
        <div className="flex-1"></div>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 tracking-[0.4em]">
          <a href="https://www.yelp.com/biz/xr3yQN_m2SgO0R_7S6p62w" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors" aria-label="GitHub">
            <SiYelp className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/in/marci-metzger-30642496/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors" aria-label="LinkedIn">
            <FaLinkedinIn className="h-5 w-5" />
          </a>
          <a href="https://www.instagram.com/marcimetzger_theridge/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors" aria-label="Instagram">
            <SiInstagram className="h-5 w-5" />
          </a>
          <a href="https://www.facebook.com/MarciHomes/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors" aria-label="Facebook">
            <SlSocialFacebook className="h-5 w-5" />
          </a>

          <span className="w-px h-5 bg-border mx-1" />

          <a href="tel:(206) 919-6886" className="text-muted-foreground hover:text-white transition-colors" aria-label="Phone">
            <PhoneIcon className="h-5 w-5" />
          </a>
          
        </div>
      </div> 
      <Separator className="bg-muted-foreground"/>
      <div className="pb-0 lg:px-8 py-8 flex flex-col items-center justify-center tracking-[0.1em]">
        <p suppressHydrationWarning className="text-[10px] text-muted-foreground text-center">
           © {currentYear} <span className="font-semibold">Marci Metzger — The Ridge Realty Group</span>. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

