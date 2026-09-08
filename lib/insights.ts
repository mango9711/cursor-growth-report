import type { Insight } from "./types"

export const insights: Insight[] = [
  {
    id: "acq-1",
    lens: "用户获取",
    title: "把产品铺到用户已经在的地方，而不是再发明一个入口",
    cursorMove:
      "Slack（含表情触发与跨频道）、Jira 指派、Microsoft Teams @提及、GitHub 事件、iOS/iPad Inbox，同一套云 Agent 从协作软件里被叫醒。",
    growthRead:
      "开发者的「开始工作」往往发生在工单和消息，而不是 IDE。入口外溢把获客从下载安装，变成「同事 @ 了一下」。病毒系数来自工作流，而不是分享按钮。",
    metricHint:
      "跟踪：非 IDE 发起的 Agent 会话占比、首次付费前是否出现过 Slack/Jira 触达、被 @ 的未安装用户转化。",
  },
  {
    id: "acq-2",
    lens: "用户获取",
    title: "先给「wow」，再谈仓库权限",
    cursorMove:
      "2026-08-27 起 Cloud Agents 不再强制绑定 GitHub：Start from scratch → 预览 → 再创建 Origin 仓 → 可选 Vercel 发布。印度 Start 套餐用本地价与 UPI 降低支付摩擦。",
    growthRead:
      "传统开发者工具把 OAuth 仓库授权放在激活之前，这是最大掉队点。先交付可感知产出（页面、PR、URL），授权变成「保存工作」而非「才能开始」。新兴市场用购买力定价，而不是全球统一 ARPU。",
    metricHint:
      "跟踪：无仓会话 → 创建仓库转化、未完成 GitHub 连接的激活率、Start 套餐相对全球 Pro 的试用到付费率。",
  },
  {
    id: "acq-3",
    lens: "用户获取",
    title: "自研模型既是产品差异，也是获客广告",
    cursorMove:
      "Composer 1→2→2.5 持续用速度与长任务能力做发布事件；Grok 4.5 进入桌面/Web/iOS/CLI/SDK；/best-of-n 让对比结果可演示。",
    growthRead:
      "模型发布是稀缺的媒体事件。把「更快/更便宜/更能熬」做成可感知的产品时刻（4× 速度、首周双倍用量），比功能列表更能拉动安装。多模型并存避免押注单一供应商叙事。",
    metricHint:
      "跟踪：发版周新安与回访、默认模型切换率、best-of-n 使用与分享截图外溢。",
  },
  {
    id: "act-1",
    lens: "激活转化",
    title: "激活定义从「打开编辑器」改成「完成一次可验证交付」",
    cursorMove:
      "Plan Mode → 浏览器验证 → Design Mode → 并行 Build → 拆 PR → Bugbot /review → 预览端口转发。",
    growthRead:
      "Aha 时刻应绑定「我看见它跑起来了 / 我开出了 PR」，而不是「我跟 AI 聊了一句」。验证闭环越短，付费理由越硬：省的是联调与等待，不是键入。",
    metricHint:
      "跟踪：D1 内完成「计划+落地+预览或 PR」的比率；仅聊天未改文件的用户 7 日流失。",
  },
  {
    id: "act-2",
    lens: "激活转化",
    title: "用默认安全换「敢点运行」",
    cursorMove:
      "沙箱终端 GA、网络域名白名单、Auto-review 运行模式、密钥与 Agent 运行隔离、企业强制策略。",
    growthRead:
      "Agent 产品的激活杀手是恐惧：误删、泄密、乱打生产。安全默认不是合规附录，而是让用户按下 Run 的转化组件。审批从「每条命令」升级到「分类器+沙箱」后，速度与安全感可以同时要。",
    metricHint:
      "跟踪：首次 auto-run 开启率、因权限提示放弃的会话、企业 POC 中安全问卷周期。",
  },
  {
    id: "ret-1",
    lens: "留存复用",
    title: "留存来自「任务可以在人不在时继续」",
    cursorMove:
      "Cloud Agents、/loop、Subscriptions、/goal、iOS Remote Control、Live Activities、合上笔记本仍可跑。",
    growthRead:
      "日活不再等于「坐在 IDE 前」。异步完成把产品嵌入睡眠与会议间隙，形成习惯回路：走之前丢一个目标，回来收结果。移动端不是缩小版 IDE，是 Agent 的通知与舵。",
    metricHint:
      "跟踪：云会话跨 4 小时仍完成的比例、移动端仅审查/合并的 DAU、订阅类自动化周活跃。",
  },
  {
    id: "ret-2",
    lens: "留存复用",
    title: "交互优化的本质是保护「主线程心流」",
    cursorMove:
      "Side chats、/btw、不打断的 steering、对话搜索、平铺布局、紧凑回复、Quick-action pills、计划澄清 UI。",
    growthRead:
      "Agent 越能干，越容易把用户拖进旁支。产品用「旁路对话 + 事后回灌」保护主任务，用搜索对抗长 transcript 失忆。留存提升来自更少的自我打断，而不是更多按钮。",
    metricHint:
      "跟踪：主会话完成率、side chat 回灌主线程次数、长会话中途弃用率。",
  },
  {
    id: "rev-1",
    lens: "付费与扩容",
    title: "性能改进直接改写单位经济，从而改写套餐设计",
    cursorMove:
      "Instant Grep、LSP/内存、Hooks 40×、Bugbot 3× 更快且更便宜、Builds 启动 10× / 首 token 3×、Composer 低价、Router 按任务分流。",
    growthRead:
      "在用量计费世界，延迟和 token 就是 COGS。降本让「默认开并行、默认跑评审、默认预热环境」成为可能，用户感知是「突然什么都能天天用」。定价从请求次数走向智能路由 + 用量池，企业要的是可预测，个人要的是不心疼。",
    metricHint:
      "跟踪：同任务 token 成本、因额度耗尽停用的比例、Router Cost 档与 Intelligence 档的满意度差。",
  },
  {
    id: "rev-2",
    lens: "付费与扩容",
    title: "席位费让位给「工作发生额」，用组织层级卖扩容",
    cursorMove:
      "Bugbot 取消席位费；用量池拆分；软消费上限；Org > Teams > Groups；模型/市场按组管控；印度本地套餐。",
    growthRead:
      "工具席位在 CFO 那里是成本项，工作流用量是「和产出相关的基础设施」。去掉评审席位门槛换渗透，再用重度用量收回。组织对象从团队管理员升级到 IT/采购，才卖得出集团合同。",
    metricHint:
      "跟踪：团队内激活席位比、用量集中度（头部 20% 用户贡献）、组织创建后 90 天净扩容。",
  },
  {
    id: "stk-1",
    lens: "粘性与扩展",
    title: "生态不是插件数量，是「组织知识可安装」",
    cursorMove:
      "Marketplace、Team MCP 一次配置处处运行、SKILL.md、插件 Canvas、GitLab/Bitbucket/Azure 导入插件仓、Google Workspace 插件。",
    growthRead:
      "粘性来自切换成本：团队规则、允许的 MCP、沉淀的 skills、挂钩子的合规。市场排行榜提供内部社会证明。谁成为团队默认环境，谁就赢了下一批新人。",
    metricHint:
      "跟踪：每团队已安装插件/技能数、跨 IDE/CLI/云复用同一 MCP 的比例、卸载编辑器后仍跑的自动化数。",
  },
  {
    id: "stk-2",
    lens: "粘性与扩展",
    title: "向平台延伸：代码托管 + 自有基础设施 = 工作系统锁",
    cursorMove:
      "Origin 仓与 PR、GitHub 镜像、Vercel/Depot/Buildkite、自托管池、第三方沙箱、无仓到有仓的同一条故事线。",
    growthRead:
      "编辑器可被替换，承载仓库、PR、CI 预览和机群的系统很难被替换。这是从「AI 功能」到「软件工厂」的跳跃：扩展场景包括内部平台、外包交付、黑客马拉松冷启动、受监管行业的数据不出域。",
    metricHint:
      "跟踪：Origin 为源的仓库占比、自托管任务占比、多应用扩展同时开启的组织留存。",
  },
]

export const themeAnalyses = [
  {
    id: "feat",
    title: "功能创新 → 用户获取",
    kicker: "新品类需要新动词",
    points: [
      "2.0 的 Multi-Agents 与 Composer、3.0 的 Agents Window，是在重新定义品类：不是「带 AI 的 VS Code」，而是 Agent 运行时。获客话术从补全准确率，换成「一支会干活的小队」。",
      "Plan、Debug、/multitask、/goal、Subscriptions 构成能力阶梯：先让新手完成中等任务，再让专家把人从循环里拿出来。每个台阶都是一层可对外讲的故事。",
      "/best-of-n 与并行 Build 是天生可演示功能，适合销售现场和社交传播：同一需求多结果对比，比基准测试图表更可信。",
    ],
  },
  {
    id: "ux",
    title: "交互优化 → 用户留存",
    kicker: "减少自我打断",
    points: [
      "澄清问题、旁路侧聊、不砍断的转向，都在降低「Agent 很强但我会用砸」的挫败。留存的对手是认知过载，不是竞品功能清单。",
      "平铺布局、Inbox、移动审 PR，让并行从能力变成可管理的界面。功能若无法被注视，就不会被形成习惯。",
      "2.3 假期稳定性专项说明：主动少发功能、修聊天丢失和更新骚扰，本身就是留存战役。信任一旦裂开，模型再强也回不来。",
    ],
  },
  {
    id: "perf",
    title: "性能改进 → 体验与转化",
    kicker: "延迟是定价，也是习惯",
    points: [
      "Grep、LSP、首 token、环境启动、评审时长，决定用户敢不敢把「每次保存/每次 PR」交给产品。慢的智能会被跳过，快的智能会成为默认路径。",
      "Builds 把安装依赖从会话临界路径拿掉，转化的是「再开一个 Agent 试试」的边际意愿。",
      "Router 把性能问题翻译成套餐问题：同一产品里用模式选择智能/成本，减少因账单惊吓导致的降级或流失。",
    ],
  },
  {
    id: "eco",
    title: "生态整合 → 粘性与场景扩展",
    kicker: "长在别人的操作系统上，再长出自己的",
    points: [
      "先做 GitHub/GitLab/Slack/Jira 的好公民，再推出 Origin——这是经典的平台策略：借场景获客，用系统留人。",
      "MCP + 插件 + Skills 让 Cursor 成为集成总线。谁的总线接了 Figma、Stripe、Gmail，谁就占据日常时长。",
      "自托管与「跑在你已有的沙箱上」打开受监管与平台工程场景，把拒绝理由从「数据不能出域」改写成「执行留在我这边」。",
    ],
  },
]
