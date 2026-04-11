import { motion } from 'framer-motion';
import { Slide, Inner, Title, Divider, Tag, Stagger, StaggerItem, BulletList } from '../ui';
import { colors, fonts, border, shadow } from '../../styles/theme';
import AnimatedBg from '../AnimatedBg';

const col1 = {
	label: 'For Your Tech Team',
	bg: colors.red,
	items: [
		{ name: 'AI Engineer', type: 'Build & deploy AI applications' },
		{ name: 'AI-Assisted Development', type: 'Write code 3x faster with AI tools' },
		{ name: 'Cloud & DevOps', type: 'Automate infrastructure & delivery' },
		{ name: 'Cyber Security', type: 'Protect your systems & data' },
		{ name: 'Data Engineering', type: 'Turn raw data into business insights' },
	],
};

const col2 = {
	label: 'For All Employees',
	bg: colors.blue,
	free: true,
	items: [
		{ name: 'AI Essentials', type: 'Understand AI — no tech background needed' },
		{ name: 'AI Office Productivity', type: 'Automate emails, reports, meetings' },
		{ name: 'Prompt Engineering', type: 'Get better results from AI tools' },
		{ name: 'AI for Data Analysis', type: 'Faster insights from your data' },
		{ name: 'No-Code AI Tools', type: 'Build internal tools without coding' },
	],
};

const col3 = {
	label: 'Talent Development',
	bg: colors.green,
	items: [
		{ name: 'Project Incubator', type: 'Real commercial projects, real teams' },
		{ name: 'Career Coaching', type: '1-on-1 mentoring with industry leaders' },
		{ name: 'IT Certifications', type: 'AWS, Azure, GCP — exam-ready' },
		{ name: 'Interview Readiness', type: 'AI-powered mock interviews' },
		{ name: 'Graduate Pipeline', type: 'Hire from our trained talent pool' },
	],
};

interface ProgramColData {
	label: string;
	bg: string;
	free?: boolean;
	items: { name: string; type: string }[];
}

function ProgramCol({ col }: { col: ProgramColData }) {
	const textColor = col.bg === (colors.green as string) ? colors.black : colors.white;
	return (
		<div style={{
			flex: 1,
			display: 'flex',
			flexDirection: 'column',
			gap: 0,
			border,
			boxShadow: shadow,
			overflow: 'hidden',
		}}>
			{/* Header */}
			<div style={{
				background: col.bg,
				padding: '14px 16px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				borderBottom: border,
			}}>
				<span style={{
					fontFamily: fonts.heading,
					fontWeight: 800,
					fontSize: 'clamp(13px,1.1vw,16px)',
					color: textColor,
				}}>
					{col.label}
				</span>
				{col.free && (
					<span style={{
						fontSize: 11,
						fontWeight: 700,
						fontFamily: fonts.mono,
						background: colors.yellow,
						color: colors.black,
						padding: '2px 8px',
						border: `2px solid ${colors.black}`,
					}}>
						FREE
					</span>
				)}
			</div>

			{/* Items */}
			{col.items.map((item, i) => (
				<div key={i} style={{
					background: i % 2 === 0 ? colors.white : colors.warmBg,
					padding: '10px 16px',
					borderBottom: i < col.items.length - 1 ? `2px solid #000` : 'none',
					display: 'flex', alignItems: 'center', gap: 8,
				}}>
					<span style={{
						width: 6, height: 6, background: col.bg, flexShrink: 0,
					}} />
					<div>
						<div style={{
							fontFamily: fonts.heading,
							fontWeight: 700,
							fontSize: 'clamp(12px,1vw,15px)',
							color: colors.black,
						}}>
							{item.name}
						</div>
						<div style={{
							fontSize: 11,
							fontFamily: fonts.mono,
							color: '#666',
						}}>
							{item.type}
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default function S08_Training() {
	return (
		<Slide bg={colors.darkBg} style={{ position: 'relative' }}>
			<AnimatedBg variant="gradient" color={colors.purple} opacity={0.18} />

			<Inner style={{ position: 'relative', zIndex: 1, flexDirection: 'column', gap: 0, height: '90%', justifyContent: 'center' }}>
				{/* Header row */}
				<div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 32 }}>
					<Stagger style={{ flex: '0 0 420px' }}>
						<StaggerItem>
							<Tag bg={colors.purple}>ENTERPRISE</Tag>
						</StaggerItem>
						<StaggerItem style={{ marginTop: 16 }}>
							<Title white size="clamp(30px,3vw,50px)">
								AI Training Programs
							</Title>
						</StaggerItem>
						<StaggerItem>
							<Divider color={colors.purple} />
						</StaggerItem>
					</Stagger>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						style={{ flex: '0 0 400px' }}
					>
						<BulletList
							white
							items={[
								'Customizable to your tech stack & industry',
								'Instructor-led, self-paced, or blended',
								'Hands-on labs with real-world projects',
								'Progress tracking & completion reports',
							]}
						/>
					</motion.div>
				</div>

				{/* 3-column program grid */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					style={{ display: 'flex', gap: 20, alignItems: 'stretch' }}
				>
					<ProgramCol col={col1} />
					<ProgramCol col={col2} />
					<ProgramCol col={col3} />
				</motion.div>
			</Inner>
		</Slide>
	);
}
