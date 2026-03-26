import { Slide, Title, Tag, Stagger, StaggerItem } from '../ui';
import { colors, fonts, border, shadow } from '../../styles/theme';

const extensions = [
	{
		name: '考证匠 AI Tutor', ver: 'v0.6.7', target: '认证考生', color: colors.red,
		features: ['截图考题 → AI 秒级解析', '支持 ExamTopics/Whizlabs', '学习统计 + 题目收藏', 'SSE 流式 AI 响应'],
		insight: '用户在刷题时，一键呼出 AI',
	},
	{
		name: '求职匠 Job Hunter', ver: 'v0.2.0', target: '求职者', color: colors.blue,
		features: ['LinkedIn/Seek/Indeed JD 自动提取', 'AI 技能匹配 + 薪资分析', 'LinkedIn 资料/公司分析', '右键快捷分析'],
		insight: '用户在求职网站时，AI 在身边',
	},
	{
		name: '牛小匠 Uni Helper', ver: 'v0.1.3', target: '大学生', color: colors.green,
		features: ['自动识别 Blackboard/Canvas/Moodle', '匹配 1,819 门大学课程', '作业分析 + 苏格拉底教学', '支持 8+ 澳洲大学'],
		insight: '用户在上课时，AI 在身边',
	},
];

export default function S07_ChromeExt() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '90%', maxWidth: 1400, padding: 40 }}>
				<Tag bg={colors.red}>独创产品</Tag>
				<Title style={{ marginTop: 16, marginBottom: 36 }}>
					3 款 Chrome 插件 —<span style={{ background: colors.yellow, padding: '0 12px' }}>嵌入用户最高频场景</span>
				</Title>

				<Stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
					{extensions.map(ext => (
						<StaggerItem key={ext.name}>
							<div style={{ border, background: colors.white, boxShadow: shadow, padding: '24px 20px', height: '100%', display: 'flex', flexDirection: 'column' }}>
								<div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
									<span style={{ fontFamily: fonts.heading, fontSize: 20, fontWeight: 800 }}>{ext.name}</span>
									<span style={{ fontFamily: fonts.mono, fontSize: 12, color: '#999' }}>{ext.ver}</span>
								</div>
								<span style={{
									display: 'inline-block', width: 'fit-content', padding: '3px 12px',
									background: ext.color, color: '#fff',
									fontSize: 12, fontWeight: 700, marginBottom: 16,
								}}>
									{ext.target}
								</span>

								<div style={{ flex: 1 }}>
									{ext.features.map((f, i) => (
										<p key={i} style={{ fontSize: 15, lineHeight: 2, color: '#555' }}>
											<span style={{ color: ext.color, fontWeight: 700 }}>→ </span>{f}
										</p>
									))}
								</div>

								<div style={{
									marginTop: 16, padding: '10px 14px',
									background: `${ext.color}15`, border: `2px solid ${ext.color}`,
									fontSize: 14, fontWeight: 700, color: ext.color,
								}}>
									💡 {ext.insight}
								</div>
							</div>
						</StaggerItem>
					))}
				</Stagger>
			</div>
		</Slide>
	);
}
