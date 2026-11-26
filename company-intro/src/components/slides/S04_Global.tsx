import { Page, Head, Card, body, c, f, grid } from '../kit';

const countries = [['🇦🇺', '澳大利亚', '总部'], ['🇨🇳', '中国', ''], ['🇳🇿', '新西兰', ''], ['🇸🇬', '新加坡', ''], ['🇲🇾', '马来西亚', ''], ['🇺🇸', '美国', ''], ['🇨🇦', '加拿大', ''], ['🇬🇧', '英国', '']];

export default function S04() {
	return (
		<Page bg={c('wash-sky')}>
			<div style={{ ...body, justifyContent: 'center', gap: 48 }}>
				<Head eyebrow="全球业务覆盖" title="从澳大利亚出发，服务全球华人" lead="线上都能学。服务已从澳大利亚拓展到多个国家和地区，帮助各地的华人 IT 从业者实现职业目标。" />
				<div style={grid(4, 24)}>
					{countries.map(([flag, name, tag]) => (
						<Card key={name} style={{ display: 'flex', alignItems: 'center', gap: 22, padding: '38px 32px' }}>
							<span style={{ fontSize: 56 }}>{flag}</span>
							<div><div style={{ fontFamily: f.h, fontWeight: 700, fontSize: 30 }}>{name}</div>{tag && <div style={{ fontSize: 18, color: c('sky-deep'), fontWeight: 700 }}>{tag}</div>}</div>
						</Card>
					))}
				</div>
				<p style={{ fontSize: 21, color: c('ink-soft') }}>办公室：布里斯班（总部）· 墨尔本 · 阿德莱德 · 成都</p>
			</div>
		</Page>
	);
}
