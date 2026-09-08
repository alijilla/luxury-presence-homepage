"use client"
import { useState, useEffect } from "react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useForm, Controller } from "react-hook-form"
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
      className={`mt-6 transition-all duration-700 ease-in-out border-emerald-500/50 bg-emerald-500/10 text-emerald-600 rounded-none ${
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
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setErrorMsg(null);
    setMessageSent(false);

    // Mock API delay for frontend-only assignment
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Simulate successful submission
    setMessageSent(true);
    reset();
  }

  return (
    <section id="contact" className="bg-black py-32 lg:py-48">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      
      {/* Top Bento Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        
        {/* Left Card: Info */}
        <div className="bg-[#080808] p-10 md:p-14 rounded-none border border-white/5 flex flex-col justify-between">
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
        <div className="bg-[#080808] rounded-none border border-white/5 flex flex-col overflow-hidden">
           <div className="relative min-h-[400px] lg:min-h-0 flex-grow">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51524.37319760776!2d-116.02738380432132!3d36.18423400744251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c6398c318f750d%3A0x1e826042732d87c6!2s3190%20NV-160%2C%20Pahrump%2C%20NV%2089048%2C%20USA!5e0!3m2!1sen!2sph!4v1788897760136!5m2!1sen!2sph"  className="absolute inset-0 w-full h-full" style={{ border: "0" }} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
          </div>
          <div className="p-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-t border-white/5 bg-[#080808] z-10">
            <div>
              <p className="text-[9px] uppercase tracking-[0.25em] text-white/50 mb-2 font-semibold">The Ridge Realty Group</p>
              <p className="font-[var(--font-cormorant)] text-3xl text-white tracking-wide">Pahrump, Nevada</p>
            </div>
            <a href="https://www.google.com/maps?daddr=3190+HW-160,+Suite+F,+Pahrump,+Nevada+89048,+United+States" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="rounded-none border-white/20 bg-transparent text-white hover:bg-white hover:text-black text-[10px] uppercase tracking-widest font-semibold px-6 py-5">
                Directions &rarr;
              </Button>
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bento Row: Form */}
      <div className="bg-[#080808] p-10 md:p-14 rounded-none border border-white/5">
        <p className="text-[10px] uppercase tracking-[0.25em] text-white/50 mb-10 font-semibold">Send a message</p>
        
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              <label htmlFor="name" className="text-[11px] font-medium text-white/60">Name</label>
              <Input id="name" placeholder="Your name" className="bg-transparent border-white/10 text-white placeholder:text-white/20 h-12 rounded-none focus-visible:ring-1 focus-visible:ring-white/30" {...register("name")} />
              {errors.name && <p className="text-xs text-red-400/80">{errors.name.message}</p>}
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="email" className="text-[11px] font-medium text-white/60">Email</label>
              <Input id="email" placeholder="you@example.com" className="bg-transparent border-white/10 text-white placeholder:text-white/20 h-12 rounded-none focus-visible:ring-1 focus-visible:ring-white/30" {...register("email")} />
              {errors.email && <p className="text-xs text-red-400/80">{errors.email.message}</p>}
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="phone" className="text-[11px] font-medium text-white/60">Phone</label>
              <Input id="phone" placeholder="Your phone number" className="bg-transparent border-white/10 text-white placeholder:text-white/20 h-12 rounded-none focus-visible:ring-1 focus-visible:ring-white/30" {...register("phone")} />
              {errors.phone && <p className="text-xs text-red-400/80">{errors.phone.message}</p>}
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-[11px] font-medium text-white/60">I&apos;m interested in</label>
              <Controller
                control={control}
                name="interest"
                render={({ field }) => (
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className="bg-transparent border-white/10 text-white h-12 rounded-none focus:ring-1 focus:ring-white/30">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#080808] border-white/10 text-white rounded-none">
                      <SelectItem value="buying">Buying</SelectItem>
                      <SelectItem value="selling">Selling</SelectItem>
                      <SelectItem value="investing">Investing</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.interest && <p className="text-xs text-red-400/80">{errors.interest?.message}</p>}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="message" className="text-[11px] font-medium text-white/60">Message</label>
            <Textarea id="message" rows={5} placeholder="How can I help?" className="resize-none bg-transparent border-white/10 text-white placeholder:text-white/20 rounded-none focus-visible:ring-1 focus-visible:ring-white/30" {...register("message")} />
            {errors.message && <p className="text-xs text-red-400/80">{errors.message.message}</p>}
          </div>

          <div>
            <Button type="submit" variant="outline" className="rounded-none bg-transparent border-white/20 hover:bg-white hover:text-black text-white text-[10px] uppercase tracking-widest font-semibold px-8 py-6 mt-2" disabled={isSubmitting}>
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
    </section>
  );
}