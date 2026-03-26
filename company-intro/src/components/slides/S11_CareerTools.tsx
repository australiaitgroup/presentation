import { Slide, Inner, Title, Card, Stagger, StaggerItem } from '../ui';
import { colors, fonts } from '../../styles/theme';
import AnimatedBg from '../AnimatedBg';

const tools = [
	{ icon: '📝', title: 'JobPin AI 简历', desc: 'AI + 手动双模式\n简历编辑器', bg: '#ffe0e0' },
	{ icon: '🎤', title: 'AI 模拟面试', desc: '针对目标公司\nAI 面试官', bg: '#dbeeff' },
	{ icon: '🤝', title: '工作内推', desc: '全球华人\nIT 内推网络', bg: '#e0f7d4' },
	{ icon: '👨‍🏫', title: 'Career Coaching', desc: '1v1 资深导师\n职业规划', bg: '#f0dff7' },
];

export default function S11_CareerTools() {
	return (
		<Slide bg="#f5f0eb" style={{ position: 'relative' }}>
			<AnimatedBg variant="dots" opacity={0.05} />
			<Inner center style={{ position: 'relative', zIndex: 1 }}>
				<Title size="clamp(36px,5vw,64px)">AI 驱动的求职工具箱</Title>
				<Stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20, width: '100%', maxWidth: 1100 }}>
					{tools.map(t => (
						<StaggerItem key={t.title}>
							<Card bg={t.bg} style={{ textAlign: 'center', padding: '28px 16px' }}>
								<div style={{ fontSize: 40, marginBottom: 12 }}>{t.icon}</div>
								<h3 style={{ fontSize: 17, fontWeight: 800, marginBottom: 8 }}>{t.title}</h3>
								<p style={{ fontSize: 13, color: '#555', lineHeight: 1.5, whiteSpace: 'pre-line' }}>{t.desc}</p>
							</Card>
						</StaggerItem>
					))}
				</Stagger>
				<div>
					<span style={{ fontFamily: fonts.heading, fontSize: 48, fontWeight: 700, color: colors.red }}>6,000+</span>
					<span style={{ fontSize: 18, fontWeight: 600, marginLeft: 12 }}>学员拿到 Offer</span>
				</div>
			</Inner>
		</Slide>
	);
}
