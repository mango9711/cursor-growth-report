import type { Release } from "./types"

export const REPORT_RANGE = {
  start: "2025-09-08",
  end: "2026-09-08",
  label: "2025年9月8日 — 2026年9月8日",
}

export const phases = [
  {
    id: "p1",
    period: "2025.09 – 2025.10",
    name: "从编辑器到 Agent IDE",
    thesis:
      "用 Plan Mode、内置浏览器与 Composer 把「写代码的工具」改写成「能规划、能验证、能并行干活」的工作台，完成品类心智切换。",
  },
  {
    id: "p2",
    period: "2025.11 – 2026.02",
    name: "把 Agent 做成可编排系统",
    thesis:
      "评审、调试、Skills、Subagents、插件市场依次落地，让能力从单次对话变成可复用的组织资产。",
  },
  {
    id: "p3",
    period: "2026.03 – 2026.04",
    name: "Agent 成为一等公民",
    thesis:
      "Composer 2 压低多智能体成本，Cursor 3.0 用 Agents Window 把 IDE 翻转为 Agent 运行时。",
  },
  {
    id: "p4",
    period: "2026.05 – 2026.07",
    name: "工作流外溢到协作入口",
    thesis:
      "PR、Slack、Jira、Teams、iOS、自动化触发器把产品铺到开发者已经在的地方，降低获客与日常触达成本。",
  },
  {
    id: "p5",
    period: "2026.08 – 2026.09",
    name: "从工具到软件工厂",
    thesis:
      "Origin 托管代码、Builds 预热环境、Subscriptions/Goal 持续干活、自托管机群与无仓库起步，把编辑器做成端到端交付平台。",
  },
]

export const releases: Release[] = [
  {
    id: "1.6",
    date: "2025-09-12",
    version: "1.6",
    title: "斜杠命令、摘要与 Agent 终端",
    summary:
      "窗口期内最早的正式版本线之一：把 Agent 交互从「聊天框」推进到可命令化、可摘要、可在终端里稳定执行。",
    tags: ["功能创新", "交互优化", "性能改进"],
    items: [
      {
        category: "功能创新",
        title: "斜杠命令与会话摘要",
        detail:
          "用结构化指令降低提示词门槛，长会话可被压缩，为后续 Skills / Automate 的命令化交互打下基础。",
      },
      {
        category: "交互优化",
        title: "Agent 终端可靠性",
        detail:
          "密集修复 Git、Shell、MCP 连接与 zsh/PowerShell 环境问题，减少「Agent 卡住」导致的任务中断。",
      },
      {
        category: "性能改进",
        title: "文件加载与渲染",
        detail: "多轮补丁针对终端渲染、文件加载和 MCP 稳定性，把日常使用摩擦压下去。",
      },
    ],
  },
  {
    id: "1.7",
    date: "2025-09-29",
    version: "1.7",
    title: "浏览器控制、Plan Mode 与 Hooks",
    summary:
      "Agent 开始「看见界面、先规划再动手」，Hooks 把企业治理钩进运行时；后续 50+ 补丁把 Beta 磨到可日常使用。",
    tags: ["功能创新", "交互优化", "企业治理"],
    items: [
      {
        category: "功能创新",
        title: "Agent 浏览器（Beta）",
        detail:
          "截图、改 UI、排查前端问题可在编辑器内完成，验证闭环从「看 diff」变成「看真实页面」。",
      },
      {
        category: "功能创新",
        title: "Plan Mode",
        detail:
          "复杂任务先写详细计划再执行，显著拉长单次 Agent 可承担的工作跨度。",
      },
      {
        category: "企业治理",
        title: "Hooks（Beta）与团队规则",
        detail:
          "用脚本审计、拦截命令、脱敏；仪表盘下发全局规则与 Bugbot 规则，组织开始能「管住」Agent。",
      },
      {
        category: "生态整合",
        title: "Prompt Deeplink 与 Bugbot PR 摘要",
        detail:
          "可分享提示词链接用于文档/入职；GitHub PR 自动生成并随推送更新摘要。",
      },
      {
        category: "交互优化",
        title: "Agent 提示补全与菜单栏监控",
        detail:
          "按最近改动补全提示并一键挂文件；菜单栏查看 Agent 状态，减少切窗口成本。",
      },
    ],
  },
  {
    id: "2.0",
    date: "2025-10-29",
    version: "2.0",
    title: "Multi-Agents、Composer 与安全默认",
    summary:
      "年度第一场品类发布：最多 8 路并行 Agent、自研 Composer、浏览器与沙箱终端转正，Cloud Agents 成为正式叙事。",
    tags: ["功能创新", "性能改进", "企业治理"],
    items: [
      {
        category: "功能创新",
        title: "最多 8 个并行 Agent",
        detail:
          "基于 git worktree 或远程机隔离代码副本，同一提示可分叉多路实现，从「一个助手」变成「一支小队」。",
      },
      {
        category: "功能创新",
        title: "Composer 第一代",
        detail:
          "面向 Agent 循环优化的自研模型，官方称较同等智力模型快约 4 倍，把速度本身做成卖点。",
      },
      {
        category: "功能创新",
        title: "浏览器与沙箱终端 GA",
        detail:
          "企业可用内嵌浏览器选 DOM 交给 Agent；macOS 默认沙箱执行非白名单命令（工作区读写、默认无外网）。",
      },
      {
        category: "交互优化",
        title: "语音、提示词胶囊、自采集上下文",
        detail:
          "语音控 Agent；文件目录以胶囊展示；大量 @ 引用被拿掉，Agent 自己找上下文，降低新用户学习成本。",
      },
      {
        category: "性能改进",
        title: "LSP 与内存",
        detail:
          "全语言 LSP 加载显著加快；Python/TS 按内存动态提额；修复泄漏；findFiles 有界并发批处理。",
      },
      {
        category: "企业治理",
        title: "团队命令、Hooks 分发、审计日志",
        detail:
          "仪表盘集中规则/命令；沙箱网络与 git 权限可团队强制；管理员事件可追溯。Background Agents 更名为 Cloud Agents。",
      },
    ],
  },
  {
    id: "2.1",
    date: "2025-11-21",
    version: "2.1",
    title: "计划澄清、编辑器内评审与 Instant Grep",
    summary:
      "把「想清楚再写」和「写完先查」做成默认路径，并用检索速度支撑更长的 Agent 循环。",
    tags: ["交互优化", "功能创新", "性能改进"],
    items: [
      {
        category: "交互优化",
        title: "Plan Mode 澄清问题 UI",
        detail: "规划阶段用交互界面回答澄清问题，计划内支持 ⌘+F 搜索，减少开错工、返工。",
      },
      {
        category: "功能创新",
        title: "编辑器内 AI Code Review",
        detail:
          "针对本地改动找缺陷，与 GitHub/GitLab/Enterprise Server 上的 Bugbot 形成「提交前 + PR 上」双层网。",
      },
      {
        category: "性能改进",
        title: "Instant Grep（Beta）",
        detail: "Agent 的 grep 近乎即时，正则与词边界可用，代码库搜索从瓶颈变成背景能力。",
      },
      {
        category: "生态整合",
        title: "Cloud Agents 覆盖 GitLab / GitHub Enterprise",
        detail: "云端 Agent 进入更多企业源码托管环境，降低「我们仓库不在 GitHub.com」的采购否决。",
      },
    ],
  },
  {
    id: "2.2",
    date: "2025-12-10",
    version: "2.2",
    title: "Debug Mode、可视化编辑与多 Agent 评判",
    summary:
      "调试从「贴日志问模型」变成运行时仪器化；计划可视化；并行结果可被自动评选。",
    tags: ["功能创新", "交互优化"],
    items: [
      {
        category: "功能创新",
        title: "Debug Mode",
        detail:
          "跨技术栈做运行时日志埋点与根因分析，模型无关，把「修 bug」从聊天升级为可重复流程。",
      },
      {
        category: "交互优化",
        title: "浏览器布局/样式编辑",
        detail: "在 Cursor Browser 里改颜色、结构和 CSS，再交给 Agent 落代码，设计-开发同屏。",
      },
      {
        category: "功能创新",
        title: "计划内 Mermaid 与任务委派",
        detail: "计划流式生成示意图；勾选待办发给新 Agent；计划默认落盘可编辑。",
      },
      {
        category: "功能创新",
        title: "Multi-Agent Judging",
        detail: "并行跑完后自动评估并推荐方案，降低「开 8 路却不会选」的决策税。",
      },
    ],
  },
  {
    id: "2.3",
    date: "2025-12-22",
    version: "2.3",
    title: "布局定制与假期稳定性专项",
    summary:
      "主动放慢功能节奏，把扩展进程隔离、聊天可恢复、更新打扰下降做成留存动作。",
    tags: ["交互优化", "性能改进"],
    items: [
      {
        category: "性能改进",
        title: "进程隔离与崩溃恢复",
        detail:
          "用户扩展与内置索引进程分离；修复重启后历史聊天丢失；Agent 更尊重 auto-run / sandbox 偏好。",
      },
      {
        category: "交互优化",
        title: "少打扰的更新与多 Tab 浏览器",
        detail: "更新按钮冷却更长；内置浏览器支持多标签；Plan Mode 不再抢焦点。",
      },
    ],
  },
  {
    id: "2.4",
    date: "2026-01-22",
    version: "2.4",
    title: "Subagents、Skills 与图像生成",
    summary:
      "把复杂任务拆成可并行的专家代理，用 SKILL.md 沉淀团队方法，CLI 也补齐 Plan/Ask 与云交接。",
    tags: ["功能创新", "生态整合", "性能改进"],
    items: [
      {
        category: "功能创新",
        title: "默认 + 自定义 Subagents",
        detail:
          "内置研究代码库、跑终端、并行工作流的子代理；可用 `.cursor/agents/` 自定义并委派。",
      },
      {
        category: "生态整合",
        title: "Agent Skills（SKILL.md）",
        detail:
          "技能可声明工具、上下文与提示，斜杠菜单可调用，项目/团队可共享，后来的 Marketplace 货架从此长出来。",
      },
      {
        category: "功能创新",
        title: "图像生成与 Cursor Blame",
        detail: "对话内出 mockup/图示；AI blame 解释「为什么改」而不只是「谁改的」。",
      },
      {
        category: "性能改进",
        title: "Hooks 提速约 40 倍",
        detail: "钩子近乎即时，企业安全策略不再拖垮交互。",
      },
      {
        category: "功能创新",
        title: "CLI Plan/Ask 与 `&` 云交接",
        detail: "终端里规划/提问，任务后缀交给 Cloud Agents，编辑器不再是唯一入口。",
      },
    ],
  },
  {
    id: "2.5",
    date: "2026-02-17",
    version: "2.5",
    title: "插件市场、异步子代理与长时 Agent",
    summary:
      "第三方开始「长」在 Cursor 上；子代理可后台嵌套；长时云端 Agent 进入研究预览。",
    tags: ["生态整合", "功能创新", "定价增长"],
    items: [
      {
        category: "生态整合",
        title: "Plugins + Marketplace",
        detail:
          "插件打包 skills、subagents、MCP、hooks、rules；`/add-plugin` 安装。启动伙伴含 Amplitude、AWS、Figma、Linear、Stripe。",
      },
      {
        category: "功能创新",
        title: "异步可嵌套 Subagents",
        detail: "父代理不再阻塞等待；子代理可再生子代理，支撑大重构与多文件功能。",
      },
      {
        category: "企业治理",
        title: "沙箱网络/文件系统细粒度控制",
        detail: "可规定沙箱命令能访问的域名与目录，默认放行 clone/install 类常见操作。",
      },
      {
        category: "功能创新",
        title: "Long-Running Agents（研究预览）",
        detail: "可在 cursor.com/agents 上跑数小时：开分支、跑 CI、跟评审，IDE 合上也能继续。",
      },
      {
        category: "定价增长",
        title: "用量池拆分",
        detail: "Auto/Composer 池与 API 池分开，付费用户额度上调，账单可读性提升。",
      },
    ],
  },
  {
    id: "composer-2",
    date: "2026-03-19",
    version: "Composer 2",
    title: "自研模型进入「又强又便宜」区间",
    summary:
      "官方标价约 $0.50/$2.50 每百万 in/out token，Fast 变体更贵但成为默认。多智能体在经济上第一次可规模化。",
    tags: ["功能创新", "定价增长", "性能改进"],
    items: [
      {
        category: "功能创新",
        title: "Composer 2",
        detail:
          "面向编码的第二代自研模型；公开材料给出 CursorBench / Terminal-Bench 等大幅提升。另有 Glass 界面 alpha。",
      },
      {
        category: "定价增长",
        title: "把「开很多 Agent」变成可算的账",
        detail:
          "智力接近前沿、价格明显更低，使 /multitask、cloud subagents、automations 不再只是演示功能。",
      },
    ],
  },
  {
    id: "3.0",
    date: "2026-04-02",
    version: "3.0",
    title: "Agents Window 与 Design Mode",
    summary:
      "默认视图从文件树改为正在跑的 Agent。本地、worktree、云、SSH 收进同一控制面。",
    tags: ["功能创新", "交互优化"],
    items: [
      {
        category: "交互优化",
        title: "Agents Window",
        detail:
          "统一管理本地仓库、git worktree、Cloud、SSH 会话；可切回传统 IDE。Cloud Agents 离开编辑器表面，进入窗口。",
      },
      {
        category: "功能创新",
        title: "Design Mode",
        detail:
          "在浏览器里标注/框选 UI，⌘⇧D 开关，选区送进对话，设计师与前端共用同一 Agent 通道。",
      },
      {
        category: "功能创新",
        title: "/worktree 与 /best-of-n",
        detail:
          "隔离分支让 Agent 改；同一任务多模型多 worktree 对比结果，把「选模型」变成「选结果」。",
      },
    ],
  },
  {
    id: "3.1",
    date: "2026-04-13",
    version: "3.1",
    title: "平铺布局与批量语音",
    summary: "并行 Agent 需要新的注视方式：磁贴、更高质量 STT、云 Agent 先选分支。",
    tags: ["交互优化"],
    items: [
      {
        category: "交互优化",
        title: "Tiled Layout",
        detail: "分栏同时看多个 Agent，可拖拽、可持久化布局。",
      },
      {
        category: "交互优化",
        title: "Ctrl+M 批量语音转写",
        detail: "整段录音再转写，波形与计时可见，语音从玩具变成可交付输入。",
      },
    ],
  },
  {
    id: "canvas-cli",
    date: "2026-04-15",
    version: "3.x mid",
    title: "Interactive Canvases 与 CLI 侧聊",
    summary: "Agent 产出从纯文本扩到仪表盘/图表；CLI 增加 /debug、/btw、/config。",
    tags: ["功能创新", "交互优化"],
    items: [
      {
        category: "功能创新",
        title: "Canvases",
        detail: "仪表盘、表格、图示与实时数据同屏，适合规格探索和可视化汇报。",
      },
      {
        category: "交互优化",
        title: "CLI /btw 与 /debug",
        detail: "主任务不中断的旁路提问，以及运行时诊断，终端用户获得与 IDE 对等的心智模型。",
      },
    ],
  },
  {
    id: "3.2",
    date: "2026-04-24",
    version: "3.2",
    title: "/multitask、Worktrees 与多根工作区",
    summary: "IDE 被明确写成 Agent 执行运行时：队列改成舰队，一次会话打通前后端多仓。",
    tags: ["功能创新", "交互优化"],
    items: [
      {
        category: "功能创新",
        title: "/multitask",
        detail:
          "异步子代理并行，而不是排队；大任务自动切块。与 /worktree、/best-of-n 共享 worktree 池。",
      },
      {
        category: "功能创新",
        title: "多根工作区",
        detail: "一个 Agent 会话对准由多文件夹组成的可复用工作区，跨仓改动不必反复重定向。",
      },
      {
        category: "交互优化",
        title: "改进的 Worktrees",
        detail: "后台隔离任务，一键把分支拉回前台本地测试。",
      },
    ],
  },
  {
    id: "3.3",
    date: "2026-05-07",
    version: "3.3",
    title: "PR Review、并行 Build、快捷操作",
    summary: "从「改完代码」延伸到「拆 PR、审 PR、合并」，编辑器开始吃掉 Code Review 场景。",
    tags: ["功能创新", "交互优化", "企业治理"],
    items: [
      {
        category: "功能创新",
        title: "新版 PR Review",
        detail: "Reviews / Commits / Changes 三栏，行内讨论与顶层评论不用跳出 Cursor。",
      },
      {
        category: "功能创新",
        title: "Build in Parallel 与拆分 PR",
        detail:
          "计划上一键并行独立步骤；工作集可按对话上下文切成多个逻辑 PR，切前备份快照。",
      },
      {
        category: "交互优化",
        title: "Quick-action pills",
        detail: "常用 skill 钉在输入框上方，跨项目持久，把高级能力变成一键习惯。",
      },
      {
        category: "企业治理",
        title: "模型黑名单与软消费上限",
        detail: "按角色/组封禁模型；50/80/100% 告警但不硬切；用量可按 chat/agent/cloud/CLI 下钻。",
      },
    ],
  },
  {
    id: "3.4",
    date: "2026-05-13",
    version: "3.4",
    title: "全屏 Tab、紧凑回复与云构建加速",
    summary: "并行工作的视觉噪音被压住；云环境缓存让下一次启动不再从零开始。",
    tags: ["交互优化", "性能改进"],
    items: [
      {
        category: "交互优化",
        title: "全屏 Tab 与紧凑回复",
        detail: "悬浮提示条做专注工作；工具调用密度可调，长任务可读性上升。",
      },
      {
        category: "性能改进",
        title: "云环境复用",
        detail:
          "公开评测材料提到多仓环境缓存、Dockerfile 构建提速；构建密钥与运行中的 Agent 隔离。",
      },
    ],
  },
  {
    id: "composer-2.5",
    date: "2026-05-18",
    version: "Composer 2.5",
    title: "更擅长长任务的工作马",
    summary: "官方强调长时任务与复杂指令遵循；首周双倍用量拉动切换。同期 Jira / Teams 入口上线。",
    tags: ["功能创新", "生态整合", "定价增长"],
    items: [
      {
        category: "功能创新",
        title: "Composer 2.5",
        detail:
          "Standard $0.50/$2.50、Fast 默认 $3/$15 每百万 token；定位与后来的 Grok 4.5 不同量级，并行供给。",
      },
      {
        category: "生态整合",
        title: "Jira 与 Microsoft Teams",
        detail:
          "工单指派或 @Cursor 拉起云 Agent，完成后回帖 PR；Teams 频道同线程流式回复。",
      },
      {
        category: "定价增长",
        title: "Bugbot 改为纯用量计费",
        detail:
          "Default / High / Custom 三档力度；取消席位费，个人走包含用量、团队走按需，降低试用门槛、拉高重度用量。",
      },
    ],
  },
  {
    id: "3.5",
    date: "2026-05-20",
    version: "3.5",
    title: "共享 Canvas、/loop 与窗口内自动化",
    summary: "自动化从「设置页里的机器人」搬进 Agents Window；无仓库场景开始被认真对待。",
    tags: ["功能创新", "生态整合", "定价增长"],
    items: [
      {
        category: "功能创新",
        title: "/loop",
        detail:
          "按本地日程或事件反复执行直到目标达成，例如每 5 分钟看部署、测通才停。",
      },
      {
        category: "生态整合",
        title: "多仓 / 无仓 Automations",
        detail:
          "一个 Agent 跨多代码库交付验证；无仓模板覆盖 Slack 摘要、分析、FAQ、财务、客户健康。新自动化前 7 天 Agent 运行 5 折。",
      },
      {
        category: "交互优化",
        title: "团队共享 Canvas",
        detail: "Pro / Teams / Enterprise 可分享 Agent 生成的画布，产出物开始可协作。",
      },
    ],
  },
  {
    id: "3.6",
    date: "2026-06-03",
    version: "3.6",
    title: "Auto-review 运行模式与企业 Organization",
    summary: "少点批准、多跑一会儿；组织层级从「一个 Team」长成 Org > Teams > Groups。",
    tags: ["企业治理", "交互优化"],
    items: [
      {
        category: "交互优化",
        title: "Auto-review Run Mode",
        detail:
          "白名单立即跑、可沙箱的进沙箱、其余交给分类子代理允许/改道/请示，针对 Shell、MCP、Fetch。",
      },
      {
        category: "企业治理",
        title: "Organizations",
        detail:
          "身份与管理上收，多团队成员、组织级 IdP、全局用量+按团队下钻，新人自动继承权限。",
      },
    ],
  },
  {
    id: "3.7-3.8",
    date: "2026-06-18",
    version: "3.7 – 3.8",
    title: "浏览器 Design Mode、云子代理与 /automate",
    summary: "设计协作加深；本地-云交接；用自然语言生成自动化，Slack emoji 都能当触发器。",
    tags: ["功能创新", "生态整合", "交互优化"],
    items: [
      {
        category: "交互优化",
        title: "浏览器多选与语音改 UI",
        detail: "一次选多个元素让 Agent 理解布局关系；Design Mode 麦克风在 Agent 运行中保持开启。",
      },
      {
        category: "功能创新",
        title: "/in-cloud、/babysit",
        detail: "隔离 VM 里并行；远程准备 PR 不占本地会话。公开材料称云开发环境可在约 10 分钟内就绪。",
      },
      {
        category: "生态整合",
        title: "/automate 与新触发器",
        detail:
          "口语描述即生成触发器/指令/工具；Slack 表情触发；GitHub 增加 issue/PR 评论、评审提交、thread、Actions 完成等 5 类事件；自动化默认可 Computer Use 出 demo。",
      },
      {
        category: "功能创新",
        title: "SDK：自定义工具与 auto-review",
        detail:
          "local.customTools 走与 MCP 相同的权限门；无头 Agent 的工具调用可过分类器；存储可选内存/SQLite/JSONL。",
      },
    ],
  },
  {
    id: "bugbot-review",
    date: "2026-06-10",
    version: "Bugbot",
    title: "本地 /review 与更快的评审 Agent",
    summary: "官方称评审约 3× 快（约 90 秒）、便宜 22%、每轮多发现约 10% 缺陷，评审前移到 push 之前。",
    tags: ["性能改进", "功能创新"],
    items: [
      {
        category: "性能改进",
        title: "Bugbot 延迟与成本",
        detail: "从约 5 分钟降到约 90 秒量级，使「每次都跑评审」在习惯上成立。",
      },
      {
        category: "功能创新",
        title: "/review",
        detail: "本地跑 Bugbot，与 GitHub/GitLab 同步，可配置为只看 PR 新增改动。",
      },
    ],
  },
  {
    id: "3.9-3.11",
    date: "2026-07-10",
    version: "3.9 – 3.11",
    title: "iOS、团队 MCP 市场、侧聊与对话搜索",
    summary: "移动端成为云 Agent 遥控器；生态管理收口到 Customize；主任务旁路研究不再打断执行。",
    tags: ["生态整合", "交互优化", "企业治理"],
    items: [
      {
        category: "生态整合",
        title: "iOS 公测（付费计划）",
        detail:
          "启动云 Agent、语音与斜杠、Remote Control 本地 Agent、看产物/diff、合并 PR；锁屏 Live Activities 与推送。",
      },
      {
        category: "生态整合",
        title: "Customize + Team MCP 市场",
        detail:
          "插件/技能/MCP/子代理/规则/命令/钩子按用户、团队、工作区管理；管理员配置一次 MCP，分发到云、窗口、IDE、CLI；可按组织组限制市场。",
      },
      {
        category: "交互优化",
        title: "Side chats 与对话搜索",
        detail:
          "/side、/btw 开持久旁路对话，@ 回灌主线程；Agents Window 用本地索引搜数千份 transcript（Cmd+K / Cmd+F）。",
      },
      {
        category: "企业治理",
        title: "会话级 Cloud Hooks",
        detail:
          "beforeSubmitPrompt、afterAgentResponse、afterAgentThought、subagentStart、stop 等，可观察/控制提示、推理、委派与压缩。",
      },
    ],
  },
  {
    id: "router-start-ios",
    date: "2026-07-29",
    version: "增长配套",
    title: "Cursor Router、印度 Start 套餐、iPad 与 Workspace 插件",
    summary: "用路由优化单位智能成本；用本地定价打开发达市场之外的付费；用大屏移动端和 Google 插件扩展场景。",
    tags: ["定价增长", "生态整合", "交互优化"],
    items: [
      {
        category: "定价增长",
        title: "Cursor Router",
        detail:
          "按任务类型与复杂度分流；Intelligence / Balance / Cost 三档。Teams 默认开，企业可强制 Auto。Grok 4.5 作为高性价比路由选项之一。",
      },
      {
        category: "定价增长",
        title: "Cursor Start（印度）",
        detail:
          "₹649/月含税，UPI/卡支付，含 Grok 与 Composer 日用量、云 Agent、iOS 遥控、插件生态，针对免费用户升级路径。",
      },
      {
        category: "交互优化",
        title: "iPad + Inbox",
        detail:
          "侧栏多 Agent、分屏审 PR、Apple Pencil 批注截图；Inbox 聚合进行中、待你处理、审阅中的 PR。",
      },
      {
        category: "生态整合",
        title: "Gmail / Drive / Calendar 插件",
        detail: "Agent 可在编辑器内检索邮件盘日历、起草发送、找空档，编码工作流吞掉一部分办公套件。",
      },
    ],
  },
  {
    id: "builds-origin",
    date: "2026-08-17",
    version: "Builds + Origin",
    title: "预构建环境与代码托管 Origin",
    summary:
      "Agent 启动不再从 npm install 开始；Cursor 开始托管仓库、PR 与 GitHub 双向同步，平台化信号明确。",
    tags: ["性能改进", "生态整合", "功能创新"],
    items: [
      {
        category: "性能改进",
        title: "Environment Builds",
        detail:
          "后台预热成功构建，Agent 直接启动；官方称内部环境启动约 10×、首 token 约 3×。失败构建不升为活跃，Agent 沿用上一成功快照。包含在 Cloud Agents 内不加价。",
      },
      {
        category: "生态整合",
        title: "Origin 代码托管（付费计划早期 Beta）",
        detail:
          "仓库、PR、浏览、GitHub 同步；Origin 托管仓以 Origin 为源，同步仓以 GitHub 为源。Vercel / Depot / Buildkite 应用扩展。企业管理员可选择退出。",
      },
    ],
  },
  {
    id: "always-on",
    date: "2026-08-19",
    version: "Harness",
    title: "Subscriptions、/goal 与不停顿转向",
    summary: "云 Agent 开始按事件醒来、按目标停、按消息微调，而不是每一步等人点下一步。",
    tags: ["功能创新", "交互优化"],
    items: [
      {
        category: "功能创新",
        title: "Subscriptions",
        detail:
          "监听 PR、Slack 线程或定时任务。云 Agent 自动订阅自己开的 PR，修 CI、回 bot 评论直到完成。",
      },
      {
        category: "功能创新",
        title: "/goal 与 Custom Mode",
        detail:
          "长目标一直做到完；任意 skill 可钉成常驻模式，相当于 always-on 的技能。",
      },
      {
        category: "功能创新",
        title: "子代理独立虚拟机",
        detail: "每个子代理干净环境拷贝，可 swarm 测 bug 而不互相污染。",
      },
      {
        category: "交互优化",
        title: "Steering 不打断",
        detail: "跟进消息等到下一次工具调用再生效，避免中途砍掉正在做的动作；可 Send now 或双回车。",
      },
    ],
  },
  {
    id: "origin-onboarding",
    date: "2026-08-27",
    version: "无仓起步",
    title: "不接 GitHub 也能开始，预览并一键发布",
    summary: "获客漏斗最硬的依赖被拆掉：先 prompt，再决定要不要变成仓库。",
    tags: ["功能创新", "交互优化", "生态整合"],
    items: [
      {
        category: "功能创新",
        title: "Start from scratch",
        detail:
          "仓库选择器里直接开干，后台创建 Origin 仓；满意后再点 Create repo，可选私有/内部。",
      },
      {
        category: "交互优化",
        title: "云环境端口转发到浏览器",
        detail: "实时预览 + Design Mode，关闭「在我电脑上才能看见」的激活门槛。",
      },
      {
        category: "生态整合",
        title: "接 Vercel 发布",
        detail: "绑定账号后一键拿到线上 URL，从想法到可分享链接不离开 Cursor。",
      },
    ],
  },
  {
    id: "self-hosted",
    date: "2026-09-02",
    version: "Self-hosted",
    title: "自托管机群、第三方沙箱与 Computer Use",
    summary: "工具执行可留在客户网络；云 Agent 能跑在 Lambda、Vercel、E2B 等已有基础设施上。",
    tags: ["企业治理", "生态整合", "功能创新"],
    items: [
      {
        category: "企业治理",
        title: "My Machines 与 Team Pools",
        detail:
          "个人笔记本/VM 入账；团队命名队列弹性扩缩、跨仓抢任务；空闲休眠，后续提示在重连窗口内唤醒。",
      },
      {
        category: "生态整合",
        title: "自带沙箱运行",
        detail:
          "支持在 AWS Lambda、Coder、Cloudflare、Daytona、Modal、Namespace、Vercel、E2B 等上执行。",
      },
      {
        category: "功能创新",
        title: "Linux/Mac Computer Use",
        detail: "自托管 worker 可点击、输入、截屏、驱浏览器，可在 Cursor 里观看或接管桌面。",
      },
    ],
  },
]

export const sources = [
  { label: "Cursor Changelog", href: "https://cursor.com/changelog" },
  { label: "Composer 2 博客", href: "https://cursor.com/blog/composer-2" },
  { label: "CLI Changelog", href: "https://cursor.com/docs/cli/changelog" },
]
