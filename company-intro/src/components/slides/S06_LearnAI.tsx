import { Page, Head, Card, Pill, body, c, f, grid, type Tone } from '../kit';

const groups: [Tone, string, string, [string, string, string][]][] = [
	['mint', '不写代码也能学', '办公、写东西、做数据，把 AI 用进现在的工作里', [['AI 办公提效', '用 AI 干掉重复劳动', '入门 · 2-4 周'], ['Prompt 大师', '掌握和 AI 对话的艺术', '入门 · 2-3 周'], ['AI 内容创作', 'AI 生成视频、图片、文章', '入门 · 3-4 周'], ['AI 数据分析', '用 AI 让数据说话', '进阶 · 4-6 周']]],
	['sky', '写代码的人', '从用 AI 写代码，到自己做 AI 应用', [['Vibe Coding', '用自然语言写代码', '入门 · 4-8 周'], ['AI Engineer', '从使用 AI 到构建 AI 应用', '深入 · 8-12 周'], ['Context Engineering', '下一代 LLM 工程', '进阶 · 3-4 周'], ['AI Builder', '快速构建 AI 产品原型', '进阶 · 4-6 周']]],
];

export default function S06() {
	return (
		<Page dots>
			<div style={body}>
				<Head eyebrow="学 AI" title="先免费学 AI，挑跟你工作最近的方向" lead="很多章节免费，点进去就能学。动手练习在互动 Lab：Prompt、前端、Python、AWS 等。" />
				{groups.map(([tone, name, desc, items]) => (
					<section key={name}>
						<div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 14 }}><Pill tone={tone} style={{ fontSize: 20 }}>{name}</Pill><span style={{ fontSize: 19, color: c('slate') }}>{desc}</span></div>
						<div style={grid(4)}>
							{items.map(([t, d, m]) => <Card key={t} style={{ borderTop: `6px solid ${c(tone)}`, minHeight: 190, display: 'flex', flexDirection: 'column' }}><div style={{ fontFamily: f.h, fontWeight: 700, fontSize: 27 }}>{t}</div><div style={{ fontSize: 19, color: c('ink-soft'), marginTop: 10 }}>{d}</div><div style={{ fontSize: 17, color: c(`${tone}-deep`), fontWeight: 700, marginTop: 'auto' }}>{m}</div></Card>)}
						</div>
					</section>
				))}
			</div>
		</Page>
	);
}
