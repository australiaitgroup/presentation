import { Slide, Inner, Title, Subtitle, Card, Stagger, StaggerItem } from '../ui';
import { colors } from '../../styles/theme';
import AnimatedBg from '../AnimatedBg';

const tracks = [
	{ title: '编程开发方向', bg: '#ffe0e0', items: ['Web 全栈开发 (React + Node.js)', 'Data Engineering 数据工程', 'DevOps & Cloud', 'AI Engineer 训练营', 'Cyber Security'] },
	{ title: '分析沟通方向', bg: '#dbeeff', items: ['Business Analyst 产品经理', 'Data Analyst 数据分析', 'UI/UX Design'] },
	{ title: 'Offer 提升方向', bg: '#e0f7d4', items: ['全栈面试冲刺营', 'Career Coaching 1v1', 'AI Resume + 模拟面试'] },
];

export default function S09_Bootcamps() {
	return (
		<Slide bg={colors.warmBg} style={{ position: 'relative' }}>
			<AnimatedBg variant="grid" opacity={0.04} />
			<Inner center style={{ position: 'relative', zIndex: 1 }}>
				<Title size="clamp(36px,5vw,64px)">从零到 Offer 的系统课程</Title>
				<Subtitle>课程已迭代至第 30+ 期</Subtitle>
				<Stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, width: '100%', maxWidth: 1100 }}>
					{tracks.map(t => (
						<StaggerItem key={t.title}>
							<Card bg={t.bg} style={{ textAlign: 'left' }}>
								<h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 14 }}>{t.title}</h3>
								<ul style={{ listStyle: 'none' }}>
									{t.items.map(item => <li key={item} style={{ fontSize: 15, lineHeight: 2 }}><span style={{ color: colors.red, fontWeight: 700 }}>· </span>{item}</li>)}
								</ul>
							</Card>
						</StaggerItem>
					))}
				</Stagger>
			</Inner>
		</Slide>
	);
}
