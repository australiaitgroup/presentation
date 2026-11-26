import { Page, Head, body, c, f, grid } from '../kit';

const roles = [['AI Engineer', '把大模型接进产品：RAG、Agent 和工具调用'], ['前线部署工程师（FDE）', '把 AI 方案部署到对方的流程和系统里'], ['AI 产品经理', '定需求和优先级，带团队按期交付']];
const flow = ['选一个角色', '每日 Standup', '每周 Sprint 回顾', '导师 1v1 复盘', '上线交付'];

export default function S14() {
	return (
		<Page night>
			<div style={{ ...body, justifyContent: 'center', gap: 48 }}>
				<Head night tone="mint" eyebrow="P3 职业孵化器 · 3 个月团队项目 · 导师带队" title="像剧本杀一样，在真实项目里当一回目标岗位" lead="跟组员一起做合作企业的商业项目，按 Sprint 推进到上线。在校生和刚入行的人都可以参加。" />
				<div style={grid(3)}>
					{roles.map(([t, d]) => <div key={t} className="flip" style={{ background: c('night-2'), border: `1px solid ${c('night-line')}`, borderRadius: c('r-card'), padding: 30 }}><div style={{ fontFamily: f.h, fontWeight: 700, fontSize: 28 }}>{t}</div><div style={{ fontSize: 20, lineHeight: 1.65, color: c('on-night-muted'), marginTop: 12 }}>{d}</div></div>)}
				</div>
				<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
					{flow.map((s, i) => <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 22 }}><span style={{ padding: '13px 26px', borderRadius: 999, background: c('canvas-pure'), color: c('ink'), fontWeight: 700, fontSize: 21 }}>{s}</span>{i < flow.length - 1 && <span style={{ color: c('mint'), fontSize: 30 }}>→</span>}</div>)}
				</div>
				<p style={{ fontSize: 24, fontWeight: 700 }}>做完拿项目完成证书，这段经历能直接写进简历。</p>
			</div>
		</Page>
	);
}
