import { img } from '../../utils/img';
import { motion } from 'framer-motion';
import { Slide, Title, Subtitle, Divider, Tag } from '../ui';
import { colors, fonts, border, shadowSm } from '../../styles/theme';
import AnimatedBg from '../AnimatedBg';

interface Mentor {
	name: string;
	role: string;
	company: string;
	img?: string;
	color: string;
}

const mentors: Mentor[] = [
	{ name: 'Lightman', role: 'CEO', company: 'JR Academy', img: '/images/event-speaker.jpg', color: '#fff1e7' },
	{ name: 'Jatin Wadhwa', role: 'Head of Data & AI', company: 'Givvable', img: '/images/mentor-jatin-wadhwa.jpg', color: '#e8f4ff' },
	{ name: 'Joe Zhou', role: 'Software Engineer', company: 'Google', color: '#fff8dd' },
	{ name: 'Yu Wang', role: 'SRE', company: 'Atlassian', color: '#e0f7d4' },
	{ name: 'Sally Chen', role: 'Data Analyst', company: 'Deloitte', color: '#ffe0e0' },
	{ name: 'Ran Ding', role: 'Principal Engineer', company: 'Atlassian', color: '#f0e8ff' },
	{ name: 'Kevin Luo', role: 'Team Lead', company: 'Google', color: '#e8f4ff' },
	{ name: 'Owen Yan', role: 'Data Engineer', company: 'Canva', color: '#e0f7d4' },
	{ name: 'Vik Gambhir', role: 'Product Lead', company: 'Atlassian', color: '#fff8dd' },
	{ name: 'Katherine Chen', role: 'Software Engineer', company: 'Google', color: '#ffe0e0' },
	{ name: 'Ray Ma', role: 'DevOps Engineer', company: 'Microsoft', color: '#e8f4ff' },
	{ name: 'Bruce Zhao', role: 'Senior Developer', company: 'Deloitte', color: '#f0e8ff' },
];

const companyColors: Record<string, string> = {
	Google: colors.red,
	Canva: colors.blue,
	Atlassian: colors.indigo,
	Microsoft: '#00a4ef',
	Amazon: colors.orange,
	Deloitte: '#86bc25',
	PwC: '#d04a02',
	Givvable: colors.teal,
	'JR Academy': colors.dark,
};

function MentorCard({ mentor, index }: { mentor: Mentor; index: number }) {
	const accentColor = companyColors[mentor.company] || colors.dark;

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.05 * index, duration: 0.35, ease: 'easeOut' }}
			whileHover={{ x: 3, y: 3, boxShadow: '0 0 0 #000' }}
			style={{
				background: mentor.color,
				border,
				boxShadow: shadowSm,
				display: 'flex',
				alignItems: 'center',
				gap: 12,
				padding: '12px 14px',
				cursor: 'default',
				transition: 'box-shadow 0.15s',
			}}
		>
			{/* Avatar */}
			<div style={{
				width: 54, height: 54, flexShrink: 0,
				border: `2px solid ${colors.black}`,
				overflow: 'hidden',
				background: '#ddd',
				display: 'flex', alignItems: 'center', justifyContent: 'center',
				fontSize: 26,
			}}>
				{mentor.img ? (
					<img
						src={img(mentor.img)}
						alt={mentor.name}
						style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
						onError={(e) => {
							const el = e.target as HTMLImageElement;
							el.style.display = 'none';
							const parent = el.parentElement;
							if (parent) parent.textContent = '👤';
						}}
					/>
				) : '👤'}
			</div>

			{/* Info */}
			<div style={{ minWidth: 0, flex: 1 }}>
				<div style={{ fontFamily: fonts.heading, fontSize: 15, fontWeight: 800, color: colors.dark, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
					{mentor.name}
				</div>
				<div style={{ fontSize: 12, color: '#666', fontWeight: 500, lineHeight: 1.4 }}>{mentor.role}</div>
				<div style={{
					display: 'inline-block', marginTop: 4,
					padding: '2px 8px', fontSize: 11, fontWeight: 700,
					background: accentColor, color: '#fff',
					fontFamily: fonts.mono,
				}}>
					{mentor.company}
				</div>
			</div>
		</motion.div>
	);
}

export default function S14_Mentors() {
	return (
		<Slide bg="#f5f0eb" style={{ position: 'relative' }}>
			<AnimatedBg variant="dots" opacity={0.07} />

			<div style={{ position: 'relative', zIndex: 1, width: '92%', maxWidth: 1500, height: '88%', display: 'flex', flexDirection: 'column', gap: 24 }}>
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.45 }}
					style={{ textAlign: 'center', paddingTop: 20 }}
				>
					<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 10 }}>
						<Title style={{ fontSize: 'clamp(32px,4vw,54px)', margin: 0 }}>
							600+ Mentors from Leading Companies
						</Title>
					</div>
					<Subtitle style={{ fontSize: 'clamp(14px,1.8vw,20px)', letterSpacing: 1, color: '#666' }}>
						Google · Canva · Atlassian · Microsoft · Amazon · Deloitte · PwC
					</Subtitle>
					<Divider center color={colors.red} />
				</motion.div>

				{/* 6 x 2 grid */}
				<div style={{
					flex: 1,
					display: 'grid',
					gridTemplateColumns: 'repeat(6, 1fr)',
					gridTemplateRows: 'repeat(2, 1fr)',
					gap: 14,
				}}>
					{mentors.map((mentor, i) => (
						<MentorCard key={mentor.name} mentor={mentor} index={i} />
					))}
				</div>

				{/* Bottom badge */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.7 }}
					style={{ display: 'flex', justifyContent: 'center', gap: 16, paddingBottom: 12 }}
				>
					{['100% Practitioners', 'No Academic Instructors', 'Real-World Projects'].map((txt, i) => (
						<Tag key={i} bg={i === 0 ? colors.dark : i === 1 ? colors.red : colors.green} color={i === 2 ? colors.black : colors.white}>
							{txt}
						</Tag>
					))}
				</motion.div>
			</div>
		</Slide>
	);
}
