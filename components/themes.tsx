import { themeAnalyses } from "@/lib/insights"

export function Themes() {
  return (
    <section id="themes" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="font-heading text-2xl tracking-tight sm:text-3xl">
          四维解读：这些更新在增长上到底做了什么
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
          功能、交互、性能、生态不是四份独立路线图，而是同一漏斗的不同杠杆：功能制造理由，交互保护习惯，性能决定敢不敢默认打开，生态决定走不走得掉。
        </p>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {themeAnalyses.map((theme) => (
            <article
              key={theme.id}
              className="rounded-2xl border border-border bg-card p-5 sm:p-6"
            >
              <p className="text-xs font-medium tracking-wide text-amber-800 uppercase dark:text-amber-200/80">
                {theme.kicker}
              </p>
              <h3 className="mt-2 text-lg font-medium">{theme.title}</h3>
              <ul className="mt-4 space-y-3">
                {theme.points.map((point) => (
                  <li
                    key={point}
                    className="text-sm leading-7 text-muted-foreground"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
