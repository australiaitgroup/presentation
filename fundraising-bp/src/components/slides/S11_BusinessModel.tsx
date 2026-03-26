import { Slide, Title, Tag, Stagger, StaggerItem } from '../ui';
import { colors, fonts, border } from '../../styles/theme';

const streams = [
	{ name: 'Bootcamp 课程', price: '$2K-8K/人', model: '一次性 / 分期', note: '主力收入', color: colors.red },
	{ name: '认证订阅', price: '$100-500/人', model: 'SaaS 订阅', note: '持续扩展', color: colors.blue },
	{ name: 'Credits 充值', price: '$10-500/次', model: '虚拟货币', note: 'AI 功能消费', color: colors.green },
	{ name: 'B2B 企业方案', price: '$29-89/人/月', model: '团队 SaaS', note: '增长引擎', color: colors.purple },
	{ name: 'VIP 辅导', price: '$1K-5K/人', model: '结果付费', note: '无 Offer 退 50%', color: colors.orange },
	{ name: '人才推荐', price: '年薪 10-20%', model: '佣金', note: '纯利润', color: colors.dark },
];

export default function S11_BusinessModel() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '90%', maxWidth: 1400, padding: 40 }}>
				<Tag bg={colors.red}>商业模式</Tag>
				<Title style={{ marginTop: 16, marginBottom: 36 }}>
					<span style={{ background: colors.yellow, padding: '0 12px' }}>多元收入</span>，不依赖单一来源
				</Title>

				<Stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
					{streams.map(s => (
						<StaggerItem key={s.name}>
							<div style={{
								border, background: colors.white, padding: '20px 18px',
								borderLeft: `6px solid ${s.color}`,
								boxShadow: `4px 4px 0 ${colors.black}`,
								height: '100%',
							}}>
								<div style={{ fontFamily: fonts.heading, fontSize: 20, fontWeight: 800 }}>{s.name}</div>
								<div style={{ fontFamily: fonts.heading, fontSize: 28, fontWeight: 900, color: s.color, marginTop: 8 }}>{s.price}</div>
								<div style={{ fontSize: 14, color: '#888', marginTop: 8 }}>{s.model} · {s.note}</div>
							</div>
						</StaggerItem>
					))}
				</Stagger>

				{/* B2B callout */}
				<div style={{
					marginTop: 24, padding: '14px 24px',
					border: `3px solid ${colors.purple}`, background: `${colors.purple}10`,
					display: 'flex', alignItems: 'center', gap: 20,
				}}>
					<span style={{ fontFamily: fonts.heading, fontSize: 18, fontWeight: 800, color: colors.purple }}>B2B 关键数据</span>
					<span style={{ fontSize: 15, color: '#555' }}>
						1 个 20 人企业客户 ≈ 100 个 B2C 认证用户的收入。企业续约率远高于个人。
					</span>
				</div>
			</div>
		</Slide>
	);
}
