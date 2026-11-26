import { Page, Head, asset, body, c, f } from '../kit';

const steps = [['评估', 'Assess', '差距清单'], ['规划', 'Plan', '每周计划'], ['行动', 'Act', '这周的事'], ['证明', 'Prove', '作品版本'], ['连接', 'Connect', '投递材料'], ['成长', 'Grow', '面试反馈']];

export default function S11() {
	return (
		<Page night>
			<div style={{ ...body, display: 'grid', gridTemplateColumns: '520px 1fr', gap: 48 }}>
				<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
					<Head night eyebrow="CareerOS" title="看清能力，决定下一步" lead="评估、规划、行动在网站上做；在真实项目里做任务、证明、连接、成长在 CareerOS 桌面版里完成。" />
					<ol style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 34 }}>
						{steps.map(([zh, en, out], i) => <li key={en} style={{ background: c('night-2'), border: `1px solid ${c(i < 3 ? 'night-line' : 'coral')}`, borderRadius: 20, padding: '15px 20px' }}><div style={{ fontFamily: f.h, fontWeight: 700, fontSize: 26 }}>{i + 1}. {zh} <span style={{ fontSize: 15, color: c('on-night-muted') }}>{en}</span></div><div style={{ fontSize: 17, color: c('on-night-muted'), marginTop: 4 }}>留下{out}</div></li>)}
					</ol>
				</div>
				<div style={{ alignSelf: 'center' }}>
					<img src={asset('site/careeros-act.webp')} alt="CareerOS 桌面版行动阶段界面：左侧职业档案，中间做项目任务，右侧 AI 导师提示下一步" style={{ width: '100%', display: 'block', borderRadius: c('r-tile'), border: `1px solid ${c('night-line')}` }} />
					<p style={{ fontSize: 18, color: c('on-night-muted'), marginTop: 16, textAlign: 'center' }}>桌面版行动阶段：中间做项目任务，右侧 AI 导师提示下一步</p>
				</div>
			</div>
		</Page>
	);
}
