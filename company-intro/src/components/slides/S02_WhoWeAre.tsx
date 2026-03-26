import { img } from '../../utils/img';
import { motion } from 'framer-motion';
import { Slide } from '../ui';
import { colors, fonts } from '../../styles/theme';

const stats = [
	{ num: '8', unit: '年', label: '深耕教育', bg: colors.yellow, rotate: -3 },
	{ num: '7', unit: '国', label: '全球覆盖', bg: colors.green, rotate: 2 },
	{ num: '10K', unit: '+', label: '学员', bg: colors.blue, rotate: -1 },
	{ num: '600', unit: '+', label: '全球导师', bg: colors.purple, rotate: 3 },
];

export default function S02_WhoWeAre() {
	return (
		<Slide bg={colors.warmBg} style={{ position: 'relative' }}>
			{/* Decorative blocks */}
			<div style={{ position: 'absolute', top: -30, right: -30, width: 250, height: 250, background: colors.red, transform: 'rotate(15deg)', opacity: 0.15 }} />
			<div style={{ position: 'absolute', bottom: -50, left: -50, width: 300, height: 300, background: colors.blue, transform: 'rotate(-10deg)', opacity: 0.1 }} />

			<div style={{ position: 'relative', zIndex: 1, width: '90%', maxWidth: 1400, display: 'flex', alignItems: 'center', gap: 50, padding: 40 }}>
				{/* Left */}
				<div style={{ flex: 1 }}>
					<motion.div initial={{ x: -80, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
						<h2 style={{
							fontFamily: fonts.heading, fontSize: 'clamp(56px, 8vw, 100px)',
							fontWeight: 900, lineHeight: 1, letterSpacing: -3,
						}}>
							我们<br />
							<span style={{
								display: 'inline-block', background: colors.red, color: colors.white,
								padding: '0 20px', border: `4px solid ${colors.black}`,
								boxShadow: `6px 6px 0 ${colors.black}`, transform: 'rotate(-2deg)',
							}}>是谁？</span>
						</h2>
					</motion.div>

					<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
						<div style={{ marginTop: 28, fontSize: 'clamp(16px,2vw,22px)', lineHeight: 1.8, maxWidth: 500 }}>
							<p style={{ borderLeft: `5px solid ${colors.yellow}`, paddingLeft: 16, marginBottom: 12 }}>
								成立于 <strong style={{ background: colors.yellow, padding: '0 6px' }}>2017 年</strong>，服务全球华人
							</p>
							<p style={{ borderLeft: `5px solid ${colors.green}`, paddingLeft: 16, marginBottom: 12 }}>
								全球最大的华人 <strong>IT & AI 教育平台</strong>
							</p>
							<p style={{ borderLeft: `5px solid ${colors.blue}`, paddingLeft: 16, marginBottom: 12 }}>
								2024 全面转型 <strong style={{ background: colors.blue, color: '#fff', padding: '0 6px' }}>AI 学习平台</strong>
							</p>
						</div>
					</motion.div>

					{/* Stat cards — scattered, tilted */}
					<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} style={{ display: 'flex', gap: 14, marginTop: 24, flexWrap: 'wrap' }}>
						{stats.map((s, i) => (
							<motion.div
								key={s.label}
								initial={{ scale: 0, rotate: 0 }}
								animate={{ scale: 1, rotate: s.rotate }}
								transition={{ delay: 0.6 + i * 0.1, type: 'spring', stiffness: 300 }}
								style={{
									padding: '14px 18px', background: s.bg, border: `3px solid ${colors.black}`,
									boxShadow: `5px 5px 0 ${colors.black}`, transform: `rotate(${s.rotate}deg)`,
									color: (s.bg === colors.blue || s.bg === colors.purple) ? '#fff' : '#000',
								}}
							>
								<div style={{ fontFamily: fonts.heading, fontSize: 36, fontWeight: 900, lineHeight: 1 }}>
									{s.num}<span style={{ fontSize: 20 }}>{s.unit}</span>
								</div>
								<div style={{ fontSize: 12, fontWeight: 700, marginTop: 2 }}>{s.label}</div>
							</motion.div>
						))}
					</motion.div>
				</div>

				{/* Right — stacked photos */}
				<div style={{ flex: 0.8, position: 'relative', height: 420 }}>
					<motion.div
						initial={{ opacity: 0, rotate: 10 }}
						animate={{ opacity: 1, rotate: 5 }}
						transition={{ delay: 0.3 }}
						style={{
							position: 'absolute', top: 0, right: 0, width: '90%',
							border: `5px solid ${colors.black}`, boxShadow: `8px 8px 0 ${colors.black}`,
							overflow: 'hidden', transform: 'rotate(5deg)',
						}}
					>
						<img src={img("/images/partnership-1.jpg")} alt="活动" style={{ width: '100%', height: 240, objectFit: 'cover', display: 'block' }} onError={e => { (e.target as HTMLImageElement).parentElement!.style.display = 'none'; }} />
					</motion.div>
					<motion.div
						initial={{ opacity: 0, rotate: -8 }}
						animate={{ opacity: 1, rotate: -3 }}
						transition={{ delay: 0.5 }}
						style={{
							position: 'absolute', bottom: 0, left: 0, width: '85%',
							border: `5px solid ${colors.black}`, boxShadow: `8px 8px 0 ${colors.yellow}`,
							overflow: 'hidden', transform: 'rotate(-3deg)',
						}}
					>
						<img src={img("/images/event-slider-1.webp")} alt="教室" style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block' }} onError={e => { (e.target as HTMLImageElement).parentElement!.style.display = 'none'; }} />
					</motion.div>
					{/* Floating badge */}
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{ delay: 0.7, type: 'spring' }}
						style={{
							position: 'absolute', top: '45%', left: '35%', zIndex: 2,
							padding: '10px 18px', background: colors.red, color: '#fff',
							border: `3px solid ${colors.black}`, boxShadow: `4px 4px 0 ${colors.black}`,
							transform: 'rotate(-8deg)', fontFamily: fonts.heading, fontWeight: 900, fontSize: 16,
						}}
					>
						EST. 2017 🇦🇺
					</motion.div>
				</div>
			</div>
		</Slide>
	);
}
