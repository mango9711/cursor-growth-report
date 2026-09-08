import { Hero } from "@/components/hero"
import { Phases } from "@/components/phases"
import { Timeline } from "@/components/timeline"
import { Themes } from "@/components/themes"
import { Growth } from "@/components/growth"
import { Playbook } from "@/components/playbook"
import { ReportNav } from "@/components/report-nav"

export default function Home() {
  return (
    <>
      <ReportNav />
      <main className="flex-1">
        <Hero />
        <Phases />
        <Timeline />
        <Themes />
        <Growth />
        <Playbook />
      </main>
      <footer className="px-4 py-10 sm:px-6">
        <div className="mx-auto max-w-6xl text-sm leading-7 text-muted-foreground">
          <p>
            观察窗口：2025-09-08 至 2026-09-08。以 Cursor
            官方 Changelog 为主，交叉 Composer 博客与 CLI
            更新说明。本页是增长视角的结构化解读，不是官方财务或份额陈述。
          </p>
          <p className="mt-2">
            本地运行：<code className="text-foreground">npm install</code> 后执行{" "}
            <code className="text-foreground">npm run dev</code>。
          </p>
        </div>
      </footer>
    </>
  )
}
