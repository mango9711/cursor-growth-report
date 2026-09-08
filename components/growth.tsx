import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { insights } from "@/lib/insights"
import type { GrowthLens } from "@/lib/types"

const order: GrowthLens[] = [
  "用户获取",
  "激活转化",
  "留存复用",
  "付费与扩容",
  "粘性与扩展",
]

export function Growth() {
  return (
    <section id="growth" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="font-heading text-2xl tracking-tight sm:text-3xl">
          增长启发点
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
          每一条都拆成：Cursor 实际做了什么、增长上应如何读、建议盯的指标。指标是观察建议，不是官方披露。
        </p>
        <div className="mt-8 space-y-10">
          {order.map((lens) => (
            <div key={lens}>
              <h3 className="text-lg font-medium">{lens}</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {insights
                  .filter((item) => item.lens === lens)
                  .map((item) => (
                    <Card key={item.id} className="shadow-none">
                      <CardHeader className="gap-2">
                        <Badge variant="secondary">{item.lens}</Badge>
                        <CardTitle className="text-base leading-6">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3 text-sm leading-6">
                        <p>
                          <span className="font-medium text-foreground">
                            产品动作。
                          </span>{" "}
                          <span className="text-muted-foreground">
                            {item.cursorMove}
                          </span>
                        </p>
                        <p>
                          <span className="font-medium text-foreground">
                            增长读法。
                          </span>{" "}
                          <span className="text-muted-foreground">
                            {item.growthRead}
                          </span>
                        </p>
                        <p className="rounded-lg bg-secondary/60 px-3 py-2 text-muted-foreground">
                          {item.metricHint}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
