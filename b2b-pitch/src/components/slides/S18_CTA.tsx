import { useState } from 'react';
import { motion } from 'framer-motion';
import { Slide, Title, Divider } from '../ui';
import { colors, fonts, border, shadow } from '../../styles/theme';
import AnimatedBg from '../AnimatedBg';

interface ContactRow {
	icon: string;
	label: string;
	value: string;
}

const contacts: ContactRow[] = [
	{ icon: '🌐', label: 'Website', value: 'jiangren.com.au' },
	{ icon: '📧', label: 'Email', value: 'business@jiangren.com.au' },
	{ icon: '💼', label: 'LinkedIn', value: 'JR Academy' },
];

export default function S18_CTA() {
	const [hoverPrimary, setHoverPrimary] = useState(false);
	const [hoverSecondary, setHoverSecondary] = useState(false);

	return (
		<Slide bg={colors.dark} style={{ position: 'relative' }}>
			<AnimatedBg variant="gradient" color="#ff5757" opacity={0.3} />

			{/* Decorative shapes */}
			<motion.div
				animate={{ rotate: [0, 360] }}
				transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
				style={{
					position: 'absolute', top: -100, right: -100,
					width: 500, height: 500,
					border: `3px solid rgba(255,87,87,0.2)`,
					pointerEvents: 'none',
				}}
			/>
			<motion.div
				animate={{ rotate: [0, -360] }}
				transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
				style={{
					position: 'absolute', bottom: -150, left: -150,
					width: 600, height: 600,
					border: `3px solid rgba(255,222,89,0.15)`,
					pointerEvents: 'none',
				}}
			/>

			<div style={{
				position: 'relative', zIndex: 1,
				width: '80%', maxWidth: 1100,
				display: 'flex', flexDirection: 'column',
				alignItems: 'center', textAlign: 'center', gap: 32,
			}}>
				{/* Logo badge */}
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.4 }}
					style={{
						display: 'flex', alignItems: 'center', gap: 12,
						padding: '10px 24px',
						background: colors.white,
						border,
						boxShadow: shadow,
					}}
				>
					<div style={{
						width: 40, height: 40,
						background: colors.dark,
						display: 'flex', alignItems: 'center', justifyContent: 'center',
						fontFamily: fonts.heading, fontWeight: 900, fontSize: 20, color: '#fff',
						border: `2px solid ${colors.black}`,
					}}>JR</div>
					<span style={{ fontFamily: fonts.heading, fontSize: 18, fontWeight: 800, color: colors.black }}>JR ACADEMY</span>
				</motion.div>

				{/* Main headline */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.5 }}
				>
					<Title
						white
						style={{
							fontSize: 'clamp(40px,6vw,82px)',
							lineHeight: 1.1,
							letterSpacing: -2,
							margin: 0,
						}}
					>
						Let's Build the AI Workforce{' '}
						<span style={{
							display: 'inline-block',
							background: colors.yellow,
							color: colors.black,
							padding: '4px 20px',
							border,
							boxShadow: `5px 5px 0 rgba(0,0,0,0.4)`,
							transform: 'rotate(-1.5deg)',
						}}>
							Together
						</span>
					</Title>
				</motion.div>

				<Divider color={colors.red} center />

				{/* Contact rows */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.35 }}
					style={{ display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center' }}
				>
					{contacts.map((c, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4 + i * 0.08 }}
							style={{
								display: 'flex', alignItems: 'center', gap: 10,
								padding: '10px 20px',
								background: 'rgba(255,255,255,0.08)',
								border: '2px solid rgba(255,255,255,0.25)',
							}}
						>
							<span style={{ fontSize: 20 }}>{c.icon}</span>
							<div style={{ textAlign: 'left' }}>
								<div style={{ fontFamily: fonts.mono, fontSize: 11, color: 'rgba(255,255,255,0.5)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>
									{c.label}
								</div>
								<div style={{ fontFamily: fonts.body, fontSize: 15, color: '#fff', fontWeight: 600 }}>
									{c.value}
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* CTA buttons */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.55 }}
					style={{ display: 'flex', gap: 20, marginTop: 8 }}
				>
					{/* Primary */}
					<button
						onMouseEnter={() => setHoverPrimary(true)}
						onMouseLeave={() => setHoverPrimary(false)}
						style={{
							padding: '18px 36px',
							background: hoverPrimary ? colors.yellow : colors.yellow,
							color: colors.black,
							fontFamily: fonts.heading,
							fontSize: 18,
							fontWeight: 900,
							border,
							boxShadow: hoverPrimary ? '0 0 0 #000' : shadow,
							cursor: 'pointer',
							transform: hoverPrimary ? 'translate(4px, 4px)' : 'none',
							transition: 'all 0.15s',
							letterSpacing: 0.5,
						}}
					>
						📅 Schedule a Meeting
					</button>

					{/* Secondary */}
					<button
						onMouseEnter={() => setHoverSecondary(true)}
						onMouseLeave={() => setHoverSecondary(false)}
						style={{
							padding: '18px 36px',
							background: 'transparent',
							color: hoverSecondary ? colors.dark : '#fff',
							fontFamily: fonts.heading,
							fontSize: 18,
							fontWeight: 900,
							border: hoverSecondary ? `3px solid ${colors.black}` : '3px solid rgba(255,255,255,0.7)',
							boxShadow: hoverSecondary ? '0 0 0 #000' : '4px 4px 0 rgba(255,255,255,0.2)',
							cursor: 'pointer',
							backgroundColor: hoverSecondary ? colors.white : 'transparent',
							transform: hoverSecondary ? 'translate(4px, 4px)' : 'none',
							transition: 'all 0.15s',
							letterSpacing: 0.5,
						}}
					>
						📄 Download Partnership Kit
					</button>
				</motion.div>

				{/* Footer note */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.7 }}
					style={{ fontFamily: fonts.mono, fontSize: 12, color: 'rgba(255,255,255,0.35)', letterSpacing: 1 }}
				>
					© 2025 JR ACADEMY · EST. 2017 · SYDNEY, AUSTRALIA
				</motion.div>
			</div>
		</Slide>
	);
}
