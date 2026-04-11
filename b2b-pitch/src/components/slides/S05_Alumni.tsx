import { motion } from 'framer-motion';
import { Slide } from '../ui';
import { colors, fonts, border, shadow } from '../../styles/theme';
import AnimatedBg from '../AnimatedBg';

const logoRows = [
	['ATLASSIAN', 'Canva', 'Microsoft', 'Amazon', 'Google'],
	['J.P.Morgan', 'Deloitte.', 'PwC', 'KPMG', 'EY', 'Accenture'],
	['NAB', 'CommBank', 'ANZ', 'Westpac', 'Telstra', 'Thoughtworks'],
	['REA Group', 'Domain', 'MYOB', 'ROKT', 'Xero', 'Rio Tinto', 'Infosys'],
	['Suncorp', 'Carsales', 'Cognizant', 'Tencent', 'Binance'],
];

export default function S05_Alumni() {
	return (
		<Slide bg={colors.white} style={{ position: 'relative' }}>
			<AnimatedBg variant="shapes" opacity={0.04} />

			{/* Top stripe */}
			<div style={{
				position: 'absolute', top: 0, left: 0, right: 0, height: 8, zIndex: 2,
				background: `repeating-linear-gradient(90deg, ${colors.red} 0, ${colors.red} 25%, ${colors.yellow} 25%, ${colors.yellow} 50%, ${colors.green} 50%, ${colors.green} 75%, ${colors.blue} 75%, ${colors.blue} 100%)`,
			}} />

			<div style={{ position: 'relative', zIndex: 1, width: '90%', maxWidth: 1300, padding: 40 }}>
				{/* Title */}
				<motion.div
					initial={{ opacity: 0, y: -30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					style={{ textAlign: 'center', marginBottom: 48 }}
				>
					<h2 style={{
						fontFamily: fonts.heading,
						fontSize: 'clamp(44px, 6vw, 76px)',
						fontWeight: 900, lineHeight: 1.1, letterSpacing: -3,
						color: colors.black,
					}}>
						Where Our{' '}
						<span style={{
							display: 'inline-block',
							background: colors.red, color: '#fff',
							padding: '0 20px',
							border: `4px solid ${colors.black}`,
							boxShadow: `6px 6px 0 ${colors.black}`,
							transform: 'rotate(-1deg)',
						}}>Graduates</span>{' '}
						Work
					</h2>
				</motion.div>

				{/* Logo wall */}
				<div style={{
					border,
					boxShadow: shadow,
					background: colors.white,
					padding: '40px 48px',
					display: 'flex',
					flexDirection: 'column',
					gap: 0,
				}}>
					{logoRows.map((row, rowIdx) => (
						<motion.div
							key={rowIdx}
							initial={{ opacity: 0, x: rowIdx % 2 === 0 ? -40 : 40 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.2 + rowIdx * 0.1, duration: 0.5 }}
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								gap: 0,
								borderBottom: rowIdx < logoRows.length - 1 ? `2px solid rgba(0,0,0,0.08)` : 'none',
								padding: '18px 0',
								flexWrap: 'wrap',
							}}
						>
							{row.map((name, i) => (
								<span
									key={name}
									style={{
										fontFamily: fonts.mono,
										fontSize: 'clamp(14px, 1.6vw, 20px)',
										fontWeight: 700,
										color: 'rgba(0,0,0,0.55)',
										letterSpacing: 1.5,
										padding: '4px 24px',
										borderRight: i < row.length - 1 ? `2px solid rgba(0,0,0,0.12)` : 'none',
										whiteSpace: 'nowrap',
									}}
								>
									{name}
								</span>
							))}
						</motion.div>
					))}

					{/* Footer */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.8 }}
						style={{
							paddingTop: 16,
							textAlign: 'center',
							fontFamily: fonts.mono,
							fontSize: 14,
							fontWeight: 700,
							color: 'rgba(0,0,0,0.3)',
							letterSpacing: 2,
						}}
					>
						and more...
					</motion.div>
				</div>

				{/* Bottom note */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.9 }}
					style={{ textAlign: 'center', marginTop: 24 }}
				>
					<span style={{
						display: 'inline-block',
						padding: '8px 24px',
						background: colors.yellow,
						border: `3px solid ${colors.black}`,
						boxShadow: `4px 4px 0 ${colors.black}`,
						fontFamily: fonts.heading,
						fontSize: 18, fontWeight: 800,
						color: colors.black,
					}}>
						6,000+ verified job placements across top companies
					</span>
				</motion.div>
			</div>
		</Slide>
	);
}
