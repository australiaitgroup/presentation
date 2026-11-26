import { Page, Head, Card, Pill, asset, body, c, f, grid } from '../kit';

const courses = [['AI Engineer 训练营', '从 LLM 应用到 Agent 的工程训练营'], ['AI Engineer 全栈项目班', '16 周'], ['DevOps 项目实战班', '12 周 · 部署流水线、容器化与监控'], ['数据工程 & 机器学习全栈项目班', '14 周 + 就业辅导视频课'], ['FDE Tech 职业进阶班', '10 周 · 30 项工程交付任务'], ['FDE Business 职业进阶班', '8 周 · 30 项企业自动化任务'], ['一人公司（OPC）落地实战营', '用 AI 把一个想法做成生意'], ['Vibe Coding 大师课', '用 AI 写代码做出自己的产品'], ['AI 风险管理、治理与审计实战课', '零基础可学']];

export default function S12() {
	return (
		<Page>
			<div style={body}>
				<Head eyebrow="训练营与课程" title="想系统学，跟着老师做项目" lead="直播课、做项目、导师答疑，按岗位方向开班。按职业方向、难度和形式筛选全部课程。" />
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: 24, flex: 1, minHeight: 0 }}>
					<div style={{ ...grid(3, 16), gridAutoRows: '1fr' }}>
						{courses.map(([t, d]) => <Card key={t} style={{ padding: 22, borderRadius: 20 }}><div style={{ fontFamily: f.h, fontWeight: 700, fontSize: 23, lineHeight: 1.4 }}>{t}</div><div style={{ fontSize: 17, lineHeight: 1.6, color: c('slate'), marginTop: 10 }}>{d}</div></Card>)}
					</div>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 16, minHeight: 0 }}>
						<img src={asset('images/partnership-4.jpg')} alt="匠人学院课堂现场" style={{ width: '100%', flex: 1, minHeight: 0, objectFit: 'cover', borderRadius: c('r-tile') }} />
						<Card style={{ background: c('wash-sunshine') }}><Pill style={{ background: c('canvas-pure') }}>课表持续更新</Pill><p style={{ fontSize: 20, fontWeight: 700, marginTop: 12 }}>开班时间见<br />jracademy.ai/bootcamp</p></Card>
					</div>
				</div>
			</div>
		</Page>
	);
}
