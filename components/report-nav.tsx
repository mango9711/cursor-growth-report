"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const links = [
  { href: "#overview", label: "总览" },
  { href: "#timeline", label: "迭代时间线" },
  { href: "#themes", label: "四维解读" },
  { href: "#growth", label: "增长启发" },
  { href: "#playbook", label: "可借鉴策略" },
]

export function ReportNav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#overview" className="text-sm font-medium tracking-tight">
          Cursor 一年迭代 · 增长笔记
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="inline-flex size-8 items-center justify-center rounded-lg hover:bg-muted md:hidden">
            <Menu className="size-4" />
            <span className="sr-only">打开目录</span>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>目录</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-3 px-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
