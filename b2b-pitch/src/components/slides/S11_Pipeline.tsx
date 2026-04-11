import { motion } from 'framer-motion';
import { Slide, Inner, Title, Subtitle, Divider, Tag, Stagger, StaggerItem } from '../ui';
import { colors, fonts, border, shadow, shadowSm } from '../../styles/theme';

const candidateProfiles = [
	{ icon: '🎓', label: 'University Graduates', accent: colors.blue },
	{ icon: '🔄', label: 'Career Changers', accent: colors.purple },
	{ icon: '👨‍💻', label: 'Junior Engineers', accent: colors.teal },
	{ icon: '🏢', label: 'Non-IT Professionals', accent: colors.orange },
];

const targetRoles = [
	{ icon: '🤖', label: 'AI Engineer', accent: colors.red },
	{ icon: '🌐', label: 'Full-stack Developer', accent: colors.blue },
	{ icon: '☁️', label: 'DevOps / Cloud', accent: colors.teal },
	{ icon: '📊', label: 'Data Engineer', accent: colors.purple },
	{ icon: '📋', label: 'Product Manager', accent: colors.orange },
	{ icon: '⚡', label: 'Tech Lead', accent: colors.yellow },
];

const p3Features = [
	'Real commercial projects',
	'Cross-functional teams',
	'3-month cycle',
];

export default function S11_Pipeline() {
	return (
		<Slide bg={colors.warmBg} style={{ position: 'relative' }}>
			<Inner style={{ flexDirection: 'column', gap: 0, height: '90%', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
				{/* Header */}
				<Stagger style={{ marginBottom: 32, textAlign: 'center' }}>
					<StaggerItem style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 16 }}>
						<Tag bg={colors.dark}>JR EXCLUSIVE</Tag>
					</StaggerItem>
					<StaggerItem>
						<Title size="clamp(32px,3.5vw,58px)" style={{ textAlign: 'center' }}>
							P3 Career Incubator
						</Title>
					</StaggerItem>
					<StaggerItem>
						<Divider color={colors.red} center />
					</StaggerItem>
					<StaggerItem>
						<Subtitle style={{ textAlign: 'center', color: '#555', maxWidth: 600, margin: '0 auto' }}>
							Learn by doing — real projects, real teams, real outcomes
						</Subtitle>
					</StaggerItem>
				</Stagger>

				{/* 3-column flow layout */}
				<div style={{ display: 'flex', gap: 24, alignItems: 'stretch' }}>

					{/* Left: Candidate Profiles */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}
					>
						<div style={{
							fontFamily: fonts.heading,
							fontWeight: 800,
							fontSize: 15,
							color: '#555',
							textTransform: 'uppercase',
							letterSpacing: 1,
							marginBottom: 4,
						}}>
							Candidate Profiles
						</div>
						{candidateProfiles.map((p, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, x: -16 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.35, delay: 0.4 + i * 0.08 }}
								style={{
									border,
									boxShadow: shadowSm,
									background: colors.white,
									padding: '14px 16px',
									display: 'flex',
									alignItems: 'center',
									gap: 12,
									borderLeft: `5px solid ${p.accent}`,
								}}
							>
								<span style={{ fontSize: 24 }}>{p.icon}</span>
								<span style={{
									fontFamily: fonts.body,
									fontWeight: 600,
									fontSize: 'clamp(13px,1.1vw,16px)',
									color: colors.black,
								}}>
									{p.label}
								</span>
							</motion.div>
						))}
					</motion.div>

					{/* Center: P3 Box + flow */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.35 }}
						style={{
							flex: '0 0 300px',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
							gap: 16,
						}}
					>
						{/* Arrow in */}
						<div style={{ textAlign: 'center' }}>
							<div style={{ fontSize: 28, color: colors.red, fontWeight: 900, lineHeight: 1 }}>→→</div>
							<div style={{ fontSize: 12, color: '#888', fontFamily: fonts.mono, marginTop: 4 }}>Applicants</div>
						</div>

						{/* P3 Box */}
						<div style={{
							border,
							boxShadow: shadow,
							background: colors.dark,
							padding: '24px 20px',
							textAlign: 'center',
							width: '100%',
						}}>
							<div style={{
								fontFamily: fonts.heading,
								fontWeight: 900,
								fontSize: 'clamp(28px,2.5vw,42px)',
								color: colors.yellow,
								letterSpacing: -1,
								lineHeight: 1,
							}}>
								P3
							</div>
							<div style={{
								fontFamily: fonts.heading,
								fontWeight: 700,
								fontSize: 'clamp(11px,1vw,14px)',
								color: colors.white,
								marginTop: 6,
								lineHeight: 1.4,
							}}>
								Career Incubator
							</div>
							<div style={{ height: 2, background: colors.red, margin: '12px 0' }} />
							{p3Features.map((f, i) => (
								<div key={i} style={{
									fontSize: 12,
									color: 'rgba(255,255,255,0.75)',
									fontFamily: fonts.body,
									lineHeight: 1.8,
								}}>
									✓ {f}
								</div>
							))}
						</div>

						{/* Arrow out */}
						<div style={{ textAlign: 'center' }}>
							<div style={{ fontSize: 12, color: '#888', fontFamily: fonts.mono, marginBottom: 4 }}>Graduates</div>
							<div style={{ fontSize: 28, color: colors.green, fontWeight: 900, lineHeight: 1 }}>→→</div>
						</div>

						{/* Stat badge */}
						<motion.div
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{ duration: 0.4, delay: 0.8 }}
							style={{
								border,
								boxShadow: shadow,
								background: colors.red,
								padding: '12px 20px',
								textAlign: 'center',
							}}
						>
							<div style={{
								fontFamily: fonts.heading,
								fontWeight: 900,
								fontSize: 24,
								color: colors.white,
								lineHeight: 1,
							}}>
								5,000+
							</div>
							<div style={{ fontSize: 12, color: 'rgba(255,255,255,0.85)', fontFamily: fonts.mono, marginTop: 4 }}>
								Career Transitions
							</div>
						</motion.div>
					</motion.div>

					{/* Right: Target Roles */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}
					>
						<div style={{
							fontFamily: fonts.heading,
							fontWeight: 800,
							fontSize: 15,
							color: '#555',
							textTransform: 'uppercase',
							letterSpacing: 1,
							marginBottom: 4,
						}}>
							Target Roles
						</div>
						{targetRoles.map((r, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, x: 16 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.35, delay: 0.4 + i * 0.08 }}
								style={{
									border,
									boxShadow: shadowSm,
									background: colors.white,
									padding: '12px 16px',
									display: 'flex',
									alignItems: 'center',
									gap: 12,
									borderRight: `5px solid ${r.accent}`,
								}}
							>
								<span style={{ fontSize: 22 }}>{r.icon}</span>
								<span style={{
									fontFamily: fonts.body,
									fontWeight: 600,
									fontSize: 'clamp(12px,1vw,15px)',
									color: colors.black,
								}}>
									{r.label}
								</span>
							</motion.div>
						))}
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
