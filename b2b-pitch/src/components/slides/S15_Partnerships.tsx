import { motion } from 'framer-motion';
import { Slide, Title, Subtitle, Divider, Tag } from '../ui';
import { colors, fonts, border, shadow } from '../../styles/theme';

interface PartnerCard {
	icon: string;
	title: string;
	description: string;
	tagLabel: string;
	tagBg: string;
	tagColor?: string;
	accent: string;
	bg: string;
}

const cards: PartnerCard[] = [
	{
		icon: '🧭',
		title: 'AI Delivery & Consulting',
		description: 'We assess, build, and deploy AI solutions for your business.',
		tagLabel: 'NEW',
		tagBg: colors.indigo,
		accent: colors.indigo,
		bg: '#f0eeff',
	},
	{
		icon: '🎓',
		title: 'Corporate Training',
		description: 'Custom AI bootcamps. 8–12 week programs. On-site or remote.',
		tagLabel: 'POPULAR',
		tagBg: colors.red,
		accent: colors.red,
		bg: '#fff0f0',
	},
	{
		icon: '🤝',
		title: 'Talent Referral',
		description: 'Access 10K+ trained candidates. Pre-vetted and job-ready.',
		tagLabel: 'HIRING',
		tagBg: colors.green,
		tagColor: colors.black,
		accent: colors.green,
		bg: '#efffec',
	},
	{
		icon: '📢',
		title: 'Co-Branded Events',
		description: 'Joint meetups & workshops. 200+ events/year.',
		tagLabel: 'BRANDING',
		tagBg: colors.blue,
		accent: colors.blue,
		bg: '#eef7ff',
	},
	{
		icon: '🏢',
		title: 'Platform Licensing',
		description: 'White-label our learning platform. Custom content.',
		tagLabel: 'ENTERPRISE',
		tagBg: colors.purple,
		accent: colors.purple,
		bg: '#f9eeff',
	},
];

export default function S15_Partnerships() {
	return (
		<Slide bg={colors.warmBg} style={{ position: 'relative' }}>
			{/* Subtle grid bg */}
			<div style={{
				position: 'absolute', inset: 0, opacity: 0.05,
				backgroundImage: `linear-gradient(rgba(0,0,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.3) 1px, transparent 1px)`,
				backgroundSize: '60px 60px',
				pointerEvents: 'none',
			}} />

			<div style={{ position: 'relative', zIndex: 1, width: '92%', maxWidth: 1500, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 36 }}>
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.45 }}
					style={{ textAlign: 'center' }}
				>
					<Title style={{ fontSize: 'clamp(32px,4vw,56px)', margin: '0 0 10px 0' }}>Partnership Models</Title>
					<Subtitle style={{ fontSize: 'clamp(14px,1.8vw,20px)' }}>
						Flexible engagement options tailored to your needs
					</Subtitle>
					<Divider center color={colors.red} />
				</motion.div>

				{/* Cards row */}
				<div style={{ display: 'flex', gap: 20, width: '100%', alignItems: 'stretch' }}>
					{cards.map((card, i) => (
						<motion.div
							key={card.title}
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.08 * i, duration: 0.4, ease: 'easeOut' }}
							whileHover={{ x: 4, y: 4, boxShadow: '0 0 0 #000' }}
							style={{
								flex: 1,
								background: card.bg,
								border,
								boxShadow: shadow,
								padding: '28px 22px',
								display: 'flex',
								flexDirection: 'column',
								gap: 14,
								cursor: 'default',
								position: 'relative',
								overflow: 'hidden',
								transition: 'box-shadow 0.15s',
							}}
						>
							{/* Top accent bar */}
							<div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 5, background: card.accent }} />

							{/* Tag */}
							<div>
								<Tag bg={card.tagBg} color={card.tagColor || colors.white}>{card.tagLabel}</Tag>
							</div>

							{/* Icon */}
							<div style={{ fontSize: 52 }}>{card.icon}</div>

							{/* Title */}
							<div style={{
								fontFamily: fonts.heading,
								fontSize: 'clamp(16px,1.6vw,22px)',
								fontWeight: 900,
								color: colors.dark,
								lineHeight: 1.2,
							}}>
								{card.title}
							</div>

							{/* Divider */}
							<div style={{ width: 36, height: 3, background: card.accent }} />

							{/* Description */}
							<p style={{
								fontSize: 'clamp(13px,1.3vw,16px)',
								color: '#555',
								lineHeight: 1.65,
								fontWeight: 500,
								margin: 0,
								flex: 1,
							}}>
								{card.description}
							</p>

							{/* Arrow cta */}
							<div style={{
								display: 'flex', alignItems: 'center', gap: 6,
								fontSize: 13, fontWeight: 700, color: card.accent,
								fontFamily: fonts.mono,
							}}>
								Learn more →
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</Slide>
	);
}
