"use client"

import { useMemo, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { releases } from "@/lib/releases"
import type { ThemeTag } from "@/lib/types"

const filters: Array<"全部" | ThemeTag> = [
  "全部",
  "功能创新",
  "交互优化",
  "性能改进",
  "生态整合",
  "企业治理",
  "定价增长",
]

export function Timeline() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("全部")

  const visible = useMemo(() => {
    if (filter === "全部") return releases
    return releases.filter(
      (r) => r.tags.includes(filter) || r.items.some((i) => i.category === filter)
    )
  }, [filter])

  return (
    <section id="timeline" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="font-heading text-2xl tracking-tight sm:text-3xl">
          迭代内容摘要
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
          按官方时间线排列。点开节点可看分类明细。筛选只改变列表，不改变报告其余部分的结论。
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {filters.map((f) => (
            <Button
              key={f}
              size="sm"
              variant={filter === f ? "default" : "outline"}
              onClick={() => setFilter(f)}
            >
              {f}
            </Button>
          ))}
        </div>
        <Accordion className="mt-8 rounded-2xl border border-border bg-card px-4 sm:px-5">
          {visible.map((release) => (
            <AccordionItem key={release.id} value={release.id}>
              <AccordionTrigger className="items-center py-4 hover:no-underline">
                <div className="flex flex-1 flex-col gap-2 pr-4 sm:flex-row sm:items-center sm:gap-4">
                  <span className="w-28 shrink-0 text-xs text-muted-foreground tabular-nums">
                    {release.date}
                  </span>
                  <span className="flex-1 text-left">
                    <span className="block font-medium">
                      {release.version}
                      <span className="text-muted-foreground"> · </span>
                      {release.title}
                    </span>
                    <span className="mt-1 hidden text-sm font-normal text-muted-foreground sm:block">
                      {release.summary}
                    </span>
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm leading-6 text-muted-foreground sm:hidden">
                  {release.summary}
                </p>
                <div className="mb-3 flex flex-wrap gap-1.5">
                  {release.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <ul className="space-y-3 pb-4">
                  {release.items
                    .filter((item) => filter === "全部" || item.category === filter || release.tags.includes(filter as ThemeTag))
                    .map((item) => (
                      <li key={item.title} className="rounded-xl bg-secondary/50 p-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge variant="outline">{item.category}</Badge>
                          <p className="text-sm font-medium">{item.title}</p>
                        </div>
                        <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                          {item.detail}
                        </p>
                      </li>
                    ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
