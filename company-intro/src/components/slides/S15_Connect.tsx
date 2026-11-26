import { Page, Head, Card, Pill, asset, body, c, f, grid } from '../kit';

const groups = [['简历与机会', '职聘 AI 简历 · 内推机会 · 实习与项目机会 · Offer 榜'], ['面试', 'AI 模拟面试 · 按公司和岗位找题 · 面经 · System Design 手册'], ['导师', '1v1 导师按小时约 · 拼团私教 · 职业辅导服务']];

export default function S15() {
	return (
		<Page>
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 660px', gap: 48, padding: '0 96px', height: '100%', alignItems: 'center' }}>
				<div style={{ ...body, padding: 0, height: 'auto' }}>
					<Head tone="mint" eyebrow="找工作" title="怎么把自己推出去？" lead="简历、面试、内推、导师。先看你和目标岗位差多少，再决定从哪补。" />
					<div style={grid(1, 16)}>{groups.map(([t, d]) => <Card key={t} style={{ borderLeft: `8px solid ${c('mint')}`, padding: '22px 28px' }}><div style={{ fontFamily: f.h, fontWeight: 700, fontSize: 27 }}>{t}</div><div style={{ fontSize: 19, color: c('slate'), marginTop: 6 }}>{d}</div></Card>)}</div>
				</div>
				<div>
					<img src={asset('site/jobpin.webp')} alt="职聘：经历资料库、岗位定制版本、PDF 与修改记录" style={{ width: '100%', display: 'block', borderRadius: c('r-feature') }} />
					<div style={{ marginTop: 20 }}><Pill tone="mint">职聘 Jobpin · macOS 与 Windows</Pill><p style={{ fontSize: 22, lineHeight: 1.7, marginTop: 12 }}>一份真实经历，变成每个岗位的定制简历。<br />只使用你确认过的经历，每句话都能回到出处。</p></div>
				</div>
			</div>
		</Page>
	);
}
