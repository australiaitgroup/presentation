import { Page, Head, Card, body, c, grid, type Tone } from '../kit';

// 原文照录自官网首页「上过课的人怎么说」
const quotes: [Tone, string, string][] = [
	['sunshine', '整体感觉挺好，把我之前自学的知识串起来了，然后知道实际工作中是怎么用，现在期待接下来的项目，老师非常的好，耐心指导，收获满满！', 'Business Analyst 产品经理项目实习'],
	['sky', 'Chao Mu 老师讲解得非常好，每个知识点都很清晰，附加实际操作，学到很多', '数据工程全栈班第 14 期'],
	['mint', '老师讲解 container 的部分时的比喻非常形象让人很好理解', 'DevOps 项目实战班第 13 期'],
];

export default function S20() {
	return (
		<Page bg={c('surface')}>
			<div style={{ ...body, justifyContent: 'center', gap: 48 }}>
				<Head eyebrow="学员反馈" title="上过课的人怎么说" />
				<div style={grid(3, 24)}>{quotes.map(([tone, q, who]) => <Card key={who} style={{ borderTop: `8px solid ${c(tone)}`, minHeight: 360, display: 'flex', flexDirection: 'column', padding: 36 }}><blockquote style={{ fontSize: 28, lineHeight: 1.75, fontWeight: 700 }}>“{q}”</blockquote><div style={{ marginTop: 'auto', paddingTop: 24, fontSize: 19, color: c(`${tone}-deep`), fontWeight: 700 }}>{who}</div></Card>)}</div>
				<p style={{ fontSize: 20, color: c('slate') }}>学员本人出镜的完整采访：jracademy.ai/videos</p>
			</div>
		</Page>
	);
}
