import AnimatedBg from '../AnimatedBg';
import { Slide, Inner, Title, Stagger, StaggerItem } from '../ui';
import { colors, fonts, border, shadowSm } from '../../styles/theme';

const steps = [
	{ n: 1, title: '了解', desc: '参加免费\n公开课 / Meetup', bg: colors.red, white: true },
	{ n: 2, title: '选择', desc: '选择适合你的\n课程方向', bg: colors.yellow, white: false },
	{ n: 3, title: '学习', desc: '系统课程 +\n互动实验室', bg: colors.blue, white: true },
	{ n: 4, title: '实战', desc: 'P3 项目 +\n认证考试', bg: colors.green, white: false },
	{ n: 5, title: '求职', desc: 'AI 简历 +\n模拟面试 + 内推', bg: colors.purple, white: true },
	{ n: 6, title: 'Offer!', desc: '入职 +\n持续社区支持', bg: colors.orange, white: true },
];

export default function S19_Journey() {
	return (
		<Slide bg={colors.warmBg} style={{ position: 'relative' }}>
			<AnimatedBg variant="grid" opacity={0.04} />
			<Inner center>
				<Title size="clamp(40px,5.5vw,72px)">你的学习旅程</Title>
				<Stagger style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', gap: 0, flexWrap: 'wrap' }}>
					{steps.map((s, i) => (
						<StaggerItem key={s.n} style={{ display: 'flex', alignItems: 'flex-start' }}>
							<div style={{ textAlign: 'center', width: 140 }}>
								<div style={{
									width: 56, height: 56, border, display: 'flex', alignItems: 'center', justifyContent: 'center',
									fontFamily: fonts.heading, fontSize: 24, fontWeight: 800, margin: '0 auto 12px',
									boxShadow: shadowSm, background: s.bg, color: s.white ? '#fff' : '#000',
								}}>{s.n}</div>
								<h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 4 }}>{s.title}</h3>
								<p style={{ fontSize: 13, color: '#555', lineHeight: 1.4, whiteSpace: 'pre-line' }}>{s.desc}</p>
							</div>
							{i < steps.length - 1 && (
								<span style={{ fontSize: 28, fontWeight: 700, color: colors.red, marginTop: 14, padding: '0 4px' }}>→</span>
							)}
						</StaggerItem>
					))}
				</Stagger>
			</Inner>
		</Slide>
	);
}
