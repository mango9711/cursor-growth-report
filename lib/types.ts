export type ThemeTag =
  | "功能创新"
  | "交互优化"
  | "性能改进"
  | "生态整合"
  | "企业治理"
  | "定价增长"

export type Release = {
  id: string
  date: string
  version: string
  title: string
  summary: string
  tags: ThemeTag[]
  items: {
    category: ThemeTag
    title: string
    detail: string
  }[]
}

export type GrowthLens =
  | "用户获取"
  | "激活转化"
  | "留存复用"
  | "付费与扩容"
  | "粘性与扩展"

export type Insight = {
  id: string
  lens: GrowthLens
  title: string
  cursorMove: string
  growthRead: string
  metricHint: string
}

export type PlaybookItem = {
  id: string
  strategy: string
  whyItWorked: string
  howToReuse: string
  scenes: string[]
}
