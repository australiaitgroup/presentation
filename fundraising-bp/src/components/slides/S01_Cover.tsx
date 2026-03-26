import { motion } from 'framer-motion';
import { Slide } from '../ui';
import { colors, fonts } from '../../styles/theme';

export default function S01_Cover() {
	return (
		<Slide bg={colors.red} style={{ position: 'relative' }}>
			<div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
				<motion.div
					initial={{ x: 200, y: 200 }}
					animate={{ x: 0, y: 0 }}
					transition={{ duration: 0.6 }}
					style={{
						position: 'absolute', bottom: -80, right: -60,
						width: 500, height: 500,
						background: colors.yellow,
						transform: 'rotate(12deg)',
						border: `4px solid ${colors.black}`,
					}}
				/>
				<motion.div
					initial={{ scale: 0 }}
					animate={{ scale: 1, rotate: 15 }}
					transition={{ duration: 0.4, delay: 0.3, type: 'spring' }}
					style={{
						position: 'absolute', top: 60, right: '30%',
						width: 80, height: 80,
						background: colors.green,
						border: `3px solid ${colors.black}`,
					}}
				/>
				<motion.div
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ duration: 0.3, delay: 0.5 }}
					style={{
						position: 'absolute', top: '60%', right: '50%',
						width: 50, height: 50, borderRadius: '50%',
						background: colors.blue,
						border: `3px solid ${colors.black}`,
					}}
				/>
				<div style={{
					position: 'absolute', inset: 0, opacity: 0.06,
					backgroundImage: 'radial-gradient(circle, #000 1.5px, transparent 1.5px)',
					backgroundSize: '30px 30px',
				}} />
			</div>

			<div style={{ position: 'relative', zIndex: 1, width: '90%', maxWidth: 1400, padding: 40 }}>
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
						fontFamily: fonts.heading, fontSize: 'clamp(56px, 8vw, 110px)',
						fontWeight: 900, lineHeight: 0.95, letterSpacing: -3,
						color: colors.white,
						textShadow: '4px 4px 0 rgba(0,0,0,0.2)',
					}}
				>
					AI 时代<br />
					<span style={{
						display: 'inline-block', padding: '0 20px',
						background: colors.yellow, color: colors.black,
						border: `4px solid ${colors.black}`,
						boxShadow: `6px 6px 0 ${colors.black}`,
						transform: 'rotate(-2deg)',
						marginTop: 8,
					}}>
						学 AI 找匠人
					</span>
				</motion.h1>

				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} style={{ marginTop: 36 }}>
					<div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
						{['8 年运营', '10,000+ 学员', '4,000+ Offer', '600+ 导师'].map((t, i) => (
							<motion.span
								key={t}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.7 + i * 0.1 }}
								style={{
									padding: '10px 24px', background: 'rgba(255,255,255,0.15)',
									border: '2px solid rgba(255,255,255,0.4)',
									color: colors.white, fontFamily: fonts.mono, fontSize: 16, fontWeight: 700,
								}}
							>
								{t}
							</motion.span>
						))}
					</div>
				</motion.div>

				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1 }}
					style={{ marginTop: 32, fontFamily: fonts.mono, fontSize: 16, color: 'rgba(255,255,255,0.5)' }}
				>
					融资商业计划书 · 2026
				</motion.p>
			</div>
		</Slide>
	);
}
