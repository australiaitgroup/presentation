import { img } from '../../utils/img';
import { motion } from 'framer-motion';
import { Slide } from '../ui';
import { colors, fonts } from '../../styles/theme';
import AnimatedBg from '../AnimatedBg';

const impactData = [
	{ num: '6,000+', label: 'Job Placements', desc: 'Verified career outcomes', bg: colors.red, color: '#fff', rotate: -3 },
	{ num: '200+', label: 'Events/Year', desc: 'Online & in-person', bg: colors.yellow, color: '#000', rotate: 2 },
	{ num: '10,000+', label: 'Learners', desc: 'Across 9 countries', bg: colors.green, color: '#000', rotate: -1 },
	{ num: '600+', label: 'Mentors', desc: 'Google, Canva, Atlassian', bg: colors.blue, color: '#fff', rotate: 3 },
];

const partners = ['ATLASSIAN', 'Canva', 'Google', 'Microsoft', 'Amazon', 'Deloitte', 'PwC'];

export default function S04_Impact() {
	return (
		<Slide bg={colors.warmBg} style={{ position: 'relative' }}>
			<AnimatedBg variant="shapes" opacity={0.1} />
			<AnimatedBg variant="dots" opacity={0.05} />

			{/* Top stripe */}
			<div style={{
				position: 'absolute', top: 0, left: 0, right: 0, height: 8, zIndex: 2,
				background: `repeating-linear-gradient(90deg, ${colors.red} 0, ${colors.red} 25%, ${colors.yellow} 25%, ${colors.yellow} 50%, ${colors.green} 50%, ${colors.green} 75%, ${colors.blue} 75%, ${colors.blue} 100%)`,
			}} />

			<div style={{ position: 'relative', zIndex: 1, width: '90%', maxWidth: 1300, padding: 40 }}>
				{/* Title */}
				<motion.h2
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
					style={{
						fontFamily: fonts.heading,
						fontSize: 'clamp(48px, 7vw, 80px)',
						fontWeight: 900, lineHeight: 1, letterSpacing: -3,
						color: colors.black, marginBottom: 36,
					}}
				>
					Our{' '}
					<span style={{
						display: 'inline-block',
						background: colors.red, color: '#fff',
						padding: '0 24px',
						border: `4px solid ${colors.black}`,
						boxShadow: `6px 6px 0 ${colors.black}`,
						transform: 'rotate(-1deg)',
					}}>Impact</span>
				</motion.h2>

				<div style={{ display: 'flex', gap: 32, alignItems: 'stretch' }}>
					{/* Left — 2x2 impact grid */}
					<div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
						{impactData.map((d, i) => (
							<motion.div
								key={d.label}
								initial={{ opacity: 0, y: 40, rotate: 0 }}
								animate={{ opacity: 1, y: 0, rotate: d.rotate }}
								transition={{ delay: 0.2 + i * 0.1, type: 'spring', stiffness: 200 }}
								style={{
									padding: '28px 22px',
									background: d.bg, color: d.color,
									border: `4px solid ${colors.black}`,
									boxShadow: `8px 8px 0 ${colors.black}`,
									transform: `rotate(${d.rotate}deg)`,
									textAlign: 'center',
								}}
							>
								<div style={{
									fontFamily: fonts.heading,
									fontSize: 'clamp(40px, 4.5vw, 64px)',
									fontWeight: 900, lineHeight: 1,
								}}>{d.num}</div>
								<div style={{ fontFamily: fonts.heading, fontSize: 18, fontWeight: 800, marginTop: 6 }}>{d.label}</div>
								<div style={{ fontSize: 13, marginTop: 4, opacity: 0.8 }}>{d.desc}</div>
							</motion.div>
						))}
					</div>

					{/* Right — offer collage + partners */}
					<motion.div
						initial={{ opacity: 0, rotate: 5 }}
						animate={{ opacity: 1, rotate: 2 }}
						transition={{ delay: 0.5 }}
						style={{ flex: 1.1, position: 'relative', display: 'flex', flexDirection: 'column', gap: 20 }}
					>
						<div style={{
							border: `4px solid ${colors.black}`,
							boxShadow: `8px 8px 0 ${colors.red}`,
							overflow: 'hidden',
							transform: 'rotate(2deg)',
							position: 'relative',
						}}>
							<img
								src={img("/images/offers-collage.webp")}
								alt="Verified Job Offers"
								style={{ width: '100%', height: 'auto', display: 'block' }}
								onError={e => { (e.target as HTMLImageElement).parentElement!.style.display = 'none'; }}
							/>

							{/* Badge */}
							<motion.div
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								transition={{ delay: 0.8, type: 'spring' }}
								style={{
									position: 'absolute', top: -12, right: -8, zIndex: 2,
									padding: '8px 16px',
									background: colors.yellow,
									border: `3px solid ${colors.black}`,
									boxShadow: `4px 4px 0 ${colors.black}`,
									transform: 'rotate(-6deg)',
									fontFamily: fonts.heading, fontWeight: 900, fontSize: 14,
									color: colors.black,
								}}
							>
								Verified Outcomes
							</motion.div>
						</div>

						{/* Partner logos strip */}
						<div style={{
							display: 'flex', gap: 18, flexWrap: 'wrap',
							justifyContent: 'center', alignItems: 'center',
							padding: '16px 12px',
							border: `3px solid ${colors.black}`,
							background: colors.white,
							boxShadow: `4px 4px 0 ${colors.black}`,
						}}>
							{partners.map(p => (
								<span key={p} style={{
									fontFamily: fonts.mono,
									fontSize: 13, fontWeight: 700,
									color: 'rgba(0,0,0,0.4)',
									letterSpacing: 1,
								}}>{p}</span>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</Slide>
	);
}
