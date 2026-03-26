import { motion } from 'framer-motion';
import { Slide, Inner, Title, Card, Stagger, StaggerItem } from '../ui';
import { colors, fonts } from '../../styles/theme';
import AnimatedBg from '../AnimatedBg';

const items = [
	{ icon: '🤖', title: 'AI 学习中心', desc: '15 个 AI 方向 · 385+ 章节\nVibe Coding · Prompt · AI Agent', bg: '#dbeeff', tag: '核心' },
	{ icon: '🧪', title: '互动实验室', desc: '8 大 Lab · 边学边练\n前端 / Python / AWS / Git / LLM', bg: '#e0f7d4', tag: '实操' },
	{ icon: '🏆', title: '350+ 认证备考', desc: 'AWS · Azure · GCP · K8s\nAI 题库 + 模拟考试 + App 刷题', bg: '#fff8dd', tag: '考证' },
	{ icon: '🎯', title: 'AI 求职工具箱', desc: 'AI 简历 · AI 面试官 · 公司情报\nChrome 插件 · 内推网络', bg: '#ffe0e0', tag: '求职' },
	{ icon: '🚀', title: 'P3 项目孵化器', desc: '像素风虚拟办公室\n真实商业项目 · 跨职能团队', bg: '#f0dff7', tag: '实战' },
	{ icon: '🌐', title: '全球 AI 社区', desc: '200+ 活动/年 · 9 国覆盖\n10,000+ 学员一起学 AI', bg: '#ffe8d4', tag: '社区' },
];

const iconAnimations = [
	{ y: [0, -6, 0], rotate: [0, 5, -5, 0] },         // 🤖 bounce
	{ scale: [1, 1.15, 1], rotate: [0, 10, -10, 0] },  // 🧪 shake
	{ y: [0, -8, 0], scale: [1, 1.1, 1] },              // 🏆 jump
	{ x: [0, 4, -4, 0], rotate: [0, 3, -3, 0] },       // 🎯 wobble
	{ y: [0, -10, 0], rotate: [0, 15, 0] },             // 🚀 launch
	{ rotate: [0, 360] },                                // 🌐 spin
];

export default function S06_Ecosystem() {
	return (
		<Slide bg={colors.warmBg} style={{ position: 'relative' }}>
			<AnimatedBg variant="shapes" opacity={0.12} />
			<Inner center style={{ position: 'relative', zIndex: 1 }}>
				<Title size="clamp(36px,5.5vw,68px)">
					学 AI 找匠人 — <span style={{ color: colors.red }}>一站搞定</span>
				</Title>
				<p style={{ fontSize: 'clamp(14px,1.8vw,20px)', color: '#666', marginTop: -8 }}>
					不管你是零基础想入门 AI，还是想用 AI 提升职业竞争力，我们都有对应的路径
				</p>
				<Stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, width: '100%', maxWidth: 1100 }}>
					{items.map((item, i) => (
						<StaggerItem key={item.title}>
							<Card bg={item.bg} style={{ textAlign: 'center', padding: '24px 18px', position: 'relative' }}>
								<span style={{
									position: 'absolute', top: 10, right: 10, fontSize: 10, fontWeight: 800,
									padding: '2px 8px', background: colors.black, color: '#fff',
									fontFamily: fonts.mono,
								}}>{item.tag}</span>
								<motion.div
									animate={iconAnimations[i]}
									transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
									style={{ fontSize: 44, marginBottom: 10, display: 'inline-block' }}
								>
									{item.icon}
								</motion.div>
								<h3 style={{ fontSize: 19, fontWeight: 800, marginBottom: 8, fontFamily: fonts.heading }}>{item.title}</h3>
								<p style={{ fontSize: 13, color: '#555', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{item.desc}</p>
							</Card>
						</StaggerItem>
					))}
				</Stagger>
			</Inner>
		</Slide>
	);
}
