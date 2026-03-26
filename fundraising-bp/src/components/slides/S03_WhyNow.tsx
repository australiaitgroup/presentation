import { motion } from 'framer-motion';
import { Slide, Title, Tag, Stagger, StaggerItem } from '../ui';
import { colors, fonts } from '../../styles/theme';

const tailwinds = [
	{
		num: '01', title: 'AI 技能需求爆发', color: colors.red,
		points: ['LinkedIn 2025: AI 职位同比 3x', '不只工程师 — PM/设计/市场都需要', '获客成本下降，需求上升'],
	},
	{
		num: '02', title: '社群驱动教育的空白', color: colors.blue,
		points: ['传统在线教育 = 录播 + 孤独学习', '没人把学习、社群、实操打通', '双语 (中英) 平台全球稀缺', '没有第二个全链路竞争者'],
	},
	{
		num: '03', title: '边际成本趋近于零', color: colors.green,
		points: ['AI Tutor 同时服务 1,000 人', 'AI 批改实时评估代码和作业', 'AI 生成题库和学习材料', '毛利率随规模提升'],
	},
];

export default function S03_WhyNow() {
	return (
		<Slide bg={colors.black} style={{ position: 'relative' }}>
			<div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, background: `repeating-linear-gradient(90deg, ${colors.red} 0, ${colors.red} 33%, ${colors.blue} 33%, ${colors.blue} 66%, ${colors.green} 66%, ${colors.green} 100%)` }} />

			<div style={{ width: '90%', maxWidth: 1400, padding: 40 }}>
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
					<Tag bg={colors.red}>为什么是现在？</Tag>
				</motion.div>
				<Title white style={{ marginTop: 16 }}>
					三个不可逆的<span style={{ display: 'inline-block', background: colors.yellow, color: colors.black, padding: '0 16px' }}>时代红利</span>
				</Title>

				<Stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 40 }}>
					{tailwinds.map(t => (
						<StaggerItem key={t.num}>
							<div style={{
								border: `3px solid ${t.color}`, background: 'rgba(255,255,255,0.05)',
								padding: '28px 24px', height: '100%',
								boxShadow: `6px 6px 0 ${t.color}`,
							}}>
								<div style={{
									display: 'inline-block', padding: '4px 14px',
									background: t.color, fontFamily: fonts.mono,
									fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 16,
								}}>
									红利 {t.num}
								</div>
								<div style={{ fontFamily: fonts.heading, fontSize: 28, fontWeight: 800, color: '#fff', marginBottom: 20 }}>
									{t.title}
								</div>
								{t.points.map((p, i) => (
									<p key={i} style={{ fontSize: 16, lineHeight: 2, color: 'rgba(255,255,255,0.7)' }}>
										<span style={{ color: t.color, fontWeight: 700 }}>→ </span>{p}
									</p>
								))}
							</div>
						</StaggerItem>
					))}
				</Stagger>
			</div>
		</Slide>
	);
}
