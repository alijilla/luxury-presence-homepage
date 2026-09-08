
import Image from "next/image";
import Link from "next/link";

export function MarciIntro() {
  return (
  <section>
<div className="overflow-hidden rounded-md mt-10 mx-auto px-10">
  <Image
    src="/marci.png"
    alt="Marci J. Metzger"
    width={1254}
    height={1254}
    className="h-[350px] w-[350px] object-cover  "
  />

</div>
<div>
  <p className="text-xs uppercase tracking-[0.2em] text-white/50">
    About
  </p>

  <h2 className="mt-4 font-[var(--font-cormorant)] text-5xl text-white">
    Marci J. Metzger
  </h2>

  <p className="mt-2 text-sm text-white/60">
    Realtor for nearly three decades
  </p>

  <p className="mt-8 max-w-xl leading-7 text-white/70">
    Marci was a REALTOR, then licensed Broker, in Washington State.
    Now, she is enjoying the sunshine, and helping clients in Southern
    Nevada...
  </p>
</div>
  </section>);
}
