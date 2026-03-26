import { motion } from 'framer-motion';
import { Slide, Title, Tag, Stagger, StaggerItem } from '../ui';
import { colors, fonts, border, shadow } from '../../styles/theme';

const markets = [
	{ size: '$350B+', label: '全球在线教育', growth: '13.6% CAGR', bg: '#f0f0f0', accent: colors.black },
	{ size: '$50B+', label: 'AI 教育/培训', growth: '25%+ CAGR', bg: '#f0f0f0', accent: colors.blue },
	{ size: '$12B+', label: 'IT 认证考试', growth: '15% CAGR', bg: '#f0f0f0', accent: colors.green },
	{ size: '$2-5B', label: '社群驱动 AI 教育', growth: '我们的战场', bg: colors.red, accent: colors.red },
];

export default function S04_Market() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '90%', maxWidth: 1400, padding: 40 }}>
				<Tag bg={colors.red}>市场机会</Tag>
				<Title style={{ marginTop: 16, marginBottom: 40 }}>
					切入 <span style={{ background: colors.red, color: '#fff', padding: '0 12px' }}>$2-5B</span> 社群驱动 AI 教育市场
				</Title>

				<Stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
					{markets.map((m, i) => (
						<StaggerItem key={m.label}>
							<div style={{
								border, boxShadow: shadow,
								background: m.bg, padding: '32px 20px',
								textAlign: 'center',
								color: i === 3 ? '#fff' : colors.black,
							}}>
								<div style={{
									fontFamily: fonts.heading, fontWeight: 900,
									fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1,
								}}>
									{m.size}
								</div>
								<div style={{ fontFamily: fonts.heading, fontSize: 18, fontWeight: 700, marginTop: 8 }}>{m.label}</div>
								<div style={{
									display: 'inline-block', marginTop: 12, padding: '4px 12px',
									background: i === 3 ? colors.yellow : 'rgba(0,0,0,0.08)',
									color: i === 3 ? colors.black : '#666',
									fontFamily: fonts.mono, fontSize: 13, fontWeight: 700,
								}}>
									{m.growth}
								</div>
							</div>
						</StaggerItem>
					))}
				</Stagger>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5 }}
					style={{
						marginTop: 32, padding: '16px 24px',
						border: `3px solid ${colors.black}`, background: colors.white,
						boxShadow: `4px 4px 0 ${colors.black}`,
					}}
				>
					<span style={{ fontWeight: 700 }}>主攻</span>：澳大利亚 (总部·7 城) → 新加坡 → 马来西亚 → 新西兰
					<span style={{ margin: '0 16px', color: '#ccc' }}>|</span>
					<span style={{ fontWeight: 700 }}>扩展</span>：英国 · 美国
				</motion.div>
			</div>
		</Slide>
	);
}
