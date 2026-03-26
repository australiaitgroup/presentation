import { Slide, Inner, Half, Title, CardSm, Stagger, StaggerItem } from '../ui';
import { colors, fonts } from '../../styles/theme';
import AvatarWall from '../AvatarWall';

const reasons = [
	{ num: '01', title: '600+ 行业导师', desc: '不是理论派老师，是一线大厂工程师', bg: '#ffe0e0' },
	{ num: '02', title: '全球最大 IT 华人社区', desc: '10,000+ 同学 + 内推网络', bg: '#dbeeff' },
	{ num: '03', title: 'AI 原生平台', desc: '不只教 AI，平台本身就是 AI 驱动的', bg: '#fff8dd' },
	{ num: '04', title: '从 0 到 Offer 全链路', desc: '学习 → 实战 → 简历 → 面试 → 内推 → Offer', bg: '#e0f7d4' },
];

export default function S18_WhyJR() {
	return (
		<Slide bg="#f5f0eb" style={{ position: 'relative' }}>
			<AvatarWall opacity={0.06} rows={5} cols={12} size={70} />
			<Inner split style={{ position: 'relative', zIndex: 1 }}>
				<Half style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
					<Title size="clamp(48px,7vw,96px)">为什么<br />选匠人？</Title>
				</Half>
				<Half>
					<Stagger style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
						{reasons.map(r => (
							<StaggerItem key={r.num}>
								<CardSm bg={r.bg} style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
									<span style={{ fontFamily: fonts.heading, fontSize: 28, fontWeight: 800, flexShrink: 0 }}>{r.num}</span>
									<div>
										<h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 4 }}>{r.title}</h3>
										<p style={{ fontSize: 14, color: '#555' }}>{r.desc}</p>
									</div>
								</CardSm>
							</StaggerItem>
						))}
					</Stagger>
				</Half>
			</Inner>
		</Slide>
	);
}
