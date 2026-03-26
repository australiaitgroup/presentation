import { motion } from 'framer-motion';
import { Slide, Title, Tag } from '../ui';
import { colors, fonts, border, shadow } from '../../styles/theme';

const funds = [
	{ pct: '40%', title: '产品研发', desc: 'AI 引擎升级 · 移动端完善 · 新 Lab · 企业功能', color: colors.blue },
	{ pct: '30%', title: '市场扩张', desc: '新加坡/马来西亚 · B2B 销售 · 大学合作', color: colors.green },
	{ pct: '20%', title: '团队扩充', desc: '高级 AI 工程师 · 内容运营 · 市场负责人', color: colors.purple },
	{ pct: '10%', title: '运营储备', desc: 'AI API 成本 · 合规 · 不可预见支出', color: colors.orange },
];

const milestones = [
	{ time: 'Month 1-3', goal: 'UniMate AI 大学版规模化', meaning: '打开大学生入口' },
	{ time: 'Month 3-6', goal: 'B2B 签约 10+ 企业客户', meaning: '验证企业 PMF' },
	{ time: 'Month 6-9', goal: '新加坡/马来西亚社群启动', meaning: '地理扩张第一步' },
	{ time: 'Month 9-12', goal: 'MRR 翻倍', meaning: '为下一轮奠基' },
];

export default function S14_UseOfFunds() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '90%', maxWidth: 1400, padding: 40 }}>
				<Tag bg={colors.red}>资金用途</Tag>
				<Title style={{ marginTop: 16, marginBottom: 36 }}>
					用资本换时间，<span style={{ background: colors.yellow, padding: '0 12px' }}>抢占窗口期</span>
				</Title>

				<div style={{ display: 'flex', gap: 32 }}>
					{/* Left - Allocation */}
					<div style={{ flex: 1 }}>
						{funds.map((f, i) => (
							<motion.div
								key={f.title}
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.2 + i * 0.1 }}
								style={{
									display: 'flex', alignItems: 'center', gap: 16,
									padding: '14px 0', borderBottom: i < funds.length - 1 ? '1px solid #ddd' : 'none',
								}}
							>
								<div style={{
									fontFamily: fonts.heading, fontSize: 32, fontWeight: 900,
									color: f.color, width: 80, textAlign: 'right',
								}}>
									{f.pct}
								</div>
								<div>
									<div style={{ fontFamily: fonts.heading, fontSize: 20, fontWeight: 800 }}>{f.title}</div>
									<div style={{ fontSize: 14, color: '#888', marginTop: 2 }}>{f.desc}</div>
								</div>
							</motion.div>
						))}
					</div>

					{/* Right - Milestones */}
					<div style={{ flex: 1, border, background: colors.white, boxShadow: shadow, padding: '28px 24px' }}>
						<div style={{
							fontFamily: fonts.heading, fontSize: 20, fontWeight: 800, marginBottom: 24,
							borderBottom: `3px solid ${colors.red}`, paddingBottom: 12,
						}}>
							融资后 12 个月里程碑
						</div>
						{milestones.map((m, i) => (
							<motion.div
								key={m.time}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.4 + i * 0.1 }}
								style={{ display: 'flex', gap: 16, marginBottom: 20, alignItems: 'flex-start' }}
							>
								{/* Timeline dot */}
								<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 4 }}>
									<div style={{ width: 12, height: 12, borderRadius: '50%', background: colors.red }} />
									{i < milestones.length - 1 && <div style={{ width: 2, height: 40, background: '#ddd' }} />}
								</div>
								<div>
									<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, color: colors.red }}>{m.time}</div>
									<div style={{ fontFamily: fonts.heading, fontSize: 17, fontWeight: 800, marginTop: 2 }}>{m.goal}</div>
									<div style={{ fontSize: 13, color: '#888' }}>{m.meaning}</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</Slide>
	);
}
