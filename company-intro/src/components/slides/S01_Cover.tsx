import { Page, Pill, asset, c, f } from '../kit';

export default function S01() {
	return (
		<Page dots>
			<div style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 56, alignItems: 'center', height: '100%', padding: '0 96px' }}>
				<div>
					<img src={asset('brand/tagline-xueai-laijiangren.png')} alt="学 AI 来匠人" style={{ height: 96, display: 'block', marginLeft: -6 }} />
					<h1 style={{ fontFamily: f.h, fontWeight: 700, fontSize: 64, lineHeight: 1.2, marginTop: 28 }}>匠人学院<br />AI 课程、IT 培训<br />与职业发展</h1>
					<p style={{ fontSize: 24, lineHeight: 1.7, color: c('slate'), marginTop: 24 }}>JR Academy · 2017 年成立于澳大利亚</p>
					<div style={{ display: 'flex', gap: 14, marginTop: 34 }}>
						<Pill tone="coral" style={{ fontSize: 22, padding: '10px 24px' }}>9 年，帮 6028+ 人拿到 Offer</Pill>
						<Pill style={{ fontSize: 22, padding: '10px 24px' }}>jracademy.ai</Pill>
					</div>
				</div>
				<img src={asset('images/event-atlassian-group.webp')} alt="匠人学院与 Atlassian 活动合影" style={{ width: '100%', borderRadius: c('r-feature') }} />
			</div>
		</Page>
	);
}
