import { Slide, Title, Tag, Stagger, StaggerItem } from '../ui';
import { colors, fonts, border } from '../../styles/theme';

const moats = [
	{
		title: '社群壁垒', sub: '最深的护城河', color: colors.red,
		points: ['600+ 导师 (Google/AWS/Canva)', '7 城市线下社群', '200+ 场年度活动', '抄不走凌晨互相 review 的氛围'],
	},
	{
		title: '数据壁垒', sub: '独有数据资产', color: colors.blue,
		points: ['1,819 门大学课程索引', '10,000+ 真实面试题库', '1,120 条导师专长图谱', '4,000+ Offer 就业追踪'],
	},
	{
		title: '产品壁垒', sub: '2-3 年 + $2M 的领先', color: colors.green,
		points: ['10+ 子系统完整平台', '60+ API 后端模块', '3 款 Chrome 插件', 'React Native 移动端'],
	},
	{
		title: '品牌壁垒', sub: '品类即品牌', color: colors.purple,
		points: ['"匠人了吗？" = "学 AI 了吗？"', '4,000 Offer = 4,000 个活广告', '朋友圈·小红书·LinkedIn 传播'],
	},
];

export default function S09_Moats() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '90%', maxWidth: 1400, padding: 40 }}>
				<Tag bg={colors.red}>护城河</Tag>
				<Title style={{ marginTop: 16, marginBottom: 36 }}>
					四层壁垒，每层都需要<span style={{ background: colors.red, color: '#fff', padding: '0 12px' }}>「年」级单位</span>追赶
				</Title>

				<Stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
					{moats.map(m => (
						<StaggerItem key={m.title}>
							<div style={{
								border, background: colors.white, padding: '24px 18px', height: '100%',
								borderTop: `6px solid ${m.color}`,
								boxShadow: `5px 5px 0 ${colors.black}`,
							}}>
								<div style={{ fontFamily: fonts.heading, fontSize: 24, fontWeight: 900 }}>{m.title}</div>
								<div style={{ fontSize: 13, fontWeight: 700, color: m.color, marginTop: 4, marginBottom: 16 }}>{m.sub}</div>
								{m.points.map((p, i) => (
									<p key={i} style={{ fontSize: 15, lineHeight: 2, color: '#555' }}>
										<span style={{ color: m.color, fontWeight: 700 }}>→ </span>{p}
									</p>
								))}
							</div>
						</StaggerItem>
					))}
				</Stagger>
			</div>
		</Slide>
	);
}
