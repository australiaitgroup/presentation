import { motion } from 'framer-motion';
import { Slide, Tag } from '../ui';
import { colors, fonts } from '../../styles/theme';

const reasons = [
	{ keyword: '时机对', desc: 'AI 教育窗口期 2025-2027，现在是加速的最佳时刻', color: colors.red },
	{ keyword: '人对', desc: '8 年积累，10,000 学员 + 6,000 Offer，不是纸上谈兵', color: colors.yellow },
	{ keyword: '市场对', desc: '全球 AI 教育 $50B+ 市场，没有第二个全链路 + 社群驱动竞争者', color: colors.green },
	{ keyword: '产品对', desc: '10+ 子系统 · 6 种 Lab · 3 款插件 · 350+ 认证，完整矩阵', color: colors.blue },
	{ keyword: '模式对', desc: '多元收入 + B2B SaaS + Credits 经济 + 社群飞轮，不烧钱', color: colors.purple },
	{ keyword: '壁垒深', desc: '社群 + 数据 + 品牌 + 产品，任何一项都需要年级单位追赶', color: colors.orange },
];

export default function S16_WhyInvest() {
	return (
		<Slide bg={colors.dark} style={{ position: 'relative' }}>
			{/* Accent bar */}
			<div style={{ position: 'absolute', left: 0, top: 0, width: 6, height: '100%', background: colors.red }} />

			<div style={{ width: '90%', maxWidth: 1200, padding: 40 }}>
				<Tag bg={colors.red}>总结</Tag>
				<motion.h2
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					style={{
						fontFamily: fonts.heading, fontSize: 'clamp(40px, 6vw, 72px)',
						fontWeight: 900, color: colors.white, lineHeight: 1.1,
						marginTop: 16, marginBottom: 48,
					}}
				>
					为什么<span style={{
						display: 'inline-block', background: colors.red, padding: '0 20px',
						border: `3px solid ${colors.yellow}`, boxShadow: `5px 5px 0 ${colors.yellow}`,
					}}>投我们</span>
				</motion.h2>

				{reasons.map((r, i) => (
					<motion.div
						key={r.keyword}
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2 + i * 0.08 }}
						style={{
							display: 'flex', alignItems: 'center', gap: 24,
							padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.08)',
						}}
					>
						<span style={{
							display: 'inline-block', width: 100, textAlign: 'center',
							padding: '6px 0', background: r.color,
							color: (r.color === colors.yellow || r.color === colors.green) ? colors.black : '#fff',
							fontFamily: fonts.heading, fontSize: 20, fontWeight: 900,
							border: `2px solid ${colors.black}`, boxShadow: `3px 3px 0 ${colors.black}`,
						}}>
							{r.keyword}
						</span>
						<span style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)' }}>{r.desc}</span>
					</motion.div>
				))}

				{/* Closing */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.8 }}
					style={{ marginTop: 40 }}
				>
					<p style={{ fontSize: 17, color: 'rgba(255,255,255,0.4)', lineHeight: 1.8 }}>
						我们不需要投资人相信一个故事。
					</p>
					<p style={{ fontSize: 20, color: colors.white, fontWeight: 700, lineHeight: 1.8 }}>
						我们只需要投资人看到一个已经被证明的模型，然后一起把它做大。
					</p>
				</motion.div>
			</div>
		</Slide>
	);
}
