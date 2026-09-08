import { Card } from "@/components/ui/card"
export function Stats() {
  return (
    <section className="border-y border-white/10 bg-white/10 backdrop-blur-sm">
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 max-w-7xl mx-auto">

        <Card className="rounded-none border-0 bg-transparent p-12 text-center shadow-none transition-colors hover:bg-white/5">
          <p className="font-[var(--font-cormorant)] text-6xl text-white">
            90
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
            Clients Helped in 2021
          </p>
        </Card>

        <Card className="rounded-none border-0 bg-transparent p-12 text-center shadow-none transition-colors hover:bg-white/5">
          <p className="font-[var(--font-cormorant)] text-6xl text-white">
            $28.5M
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
            Closed sales, last 5 years
          </p>
        </Card>

        <Card className="rounded-none border-0 bg-transparent p-12 text-center shadow-none transition-colors hover:bg-white/5">
          <p className="font-[var(--font-cormorant)] text-6xl text-white">
            ~30
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
            Years Experience
          </p>
        </Card>

      </div>
    </section>
  );
}
