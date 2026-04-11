import { motion } from 'framer-motion';
import { Slide, Inner, Half, Title, Tag, Divider, Stagger, StaggerItem, BulletList } from '../ui';
import { colors, fonts, border, shadow } from '../../styles/theme';
import AnimatedBg from '../AnimatedBg';

const serviceCards = [
	{
		icon: '🧭',
		title: 'AI Strategy & Assessment',
		tag: 'STRATEGY',
		tagBg: colors.indigo,
		items: ['Where should your business use AI?', 'Prioritise high-impact use cases', 'Build vs buy analysis & ROI forecast'],
	},
	{
		icon: '⚙️',
		title: 'Custom AI Solutions',
		tag: 'BUILD',
		tagBg: colors.red,
		items: ['Intelligent automation for your workflows', 'AI-powered customer & internal tools', 'From proof-of-concept to production'],
	},
	{
		icon: '👥',
		title: 'AI Team Augmentation',
		tag: 'AUGMENT',
		tagBg: colors.teal,
		items: ['Embed experienced AI engineers in your team', 'Flexible: 3-month or long-term', 'Pre-vetted from our 10K+ talent pool'],
	},
	{
		icon: '🚀',
		title: 'AI Enablement & Adoption',
		tag: 'ADOPT',
		tagBg: colors.orange,
		items: ['Roll out AI tools across your organisation', 'Change management & staff training', 'AI governance & responsible AI policy'],
	},
];

const outcomes = [
	{ num: '60%', label: 'Faster task completion', bg: colors.indigo },
	{ num: '40%', label: 'Reduction in manual work', bg: colors.teal },
	{ num: '3x', label: 'ROI within 18 months', bg: colors.red },
];

export default function S07_Consulting() {
	return (
		<Slide bg={colors.darkBg} style={{ position: 'relative' }}>
			<AnimatedBg variant="gradient" color={colors.indigo} opacity={0.2} />

			<Inner split style={{ position: 'relative', zIndex: 1, gap: 60, alignItems: 'stretch' }}>
				{/* Left: value props */}
				<Half style={{ justifyContent: 'center', gap: 0, maxWidth: 480 }}>
					<Stagger>
						<StaggerItem>
							<Tag bg={colors.indigo}>CONSULTING</Tag>
						</StaggerItem>
						<StaggerItem style={{ marginTop: 20 }}>
							<Title white size="clamp(32px,3.2vw,54px)">
								AI Delivery &amp; Consulting
							</Title>
						</StaggerItem>
						<StaggerItem>
							<Divider color={colors.indigo} />
						</StaggerItem>
						<StaggerItem>
							<p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(16px,2vw,22px)', fontWeight: 500, marginBottom: 28 }}>
								We help businesses adopt AI — from figuring out where to start, to building and deploying real solutions
							</p>
						</StaggerItem>
						<StaggerItem>
							<BulletList
								white
								items={[
									<span key="1">Not sure where AI fits? We <strong style={{ color: colors.yellow }}>assess & advise</strong></span>,
									<span key="2">Need AI built? Our team <strong style={{ color: colors.yellow }}>designs & delivers</strong></span>,
									<span key="3">Need AI talent fast? We <strong style={{ color: colors.yellow }}>embed engineers</strong> in your team</span>,
								]}
							/>
						</StaggerItem>
						{/* Outcome metrics */}
						<StaggerItem>
							<div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
								{outcomes.map((o, i) => (
									<motion.div
										key={i}
										initial={{ scale: 0 }}
										animate={{ scale: 1 }}
										transition={{ delay: 0.8 + i * 0.1, type: 'spring' }}
										style={{
											padding: '10px 14px', background: o.bg,
											border: `2px solid rgba(255,255,255,0.3)`,
											textAlign: 'center', color: '#fff',
										}}
									>
										<div style={{ fontFamily: fonts.heading, fontSize: 24, fontWeight: 900 }}>{o.num}</div>
										<div style={{ fontSize: 10, fontWeight: 600, opacity: 0.9 }}>{o.label}</div>
									</motion.div>
								))}
							</div>
						</StaggerItem>
					</Stagger>
				</Half>

				{/* Right: 2x2 service card grid */}
				<Half style={{ justifyContent: 'center' }}>
					<motion.div
						initial={{ opacity: 0, x: 40 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						style={{
							background: colors.white,
							border,
							boxShadow: shadow,
							padding: 24,
							display: 'grid',
							gridTemplateColumns: '1fr 1fr',
							gap: 16,
						}}
					>
						{serviceCards.map((card, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
								style={{
									border,
									background: colors.warmBg,
									padding: '18px 16px',
									display: 'flex',
									flexDirection: 'column',
									gap: 8,
								}}
							>
								<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
									<span style={{ fontSize: 28 }}>{card.icon}</span>
									<span style={{
										fontSize: 11,
										fontWeight: 700,
										fontFamily: fonts.mono,
										background: card.tagBg,
										color: colors.white,
										padding: '3px 10px',
										border: `2px solid ${card.tagBg}`,
									}}>
										{card.tag}
									</span>
								</div>
								<div style={{
									fontFamily: fonts.heading,
									fontWeight: 800,
									fontSize: 'clamp(12px,1.1vw,16px)',
									color: colors.black,
									lineHeight: 1.3,
								}}>
									{card.title}
								</div>
								<ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
									{card.items.map((item, j) => (
										<li key={j} style={{
											fontSize: 'clamp(11px,0.9vw,13px)',
											color: '#444',
											lineHeight: 1.7,
											paddingLeft: 12,
											position: 'relative',
										}}>
											<span style={{ position: 'absolute', left: 0, color: colors.red, fontWeight: 700 }}>·</span>
											{item}
										</li>
									))}
								</ul>
							</motion.div>
						))}
					</motion.div>
				</Half>
			</Inner>
		</Slide>
	);
}
