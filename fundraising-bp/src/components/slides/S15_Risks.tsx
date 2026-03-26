import { Slide, Title, Tag, Stagger, StaggerItem } from '../ui';
import { colors, fonts, border } from '../../styles/theme';

const risks = [
	{
		risk: '"AI 让教育没价值了"',
		analysis: '恰恰相反 — AI 改变了「教什么」，但「帮人真正学会 AI」更值钱了。ChatGPT 能回答问题，但不能帮你系统掌握技能。',
		response: '我们卖的不是知识，是学会的能力',
	},
	{
		risk: '"大厂会做同样的事"',
		analysis: 'Google/Microsoft 做通用教育。社群运营 + 全链路互动，大厂不会做也做不好。就像字节做了 TikTok 但没做拼多多。',
		response: '守住差异化，不跟大厂比通用',
	},
	{
		risk: '"AI API 成本失控"',
		analysis: '2024→2026 API 价格下降 10 倍，趋势继续。Credits 体系让用户付费使用 AI，成本有对冲。',
		response: '多模型策略 + Credits 转嫁',
	},
	{
		risk: '"国际扩张很难"',
		analysis: '对的，但社群是壁垒。我们的模式：先建社群再做产品。澳洲模式已验证，可复制到东南亚和欧美。',
		response: '社群先行，产品跟上',
	},
];

export default function S15_Risks() {
	return (
		<Slide bg="#f5f5f5">
			<div style={{ width: '90%', maxWidth: 1400, padding: 40 }}>
				<Tag bg={colors.red}>风险与诚实评估</Tag>
				<Title style={{ marginTop: 16, marginBottom: 36 }}>
					我们<span style={{ background: colors.red, color: '#fff', padding: '0 12px' }}>不回避</span>问题
				</Title>

				<Stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
					{risks.map(r => (
						<StaggerItem key={r.risk}>
							<div style={{
								border, background: colors.white, padding: '22px 20px',
								boxShadow: `4px 4px 0 ${colors.black}`, height: '100%',
							}}>
								<div style={{ fontFamily: fonts.heading, fontSize: 20, fontWeight: 800, color: colors.red, marginBottom: 10 }}>
									{r.risk}
								</div>
								<p style={{ fontSize: 15, lineHeight: 1.7, color: '#555', marginBottom: 14 }}>
									{r.analysis}
								</p>
								<div style={{
									padding: '8px 14px', background: '#f0fff0',
									border: `2px solid ${colors.green}`,
									fontSize: 14, fontWeight: 700, color: colors.green,
								}}>
									→ {r.response}
								</div>
							</div>
						</StaggerItem>
					))}
				</Stagger>
			</div>
		</Slide>
	);
}
