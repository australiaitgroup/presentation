import { motion } from 'framer-motion';
import { Slide, Title, Tag } from '../ui';
import { colors, fonts } from '../../styles/theme';

const steps = [
	{ label: '学', desc: '5 个 AI 方向\nVibe Coding\nPrompt 大师\nAI Engineer', color: colors.red },
	{ label: '练', desc: '6 种互动实验室\n在线写代码\n实时反馈\n自动评分', color: colors.orange },
	{ label: '考', desc: '350+ IT 认证\nAI Tutor 解题\n模拟考试', color: colors.yellow },
	{ label: '用', desc: 'AI 工具实战\n真实项目练手\n作品集积累', color: colors.green },
	{ label: '证', desc: 'AWS/Azure/GCP\n认证通过\n技能认可', color: colors.blue },
];

export default function S06_FullChain() {
	return (
		<Slide bg={colors.dark} style={{ position: 'relative' }}>
			<div style={{ width: '90%', maxWidth: 1400, padding: 40 }}>
				<Tag bg={colors.red}>核心优势</Tag>
				<Title white style={{ marginTop: 16 }}>
					全链路闭环：<span style={{ background: colors.yellow, color: colors.black, padding: '0 12px' }}>学 → 练 → 考 → 用 → 证</span>
				</Title>
				<p style={{ fontSize: 18, color: 'rgba(255,255,255,0.5)', marginTop: 8, marginBottom: 40 }}>别人只做一环。我们把整条链打通了。</p>

				<div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
					{steps.map((s, i) => (
						<motion.div
							key={s.label}
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2 + i * 0.12 }}
							style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, position: 'relative' }}
						>
							{/* Circle */}
							<div style={{
								width: 72, height: 72, borderRadius: '50%',
								background: s.color, border: `3px solid ${colors.black}`,
								display: 'flex', alignItems: 'center', justifyContent: 'center',
								fontFamily: fonts.heading, fontSize: 28, fontWeight: 900,
								color: s.color === colors.yellow ? colors.black : '#fff',
								boxShadow: `4px 4px 0 ${colors.black}`,
							}}>
								{s.label}
							</div>

							{/* Arrow */}
							{i < steps.length - 1 && (
								<div style={{
									position: 'absolute', top: 30, right: -16,
									fontSize: 24, color: 'rgba(255,255,255,0.3)',
								}}>
									→
								</div>
							)}

							{/* Description */}
							<div style={{ textAlign: 'center' }}>
								{s.desc.split('\n').map((line, j) => (
									<p key={j} style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(255,255,255,0.65)' }}>{line}</p>
								))}
							</div>
						</motion.div>
					))}
				</div>

				{/* Bottom callout */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.8 }}
					style={{
						marginTop: 40, padding: '14px 24px',
						border: `2px solid ${colors.red}`, background: 'rgba(255,87,87,0.1)',
						textAlign: 'center',
					}}
				>
					<span style={{ color: colors.red, fontWeight: 700, fontSize: 16 }}>
						竞争对手可以做其中一环，但打通整条链需要 8 年的积累
					</span>
				</motion.div>
			</div>
		</Slide>
	);
}
