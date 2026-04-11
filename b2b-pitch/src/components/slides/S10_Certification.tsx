import { motion } from 'framer-motion';
import { img } from '../../utils/img';
import { Slide, Inner, Half, Subtitle, Divider, Stagger, StaggerItem } from '../ui';
import { colors, fonts, border, shadow, shadowSm } from '../../styles/theme';

const certProviders = [
	{ file: 'aws.svg', name: 'AWS' },
	{ file: 'azure.svg', name: 'Azure' },
	{ file: 'gcp.svg', name: 'GCP' },
	{ file: 'kubernetes.svg', name: 'Kubernetes' },
	{ file: 'hashicorp.svg', name: 'Terraform' },
	{ file: 'comptia.svg', name: 'CompTIA' },
	{ file: 'pmi.svg', name: 'PMP' },
	{ file: 'salesforce.svg', name: 'Salesforce' },
];

const stats = [
	{ value: '350+', label: 'Certifications' },
	{ value: '80K+', label: 'Practice Questions' },
	{ value: '6K+', label: 'Certified Learners' },
];

const featureCards = [
	{ icon: '📚', title: 'Exam-Ready Prep', value: '80K+', desc: 'Practice questions mapped to real exams' },
	{ icon: '🤖', title: 'AI Study Coach', value: '24/7', desc: 'Explains wrong answers — learns your weak spots' },
	{ icon: '📊', title: 'Manager Dashboard', value: '350+', desc: 'Track team progress & pass rates' },
	{ icon: '📱', title: 'Study Anywhere', value: '24/7', desc: 'Mobile app — your team studies on their schedule' },
];

export default function S10_Certification() {
	return (
		<Slide bg={colors.yellow} style={{ position: 'relative', overflow: 'hidden' }}>
			{/* Decorative tilted blocks */}
			<motion.div
				animate={{ rotate: [12, 15, 12] }}
				transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
				style={{
					position: 'absolute',
					top: -80,
					right: -60,
					width: 320,
					height: 320,
					background: colors.red,
					border,
					opacity: 0.9,
					zIndex: 0,
				}}
			/>
			<motion.div
				animate={{ rotate: [-8, -5, -8] }}
				transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
				style={{
					position: 'absolute',
					bottom: -100,
					left: -80,
					width: 280,
					height: 280,
					background: colors.blue,
					border,
					opacity: 0.8,
					zIndex: 0,
				}}
			/>

			<Inner split style={{ position: 'relative', zIndex: 1, gap: 60, alignItems: 'stretch' }}>
				{/* Left side */}
				<Half style={{ justifyContent: 'center', gap: 0 }}>
					<Stagger>
						<StaggerItem>
							{/* Big title */}
							<div style={{ marginBottom: 8 }}>
								<div style={{
									fontFamily: fonts.heading,
									fontWeight: 900,
									fontSize: 'clamp(48px,5.5vw,90px)',
									color: colors.black,
									lineHeight: 1,
									letterSpacing: -2,
								}}>
									350+
								</div>
								<div style={{
									display: 'inline-block',
									background: colors.black,
									padding: '6px 20px',
									marginTop: 4,
								}}>
									<span style={{
										fontFamily: fonts.heading,
										fontWeight: 900,
										fontSize: 'clamp(22px,2.5vw,38px)',
										color: colors.yellow,
										letterSpacing: -1,
									}}>
										IT Certifications
									</span>
								</div>
							</div>
						</StaggerItem>
						<StaggerItem>
							<Divider color={colors.black} />
						</StaggerItem>
						<StaggerItem>
							<Subtitle style={{ color: '#333', marginBottom: 28, maxWidth: 380 }}>
								Australia's largest IT certification practice platform — prep smarter with AI-powered tutoring
							</Subtitle>
						</StaggerItem>

						{/* Stat cards */}
						<StaggerItem>
							<div style={{ display: 'flex', gap: 12, marginBottom: 32 }}>
								{stats.map((s, i) => (
									<div key={i} style={{
										border,
										boxShadow: shadowSm,
										background: colors.white,
										padding: '14px 20px',
										textAlign: 'center',
										flex: 1,
									}}>
										<div style={{
											fontFamily: fonts.heading,
											fontWeight: 900,
											fontSize: 'clamp(22px,2.2vw,34px)',
											color: colors.red,
											lineHeight: 1,
										}}>
											{s.value}
										</div>
										<div style={{
											fontSize: 13,
											fontWeight: 600,
											color: '#555',
											fontFamily: fonts.mono,
											marginTop: 4,
										}}>
											{s.label}
										</div>
									</div>
								))}
							</div>
						</StaggerItem>

						{/* Cert provider logos */}
						<StaggerItem>
							<div style={{
								border,
								boxShadow: shadowSm,
								background: colors.white,
								padding: '14px 16px',
							}}>
								<div style={{
									fontSize: 11,
									fontWeight: 700,
									fontFamily: fonts.mono,
									color: '#888',
									marginBottom: 12,
									textTransform: 'uppercase',
									letterSpacing: 1,
								}}>
									Supported Providers
								</div>
								<div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
									{certProviders.map((p, i) => (
										<img
											key={i}
											src={img(`/images/cert-providers/${p.file}`)}
											alt={p.name}
											title={p.name}
											style={{ height: 28, objectFit: 'contain', filter: 'grayscale(0.2)' }}
											onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
										/>
									))}
								</div>
							</div>
						</StaggerItem>
					</Stagger>
				</Half>

				{/* Right side */}
				<Half style={{ justifyContent: 'center' }}>
					<motion.div
						initial={{ opacity: 0, x: 40 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
					>
						{/* 2x2 feature cards */}
						<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
							{featureCards.map((c, i) => (
								<motion.div
									key={i}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
									whileHover={{ x: 4, y: 4, boxShadow: '0 0 0 #000' }}
									style={{
										border,
										boxShadow: shadow,
										background: colors.white,
										padding: '20px 18px',
										cursor: 'default',
										transition: 'box-shadow 0.15s',
									}}
								>
									<div style={{ fontSize: 28, marginBottom: 8 }}>{c.icon}</div>
									<div style={{
										fontFamily: fonts.heading,
										fontWeight: 900,
										fontSize: 'clamp(20px,2vw,30px)',
										color: colors.red,
										lineHeight: 1,
									}}>
										{c.value}
									</div>
									<div style={{
										fontFamily: fonts.heading,
										fontWeight: 700,
										fontSize: 'clamp(13px,1.1vw,16px)',
										color: colors.black,
										marginTop: 4,
									}}>
										{c.title}
									</div>
									<div style={{
										fontSize: 12,
										color: '#666',
										marginTop: 6,
										lineHeight: 1.5,
									}}>
										{c.desc}
									</div>
								</motion.div>
							))}
						</div>

						{/* CertMaster Chrome extension bar */}
						<motion.div
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 0.9 }}
							style={{
								border,
								boxShadow: shadow,
								background: colors.dark,
								padding: '16px 20px',
								display: 'flex',
								alignItems: 'center',
								gap: 16,
							}}
						>
							<div style={{
								width: 36,
								height: 36,
								background: colors.yellow,
								border: `2px solid #fff`,
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								fontSize: 18,
								flexShrink: 0,
							}}>
								🧩
							</div>
							<div style={{ flex: 1 }}>
								<div style={{
									fontFamily: fonts.heading,
									fontWeight: 700,
									fontSize: 15,
									color: colors.white,
								}}>
									CertMaster Chrome Extension
								</div>
								<div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', marginTop: 2 }}>
									Study on ExamTopics — AI answers any cert question in real time
								</div>
							</div>
							<span style={{
								fontSize: 11,
								fontWeight: 700,
								fontFamily: fonts.mono,
								background: colors.green,
								color: colors.black,
								padding: '4px 12px',
								border: `2px solid ${colors.black}`,
								flexShrink: 0,
							}}>
								FREE
							</span>
						</motion.div>
					</motion.div>
				</Half>
			</Inner>
		</Slide>
	);
}
