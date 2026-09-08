import { Card} from "@/components/ui/card"
export function Stats() {
  return (<section>
    <div className="grid grid-cols-3 md:grid-cols-3 items-center gap-px bg-white/10 ">

  <Card className="rounded-none border-0 bg-black/80 p-8 text-center">
    <p className="font-[var(--font-cormorant)] text-5xl text-white">
      90
    </p>
    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/50">
      Clients Helped in 2021
    </p>
  </Card>

  <Card className="rounded-none border-0 bg-black/80 p-8 text-center">
    <p className="font-[var(--font-cormorant)] text-5xl text-white">
      $28.5M
    </p>
    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/50">
      Closed sales, last 5 years
    </p>
  </Card>

  <Card className="rounded-none border-0 bg-black/80 p-8 text-center">
    <p className="font-[var(--font-cormorant)] text-5xl text-white">
      ~30
    </p>
    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/50">
      Years Experience
    </p>
  </Card>

</div>
  </section>);
}
