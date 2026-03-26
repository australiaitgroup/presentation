import { motion } from 'framer-motion';
import { Slide, Title, Tag } from '../ui';
import { colors, fonts } from '../../styles/theme';

const steps = [
	{ num: '①', title: '免费内容/工具', desc: 'SEO + Chrome 插件\n自然流量入口', color: colors.blue },
	{ num: '②', title: '用户注册', desc: 'Credits 奖励\n降低门槛', color: colors.green },
	{ num: '③', title: '体验 AI 功能', desc: 'Labs + AI Tutor\n→ 充值转化', color: colors.orange },
	{ num: '④', title: '付费课程/认证', desc: 'Bootcamp\n认证 · 订阅', color: colors.purple },
	{ num: '⑤', title: '学到真本事', desc: '拿到认证 → 口碑\n→ 回到 ①', color: colors.red },
];

export default function S12_Flywheel() {
	return (
		<Slide bg={colors.dark}>
			<div style={{ width: '90%', maxWidth: 1400, padding: 40 }}>
				<Tag bg={colors.red}>增长飞轮</Tag>
				<Title white style={{ marginTop: 16, marginBottom: 40 }}>
					每一个学员的成功都是下一轮增长的<span style={{ background: colors.yellow, color: colors.black, padding: '0 12px' }}>起点</span>
				</Title>

				<div style={{ display: 'flex', gap: 12, alignItems: 'stretch' }}>
					{steps.map((s, i) => (
						<motion.div
							key={s.num}
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.15 + i * 0.1 }}
							style={{
								flex: 1, padding: '24px 16px',
								border: `2px solid ${s.color}`, background: `${s.color}15`,
								display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
								position: 'relative',
							}}
						>
							<div style={{
								fontFamily: fonts.heading, fontSize: 32, fontWeight: 900, color: s.color, marginBottom: 8,
							}}>
								{s.num}
							</div>
							<div style={{ fontFamily: fonts.heading, fontSize: 17, fontWeight: 800, color: '#fff', marginBottom: 12 }}>
								{s.title}
							</div>
							{s.desc.split('\n').map((line, j) => (
								<p key={j} style={{ fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.55)' }}>{line}</p>
							))}

							{i < steps.length - 1 && (
								<div style={{
									position: 'absolute', right: -14, top: '40%',
									fontSize: 20, color: 'rgba(255,255,255,0.3)',
								}}>
									→
								</div>
							)}
						</motion.div>
					))}
				</div>

				{/* Key insight */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.8 }}
					style={{
						marginTop: 36, padding: '16px 24px',
						border: `2px solid ${colors.red}`, background: 'rgba(255,87,87,0.1)',
						textAlign: 'center',
					}}
				>
					<span style={{ fontSize: 18, fontWeight: 700, color: colors.red }}>
						10,000+ 学员的口碑是最强的获客引擎 — 每个认证通过都是一次自发传播
					</span>
				</motion.div>
			</div>
		</Slide>
	);
}
