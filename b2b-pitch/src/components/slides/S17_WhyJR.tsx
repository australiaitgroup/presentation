import { motion } from 'framer-motion';
import { Slide, Inner, Half, Title, Subtitle, Divider } from '../ui';
import { colors, fonts, border, shadow } from '../../styles/theme';
import AvatarWall from '../AvatarWall';

interface Reason {
	num: string;
	title: string;
	description: string;
	bg: string;
	accent: string;
}

const reasons: Reason[] = [
	{
		num: '01',
		title: '600+ Industry Mentors',
		description: 'Practising engineers from Google, Canva, Atlassian, Microsoft — not academic instructors',
		bg: '#ffe0e0',
		accent: colors.red,
	},
	{
		num: '02',
		title: 'Largest Chinese-Speaking IT Community',
		description: '10,000+ learners + global referral network across 9 countries',
		bg: '#dbeeff',
		accent: colors.blue,
	},
	{
		num: '03',
		title: 'AI-Native Platform',
		description: "We don't just teach AI — our platform is built with AI",
		bg: '#fff8dd',
		accent: colors.yellow,
	},
	{
		num: '04',
		title: 'Full Lifecycle: Learn → Build → Hire',
		description: 'Training → Projects → Resume → Interview → Referral → Offer',
		bg: '#e0f7d4',
		accent: colors.green,
	},
];

export default function S17_WhyJR() {
	return (
		<Slide bg="#f5f0eb" style={{ position: 'relative' }}>
			<AvatarWall opacity={0.06} rows={5} cols={10} size={80} />

			<Inner split style={{ position: 'relative', zIndex: 1 }}>
				{/* Left */}
				<Half style={{ flex: 0.9, gap: 20 }}>
					<motion.div
						initial={{ opacity: 0, x: -40 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
					>
						{/* Label */}
						<div style={{
							display: 'inline-block', padding: '6px 18px',
							background: colors.dark, color: '#fff',
							fontFamily: fonts.mono, fontSize: 13, fontWeight: 700,
							border: `2px solid ${colors.black}`,
							boxShadow: `3px 3px 0 ${colors.black}`,
							marginBottom: 20,
						}}>
							PARTNER VALUE PROP
						</div>

						<Title style={{ fontSize: 'clamp(36px,5vw,68px)', lineHeight: 1.1, margin: '0 0 16px 0' }}>
							Why Partner<br />With Us?
						</Title>

						<Divider color={colors.red} />

						<Subtitle style={{ fontSize: 'clamp(14px,1.6vw,18px)', lineHeight: 1.7, marginTop: 16, maxWidth: 380 }}>
							We combine Australia's largest Chinese-speaking IT community with an AI-native platform and 600+ industry practitioners.
						</Subtitle>

						{/* Stats strip */}
						<div style={{ display: 'flex', gap: 16, marginTop: 32 }}>
							{[
								{ val: '9', label: 'Countries' },
								{ val: '10K+', label: 'Learners' },
								{ val: '600+', label: 'Mentors' },
							].map((stat) => (
								<div
									key={stat.label}
									style={{
										flex: 1,
										padding: '14px 12px',
										background: colors.dark,
										border,
										boxShadow: `4px 4px 0 ${colors.black}`,
										textAlign: 'center',
									}}
								>
									<div style={{ fontFamily: fonts.heading, fontSize: 'clamp(22px,2.5vw,34px)', fontWeight: 900, color: colors.yellow }}>
										{stat.val}
									</div>
									<div style={{ fontFamily: fonts.mono, fontSize: 12, color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>
										{stat.label}
									</div>
								</div>
							))}
						</div>
					</motion.div>
				</Half>

				{/* Right */}
				<Half style={{ flex: 1.1, gap: 16 }}>
					{reasons.map((reason, i) => (
						<motion.div
							key={reason.num}
							initial={{ opacity: 0, x: 40 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.1 * i + 0.2, duration: 0.4 }}
							whileHover={{ x: 4, y: 4, boxShadow: '0 0 0 #000' }}
							style={{
								background: reason.bg,
								border,
								boxShadow: shadow,
								padding: '18px 20px',
								display: 'flex',
								gap: 16,
								alignItems: 'flex-start',
								cursor: 'default',
								transition: 'box-shadow 0.15s',
							}}
						>
							{/* Number badge */}
							<div style={{
								width: 44, height: 44, flexShrink: 0,
								background: reason.accent,
								border: `2px solid ${colors.black}`,
								display: 'flex', alignItems: 'center', justifyContent: 'center',
								fontFamily: fonts.mono, fontSize: 15, fontWeight: 900,
								color: ([colors.yellow, colors.green] as string[]).includes(reason.accent) ? colors.black : '#fff',
							}}>
								{reason.num}
							</div>

							{/* Content */}
							<div style={{ flex: 1 }}>
								<div style={{
									fontFamily: fonts.heading,
									fontSize: 'clamp(15px,1.5vw,19px)',
									fontWeight: 800,
									color: colors.dark,
									marginBottom: 5,
									lineHeight: 1.2,
								}}>
									{reason.title}
								</div>
								<div style={{
									fontSize: 'clamp(12px,1.2vw,15px)',
									color: '#555',
									lineHeight: 1.6,
									fontWeight: 500,
								}}>
									{reason.description}
								</div>
							</div>

							{/* Accent stripe */}
							<div style={{ width: 4, height: '100%', background: reason.accent, flexShrink: 0, alignSelf: 'stretch', minHeight: 40 }} />
						</motion.div>
					))}
				</Half>
			</Inner>
		</Slide>
	);
}
