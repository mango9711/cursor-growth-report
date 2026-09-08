import { phases } from "@/lib/releases"

export function Phases() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="font-heading text-2xl tracking-tight sm:text-3xl">
          五个阶段，同一种野心
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
          表面是功能密度极高的发版节奏，底层是连续把「人必须盯着的步骤」外包给系统：先会规划与验证，再能编排与并行，然后出现在协作入口，最后把代码、环境和机群收进自己的平台。
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {phases.map((phase) => (
            <article
              key={phase.id}
              className="flex flex-col rounded-2xl border border-border bg-card p-4"
            >
              <p className="text-xs text-muted-foreground">{phase.period}</p>
              <h3 className="mt-2 text-base font-medium">{phase.name}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {phase.thesis}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
