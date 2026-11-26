import { Page, Head, body, c, f, grid, type Tone } from '../kit';

const steps: [Tone, string, string, string[]][] = [
	['bubblegum', '职业测评', '我现在在哪，该往哪走？', ['职业与能力分析', 'AI 职业影响地图', 'AI 教练']],
	['coral', '学 AI', '不知道该学什么 AI？', ['按方向免费学', '训练营与课程', '互动 Lab']],
	['sky', '证明自己', '拿什么让雇主相信你？', ['考证匠', 'P3 团队实战', '黑客松与作品']],
	['mint', '找工作', '怎么把自己推出去？', ['职聘', '面试准备与内推', '1v1 导师']],
	['sunshine', '社区活动', '去哪认识同路的人？', ['讲座与公开课', 'Workshop', '职业社区']],
];

export default function S09() {
	return (
		<Page dots>
			<div style={{ ...body, justifyContent: 'center', gap: 56 }}>
				<Head eyebrow="匠人能帮你什么" title="从看清自己到拿到工作，每一步都有地方可去" lead="想换工作，先拿真实招聘对照，看清还差什么，再按学、做项目、整理作品、投简历的顺序走。" />
				<div style={grid(5, 18)}>
					{steps.map(([tone, name, q, items]) => (
						<div key={name} className="flip" style={{ background: c(`grad-${tone}`), boxShadow: c(`shadow-${tone}`), color: tone === 'sunshine' ? c('ink') : c('on-gradient'), borderRadius: c('r-feature'), padding: '30px 24px', minHeight: 400, display: 'flex', flexDirection: 'column' }}>
							<h2 style={{ fontFamily: f.h, fontWeight: 700, fontSize: 34 }}>{name}</h2>
							<p style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.55, marginTop: 14, minHeight: 66 }}>{q}</p>
							<ul style={{ listStyle: 'none', marginTop: 'auto', display: 'grid', gap: 12 }}>
								{items.map((i) => <li key={i} style={{ background: c('canvas-pure'), color: c('ink'), borderRadius: 999, padding: '10px 16px', fontSize: 18, fontWeight: 700 }}>{i}</li>)}
							</ul>
						</div>
					))}
				</div>
			</div>
		</Page>
	);
}
