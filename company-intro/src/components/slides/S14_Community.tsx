import { Page, Head, Pill, asset, body, c } from '../kit';

const photos = ['images/event-slider-3.webp', 'images/partnership-2.jpg', 'images/event-slider-7.webp', 'images/event-slider-9.webp'];

export default function S14() {
	return (
		<Page bg={c('wash-sunshine')}>
			<div style={body}>
				<Head tone="sunshine" eyebrow="社区活动" title="去哪认识同路的人？" lead="讲座、公开课、Workshop、黑客松，线上线下都有。线下常在悉尼、墨尔本和布里斯班。" />
				<div style={{ display: 'flex', gap: 12 }}>{['讲座', '公开课', 'Workshop', '黑客松', '新生节', '职业社区', '学习小组'].map((t) => <Pill key={t} style={{ background: c('canvas-pure'), fontSize: 20, padding: '9px 22px' }}>{t}</Pill>)}</div>
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 18, flex: 1, minHeight: 0 }}>{photos.map((p) => <img key={p} src={asset(p)} alt="匠人学院活动现场" style={{ width: '100%', height: '100%', minHeight: 0, objectFit: 'cover', borderRadius: c('r-tile') }} />)}</div>
			</div>
		</Page>
	);
}
