import { Page, Head, Card, Pill, body, c, f, grid } from '../kit';

const certs = [['基础级', 'AWS Cloud Practitioner', 'CLF-C02'], ['基础级', 'Azure Fundamentals', 'AZ-900'], ['助理级', 'AWS Solutions Architect', 'SAA-C03'], ['助理级', 'AWS Developer', 'DVA-C02'], ['助理级', 'Azure Administrator', 'AZ-104'], ['专家级', 'AWS ML Specialty', 'MLS-C01']];
const features = [['章节讲解', '按官方考纲编排，先学知识点再做题'], ['AI Tutor', '逐个选项讲清楚为什么对、为什么错'], ['模拟考试', '按真实考试的题量和时间限时练'], ['错题本', '收集错题和薄弱知识点，考前集中复盘']];

export default function S09() {
	return (
		<Page bg={c('wash-sky')}>
			<div style={body}>
				<Head tone="sky" eyebrow="考证匠 CertMaster" title="350+ 认证，一章一章过" lead="AWS、Azure、GCP、Claude、PMP、Salesforce、安全合规等。网页、iOS App、浏览器插件和小程序都能用。" />
				<div style={grid(4)}>{features.map(([t, d]) => <Card key={t} style={{ minHeight: 160 }}><div style={{ fontFamily: f.h, fontWeight: 700, fontSize: 28 }}>{t}</div><div style={{ fontSize: 19, lineHeight: 1.65, color: c('slate'), marginTop: 10 }}>{d}</div></Card>)}</div>
				<div>
					<p style={{ fontSize: 21, fontWeight: 700, marginBottom: 14 }}>考证匠里报名人数最多的几门认证</p>
					<div style={grid(3, 16)}>{certs.map(([lv, t, code]) => <Card key={code} style={{ padding: '20px 24px', borderRadius: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><div><div style={{ fontSize: 22, fontWeight: 700 }}>{t}</div><div style={{ fontSize: 18, color: c('sky-deep'), fontWeight: 700, marginTop: 4 }}>{code}</div></div><Pill tone="sky">{lv}</Pill></Card>)}</div>
				</div>
				<p style={{ fontSize: 20, color: c('ink-soft') }}>免费先做样题。匠人会员包含考证匠的题库、章节和模拟考试；Claude 四门官方认证需要进阶版或高级版会员。</p>
			</div>
		</Page>
	);
}
