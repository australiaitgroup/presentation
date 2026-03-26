import { motion } from 'framer-motion';
import { img } from '../../utils/img';
import { Slide } from '../ui';
import { colors, fonts, border, shadowSm } from '../../styles/theme';
import AnimatedBg from '../AnimatedBg';

const currentStages = [
	{ icon: '🎓', text: '大学在校生', color: colors.red },
	{ icon: '🎓', text: '大学毕业生', color: colors.red },
	{ icon: '🔄', text: '转码 / 转行', color: colors.orange },
	{ icon: '💼', text: '非 IT 从业者', color: colors.orange },
	{ icon: '💻', text: 'Junior 工程师', color: colors.yellow },
	{ icon: '💻', text: 'Mid 想升职', color: colors.blue },
	{ icon: '📋', text: '想做产品经理', color: colors.purple },
	{ icon: '📊', text: '想做数据分析', color: colors.green },
	{ icon: '✍️', text: '想用 AI 提效的职场人', color: colors.green },
];
const targetRoles = [
	{ icon: '🎯', text: '找到第一份 IT 工作', color: colors.green },
	{ icon: '🤖', text: 'AI Engineer', color: colors.blue },
	{ icon: '💻', text: 'Full-stack Developer', color: colors.blue },
	{ icon: '☁️', text: 'DevOps / Cloud', color: colors.blue },
	{ icon: '📋', text: 'AI 产品经理', color: colors.purple },
	{ icon: '📊', text: 'Data Engineer / Analyst', color: colors.purple },
	{ icon: '⭐', text: 'Senior / Tech Lead', color: colors.yellow },
	{ icon: '👑', text: 'Engineering Manager', color: colors.red },
	{ icon: '✨', text: 'AI 办公提效达人', color: colors.green },
	{ icon: '🎬', text: 'AI 内容创作者', color: colors.orange },
	{ icon: '🌟', text: 'AI Adoption Specialist', color: colors.yellow },
];

export default function S13_P3() {
	return (
		<Slide bg={colors.warmBg} style={{ position: 'relative' }}>
			<AnimatedBg variant="shapes" opacity={0.08} />

			<div style={{ position: 'relative', zIndex: 1, width: '92%', maxWidth: 1400, padding: '24px 40px', display: 'flex', flexDirection: 'column', height: '88%' }}>
				{/* Title row */}
				<motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
					<span style={{ display: 'inline-block', padding: '4px 14px', background: colors.purple, color: '#fff', fontSize: 11, fontWeight: 700, fontFamily: fonts.mono, border: `2px solid ${colors.black}` }}>匠人独创</span>
					<h2 style={{ fontFamily: fonts.heading, fontSize: 'clamp(36px,5vw,56px)', fontWeight: 900, marginTop: 8, lineHeight: 1.1 }}>
						P3 职业孵化器
					</h2>
					<p style={{ fontSize: 'clamp(16px,2vw,22px)', color: colors.red, fontWeight: 700, marginTop: 4 }}>
						在做中学，在项目中成长
					</p>
				</motion.div>

				{/* Main content — 3 columns: current → P3 → target */}
				<div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 20, marginTop: 16 }}>

					{/* Left — 现在阶段 */}
					<motion.div
						initial={{ opacity: 0, x: -40 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2 }}
						style={{
							flex: 1, padding: '24px 20px', background: '#fff',
							border: `4px solid ${colors.black}`, boxShadow: `6px 6px 0 ${colors.black}`,
							height: '100%', display: 'flex', flexDirection: 'column',
						}}
					>
						<h3 style={{ fontFamily: fonts.heading, fontSize: 18, fontWeight: 900, marginBottom: 16 }}>
							现在在哪个阶段
						</h3>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1 }}>
							{currentStages.map((s, i) => (
								<motion.div
									key={s.text}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.3 + i * 0.05 }}
									style={{
										display: 'flex', alignItems: 'center', gap: 8,
										padding: '6px 10px',
										background: i % 2 === 0 ? '#f8f9fa' : '#fff',
										borderLeft: `4px solid ${s.color}`,
									}}
								>
									<span style={{ fontSize: 15 }}>{s.icon}</span>
									<span style={{ fontSize: 14, fontWeight: 600 }}>{s.text}</span>
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* Center — P3 孵化器 */}
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.4, type: 'spring' }}
						style={{
							width: 280, flexShrink: 0, display: 'flex', flexDirection: 'column',
							alignItems: 'center', gap: 12, padding: '20px 16px',
						}}
					>
						{/* Arrow from left */}
						<div style={{ fontSize: 28, color: colors.red }}>→→→</div>

						{/* P3 central box */}
						<div style={{
							padding: '24px 20px', background: colors.black, color: '#fff',
							border: `4px solid ${colors.black}`, boxShadow: `8px 8px 0 ${colors.purple}`,
							textAlign: 'center', width: '100%',
						}}>
							<div style={{ fontFamily: fonts.heading, fontSize: 36, fontWeight: 900 }}>P3</div>
							<div style={{ fontFamily: fonts.heading, fontSize: 18, fontWeight: 800, marginTop: 4 }}>职业孵化器</div>
						</div>

						{/* Arrow to right */}
						<div style={{ fontSize: 28, color: colors.green }}>→→→</div>

						{/* Features */}
						<div style={{ display: 'flex', flexDirection: 'column', gap: 4, width: '100%' }}>
							{[
								{ icon: '🏢', text: '真实商业项目' },
								{ icon: '👥', text: 'AI Engineer + DevOps + PM' },
								{ icon: '🎮', text: '像素风虚拟办公室' },
								{ icon: '⏱', text: '3 个月项目周期' },
							].map(f => (
								<div key={f.text} style={{
									padding: '4px 8px', background: '#fff', border: `2px solid ${colors.black}`,
									boxShadow: `2px 2px 0 ${colors.black}`, fontSize: 11, fontWeight: 600,
									display: 'flex', alignItems: 'center', gap: 6,
								}}>
									<span>{f.icon}</span>{f.text}
								</div>
							))}
						</div>

						{/* Stat */}
						<div style={{
							padding: '8px 16px', background: colors.yellow,
							border: `3px solid ${colors.black}`, boxShadow: `4px 4px 0 ${colors.black}`,
							textAlign: 'center',
						}}>
							<span style={{ fontFamily: fonts.heading, fontSize: 24, fontWeight: 900 }}>5,000+</span>
							<span style={{ fontSize: 12, fontWeight: 700, marginLeft: 8 }}>学员成功转码</span>
						</div>
					</motion.div>

					{/* Right — 目标岗位 */}
					<motion.div
						initial={{ opacity: 0, x: 40 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.3 }}
						style={{
							flex: 1, padding: '24px 20px', background: '#fff',
							border: `4px solid ${colors.black}`, boxShadow: `6px 6px 0 ${colors.green}`,
							height: '100%', display: 'flex', flexDirection: 'column',
						}}
					>
						<h3 style={{ fontFamily: fonts.heading, fontSize: 18, fontWeight: 900, marginBottom: 16 }}>
							目标岗位职业是什么
						</h3>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1 }}>
							{targetRoles.map((s, i) => (
								<motion.div
									key={s.text}
									initial={{ opacity: 0, x: 20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.4 + i * 0.05 }}
									style={{
										display: 'flex', alignItems: 'center', gap: 8,
										padding: '6px 10px',
										background: i === 0 ? `${colors.green}15` : i % 2 === 0 ? '#f8f9fa' : '#fff',
										borderLeft: `4px solid ${s.color}`,
									}}
								>
									<span style={{ fontSize: 15 }}>{s.icon}</span>
									<span style={{ fontSize: 14, fontWeight: 600 }}>{s.text}</span>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>

				{/* Bottom — images */}
				<div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
					<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
						style={{ flex: 1, border, boxShadow: shadowSm, overflow: 'hidden', height: 120 }}>
						<img src={img("/images/meta-image-project.webp")} alt="P3" style={{ width: '100%', height: '100%', objectFit: 'cover' }}
							onError={e => { (e.target as HTMLImageElement).parentElement!.style.display = 'none'; }} />
					</motion.div>
					<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
						style={{ flex: 1, border, boxShadow: shadowSm, overflow: 'hidden', height: 120 }}>
						<img src={img("/images/partnership-2.jpg")} alt="P3 团队" style={{ width: '100%', height: '100%', objectFit: 'cover' }}
							onError={e => { (e.target as HTMLImageElement).parentElement!.style.display = 'none'; }} />
					</motion.div>
				</div>
			</div>
		</Slide>
	);
}
