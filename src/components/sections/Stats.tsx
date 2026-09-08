import { Card} from "@/components/ui/card"
export function Stats() {
  return (<section>
    <div className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-3">

  <Card className="rounded-none border-0 bg-black p-8 text-center">
    <p className="font-[var(--font-cormorant)] text-5xl text-white">
      90
    </p>
    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/50">
      Clients Helped
    </p>
  </Card>

  <Card className="rounded-none border-0 bg-black p-8 text-center">
    <p className="font-[var(--font-cormorant)] text-5xl text-white">
      $28.5M
    </p>
    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/50">
      Sales in 2021
    </p>
  </Card>

  <Card className="rounded-none border-0 bg-black p-8 text-center">
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
