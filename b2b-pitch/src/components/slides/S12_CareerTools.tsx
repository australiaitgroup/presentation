import { motion } from 'framer-motion';
import { Slide, Inner, Half, Title, Divider, Tag, Stagger, StaggerItem, BulletList } from '../ui';
import { colors, fonts, border, shadow } from '../../styles/theme';
import AnimatedBg from '../AnimatedBg';

const tools = [
	{
		icon: '📝',
		title: 'AI Resume Builder',
		desc: 'Employees build professional resumes with AI assistance — great for internal mobility',
		tag: 'AI-POWERED',
	},
	{
		icon: '🎤',
		title: 'AI Mock Interview',
		desc: 'Practice interviews tailored to target roles — builds confidence before real interviews',
		tag: 'INTERACTIVE',
	},
	{
		icon: '🏢',
		title: 'Company Intelligence',
		desc: 'Research potential employers — tech stack, salary ranges, interview processes',
		tag: 'DATA-DRIVEN',
	},
	{
		icon: '🤝',
		title: 'Job Referral Network',
		desc: 'Access our 10K+ alumni network — direct referrals into top tech companies',
		tag: 'EXCLUSIVE',
	},
];

export default function S12_CareerTools() {
	return (
		<Slide bg={colors.darkBg} style={{ position: 'relative' }}>
			<AnimatedBg variant="gradient" color={colors.teal} opacity={0.18} />

			<Inner split style={{ position: 'relative', zIndex: 1, gap: 60, alignItems: 'stretch' }}>
				{/* Left side */}
				<Half style={{ justifyContent: 'center', gap: 0 }}>
					<Stagger>
						<StaggerItem style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
							<Tag bg={colors.teal}>CAREER TOOLS</Tag>
							<Tag bg={colors.green} color={colors.black}>INCLUDED</Tag>
						</StaggerItem>
						<StaggerItem>
							<Title white size="clamp(28px,3vw,48px)">
								AI-Powered{' '}
								<span style={{ color: colors.teal }}>Career Toolkit</span>
							</Title>
						</StaggerItem>
						<StaggerItem>
							<Divider color={colors.teal} />
						</StaggerItem>
						<StaggerItem>
							<p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(14px,1.6vw,18px)', marginBottom: 24 }}>
								Every learner gets AI tools that accelerate their career outcomes — from resume to referral to offer
							</p>
						</StaggerItem>
						<StaggerItem>
							<BulletList
								white
								items={[
									<span key="1"><strong style={{ color: colors.yellow }}>6,000+</strong> job placements to date</span>,
									<span key="2"><strong style={{ color: colors.yellow }}>1,000+</strong> active users on Job Hunter extension</span>,
									<span key="3">Available as <strong style={{ color: colors.yellow }}>white-label</strong> for enterprise partners</span>,
								]}
							/>
						</StaggerItem>
						{/* Enterprise value callout */}
						<StaggerItem>
							<motion.div
								initial={{ scale: 0.9 }}
								animate={{ scale: 1 }}
								style={{
									marginTop: 24, padding: '16px 20px',
									background: 'rgba(16,185,129,0.15)',
									border: `2px solid ${colors.teal}`,
								}}
							>
								<div style={{ color: colors.teal, fontFamily: fonts.heading, fontWeight: 800, fontSize: 14, marginBottom: 4 }}>
									FOR ENTERPRISE PARTNERS
								</div>
								<div style={{ color: 'rgba(255,255,255,0.8)', fontSize: 13 }}>
									White-label our career tools with your branding. Offer AI resume building, interview prep, and job matching to your workforce or graduates.
								</div>
							</motion.div>
						</StaggerItem>
					</Stagger>
				</Half>

				{/* Right: 2x2 tool cards */}
				<Half style={{ justifyContent: 'center' }}>
					<motion.div
						initial={{ opacity: 0, x: 40 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						style={{
							display: 'grid',
							gridTemplateColumns: '1fr 1fr',
							gap: 16,
						}}
					>
						{tools.map((tool, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.4 + i * 0.1 }}
								style={{
									background: colors.white,
									border,
									boxShadow: shadow,
									padding: '24px 20px',
									display: 'flex',
									flexDirection: 'column',
									gap: 10,
								}}
							>
								<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
									<span style={{ fontSize: 32 }}>{tool.icon}</span>
									<span style={{
										fontSize: 9, fontWeight: 700, fontFamily: fonts.mono,
										background: colors.dark, color: '#fff',
										padding: '2px 8px',
									}}>
										{tool.tag}
									</span>
								</div>
								<div style={{
									fontFamily: fonts.heading, fontWeight: 800,
									fontSize: 16, color: colors.black,
								}}>
									{tool.title}
								</div>
								<p style={{ fontSize: 13, color: '#555', lineHeight: 1.5, margin: 0 }}>
									{tool.desc}
								</p>
							</motion.div>
						))}
					</motion.div>
				</Half>
			</Inner>
		</Slide>
	);
}
