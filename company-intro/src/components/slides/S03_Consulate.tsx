import { Page, Head, Card, asset, body, c, f, grid } from '../kit';

const consulates = [
	['布里斯班', 'consulate/china-consulate-brisbane.webp', '中华人民共和国驻布里斯班总领事馆'],
	['墨尔本', 'consulate/china-consulate-melbourne.webp', '中华人民共和国驻墨尔本总领事馆'],
];

export default function S03() {
	return (
		<Page bg={c('wash-sky')}>
			<div style={{ ...body, justifyContent: 'center', gap: 38 }}>
				<Head eyebrow="使馆支持" title={<>获中国驻<span className="marker">布里斯班、墨尔本总领事馆</span>支持</>} lead="匠人服务在澳华人和留学生的工作，得到中国驻布里斯班总领事馆与中国驻墨尔本总领事馆的支持。" width={1400} />
				<div style={{ ...grid(1, 26), width: 1180, margin: '0 auto' }}>
					{consulates.map(([city, src, name]) => (
						<Card key={city} motion="flip" style={{ padding: 22, borderRadius: c('r-feature'), display: 'grid', gridTemplateColumns: '760px 1fr', alignItems: 'center', gap: 28 }}>
							<div style={{ height: 180, display: 'flex', alignItems: 'center' }}><img src={asset(src)} alt={name} style={{ width: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block', borderRadius: c('r-input') }} /></div>
							<div style={{ fontFamily: f.h, fontWeight: 700, fontSize: 30, lineHeight: 1.5 }}>中国驻{city}<br />总领事馆</div>
						</Card>
					))}
				</div>
			</div>
		</Page>
	);
}
