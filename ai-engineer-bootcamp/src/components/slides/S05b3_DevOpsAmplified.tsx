import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

// 不可替代的核心能力 —— 这些 AI 永远做不了
const cantReplace = [
	{ label: '生产责任 / On-call', note: '半夜 3 点 prod 着火，AI 不接 pager — 责任只能在人身上' },
	{ label: '事故复盘 / RCA', note: '跨系统因果链 + 组织/流程问题，不是 LLM 能推出来的' },
	{ label: '容量规划 / 成本控制', note: '业务节奏 + 财务约束 + SLA trade-off，需要判断' },
	{ label: '安全 / 合规审计', note: '需要人来担责，AI 给不出可签字的结论' },
];

// AI 时代新增的 infra 战场 —— 你的天然延伸
const newBattlefield = [
	{ label: 'LLM Gateway / Inference 平台', note: '统一接入、限流、审计、成本追踪 — 全企业都需要' },
	{ label: 'GPU 调度 / 推理优化', note: 'vLLM · TGI · K8s GPU operator · MIG 切分' },
	{ label: 'Agent 可观测 / LLMOps', note: 'token 链路追踪、Eval 流水线、回归告警' },
	{ label: '向量库 / RAG infra', note: 'pgvector · Qdrant · 数据管道 · 索引重建' },
	{ label: 'MCP Server 部署 / 治理', note: '把 AI 接进企业内部工具的 infra 层' },
];

export default function S05b3_DevOpsAmplified() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1400, padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: 14 }}>
				{/* 顶部 badge */}
				<motion.div
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{
						display: 'inline-block', alignSelf: 'flex-start',
						padding: '5px 14px', background: colors.teal,
						border: `2px solid ${colors.black}`,
						fontFamily: fonts.mono, fontSize: 12, fontWeight: 800,
						color: colors.white, letterSpacing: 1,
						transform: 'rotate(-1deg)',
					}}
				>
					DEVOPS / SRE 例外篇 · 不吓唬你
				</motion.div>

				{/* 标题 */}
				<motion.h2
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					style={{
						fontFamily: fonts.heading,
						fontSize: 'clamp(28px, 3.6vw, 46px)',
						fontWeight: 900, lineHeight: 1.15, letterSpacing: -1,
						margin: 0,
					}}
				>
					你<span style={{
						display: 'inline-block', padding: '0 12px',
						background: colors.green, color: colors.black,
						border: `3px solid ${colors.black}`,
						boxShadow: `4px 4px 0 ${colors.black}`,
						transform: 'rotate(-1deg)', margin: '0 6px',
					}}>不是被替代</span>，是被<span style={{
						display: 'inline-block', padding: '0 12px',
						background: colors.yellow, color: colors.black,
						border: `3px solid ${colors.black}`,
						boxShadow: `4px 4px 0 ${colors.black}`,
						transform: 'rotate(1deg)', margin: '0 6px',
					}}>放大</span>
				</motion.h2>

				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.4, delay: 0.2 }}
					style={{
						fontSize: 'clamp(13px, 1.4vw, 17px)',
						color: '#444', margin: 0, fontWeight: 600, lineHeight: 1.5,
					}}
				>
					模板化的活（Terraform / yaml / shell）让给 AI 写没问题。但 SRE 的核心价值 —— <strong>生产责任、事故、容量、合规</strong> —— AI 一条都拿不走。
					而 AI 时代多出来的 <strong>LLM infra</strong>，本来就是你的主场。
				</motion.p>

				{/* 两栏 */}
				<div style={{
					display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16,
					marginTop: 4,
				}}>
					{/* 左：AI 替代不了 */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						style={{
							background: colors.white, border, boxShadow: shadow,
							display: 'flex', flexDirection: 'column',
						}}
					>
						<div style={{
							padding: '10px 16px', background: colors.green, color: colors.black,
							borderBottom: `3px solid ${colors.black}`,
							display: 'flex', alignItems: 'center', gap: 10,
						}}>
							<div style={{
								width: 30, height: 30, background: colors.black, color: colors.green,
								display: 'flex', alignItems: 'center', justifyContent: 'center',
								fontFamily: fonts.heading, fontSize: 18, fontWeight: 900,
							}}>★</div>
							<div>
								<div style={{
									fontFamily: fonts.heading, fontSize: 'clamp(15px, 1.6vw, 20px)',
									fontWeight: 900, lineHeight: 1.1,
								}}>
									AI 永远拿不走的核心
								</div>
								<div style={{ fontFamily: fonts.mono, fontSize: 10, fontWeight: 700, opacity: 0.75 }}>
									SRE CORE · NON-NEGOTIABLE
								</div>
							</div>
						</div>
						<ul style={{ listStyle: 'none', padding: '14px 16px', margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
							{cantReplace.map((it, i) => (
								<motion.li
									key={i}
									initial={{ opacity: 0, x: -8 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.3, delay: 0.5 + i * 0.07 }}
									style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}
								>
									<span style={{
										flexShrink: 0, color: colors.green, fontFamily: fonts.heading,
										fontSize: 16, fontWeight: 900, lineHeight: 1.2,
									}}>✓</span>
									<div style={{ minWidth: 0 }}>
										<div style={{ fontWeight: 800, fontSize: 'clamp(12px, 1.25vw, 15px)', color: colors.black }}>
											{it.label}
										</div>
										<div style={{ fontSize: 11, color: '#666', marginTop: 2, lineHeight: 1.45 }}>
											{it.note}
										</div>
									</div>
								</motion.li>
							))}
						</ul>
					</motion.div>

					{/* 右：AI 时代新战场 */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.35 }}
						style={{
							background: colors.dark, color: colors.white, border, boxShadow: shadow,
							display: 'flex', flexDirection: 'column',
						}}
					>
						<div style={{
							padding: '10px 16px', background: colors.yellow, color: colors.black,
							borderBottom: `3px solid ${colors.black}`,
							display: 'flex', alignItems: 'center', gap: 10,
						}}>
							<div style={{
								width: 30, height: 30, background: colors.black, color: colors.yellow,
								display: 'flex', alignItems: 'center', justifyContent: 'center',
								fontFamily: fonts.heading, fontSize: 18, fontWeight: 900,
							}}>↑</div>
							<div>
								<div style={{
									fontFamily: fonts.heading, fontSize: 'clamp(15px, 1.6vw, 20px)',
									fontWeight: 900, lineHeight: 1.1,
								}}>
									AI 时代新增的 infra 战场
								</div>
								<div style={{ fontFamily: fonts.mono, fontSize: 10, fontWeight: 700, opacity: 0.75 }}>
									NEW TERRITORY · YOUR NATURAL EXTENSION
								</div>
							</div>
						</div>
						<ul style={{ listStyle: 'none', padding: '14px 16px', margin: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
							{newBattlefield.map((it, i) => (
								<motion.li
									key={i}
									initial={{ opacity: 0, x: 8 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.3, delay: 0.55 + i * 0.07 }}
									style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}
								>
									<span style={{
										flexShrink: 0, color: colors.yellow, fontFamily: fonts.heading,
										fontSize: 16, fontWeight: 900, lineHeight: 1.2,
									}}>+</span>
									<div style={{ minWidth: 0 }}>
										<div style={{ fontWeight: 800, fontSize: 'clamp(12px, 1.25vw, 15px)', color: colors.white }}>
											{it.label}
										</div>
										<div style={{ fontSize: 11, color: 'rgba(255,255,255,0.65)', marginTop: 2, lineHeight: 1.45 }}>
											{it.note}
										</div>
									</div>
								</motion.li>
							))}
						</ul>
					</motion.div>
				</div>

				{/* 底部 CTA — 不威胁，给方向 */}
				<motion.div
					initial={{ opacity: 0, y: 14 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.85 }}
					style={{
						padding: '12px 18px', background: colors.teal, color: colors.white,
						border, boxShadow: shadowSm,
						display: 'flex', alignItems: 'center', justifyContent: 'space-between',
						flexWrap: 'wrap', gap: 12,
					}}
				>
					<div style={{
						fontFamily: fonts.heading, fontSize: 'clamp(13px, 1.45vw, 18px)',
						fontWeight: 900, lineHeight: 1.3,
					}}>
						这门课对你意味着：把 LLM 接进现有 infra · 薪资天花板拉到 LLMOps / AI Platform 带
					</div>
					<div style={{
						fontFamily: fonts.mono, fontSize: 11,
						color: 'rgba(255,255,255,0.85)', fontWeight: 700, letterSpacing: 0.5,
					}}>
						MCP · RAG infra · LLM Gateway · Agent 可观测
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
