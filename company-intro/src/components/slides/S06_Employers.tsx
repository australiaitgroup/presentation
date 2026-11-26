import { Page, asset, body, c, f } from '../kit';
import { employers } from '../../data/employers';

export default function S06() {
	return (
		<Page>
			<div style={{ ...body, padding: '40px 64px 56px', gap: 18 }}>
				<h1 style={{ fontFamily: f.h, fontWeight: 700, fontSize: 46, lineHeight: 1.2 }}>学员拿到 Offer 的 <span className="marker">180 家公司</span></h1>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(15, minmax(0, 1fr))', gridAutoRows: '1fr', gap: 8, flex: 1, minHeight: 0 }}>
					{employers.map((e) => (
						<div key={e.logo || e.name} title={e.name} style={{ background: c('canvas-pure'), border: `1px solid ${c('hairline')}`, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 6, minHeight: 0, overflow: 'hidden' }}>
							{e.logo ? <img src={asset(`employers/${e.logo}`)} alt={e.name} style={{ maxWidth: '100%', maxHeight: 46, objectFit: 'contain' }} /> : <span style={{ fontSize: 12, fontWeight: 700, textAlign: 'center' }}>{e.name}</span>}
						</div>
					))}
				</div>
			</div>
		</Page>
	);
}
