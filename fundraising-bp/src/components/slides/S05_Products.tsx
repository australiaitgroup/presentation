import { Slide, Title, Tag, Stagger, StaggerItem } from '../ui';
import { colors, fonts, border, shadowSm } from '../../styles/theme';

const categories = [
	{ title: 'AI 学习中心', items: 'Vibe Coding · Prompt 大师 · AI Engineer · AI Builder · AI PM', bg: colors.blue, icon: '🧠' },
	{ title: '互动实验室 ×6', items: 'Prompt Lab · Frontend Lab · Python Lab · AWS Lab · Vibe Coding Lab · Git Lab', bg: colors.green, icon: '⚡' },
	{ title: '认证中心 350+', items: 'AWS · Azure · GCP · CNCF · CompTIA · Salesforce · Scrum · 更多', bg: colors.orange, icon: '🏆' },
	{ title: 'AI 工具链', items: 'AI Chat 助手 · AI 代码调试 · AI 内容生成 · P3 项目实战 · VIP 1v1 辅导', bg: colors.purple, icon: '🚀' },
	{ title: 'Chrome 插件 ×3', items: '考证匠 AI Tutor · 求职匠 Job Tracker · 牛小匠 Uni Helper', bg: colors.red, icon: '🔌' },
	{ title: '移动端 + 企业', items: 'CertMaster App · B2B 团队方案 · 企业定制培训 · 批量认证授权', bg: colors.dark, icon: '📱' },
];

export default function S05_Products() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '90%', maxWidth: 1400, padding: 40 }}>
				<Tag bg={colors.red}>我们的产品</Tag>
				<Title style={{ marginTop: 16, marginBottom: 36 }}>
					不是 PPT，是<span style={{ background: colors.yellow, padding: '0 12px' }}>跑着的完整产品</span>
				</Title>

				<Stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
					{categories.map(c => (
						<StaggerItem key={c.title}>
							<div style={{ border, boxShadow: shadowSm, background: colors.white, padding: '20px 18px', height: '100%' }}>
								<div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
									<span style={{ fontSize: 24 }}>{c.icon}</span>
									<span style={{
										display: 'inline-block', padding: '4px 14px',
										background: c.bg, color: c.bg === colors.dark ? '#fff' : (c.bg === colors.red || c.bg === colors.purple ? '#fff' : '#000'),
										fontFamily: fonts.heading, fontSize: 15, fontWeight: 800,
										border: `2px solid ${colors.black}`,
									}}>
										{c.title}
									</span>
								</div>
								<p style={{ fontSize: 15, lineHeight: 1.8, color: '#555' }}>{c.items}</p>
							</div>
						</StaggerItem>
					))}
				</Stagger>
			</div>
		</Slide>
	);
}
