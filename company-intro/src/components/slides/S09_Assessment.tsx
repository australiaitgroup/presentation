import { Page, Head, Card, asset, c } from '../kit';

const tools = [['分析我的职业与能力', '按你做过的事，看清已有能力和差距'], ['AI 职业影响地图', '常见职业受 AI 的影响与转型方向'], ['AI Engineer 面试准备度', '30 道限时题'], ['职业性格测试', '找到和你性格匹配的方向'], ['回国求职评估', '按学校、专业、毕业时间看回国机会'], ['AI 教练', '拿不定主意时，说说你在犹豫什么']];

export default function S09() {
	return (
		<Page bg={c('wash-bubblegum')}>
			<div style={{ display: 'grid', gridTemplateColumns: '640px 1fr', gap: 48, padding: '64px 96px 72px', height: '100%' }}>
				<div>
					<Head tone="bubblegum" eyebrow="职业测评" title="我现在在哪，该往哪走？" lead="免费，不用注册就能看完整结果。" />
					<div style={{ display: 'grid', gap: 12, marginTop: 30 }}>
						{tools.map(([t, d]) => <Card key={t} style={{ padding: '13px 22px', borderRadius: 20 }}><div style={{ fontSize: 21, fontWeight: 700 }}>{t}</div><div style={{ fontSize: 17, color: c('slate') }}>{d}</div></Card>)}
					</div>
				</div>
				<div style={{ alignSelf: 'center' }}>
					<Card style={{ padding: 14 }}><img src={asset('site/assessment.webp')} alt="职业现状分析报告：我有什么、我缺什么、下一步怎么做" style={{ width: '100%', display: 'block', borderRadius: 14 }} /></Card>
					<p style={{ fontSize: 18, color: c('ink-soft'), marginTop: 16, textAlign: 'center' }}>看清三件事：我有什么、我缺什么、下一步怎么做</p>
				</div>
			</div>
		</Page>
	);
}
