import { Slide, Inner, Title, Card, Stagger, StaggerItem } from '../ui';
import { colors } from '../../styles/theme';
import AnimatedBg from '../AnimatedBg';

const items = [
	{ icon: '🤖', title: 'AI 学习中心', desc: 'Vibe Coding · Prompt Master\nAI Engineer · AI Builder', bg: '#dbeeff' },
	{ icon: '💻', title: 'IT 职业课程', desc: 'Web全栈 · Data · DevOps\nBA · Cyber Security', bg: '#ffe0e0' },
	{ icon: '🏆', title: '认证考试', desc: 'AWS · Azure · GCP · K8s\n350+ 认证一站式备考', bg: '#fff8dd' },
	{ icon: '🎯', title: '求职工具', desc: 'AI 简历 · 模拟面试\n内推 · Career Coaching', bg: '#e0f7d4' },
	{ icon: '🚀', title: 'P3 职业孵化器', desc: '真实项目实战\n企业级工作经验', bg: '#f0dff7' },
	{ icon: '🤝', title: '社区 & 活动', desc: '200+ 活动/年\n公开课 · Meetup', bg: '#ffe8d4' },
];

export default function S06_Ecosystem() {
	return (
		<Slide bg={colors.warmBg} style={{ position: 'relative' }}>
			<AnimatedBg variant="shapes" opacity={0.06} />
			<Inner center style={{ position: 'relative', zIndex: 1 }}>
				<Title size="clamp(36px,5vw,64px)">一站式 AI 学习 & 求职生态</Title>
				<Stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, width: '100%', maxWidth: 1100 }}>
					{items.map(item => (
						<StaggerItem key={item.title}>
							<Card bg={item.bg} style={{ textAlign: 'center', padding: '28px 20px' }}>
								<div style={{ fontSize: 40, marginBottom: 12 }}>{item.icon}</div>
								<h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 8 }}>{item.title}</h3>
								<p style={{ fontSize: 14, color: '#555', lineHeight: 1.5, whiteSpace: 'pre-line' }}>{item.desc}</p>
							</Card>
						</StaggerItem>
					))}
				</Stagger>
			</Inner>
		</Slide>
	);
}
