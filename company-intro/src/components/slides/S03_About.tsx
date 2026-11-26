import { Page, Head, Card, asset, body, c, f, grid } from '../kit';

const stats = [['2017', '成立年份'], ['6028+', '成功就业'], ['600+', '行业导师'], ['6万+', '社群成员']];

export default function S03() {
	return (
		<Page>
			<div style={body}>
				<Head eyebrow="关于匠人" title="一家专注 IT 领域的 AI 互联网教育科技公司" lead="2017 年成立于澳大利亚。澳洲、美国、英国、欧洲、新加坡、马来西亚和国内，线上都能学。" />
				<div style={grid(4)}>
					{stats.map(([n, l]) => (
						<Card key={l}><div style={{ fontFamily: f.h, fontWeight: 700, fontSize: 60, lineHeight: 1.1 }}>{n}</div><div style={{ fontSize: 20, color: c('slate'), marginTop: 6 }}>{l}</div></Card>
					))}
				</div>
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 460px', gap: 20, flex: 1, minHeight: 0 }}>
					{['images/event-slider-9.webp', 'images/partnership-2.jpg'].map((s) => <img key={s} src={asset(s)} alt="匠人学院线下活动现场" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: c('r-tile'), minHeight: 0 }} />)}
					<Card style={{ background: c('surface'), fontSize: 19, lineHeight: 1.65 }}>
						<div style={{ fontWeight: 700, fontSize: 22, marginBottom: 12 }}>办公室</div>
						<p><b>布里斯班（总部）</b><br />Level 10b, 144 Edward Street</p>
						<p style={{ marginTop: 8 }}><b>墨尔本</b> · 171 La Trobe St</p>
						<p style={{ marginTop: 8 }}><b>阿德莱德</b> · 155 Waymouth St</p>
						<p style={{ marginTop: 8 }}><b>成都</b> · 天府大道中段 500 号</p>
					</Card>
				</div>
			</div>
		</Page>
	);
}
