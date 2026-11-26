import { Page, Head, Card, body, c, f, grid } from '../kit';

const labs = [['Prompt Lab', '练怎么把需求说清楚'], ['Frontend Lab', '写页面，实时看效果'], ['JavaScript Lab', '在浏览器里练 JavaScript'], ['Python Lab', '在线写代码、运行'], ['AWS Lab', '练 AWS 常用操作'], ['Azure Lab', '练 Azure 常用操作'], ['LLM Lab', '动手做大模型应用'], ['Git Lab', '练版本控制与协作']];

export default function S11() {
	return (
		<Page bg={c('wash-mint')}>
			<div style={{ ...body, justifyContent: 'center', gap: 48 }}>
				<Head eyebrow="互动 Lab" title="边学边练，打开浏览器就能动手" lead="Prompt、前端、Python、云平台和大模型应用都有对应的练习。" />
				<div style={grid(4, 22)}>{labs.map(([t, d]) => <Card key={t} style={{ minHeight: 180, borderTop: `6px solid ${c('mint')}` }}><div style={{ fontFamily: f.h, fontWeight: 700, fontSize: 30 }}>{t}</div><div style={{ fontSize: 20, lineHeight: 1.65, color: c('slate'), marginTop: 14 }}>{d}</div></Card>)}</div>
				<p style={{ fontSize: 21, color: c('ink-soft') }}>入口：jracademy.ai/learn</p>
			</div>
		</Page>
	);
}
