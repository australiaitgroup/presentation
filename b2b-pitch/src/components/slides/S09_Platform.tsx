import { motion } from 'framer-motion';
import { Slide, Inner, Title, Divider, Stagger, StaggerItem } from '../ui';
import { colors, fonts } from '../../styles/theme';
import AnimatedBg from '../AnimatedBg';

const features = [
	{
		icon: '🤖',
		title: 'AI Tutor — Always On',
		desc: 'Your team gets instant answers 24/7 — no waiting for a trainer',
		accent: colors.indigo,
	},
	{
		icon: '🧪',
		title: 'Hands-On Practice Labs',
		desc: 'Employees learn by doing — real exercises, instant feedback, no setup required',
		accent: colors.teal,
	},
	{
		icon: '📊',
		title: 'Progress Tracking & Reports',
		desc: 'See who completed what — exportable reports for L&D compliance',
		accent: colors.blue,
	},
	{
		icon: '🏆',
		title: 'Certification Exam Prep',
		desc: '350+ IT certifications with AI-powered practice — pass rates that matter',
		accent: colors.red,
	},
	{
		icon: '🗺️',
		title: 'Guided Learning Paths',
		desc: 'Structured roadmaps so employees know exactly what to learn next',
		accent: colors.orange,
	},
	{
		icon: '👥',
		title: '10,000+ Peer Community',
		desc: 'Your team joins a global network of learners and industry practitioners',
		accent: colors.green,
	},
];

export default function S09_Platform() {
	return (
		<Slide bg={colors.darkBg} style={{ position: 'relative' }}>
			<AnimatedBg variant="gradient" color={colors.blue} opacity={0.18} />

			<Inner style={{ position: 'relative', zIndex: 1, flexDirection: 'column', gap: 0, justifyContent: 'center', height: '90%' }}>
				{/* Header */}
				<Stagger style={{ textAlign: 'center', marginBottom: 40 }}>
					<StaggerItem>
						<Title white size="clamp(30px,3.2vw,52px)" style={{ textAlign: 'center' }}>
							More Than Courses —{' '}
							<span style={{
								background: colors.blue,
								color: colors.white,
								padding: '0 16px',
								display: 'inline-block',
							}}>
								A Complete Learning System
							</span>
						</Title>
					</StaggerItem>
					<StaggerItem>
						<Divider color={colors.blue} center />
					</StaggerItem>
				</Stagger>

				{/* 3x2 feature grid */}
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
					{features.map((feat, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 24 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
							whileHover={{ x: 4, y: 4, boxShadow: '0 0 0 #000' }}
							style={{
								border: `3px solid rgba(255,255,255,0.3)`,
								boxShadow: `6px 6px 0 rgba(255,255,255,0.15)`,
								background: 'rgba(255,255,255,0.06)',
								padding: '28px 24px',
								display: 'flex',
								flexDirection: 'column',
								gap: 12,
								cursor: 'default',
								transition: 'box-shadow 0.15s',
							}}
						>
							{/* Accent bar */}
							<div style={{
								width: 48,
								height: 4,
								background: feat.accent,
								marginBottom: 4,
							}} />
							<div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
								<span style={{
									fontSize: 36,
									lineHeight: 1,
									filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
								}}>
									{feat.icon}
								</span>
								<div style={{
									fontFamily: fonts.heading,
									fontWeight: 800,
									fontSize: 'clamp(14px,1.2vw,18px)',
									color: colors.white,
									lineHeight: 1.3,
								}}>
									{feat.title}
								</div>
							</div>
							<p style={{
								fontSize: 'clamp(12px,1vw,15px)',
								color: 'rgba(255,255,255,0.65)',
								lineHeight: 1.6,
								margin: 0,
								fontFamily: fonts.body,
							}}>
								{feat.desc}
							</p>
						</motion.div>
					))}
				</div>
			</Inner>
		</Slide>
	);
}
