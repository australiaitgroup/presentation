import { motion } from 'framer-motion';
import { Slide, Title, Stagger, StaggerItem, Tag } from '../ui';
import { colors, fonts, border, shadow } from '../../styles/theme';

const problems = [
	{ icon: '🌏', title: '学完不会用', desc: '在线课程完成率不到 10%\n看了视频 ≠ 学会了 AI\n缺乏动手实操环境', bg: colors.yellow },
	{ icon: '🧩', title: '只有碎片', desc: '九章只教算法\nLeetCode 只有题\n没人做全链路', bg: colors.green },
	{ icon: '🏝️', title: '没有社群', desc: '学 AI 像孤岛\n没同伴、没导师、没归属感', bg: colors.blue },
	{ icon: '🎯', title: '学了不会用', desc: '学了一堆理论\n到实际工作中还是不会\n用 AI 解决真实问题', bg: colors.purple },
];

export default function S02_Problem() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '90%', maxWidth: 1400, padding: 40 }}>
				<motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
					<Tag bg={colors.red}>问题</Tag>
				</motion.div>
				<Title style={{ marginTop: 16, marginBottom: 12 }}>
					每个人都想学 AI<br />
					<span style={{ display: 'inline-block', background: colors.red, color: '#fff', padding: '0 16px' }}>但现有平台都缺一条腿</span>
				</Title>

				<Stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginTop: 40 }}>
					{problems.map(p => (
						<StaggerItem key={p.title}>
							<div style={{ border, background: p.bg, boxShadow: shadow, padding: '28px 20px', height: '100%' }}>
								<div style={{ fontSize: 42, marginBottom: 12 }}>{p.icon}</div>
								<div style={{ fontFamily: fonts.heading, fontSize: 24, fontWeight: 800, marginBottom: 12 }}>{p.title}</div>
								{p.desc.split('\n').map((line, i) => (
									<p key={i} style={{ fontSize: 16, lineHeight: 1.6, color: 'rgba(0,0,0,0.7)' }}>{line}</p>
								))}
							</div>
						</StaggerItem>
					))}
				</Stagger>
			</div>
		</Slide>
	);
}
