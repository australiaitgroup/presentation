import { img } from '../../utils/img';
import { Slide, Inner, Title, Subtitle, Stagger, StaggerItem } from '../ui';
import { colors, border, shadowSm, shadow } from '../../styles/theme';

const topics = ['AI', 'DevOps', 'Cloud', 'Career', 'Web3', 'Data'];

const photos = [
	{ src: '/images/event-atlassian-group.webp', caption: 'JR Academy × Atlassian' },
	{ src: '/images/event-slider-1.webp', caption: '线下活动' },
	{ src: '/images/event-highlights.webp', caption: '活动精彩瞬间' },
	{ src: '/images/partnership-1.jpg', caption: '企业合作' },
	{ src: '/images/event-slider-3.webp', caption: 'Meetup 现场' },
	{ src: '/images/event-slider-6.webp', caption: '公开课' },
	{ src: '/images/meta-image-meetup.webp', caption: '元宇宙 Meetup' },
	{ src: '/images/event-slider-7.webp', caption: '技术分享' },
];

function PhotoCard({ src, caption, large }: { src: string; caption: string; large?: boolean }) {
	return (
		<div style={{
			width: '100%', height: '100%', border, boxShadow: large ? shadow : shadowSm,
			overflow: 'hidden', position: 'relative', background: '#e5e7eb',
		}}>
			<img src={img(src)} alt={caption} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
				onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
			/>
			<div style={{
				position: 'absolute', bottom: 0, left: 0, right: 0,
				padding: '5px 10px', background: 'rgba(0,0,0,0.65)',
				color: '#fff', fontSize: 10, fontWeight: 600,
			}}>
				{caption}
			</div>
		</div>
	);
}

export default function S15_Events() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner center>
				<Title size="clamp(36px,5vw,64px)">200+ 线上 & 线下活动</Title>
				<Subtitle>每年 38+ 场 · 覆盖 4 大城市 · 每场 100+ 人</Subtitle>

				<Stagger style={{
					width: '100%', maxWidth: 1100,
					display: 'grid',
					gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
					gridTemplateRows: '200px 160px',
					gap: 10,
				}}>
					<StaggerItem style={{ gridRow: '1 / 3' }}>
						<PhotoCard src={photos[0].src} caption={photos[0].caption} large />
					</StaggerItem>
					{photos.slice(1).map((p, i) => (
						<StaggerItem key={i}>
							<PhotoCard src={p.src} caption={p.caption} />
						</StaggerItem>
					))}
				</Stagger>

				<div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
					{topics.map(t => <span key={t} style={{ padding: '5px 14px', border, background: '#fff', fontSize: 13, fontWeight: 700, boxShadow: shadowSm }}>{t}</span>)}
				</div>
				<p style={{ fontSize: 15, color: '#555' }}>与 <strong>Atlassian</strong> · <strong>AWS</strong> · <strong>Google</strong> 联合举办</p>
			</Inner>
		</Slide>
	);
}
