import { Slide, Inner, Title, Tag, CardSm, Stagger, StaggerItem } from '../ui';
import { colors, border } from '../../styles/theme';

const labs = [
	{ icon: '💬', title: 'Prompt 实验室', desc: '实时对话练习 Prompt 技巧' },
	{ icon: '🎨', title: '前端实验室', desc: '27+ HTML/CSS/JS 实操，实时预览' },
	{ icon: '🐍', title: 'Python 实验室', desc: '在线编码 + 自动验证' },
	{ icon: '☁️', title: 'AWS 实验室', desc: '真实 AWS 云环境操作' },
	{ icon: '🔷', title: 'Azure 实验室', desc: 'Azure CLI 交互式实战' },
	{ icon: '🧠', title: 'LLM 实验室', desc: 'RAG · Agent · LangChain 实操' },
	{ icon: '🔀', title: 'Git 实验室', desc: '版本控制实战练习' },
	{ icon: '💻', title: 'Vibe Coding 实验室', desc: 'AI 编程工具实战' },
];

const features = ['自动验证', '进度追踪', '即时反馈', 'AI 辅助', '移动端支持'];

export default function S08_Labs() {
	return (
		<Slide bg="#e8f7e0">
			<Inner center>
				<Tag bg={colors.dark}>边学边练</Tag>
				<Title size="clamp(36px,5vw,64px)" style={{ marginTop: 12 }}>AI 驱动的互动实验室</Title>
				<Stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, maxWidth: 1100, width: '100%' }}>
					{labs.map(l => (
						<StaggerItem key={l.title}>
							<CardSm bg={colors.white} style={{ textAlign: 'center', padding: '20px 14px' }}>
								<div style={{ fontSize: 32, marginBottom: 8 }}>{l.icon}</div>
								<h3 style={{ fontSize: 15, fontWeight: 800, marginBottom: 6 }}>{l.title}</h3>
								<p style={{ fontSize: 12, color: '#555' }}>{l.desc}</p>
							</CardSm>
						</StaggerItem>
					))}
				</Stagger>
				<div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
					{features.map(f => (
						<span key={f} style={{ fontSize: 13, fontWeight: 700, color: colors.dark, padding: '4px 12px', border, background: '#fff' }}>✓ {f}</span>
					))}
				</div>
			</Inner>
		</Slide>
	);
}
