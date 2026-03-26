import { motion } from 'framer-motion';
import { Slide, Title, Tag } from '../ui';
import { colors, fonts } from '../../styles/theme';

const bigStats = [
	{ num: '8 年', label: '持续运营', bg: colors.red, color: '#fff', rotate: -2 },
	{ num: '10,000+', label: '累计学员', bg: colors.yellow, color: '#000', rotate: 2 },
	{ num: '4,000+', label: '成功 Offer', bg: colors.green, color: '#000', rotate: -1 },
	{ num: '600+', label: '一线导师', bg: colors.blue, color: '#fff', rotate: 3 },
];

const smallStats = [
	{ num: '350+', label: 'IT 认证覆盖' },
	{ num: '200+', label: '年度线下活动' },
	{ num: '7+ 城市', label: '澳洲全覆盖' },
	{ num: '5+ 国家', label: '全球服务' },
];

export default function S08_Traction() {
	return (
		<Slide bg={colors.black} style={{ position: 'relative' }}>
			<div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, background: `repeating-linear-gradient(90deg, ${colors.red} 0, ${colors.red} 25%, ${colors.yellow} 25%, ${colors.yellow} 50%, ${colors.green} 50%, ${colors.green} 75%, ${colors.blue} 75%, ${colors.blue} 100%)` }} />

			<div style={{ width: '90%', maxWidth: 1300, padding: 40 }}>
				<Tag bg={colors.red}>已验证的数据</Tag>
				<Title white style={{ marginTop: 16, marginBottom: 36 }}>
					8 年积累，<span style={{ background: colors.yellow, color: colors.black, padding: '0 12px' }}>不是纸上谈兵</span>
				</Title>

				{/* Big stat cards */}
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
					{bigStats.map((s, i) => (
						<motion.div
							key={s.label}
							initial={{ opacity: 0, y: 40, rotate: 0 }}
							animate={{ opacity: 1, y: 0, rotate: s.rotate }}
							transition={{ delay: 0.2 + i * 0.1, type: 'spring', stiffness: 200 }}
							style={{
								padding: '28px 16px', background: s.bg, color: s.color,
								border: `3px solid ${colors.black}`,
								boxShadow: `6px 6px 0 ${i === 0 ? colors.yellow : colors.black}`,
								textAlign: 'center',
							}}
						>
							<div style={{ fontFamily: fonts.heading, fontSize: 'clamp(40px, 5vw, 60px)', fontWeight: 900, lineHeight: 1 }}>{s.num}</div>
							<div style={{ fontFamily: fonts.heading, fontSize: 18, fontWeight: 700, marginTop: 8 }}>{s.label}</div>
						</motion.div>
					))}
				</div>

				{/* Small stats */}
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginTop: 24 }}>
					{smallStats.map((s, i) => (
						<motion.div
							key={s.label}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.5 + i * 0.08 }}
							style={{
								padding: '16px', border: '2px solid rgba(255,255,255,0.15)',
								textAlign: 'center',
							}}
						>
							<div style={{ fontFamily: fonts.heading, fontSize: 28, fontWeight: 900, color: colors.white }}>{s.num}</div>
							<div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>{s.label}</div>
						</motion.div>
					))}
				</div>

				{/* Health metrics */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.8 }}
					style={{ marginTop: 24, display: 'flex', gap: 24, justifyContent: 'center' }}
				>
					{[
						{ label: '课程完成率', val: '45-60%', bench: '行业 5-10%' },
						{ label: '月留存率', val: '~40%', bench: '行业 20-30%' },
						{ label: 'P3 孵化器留存', val: '70%+', bench: '远超行业' },
					].map(m => (
						<div key={m.label} style={{ textAlign: 'center' }}>
							<span style={{ fontFamily: fonts.mono, fontSize: 20, fontWeight: 700, color: colors.green }}>{m.val}</span>
							<span style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', marginLeft: 8 }}>{m.label} ({m.bench})</span>
						</div>
					))}
				</motion.div>
			</div>
		</Slide>
	);
}
