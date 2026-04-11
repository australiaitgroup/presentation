import { img } from '../../utils/img';
import { motion } from 'framer-motion';
import { Slide, Title, Subtitle, Divider, Tag } from '../ui';
import { colors, fonts, border, shadow } from '../../styles/theme';

interface CaseStudy {
	icon: string;
	title: string;
	description: string;
	tagLabel: string;
	tagBg: string;
	tagColor?: string;
	bg: string;
	photo?: string;
	metric?: { value: string; label: string };
}

const cases: CaseStudy[] = [
	{
		icon: '🤖',
		title: 'AI Solution Delivery',
		description: 'Built an AI-powered knowledge base that answers customer queries automatically. 60% reduction in support ticket resolution time.',
		tagLabel: 'CONSULTING',
		tagBg: colors.indigo,
		bg: '#f0f0ff',
		metric: { value: '60%', label: 'Faster Resolution' },
	},
	{
		icon: '🏢',
		title: 'Atlassian Partnership',
		description: 'Co-hosted 20+ tech events. Direct talent pipeline into Sydney & Melbourne offices.',
		tagLabel: 'PARTNERSHIP',
		tagBg: colors.yellow,
		tagColor: colors.black,
		bg: '#fff8dd',
		photo: '/images/event-atlassian-group.webp',
		metric: { value: '20+', label: 'Events Co-Hosted' },
	},
	{
		icon: '📊',
		title: 'Enterprise Upskilling',
		description: 'Trained 200+ professionals in AI for a Big 4 firm. 94% completion rate.',
		tagLabel: 'TRAINING',
		tagBg: colors.red,
		bg: '#ffe0e0',
		metric: { value: '94%', label: 'Completion Rate' },
	},
	{
		icon: '🎓',
		title: 'University Collaboration',
		description: 'AI & cloud certifications for 500+ students across 3 universities.',
		tagLabel: 'EDUCATION',
		tagBg: colors.green,
		tagColor: colors.black,
		bg: '#e0f7d4',
		metric: { value: '500+', label: 'Students Certified' },
	},
];

const partners = ['ATLASSIAN', 'Canva', 'AWS', 'Google Cloud', 'Microsoft', 'Deloitte'];

const partnerColors: Record<string, { bg: string; color: string }> = {
	ATLASSIAN: { bg: '#0052CC', color: '#fff' },
	Canva: { bg: '#7d2ae8', color: '#fff' },
	AWS: { bg: '#FF9900', color: '#000' },
	'Google Cloud': { bg: '#4285F4', color: '#fff' },
	Microsoft: { bg: '#00a4ef', color: '#fff' },
	Deloitte: { bg: '#86bc25', color: '#000' },
};

export default function S16_CaseStudies() {
	return (
		<Slide bg={colors.white} style={{ position: 'relative' }}>
			<div style={{ position: 'relative', zIndex: 1, width: '92%', maxWidth: 1500, height: '90%', display: 'flex', flexDirection: 'column', gap: 24 }}>
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.45 }}
					style={{ textAlign: 'center', paddingTop: 10 }}
				>
					<Title style={{ fontSize: 'clamp(30px,3.8vw,52px)', margin: '0 0 10px 0' }}>Trusted By Industry Leaders</Title>
					<Subtitle style={{ fontSize: 'clamp(14px,1.6vw,18px)' }}>
						Real results with real partners
					</Subtitle>
					<Divider center color={colors.red} />
				</motion.div>

				{/* 2x2 Grid */}
				<div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 20 }}>
					{cases.map((cs, i) => (
						<motion.div
							key={cs.title}
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.1 * i, duration: 0.4 }}
							whileHover={{ x: 4, y: 4, boxShadow: '0 0 0 #000' }}
							style={{
								background: cs.bg,
								border,
								boxShadow: shadow,
								display: 'flex',
								gap: 0,
								overflow: 'hidden',
								cursor: 'default',
								position: 'relative',
								transition: 'box-shadow 0.15s',
							}}
						>
							{/* Photo column (if has photo) */}
							{cs.photo && (
								<div style={{ width: '38%', flexShrink: 0, position: 'relative', borderRight: border }}>
									<img
										src={img(cs.photo)}
										alt={cs.title}
										style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
										onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
									/>
									<div style={{
										position: 'absolute', inset: 0,
										background: 'linear-gradient(to right, transparent 60%, ' + cs.bg + ')',
									}} />
								</div>
							)}

							{/* Content */}
							<div style={{ flex: 1, padding: '24px 22px', display: 'flex', flexDirection: 'column', gap: 10 }}>
								<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
									<Tag bg={cs.tagBg} color={cs.tagColor || colors.white}>{cs.tagLabel}</Tag>
									<span style={{ fontSize: 32 }}>{cs.icon}</span>
								</div>

								<div style={{ fontFamily: fonts.heading, fontSize: 'clamp(16px,1.7vw,22px)', fontWeight: 900, color: colors.dark, lineHeight: 1.2 }}>
									{cs.title}
								</div>

								<p style={{ fontSize: 'clamp(13px,1.3vw,16px)', color: '#555', lineHeight: 1.6, margin: 0, flex: 1 }}>
									{cs.description}
								</p>

								{cs.metric && (
									<div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
										<div style={{
											fontFamily: fonts.heading, fontSize: 'clamp(24px,2.5vw,36px)',
											fontWeight: 900, color: colors.dark,
										}}>
											{cs.metric.value}
										</div>
										<div style={{ fontSize: 13, color: '#777', fontWeight: 600, lineHeight: 1.3 }}>
											{cs.metric.label}
										</div>
									</div>
								)}
							</div>
						</motion.div>
					))}
				</div>

				{/* Partner logos strip */}
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5 }}
					style={{
						display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0',
						borderTop: `3px solid ${colors.black}`,
					}}
				>
					<span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: '#aaa', whiteSpace: 'nowrap', marginRight: 4 }}>
						PARTNERS:
					</span>
					{partners.map((p) => {
						const style = partnerColors[p] || { bg: colors.dark, color: '#fff' };
						return (
							<motion.div
								key={p}
								whileHover={{ scale: 1.05 }}
								style={{
									padding: '6px 16px',
									background: style.bg,
									color: style.color,
									border: `2px solid ${colors.black}`,
									boxShadow: `3px 3px 0 ${colors.black}`,
									fontFamily: fonts.mono,
									fontSize: 13,
									fontWeight: 800,
									whiteSpace: 'nowrap',
								}}
							>
								{p}
							</motion.div>
						);
					})}
				</motion.div>
			</div>
		</Slide>
	);
}
