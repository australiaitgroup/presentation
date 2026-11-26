# 匠人学院公司介绍

在线地址：https://australiaitgroup.github.io/presentation/company-intro/ （旧链接的 `#页码` 仍可用）

- 内容依据：jracademy.ai 官网。产品说明见主仓库 `docs/prd/JR_ACADEMY_COMPANY_PRESENTATION_PRD.md`。
- 翻页引擎：取自 Curriculum 的 Talk Deck 模板（`SlideEngine`、`CameraBubble`、`ui`、`theme`、`presentation.css`，未改动）。
- 视觉：JR Craft。本稿字体用 DM Sans + Noto Sans SC，文字不用红色，重点用黄色荧光底（owner 2026-11-26 反馈）。

## 更新时要对照官网的内容

| 页 | 内容 | 来源 |
|---|---|---|
| 1 | 3D 封面：口号字标、地球、环绕的真实 Offer 卡片 | 品牌字标、首页 Offer |
| 2 | 我们是谁：2017 年成立与关键数字 | 关于页、首页 |
| 3 | 中国驻布里斯班、墨尔本总领事馆支持（横幅在 `public/consulate/`） | jr-omni 新生节素材中的「支持单位」；不写「大使馆」「合办」 |
| 4 | Offer 墙（`src/data/offers.ts`、`public/offers/`，2026-11-26 抓取 113 条） | 首页 |
| 5 | 走向国际：世界地图（`src/data/worldmap.ts`）与七城现场照片（`public/cities/`，页面不提 AI圈） | 关于页覆盖国家；照片取自 apps/ai-circle-funding/public/gallery |
| 6、7 | 学员去向 500+（owner 定；首页 Logo 墙写 180 家）、100+ 合作企业、105 家导师来源 | owner、首页、/business |
| 8 | 五家合作伙伴；Google、Microsoft 暂用公司 Logo，拿到官方徽章后替换 | 首页、owner |
| 13 | 老师头像（`src/data/teachers.ts`、`public/teachers/`） | /instructors |
| 15 | 考证匠各端与 iOS 截图（`public/certmaster/`，取自 App Store）。iOS 1.0.6 在架、Chrome 插件已上线；微信小程序未核实发布状态 | App Store、官网下载入口 |
| 9、17 | CareerOS 六步工作流与 AI 导师。owner 2026-11-26 定：评估、规划在网站，行动到成长在 CareerOS Harness；本稿用「CareerOS Harness」，不写「桌面版」（/careeros 目前仍写行动在网站上做） | /careeros、owner |
| 11、15、18、19 | 学习方向、热门认证、导师、学员反馈 | 首页 |
| 12 | 互动 Lab 名称 | 页脚 |
| 13 | 课程与时长 | /bootcamp、首页 |
| 21 | 企业服务 | /business |
| 22 | 会员价格 A$19.90/月起、权益、联系方式 | /membership、页脚 |

3D：地球是 `src/components/Globe.tsx`（canvas，陆地点阵在 `src/data/land.ts`），其余为 `src/styles/depth.css` 的 CSS 3D。开启「减少动态效果」时停在静态画面。

## 本地运行

`bun install && bun run dev`。推送到 main 会通过 GitHub Actions 自动部署到 GitHub Pages。
