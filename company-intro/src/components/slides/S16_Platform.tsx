import { Slide, Inner, Title, Stagger, StaggerItem } from '../ui';
import { colors } from '../../styles/theme';
import AnimatedBg from '../AnimatedBg';

const features = [
	{ icon: '🤖', title: 'AI 学习助手', desc: '7×24 小时 AI 答疑' },
	{ icon: '🧪', title: '互动实验室', desc: '边学边练，即时反馈' },
	{ icon: '📅', title: '学习日历', desc: '管理学习进度' },
	{ icon: '📝', title: '认证题库', desc: 'AI 智能刷题' },
	{ icon: '🗺️', title: 'Roadmap', desc: '可视化学习路径' },
	{ icon: '👥', title: '学习社区', desc: '10,000+ 同学一起学' },
];

export default function S16_Platform() {
	return (
		<Slide bg={colors.darkBg} style={{ position: 'relative' }}>
			<AnimatedBg variant="gradient" opacity={0.15} color={colors.blue} />
			<Inner center style={{ position: 'relative', zIndex: 1 }}>
				<Title white size="clamp(36px,5vw,64px)">不只是课程<br />是完整的学习系统</Title>
				<Stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, width: '100%', maxWidth: 1000 }}>
					{features.map(f => (
						<StaggerItem key={f.title}>
							<div style={{
								border: '3px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.05)',
								padding: '28px 20px', textAlign: 'center', color: '#fff', transition: 'all 0.2s',
							}}>
								<div style={{ fontSize: 36, marginBottom: 12 }}>{f.icon}</div>
								<h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>{f.title}</h3>
								<p style={{ fontSize: 14, opacity: 0.7 }}>{f.desc}</p>
							</div>
						</StaggerItem>
					))}
				</Stagger>
			</Inner>
		</Slide>
	);
}
