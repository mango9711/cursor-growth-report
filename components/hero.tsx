import { REPORT_RANGE, phases, releases, sources } from "@/lib/releases"

export function Hero() {
  const featureCount = releases.reduce((n, r) => n + r.items.length, 0)

  return (
    <section id="overview" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.4fr_0.8fr] lg:py-20">
        <div>
          <p className="text-xs font-medium tracking-[0.18em] text-amber-800/80 uppercase dark:text-amber-200/80">
            用户增长产品备忘 · 观察窗口 {REPORT_RANGE.label}
          </p>
          <h1 className="mt-4 font-heading text-3xl leading-[1.2] tracking-tight text-balance sm:text-5xl">
            Cursor 这一年：从「会写代码的编辑器」长成「可委托的软件工厂」
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            本报告梳理官方 Changelog
            中窗口期内的主要版本与产品动作，按功能创新、交互优化、性能改进、生态整合拆开，再映射到获取、激活、留存、付费与粘性。结论面向增长产品经理：可迁移的策略，而不是功能说明书。
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <Stat value={String(releases.length)} label="关键发版节点" />
            <Stat value={String(featureCount)} label="被记录的能力条目" />
            <Stat value="5" label="产品阶段" />
            <Stat value="10" label="可复用增长打法" />
          </div>
        </div>
        <aside className="rounded-2xl border border-border bg-card p-5 shadow-sm">
          <p className="text-sm font-medium">一条增长主线</p>
          <ol className="mt-4 space-y-3">
            {phases.map((phase, i) => (
              <li key={phase.id} className="flex gap-3 text-sm leading-6">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-medium">
                  {i + 1}
                </span>
                <span>
                  <span className="font-medium">{phase.name}</span>
                  <span className="mt-0.5 block text-muted-foreground">
                    {phase.period}
                  </span>
                </span>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-xs leading-5 text-muted-foreground">
            材料主要来自{" "}
            {sources.map((s, i) => (
              <span key={s.href}>
                {i > 0 ? "、" : ""}
                <a
                  className="underline underline-offset-2"
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {s.label}
                </a>
              </span>
            ))}
            。第三方评测仅作交叉提示，不以未证实的并购细节作为策略前提。
          </p>
        </aside>
      </div>
    </section>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="min-w-[140px] rounded-xl border border-border bg-secondary/40 px-4 py-3">
      <div className="font-heading text-2xl tracking-tight">{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  )
}
