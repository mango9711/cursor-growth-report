import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { applicationMatrix, playbook } from "@/lib/playbook"

export function Playbook() {
  return (
    <section id="playbook" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="font-heading text-2xl tracking-tight sm:text-3xl">
          可借鉴的产品策略
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
          不要复制「再做一个 Agent
          IDE」。要复制的是决策结构：入口放在哪、权限何时要、默认开什么、如何用成本曲线改行为、如何从插件变成系统。
        </p>
        <Accordion className="mt-8 rounded-2xl border border-border bg-card px-4 sm:px-5">
          {playbook.map((item, index) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="py-4 text-left hover:no-underline">
                <span className="pr-4">
                  <span className="mr-2 text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.strategy}
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-4 pb-4 md:grid-cols-2">
                  <div>
                    <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                      为何有效
                    </p>
                    <p className="mt-2 text-sm leading-7">{item.whyItWorked}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                      如何复用
                    </p>
                    <p className="mt-2 text-sm leading-7">{item.howToReuse}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                    潜在应用场景
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-muted-foreground">
                    {item.scenes.map((scene) => (
                      <li key={scene}>{scene}</li>
                    ))}
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <h3 className="mt-12 font-heading text-xl tracking-tight">
          按产品类型的落地矩阵
        </h3>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {applicationMatrix.map((row) => (
            <article
              key={row.audience}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <h4 className="font-medium">{row.audience}</h4>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-muted-foreground">
                {row.moves.map((move) => (
                  <li key={move}>{move}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
