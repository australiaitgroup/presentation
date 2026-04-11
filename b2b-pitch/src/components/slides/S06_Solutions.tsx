import { motion } from 'framer-motion';
import { Slide } from '../ui';
import { colors, fonts, border, shadow } from '../../styles/theme';

const solutions = [
	{
		icon: '🧭',
		title: 'AI Delivery & Consulting',
		desc: 'Strategic AI roadmaps and implementation support tailored to your industry',
		tag: 'CONSULTING',
		bg: colors.red,
		color: '#fff',
		tagBg: 'rgba(0,0,0,0.25)',
		rotate: -2,
	},
	{
		icon: '🎓',
		title: 'Corporate AI Training',
		desc: 'Hands-on upskilling programs for teams — from prompt engineering to AI deployment',
		tag: 'TRAINING',
		bg: colors.yellow,
		color: '#000',
		tagBg: 'rgba(0,0,0,0.15)',
		rotate: 1.5,
	},
	{
		icon: '🤝',
		title: 'Talent Pipeline',
		desc: 'Pre-vetted AI-ready graduates matched to your technical and culture requirements',
		tag: 'HIRING',
		bg: colors.green,
		color: '#000',
		tagBg: 'rgba(0,0,0,0.15)',
		rotate: -1,
	},
	{
		icon: '🏆',
		title: 'Certification Programs',
		desc: 'Industry-recognised credentials co-designed with enterprise partners',
		tag: 'CERTIFICATION',
		bg: colors.blue,
		color: '#fff',
		tagBg: 'rgba(0,0,0,0.2)',
		rotate: 2,
	},
	{
		icon: '🌐',
		title: 'Community & Events',
		desc: 'Brand presence in a thriving 10K+ tech community with 200+ events per year',
		tag: 'ENGAGEMENT',
		bg: colors.purple,
		color: '#fff',
		tagBg: 'rgba(0,0,0,0.2)',
		rotate: -1.5,
	},
];

export default function S06_Solutions() {
	return (
		<Slide bg={colors.warmBg} style={{ position: 'relative' }}>
			{/* Decorative corner blocks */}
			<div style={{ position: 'absolute', top: -40, left: -40, width: 260, height: 260, background: colors.yellow, transform: 'rotate(-12deg)', opacity: 0.2 }} />
			<div style={{ position: 'absolute', bottom: -50, right: -50, width: 300, height: 300, background: colors.purple, transform: 'rotate(10deg)', opacity: 0.12 }} />

			{/* Top stripe */}
			<div style={{
				position: 'absolute', top: 0, left: 0, right: 0, height: 8, zIndex: 2,
				background: `repeating-linear-gradient(90deg, ${colors.red} 0, ${colors.red} 20%, ${colors.yellow} 20%, ${colors.yellow} 40%, ${colors.green} 40%, ${colors.green} 60%, ${colors.blue} 60%, ${colors.blue} 80%, ${colors.purple} 80%, ${colors.purple} 100%)`,
			}} />

			<div style={{ position: 'relative', zIndex: 1, width: '90%', maxWidth: 1400, padding: 40 }}>
				{/* Title */}
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
					style={{ marginBottom: 40 }}
				>
					<h2 style={{
						fontFamily: fonts.heading,
						fontSize: 'clamp(40px, 5.5vw, 72px)',
						fontWeight: 900, lineHeight: 1.05, letterSpacing: -2,
						color: colors.black,
					}}>
						End-to-End{' '}
						<span style={{
							display: 'inline-block',
							background: colors.red, color: '#fff',
							padding: '0 20px',
							border: `4px solid ${colors.black}`,
							boxShadow: `6px 6px 0 ${colors.black}`,
							transform: 'rotate(-1deg)',
						}}>Workforce</span>{' '}
						Solutions
					</h2>
					<p style={{
						fontFamily: fonts.body,
						fontSize: 'clamp(16px, 1.8vw, 22px)',
						color: 'rgba(0,0,0,0.55)', marginTop: 12, fontWeight: 500,
					}}>
						A complete ecosystem — from strategy to skills to sourcing
					</p>
				</motion.div>

				{/* Solution cards — 5 in a row */}
				<div style={{ display: 'flex', gap: 20 }}>
					{solutions.map((s, i) => (
						<motion.div
							key={s.tag}
							initial={{ opacity: 0, y: 60, rotate: 0 }}
							animate={{ opacity: 1, y: 0, rotate: s.rotate }}
							transition={{ delay: 0.2 + i * 0.1, type: 'spring', stiffness: 200 }}
							style={{
								flex: 1,
								padding: '28px 20px',
								background: s.bg,
								color: s.color,
								border,
								boxShadow: shadow,
								transform: `rotate(${s.rotate}deg)`,
								display: 'flex',
								flexDirection: 'column',
								gap: 12,
								minHeight: 320,
							}}
						>
							{/* Icon */}
							<div style={{
								fontSize: 44, lineHeight: 1,
								filter: 'drop-shadow(2px 2px 0 rgba(0,0,0,0.2))',
							}}>
								{s.icon}
							</div>

							{/* Title */}
							<div style={{
								fontFamily: fonts.heading,
								fontSize: 'clamp(16px, 1.6vw, 21px)',
								fontWeight: 900, lineHeight: 1.2,
								marginTop: 4,
							}}>
								{s.title}
							</div>

							{/* Desc */}
							<p style={{
								fontFamily: fonts.body,
								fontSize: 'clamp(13px, 1.2vw, 16px)',
								fontWeight: 500, lineHeight: 1.6,
								opacity: 0.85, flex: 1,
							}}>
								{s.desc}
							</p>

							{/* Tag badge */}
							<div style={{
								display: 'inline-block',
								padding: '5px 12px',
								background: s.tagBg,
								border: `2px solid rgba(255,255,255,0.4)`,
								fontFamily: fonts.mono,
								fontSize: 11, fontWeight: 700,
								letterSpacing: 1.5,
								color: s.color,
								alignSelf: 'flex-start',
							}}>
								{s.tag}
							</div>
						</motion.div>
					))}
				</div>

				{/* Bottom CTA hint */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.9 }}
					style={{ marginTop: 32, textAlign: 'center' }}
				>
					<span style={{
						fontFamily: fonts.mono,
						fontSize: 15, fontWeight: 700,
						color: 'rgba(0,0,0,0.4)', letterSpacing: 1,
					}}>
						Flexible engagement — project, retainer, or custom
					</span>
				</motion.div>
			</div>
		</Slide>
	);
}
