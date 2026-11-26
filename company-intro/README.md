# 匠人学院公司介绍

在线地址：https://australiaitgroup.github.io/presentation/company-intro/ （旧链接的 `#页码` 仍可用）

- 内容依据：jracademy.ai 官网。产品说明见主仓库 `docs/prd/JR_ACADEMY_COMPANY_PRESENTATION_PRD.md`。
- 翻页引擎：取自 Curriculum 的 Talk Deck 模板（`SlideEngine`、`CameraBubble`、`ui`、`theme`、`presentation.css`，未改动）。
- 视觉：JR Craft。本稿字体用 DM Sans + Noto Sans SC，文字不用红色，重点用黄色荧光底（owner 2026-11-26 反馈）。

## 更新时要对照官网的内容

| 页 | 内容 | 来源 |
|---|---|---|
| 2 | Offer 墙（`src/data/offers.ts`、`public/offers/`，2026-11-26 抓取 113 条） | 首页 |
| 3、4 | 6028+、600+、6万+；覆盖国家 | 关于页；办公室地址取自页脚 |
| 5 | 180 家学员雇主、105 家导师来源（首页）；100+ 合作企业（/business、关于页正文。关于页滚动数字另写 500，未采用） | 首页、/business |
| 6 | 雇主 Logo 墙（`src/data/employers.ts`、`public/employers/`，179 个，官网另有 1 家名称未知） | 首页 |
| 7 | 合作伙伴五家。OpenAI、Claude、AWS 用官网徽章；Google、Microsoft 按 owner 2026-11-26 确认，暂用公司 Logo，拿到官方徽章后替换 | 首页、owner |
| 10、14、17、18 | 学习方向、热门认证、导师、学员反馈 | 首页 |
| 11 | 互动 Lab 名称 | 页脚 |
| 12 | 课程与时长 | /bootcamp、首页 |
| 20 | 企业服务 | /business |
| 21 | 会员价格 A$19.90/月起、权益、联系方式 | /membership、页脚 |

## 本地运行

`bun install && bun run dev`。推送到 main 会通过 GitHub Actions 自动部署到 GitHub Pages。
