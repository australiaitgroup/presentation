import { motion } from 'framer-motion';
import { Slide, Inner, Title, Card, Stagger, StaggerItem } from '../ui';
import { colors, fonts } from '../../styles/theme';
import AnimatedBg from '../AnimatedBg';

const categories = [
	{
		title: 'AI & 编程 Bootcamp',
		bg: '#ffe0e0',
		tag: '核心',
		tagBg: colors.red,
		items: [
			{ name: 'Junior AI Engineer 全栈', type: '项目实战', weeks: '12周' },
			{ name: 'AI Engineer', type: 'Bootcamp', weeks: '8-12周' },
			{ name: 'DevOps & Cloud', type: 'Bootcamp', weeks: '10周' },
			{ name: 'Data Engineer', type: 'Bootcamp', weeks: '10周' },
			{ name: 'Cyber Security', type: 'Bootcamp', weeks: '8周' },
		],
	},
	{
		title: 'AI 互动学习',
		bg: '#dbeeff',
		tag: '免费',
		tagBg: colors.blue,
		items: [
			{ name: 'Vibe Coding', type: '互动 Lab', weeks: '38章' },
			{ name: 'Prompt 大师', type: '互动课程', weeks: '111章' },
			{ name: 'AI 办公提效', type: '视频+实操', weeks: '23章' },
			{ name: 'AI Builder', type: '互动课程', weeks: '18章' },
			{ name: 'AI 产品经理', type: '视频课', weeks: '10章' },
		],
	},
	{
		title: 'Offer 冲刺',
		bg: '#e0f7d4',
		tag: '求职',
		tagBg: colors.green,
		items: [
			{ name: '全栈面试冲刺营', type: '刷题+模拟', weeks: '4周' },
			{ name: 'Career Coaching 1v1', type: '导师辅导', weeks: '定制' },
			{ name: 'AI 简历 + 模拟面试', type: 'AI 工具', weeks: '持续' },
			{ name: 'P3 职业孵化器', type: '真实项目', weeks: '3个月' },
			{ name: '算法训练营', type: '面试刷题', weeks: '6周' },
		],
	},
];

export default function S09_Bootcamps() {
	return (
		<Slide bg={colors.warmBg} style={{ position: 'relative' }}>
			<AnimatedBg variant="grid" opacity={0.06} />
			<Inner center style={{ position: 'relative', zIndex: 1 }}>
				<Title size="clamp(36px,5vw,64px)">
					100+ 课程 — <span style={{ color: colors.red }}>总有适合你的</span>
				</Title>
				<p style={{ fontSize: 'clamp(13px,1.6vw,18px)', color: '#666', marginTop: -8 }}>
					Bootcamp · 互动课 · 视频课 · 认证备考 · 面试冲刺 — 覆盖从入门到进阶全路径
				</p>
				<Stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18, width: '100%', maxWidth: 1200 }}>
					{categories.map((cat) => (
						<StaggerItem key={cat.title}>
							<Card bg={cat.bg} style={{ textAlign: 'left', padding: '20px 18px', position: 'relative', height: '100%' }}>
								<span style={{
									position: 'absolute', top: 10, right: 10, fontSize: 9, fontWeight: 800,
									padding: '2px 8px', background: cat.tagBg, color: '#fff',
									fontFamily: fonts.mono,
								}}>{cat.tag}</span>
								<h3 style={{ fontSize: 18, fontWeight: 900, marginBottom: 14, fontFamily: fonts.heading }}>{cat.title}</h3>
								{cat.items.map((item, i) => (
									<motion.div
										key={item.name}
										initial={{ opacity: 0, x: 10 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: i * 0.05 }}
										style={{
											display: 'flex', alignItems: 'center', gap: 8,
											padding: '6px 0', borderBottom: i < cat.items.length - 1 ? '1px solid rgba(0,0,0,0.08)' : 'none',
										}}
									>
										<span style={{
											width: 6, height: 6, borderRadius: '50%',
											background: cat.tagBg, flexShrink: 0,
										}} />
										<span style={{ fontSize: 13, fontWeight: 600, flex: 1 }}>{item.name}</span>
										<span style={{
											fontSize: 9, padding: '1px 6px',
											background: 'rgba(0,0,0,0.06)', borderRadius: 3,
											fontFamily: fonts.mono, color: '#666',
										}}>{item.type}</span>
										<span style={{
											fontSize: 9, fontWeight: 700, color: '#888',
											fontFamily: fonts.mono, minWidth: 36, textAlign: 'right',
										}}>{item.weeks}</span>
									</motion.div>
								))}
							</Card>
						</StaggerItem>
					))}
				</Stagger>
			</Inner>
		</Slide>
	);
}
