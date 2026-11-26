import { Page, Head, Card, Pill, body, c, f, grid } from '../kit';

const services = [['技术开发与外包', '网站与系统开发、AI 应用搭建、项目外包、MVP 快速开发'], ['AI 战略咨询', 'AI 战略、技术架构设计、CTO 即服务、代码与安全审计'], ['人才推荐', '人才推荐、实习安排、猎头服务、简历库访问'], ['企业培训与教育合作', '企业内训，以及高中、大学的课程与师资合作']];

export default function S21() {
	return (
		<Page>
			<div style={{ ...body, justifyContent: 'center', gap: 36 }}>
				<Head eyebrow="企业服务" title="您的 AI 时代技术转型伙伴" lead="整合行业导师与技术人才资源，提供从项目开发、技术咨询到人才培养的一站式企业服务。" />
				<div style={grid(4)}>{services.map(([t, d]) => <Card key={t} style={{ minHeight: 230 }}><div style={{ fontFamily: f.h, fontWeight: 700, fontSize: 27, lineHeight: 1.4 }}>{t}</div><div style={{ fontSize: 19, lineHeight: 1.7, color: c('slate'), marginTop: 14 }}>{d}</div></Card>)}</div>
				<div style={{ background: c('night'), color: c('on-night'), borderRadius: c('r-feature'), padding: '34px 44px', display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', gap: 32 }}>
					<div><div style={{ fontFamily: f.h, fontWeight: 700, fontSize: 32 }}>AI at Work · 企业 AI 工作流实战培训</div><p style={{ fontSize: 20, lineHeight: 1.7, color: c('on-night-muted'), marginTop: 10 }}>讲师到场，带团队完成客户回复邮件、会议行动清单和一页业务简报，带走可复用的岗位模板。</p></div>
					<div style={{ display: 'flex', gap: 10 }}>{['3.5 小时', '每场最多 12 人', '无需编程基础'].map((t) => <Pill key={t} style={{ background: c('canvas-pure'), color: c('ink') }}>{t}</Pill>)}</div>
				</div>
				<p style={{ fontSize: 20, color: c('slate') }}>企业咨询：jracademy.ai/business</p>
			</div>
		</Page>
	);
}
