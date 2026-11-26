import { Page, asset, c, f } from '../kit';
import { employers } from '../../data/employers';

const ROWS = 6;
const rows = Array.from({ length: ROWS }, (_, r) => employers.filter((_, i) => i % ROWS === r));
// 每排滚完一轮的秒数不同，速度错开；相邻两排方向相反
const seconds = [70, 110, 85, 130, 95, 150];

export default function S06() {
	return (
		<Page dots>
			<div style={{ padding: '56px 96px 0' }}>
				<h1 style={{ fontFamily: f.h, fontWeight: 700, fontSize: 62, lineHeight: 1.2 }}>学员拿到 Offer 的公司 <span className="marker">500+ 家</span></h1>
				<p style={{ fontSize: 22, color: c('slate'), marginTop: 10 }}>从咨询、银行、科技公司到政府机构和高校</p>
			</div>
			<div className="offer-wall" style={{ position: 'absolute', left: 0, right: 0, top: 222, display: 'flex', flexDirection: 'column', gap: 14, maskImage: 'linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent)' }}>
				{rows.map((row, r) => (
					<div key={r} className={`offer-row${r % 2 ? ' reverse' : ''}`} style={{ ['--dur' as string]: `${seconds[r]}s` }}>
						{[0, 1].map((copy) => (
							<div key={copy} aria-hidden={copy === 1}>
								{row.map((e) => (
									<div key={e.name} title={e.name} style={{ width: 178, height: 84, flex: 'none', background: c('canvas-pure'), border: `1px solid ${c('hairline')}`, borderRadius: c('r-tile'), boxShadow: c('shadow-card'), display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px 18px' }}>
										{e.logo ? <img src={asset(`employers/${e.logo}`)} alt={e.name} style={{ maxWidth: '100%', maxHeight: 58, objectFit: 'contain' }} /> : <span style={{ fontSize: 19, fontWeight: 700, textAlign: 'center' }}>{e.name}</span>}
									</div>
								))}
							</div>
						))}
					</div>
				))}
			</div>
		</Page>
	);
}
