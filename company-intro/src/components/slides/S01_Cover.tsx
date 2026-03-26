import { motion } from 'framer-motion';
import { Slide } from '../ui';
import { colors, fonts } from '../../styles/theme';

// Floating particles for background
function Particles() {
	const particles = Array.from({ length: 20 }, (_, i) => ({
		id: i,
		x: Math.random() * 100,
		y: Math.random() * 100,
		size: 4 + Math.random() * 12,
		delay: Math.random() * 3,
		duration: 4 + Math.random() * 6,
		color: [colors.yellow, colors.green, colors.blue, colors.purple, '#fff'][i % 5],
	}));

	return (
		<div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
			{particles.map(p => (
				<motion.div
					key={p.id}
					animate={{
						y: [0, -30, 0, 20, 0],
						x: [0, 15, -10, 5, 0],
						opacity: [0.15, 0.35, 0.15],
						rotate: [0, 180, 360],
					}}
					transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
					style={{
						position: 'absolute', left: `${p.x}%`, top: `${p.y}%`,
						width: p.size, height: p.size, background: p.color,
						border: '1.5px solid rgba(0,0,0,0.2)',
					}}
				/>
			))}
		</div>
	);
}

export default function S01_Cover() {
	return (
		<Slide bg={colors.red} style={{ position: 'relative' }}>
			{/* Full-bleed red background with decorative shapes */}
			<div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
				{/* Diagonal yellow block bottom-right */}
				<motion.div
					initial={{ x: 200, y: 200 }}
					animate={{ x: 0, y: 0 }}
					transition={{ duration: 0.6 }}
					style={{
						position: 'absolute', bottom: -60, right: -40,
						width: 420, height: 420,
						background: colors.yellow,
						transform: 'rotate(12deg)',
						border: `4px solid ${colors.black}`,
					}}
				/>
				{/* Green square top-right */}
				<motion.div
					initial={{ scale: 0 }}
					animate={{ scale: 1, rotate: 15 }}
					transition={{ duration: 0.4, delay: 0.3, type: 'spring' }}
					style={{
						position: 'absolute', top: 50, right: '35%',
						width: 80, height: 80,
						background: colors.green,
						border: `3px solid ${colors.black}`,
					}}
				/>
				{/* Blue circle */}
				<motion.div
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ duration: 0.3, delay: 0.5 }}
					style={{
						position: 'absolute', top: '65%', right: '55%',
						width: 50, height: 50, borderRadius: '50%',
						background: colors.blue,
						border: `3px solid ${colors.black}`,
					}}
				/>
				{/* Purple block */}
				<motion.div
					initial={{ scale: 0 }}
					animate={{ scale: 1, rotate: -8 }}
					transition={{ duration: 0.3, delay: 0.6 }}
					style={{
						position: 'absolute', bottom: '20%', right: '18%',
						width: 60, height: 40,
						background: colors.purple,
						border: `2px solid ${colors.black}`,
					}}
				/>

				{/* Floating particles */}
				<Particles />

				{/* Grid dots pattern overlay */}
				<div style={{
					position: 'absolute', inset: 0, opacity: 0.06,
					backgroundImage: 'radial-gradient(circle, #000 1.5px, transparent 1.5px)',
					backgroundSize: '30px 30px',
				}} />
			</div>

			{/* Content */}
			<div style={{ position: 'relative', zIndex: 1, width: '90%', maxWidth: 1400, display: 'flex', alignItems: 'center', gap: 40, padding: 40 }}>
				{/* Left — massive title */}
				<div style={{ flex: 1.3 }}>
					<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
						<div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '8px 20px', background: colors.white, border: `3px solid ${colors.black}`, boxShadow: `5px 5px 0 ${colors.black}`, marginBottom: 28 }}>
							<div style={{ width: 36, height: 36, borderRadius: 6, background: colors.black, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: fonts.heading, fontWeight: 900, fontSize: 18 }}>JR</div>
							<span style={{ fontFamily: fonts.heading, fontSize: 16, fontWeight: 800 }}>匠人学院 JR ACADEMY</span>
						</div>
					</motion.div>

					<motion.h1
						initial={{ opacity: 0, x: -60 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.3, duration: 0.5 }}
						style={{
							fontFamily: fonts.heading, fontSize: 'clamp(64px, 9vw, 130px)',
							fontWeight: 900, lineHeight: 0.95, letterSpacing: -4,
							color: colors.white,
							textShadow: `4px 4px 0 rgba(0,0,0,0.2)`,
						}}
					>
						学AI<br />
						找匠人<br />
						<span style={{
							display: 'inline-block', padding: '0 20px',
							background: colors.yellow, color: colors.black,
							border: `4px solid ${colors.black}`,
							boxShadow: `6px 6px 0 ${colors.black}`,
							transform: 'rotate(-2deg)',
							marginTop: 8,
						}}>
							拿Offer
						</span>
					</motion.h1>

					<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
						<p style={{
							fontFamily: fonts.heading, fontSize: 'clamp(20px, 3vw, 32px)',
							fontWeight: 700, color: 'rgba(255,255,255,0.95)', marginTop: 24,
							borderLeft: `5px solid ${colors.yellow}`, paddingLeft: 16,
						}}>
							全球华人学习 AI 第一站
						</p>
					</motion.div>

					<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} style={{ marginTop: 28, display: 'flex', gap: 12 }}>
						<span style={{ padding: '10px 24px', background: colors.white, border: `3px solid ${colors.black}`, boxShadow: `4px 4px 0 ${colors.black}`, fontFamily: fonts.mono, fontSize: 16, fontWeight: 700 }}>jiangren.com.au</span>
						<span style={{ padding: '10px 24px', border: `3px solid ${colors.white}`, color: colors.white, fontFamily: fonts.mono, fontSize: 16, fontWeight: 700 }}>EST. 2017</span>
					</motion.div>
				</div>

				{/* Right — photo with brutal frame */}
				<motion.div
					initial={{ opacity: 0, rotate: 8, scale: 0.8 }}
					animate={{ opacity: 1, rotate: 3, scale: 1 }}
					transition={{ delay: 0.4, duration: 0.5 }}
					style={{ flex: 0.7, position: 'relative' }}
				>
					<div style={{
						width: '100%', maxWidth: 440,
						border: `5px solid ${colors.black}`,
						boxShadow: `12px 12px 0 ${colors.black}`,
						background: colors.yellow,
						overflow: 'hidden',
						transform: 'rotate(3deg)',
					}}>
						<img src="/images/event-atlassian-group.webp" alt="JR Academy" style={{ width: '100%', height: 'auto', display: 'block' }}
							onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
						/>
					</div>
					{/* Floating stat badge */}
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{ delay: 0.8, type: 'spring' }}
						style={{
							position: 'absolute', bottom: -10, right: -20,
							padding: '12px 20px', background: colors.green,
							border: `3px solid ${colors.black}`, boxShadow: `5px 5px 0 ${colors.black}`,
							transform: 'rotate(-5deg)',
						}}
					>
						<div style={{ fontFamily: fonts.heading, fontSize: 28, fontWeight: 900 }}>4,000+</div>
						<div style={{ fontSize: 12, fontWeight: 700 }}>学员拿到 Offer</div>
					</motion.div>
				</motion.div>
			</div>
		</Slide>
	);
}
