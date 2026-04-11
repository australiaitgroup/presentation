import { motion } from 'framer-motion';
import { Slide } from '../ui';
import { colors, fonts, border, shadow } from '../../styles/theme';

const stats = [
	{
		num: '87%',
		bg: colors.red,
		color: '#fff',
		desc: 'of companies report AI skills gaps',
		source: 'McKinsey 2024',
		rotate: -3,
	},
	{
		num: '$320B',
		bg: colors.yellow,
		color: '#000',
		desc: 'Projected AI training market by 2030',
		source: 'Grand View Research',
		rotate: 2,
	},
	{
		num: '40%',
		bg: colors.blue,
		color: '#fff',
		desc: 'of workers need reskilling within 5 years',
		source: 'World Economic Forum',
		rotate: -1.5,
	},
];

export default function S02_Problem() {
	return (
		<Slide bg={colors.warmBg} style={{ position: 'relative' }}>
			{/* Decorative corner blocks */}
			<div style={{ position: 'absolute', top: -40, right: -40, width: 280, height: 280, background: colors.red, transform: 'rotate(15deg)', opacity: 0.1 }} />
			<div style={{ position: 'absolute', bottom: -60, left: -60, width: 320, height: 320, background: colors.blue, transform: 'rotate(-10deg)', opacity: 0.08 }} />

			{/* Top color stripe */}
			<div style={{
				position: 'absolute', top: 0, left: 0, right: 0, height: 8, zIndex: 2,
				background: `repeating-linear-gradient(90deg, ${colors.red} 0, ${colors.red} 33.3%, ${colors.yellow} 33.3%, ${colors.yellow} 66.6%, ${colors.blue} 66.6%, ${colors.blue} 100%)`,
			}} />

			<div style={{ position: 'relative', zIndex: 1, width: '90%', maxWidth: 1300, padding: 40 }}>
				{/* Title */}
				<motion.h2
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
					style={{
						fontFamily: fonts.heading,
						fontSize: 'clamp(48px, 7vw, 84px)',
						fontWeight: 900, lineHeight: 1.05, letterSpacing: -3,
						color: colors.black, marginBottom: 48,
					}}
				>
					The AI Skills Gap{' '}
					<span style={{
						display: 'inline-block',
						background: colors.red, color: '#fff',
						padding: '0 20px',
						border: `4px solid ${colors.black}`,
						boxShadow: `6px 6px 0 ${colors.black}`,
						transform: 'rotate(-1.5deg)',
					}}>Is Real</span>
				</motion.h2>

				{/* Stat cards row */}
				<div style={{ display: 'flex', gap: 28, marginBottom: 36 }}>
					{stats.map((s, i) => (
						<motion.div
							key={s.num}
							initial={{ opacity: 0, y: 60, rotate: 0 }}
							animate={{ opacity: 1, y: 0, rotate: s.rotate }}
							transition={{ delay: 0.2 + i * 0.12, type: 'spring', stiffness: 180 }}
							style={{
								flex: 1, padding: '36px 28px',
								background: s.bg, color: s.color,
								border: `4px solid ${colors.black}`,
								boxShadow: shadow,
								transform: `rotate(${s.rotate}deg)`,
								display: 'flex', flexDirection: 'column', gap: 8,
							}}
						>
							<div style={{
								fontFamily: fonts.heading,
								fontSize: 'clamp(64px, 7vw, 96px)',
								fontWeight: 900, lineHeight: 1,
							}}>{s.num}</div>
							<div style={{
								fontFamily: fonts.body,
								fontSize: 'clamp(16px, 1.8vw, 22px)',
								fontWeight: 600, lineHeight: 1.4,
							}}>{s.desc}</div>
							<div style={{
								fontFamily: fonts.mono,
								fontSize: 13, fontWeight: 700,
								opacity: 0.7, marginTop: 8,
							}}>{s.source}</div>
						</motion.div>
					))}
				</div>

				{/* Bottom quote card */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.6 }}
					style={{
						padding: '24px 32px',
						background: colors.dark,
						border,
						boxShadow: `6px 6px 0 ${colors.yellow}`,
						display: 'flex', alignItems: 'center', gap: 20,
					}}
				>
					<div style={{
						fontSize: 40, lineHeight: 1,
						color: colors.yellow, fontFamily: fonts.heading,
						fontWeight: 900, flexShrink: 0,
					}}>"</div>
					<p style={{
						fontFamily: fonts.heading,
						fontSize: 'clamp(18px, 2vw, 26px)',
						fontWeight: 700, color: colors.white,
						lineHeight: 1.4,
					}}>
						Organizations that invest in AI upskilling see{' '}
						<span style={{ color: colors.yellow }}>2-3x ROI</span> within 18 months
					</p>
				</motion.div>
			</div>
		</Slide>
	);
}
