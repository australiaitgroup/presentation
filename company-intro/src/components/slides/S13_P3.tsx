import { Slide, Inner, Half, Title, Divider, Tag, BulletList, Stagger, StaggerItem } from '../ui';
import { colors, fonts, border, shadow, shadowSm } from '../../styles/theme';

export default function S13_P3() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<Stagger style={{ flex: 1 }}>
					<StaggerItem><Tag bg={colors.purple}>匠人独创</Tag></StaggerItem>
					<StaggerItem><Title style={{ marginTop: 20 }}>P3 职业孵化器</Title></StaggerItem>
					<StaggerItem><p style={{ fontSize: 'clamp(18px,2.2vw,26px)', color: colors.red, fontWeight: 700 }}>真实项目，真实经验</p></StaggerItem>
					<StaggerItem><Divider color={colors.purple} /></StaggerItem>
					<StaggerItem>
						<BulletList items={[
							<>不是模拟，是 <strong>真实商业项目</strong></>,
							'跨职能团队：BA + Developer + DevOps + UI/UX',
							<><strong>3 个月</strong> 项目周期，还原企业工作流</>,
							<>像素风 <strong>虚拟办公室</strong>，沉浸式协作</>,
							'导师来自 Atlassian, Google, Canva',
						]} />
					</StaggerItem>
					<StaggerItem>
						<div style={{ marginTop: 16, padding: '12px 20px', border, background: colors.yellow, boxShadow: shadowSm, display: 'inline-flex', alignItems: 'center', gap: 12, fontWeight: 700 }}>
							<span style={{ fontFamily: fonts.heading, fontSize: 30, fontWeight: 800 }}>500+</span>
							<span>学员通过 P3 成功转码</span>
						</div>
					</StaggerItem>
				</Stagger>
				<Half style={{ gap: 12, alignItems: 'center' }}>
					{/* P3 header image from repo */}
					<div style={{ width: '100%', maxWidth: 500, border, boxShadow: shadow, overflow: 'hidden', transform: 'rotate(1deg)' }}>
						<img src="/images/meta-image-project.webp" alt="P3 虚拟办公室" style={{ width: '100%', height: 'auto', display: 'block' }}
							onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.display = 'none'; }}
						/>
					</div>
					{/* Partnership photo */}
					<div style={{ width: '100%', maxWidth: 500, transform: 'rotate(-1.5deg)', border, boxShadow: shadowSm, overflow: 'hidden' }}>
						<img src="/images/partnership-2.jpg" alt="P3 团队协作" style={{ width: '100%', height: 'auto', display: 'block', maxHeight: 180, objectFit: 'cover' }}
							onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.display = 'none'; }}
						/>
					</div>
				</Half>
			</Inner>
		</Slide>
	);
}
