"use client"
import { useState, useEffect } from "react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { formSchema } from "@/lib/contact";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

function MessageSentAlert() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Alert
      className={`mt-6 transition-all duration-700 ease-in-out border-emerald-500/50 bg-emerald-500/10 text-emerald-600 ${
        visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-2 scale-[0.98]"
      }`}
    >
      <CheckCircleIcon className="h-4 w-4 text-emerald-600" />
      <AlertTitle>Message sent</AlertTitle>
      <AlertDescription>
        Your message was successfully sent!
      </AlertDescription>
    </Alert>
  );
}

export function ContactForm() {
  const [messageSent, setMessageSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setErrorMsg(null);
    setMessageSent(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      
      const data = await res.json();

      if (data.success) {
        setMessageSent(true);
        reset();
      } else {
        setErrorMsg(data.message ?? "Something went wrong.");
      }
    } catch (err) {
      setErrorMsg("Failed to send message. Please try again.");
    }
  }

  return (
    <div id="contact" className="mx-auto max-w-6xl px-6 py-24">
      
      {/* Top Bento Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        
        {/* Left Card: Info */}
        <div className="bg-[#080808] p-10 md:p-14 rounded-sm border border-white/5 flex flex-col justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/50 mb-8 font-semibold">Call or Visit</p>
            <h2 className="font-[var(--font-cormorant)] text-5xl md:text-6xl text-white font-medium tracking-tight leading-tight mb-6">
              Let&apos;s talk <br/>
              <span className="italic">real estate.</span>
            </h2>
            <p className="text-sm text-white/70 leading-relaxed font-light max-w-sm mb-12">
              Whether you&apos;re ready to make a move or simply curious about the market, I&apos;m happy to help.
            </p>
          </div>

          <div className="divide-y divide-white/10 border-t border-white/10">
            <div className="py-5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1.5">Phone</p>
              <p className="font-[var(--font-cormorant)] text-xl text-white tracking-wide">206-919-6886</p>
            </div>
            <div className="py-5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1.5">Office</p>
              <p className="font-[var(--font-cormorant)] text-xl text-white tracking-wide">The Ridge Realty Group</p>
            </div>
            <div className="py-5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1.5">Address</p>
              <p className="font-[var(--font-cormorant)] text-xl text-white tracking-wide">3190 HW-160, Suite F<br/>Pahrump, Nevada 89048</p>
            </div>
            <div className="pt-5 pb-2">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1.5">Hours</p>
              <p className="font-[var(--font-cormorant)] text-xl text-white tracking-wide">Daily &middot; 8:00 AM–7:00 PM</p>
            </div>
          </div>
        </div>

        {/* Right Card: Map */}
        <div className="bg-[#080808] rounded-sm border border-white/5 flex flex-col overflow-hidden">
          <div className="flex-grow bg-[#2b3026] relative min-h-[300px]">
             {/* Fallback pattern in case map image isn't available immediately */}
             <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)', backgroundPosition: '0 0, 10px 10px', backgroundSize: '20px 20px' }}></div>
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-black/40">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
             </div>
          </div>
          <div className="p-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-t border-white/5">
            <div>
              <p className="text-[9px] uppercase tracking-[0.25em] text-white/50 mb-2 font-semibold">The Ridge Realty Group</p>
              <p className="font-[var(--font-cormorant)] text-3xl text-white tracking-wide">Pahrump, Nevada</p>
            </div>
            <a href="https://maps.google.com/?q=3190+HW-160,+Suite+F,+Pahrump,+NV+89048" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="rounded-none border-white/20 hover:bg-white hover:text-black text-[10px] uppercase tracking-widest font-semibold px-6 py-5">
                Directions &rarr;
              </Button>
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bento Row: Form */}
      <div className="bg-[#080808] p-10 md:p-14 rounded-sm border border-white/5">
        <p className="text-[10px] uppercase tracking-[0.25em] text-white/50 mb-10 font-semibold">Send a message</p>
        
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              <label htmlFor="name" className="text-[11px] font-medium text-white/60">Name</label>
              <Input id="name" placeholder="Your name" className="bg-transparent border-white/10 text-white placeholder:text-white/20 h-12 rounded-sm focus-visible:ring-1 focus-visible:ring-white/30" {...register("name")} />
              {errors.name && <p className="text-xs text-red-400/80">{errors.name.message}</p>}
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="email" className="text-[11px] font-medium text-white/60">Email</label>
              <Input id="email" placeholder="you@example.com" className="bg-transparent border-white/10 text-white placeholder:text-white/20 h-12 rounded-sm focus-visible:ring-1 focus-visible:ring-white/30" {...register("email")} />
              {errors.email && <p className="text-xs text-red-400/80">{errors.email.message}</p>}
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="phone" className="text-[11px] font-medium text-white/60">Phone</label>
              <Input id="phone" placeholder="Your phone number" className="bg-transparent border-white/10 text-white placeholder:text-white/20 h-12 rounded-sm focus-visible:ring-1 focus-visible:ring-white/30" {...register("phone")} />
              {errors.phone && <p className="text-xs text-red-400/80">{errors.phone.message}</p>}
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-[11px] font-medium text-white/60">I&apos;m interested in</label>
              <Select onValueChange={(val) => setValue("interest", val)}>
                <SelectTrigger className="bg-transparent border-white/10 text-white h-12 rounded-sm focus:ring-1 focus:ring-white/30">
                  <SelectValue placeholder="Buying" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="buying">Buying</SelectItem>
                  <SelectItem value="selling">Selling</SelectItem>
                  <SelectItem value="investing">Investing</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="message" className="text-[11px] font-medium text-white/60">Message</label>
            <Textarea id="message" rows={5} placeholder="How can I help?" className="resize-none bg-transparent border-white/10 text-white placeholder:text-white/20 rounded-sm focus-visible:ring-1 focus-visible:ring-white/30" {...register("message")} />
            {errors.message && <p className="text-xs text-red-400/80">{errors.message.message}</p>}
          </div>

          <div>
            <Button type="submit" variant="outline" className="rounded-sm border-white/20 hover:bg-white hover:text-black text-[10px] uppercase tracking-widest font-semibold px-8 py-6 mt-2" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin mr-2 h-4 w-4" />
                  Sending...
                </>
              ) : (
                "Send Message \u2192"
              )}
            </Button>
          </div>
        </form>

        {messageSent && <MessageSentAlert />}
        {errorMsg && <p className="text-sm text-red-400/80 mt-6">{errorMsg}</p>}
      </div>
    </div>
  );
}