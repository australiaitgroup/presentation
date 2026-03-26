import { Slide, Inner, Title, Card, Stagger, StaggerItem } from '../ui';
import { fonts } from '../../styles/theme';
import AvatarWall from '../AvatarWall';

const testimonials = [
	{ text: '终于明白 IT 企业要的是什么了', author: 'Web 全栈学员', company: '入职 Canva', avatar: '🧑‍💻', bg: '#ffe0e0' },
	{ text: '面试问到的问题，课堂上都学过', author: 'DevOps 学员', company: '入职 Atlassian', avatar: '👩‍💻', bg: '#fff8dd' },
	{ text: '朋友报了匠人的课后很快就找到工作了，所以我也来了', author: 'Data Analyst 学员', company: '入职 CBA', avatar: '🧑‍🎓', bg: '#dbeeff' },
];

export default function S17_Testimonials() {
	return (
		<Slide bg="#e8f7e0" style={{ position: 'relative' }}>
			<AvatarWall opacity={0.08} rows={6} cols={14} size={64} />
			<Inner center style={{ position: 'relative', zIndex: 1 }}>
				<Title size="clamp(40px,5.5vw,72px)">他们怎么说</Title>
				<Stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, width: '100%', maxWidth: 1100 }}>
					{testimonials.map(t => (
						<StaggerItem key={t.author}>
							<Card bg={t.bg} style={{ textAlign: 'left', padding: '32px 24px', position: 'relative' }}>
								<div style={{ fontFamily: fonts.heading, fontSize: 72, fontWeight: 900, lineHeight: 0.8, color: 'rgba(0,0,0,0.1)' }}>"</div>
								<p style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.5, margin: '12px 0 20px' }}>{t.text}</p>
								<div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
									<span style={{ fontSize: 28 }}>{t.avatar}</span>
									<div>
										<strong style={{ fontSize: 14 }}>{t.author}</strong>
										<small style={{ fontSize: 12, color: '#666', display: 'block' }}>{t.company}</small>
									</div>
								</div>
							</Card>
						</StaggerItem>
					))}
				</Stagger>
			</Inner>
		</Slide>
	);
}
