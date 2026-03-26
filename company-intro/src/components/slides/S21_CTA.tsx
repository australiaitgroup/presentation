import { useState } from 'react';
import { Slide, Inner, Title, Highlight, Stagger, StaggerItem } from '../ui';
import { colors, fonts } from '../../styles/theme';

const links = [
	{ label: '官网', value: 'jiangren.com.au' },
	{ label: '微信公众号', value: '匠人学院' },
	{ label: '社交媒体', value: '小红书 · YouTube · LinkedIn' },
];

export default function S21_CTA() {
	return (
		<Slide bg={colors.dark}>
			<Inner center>
				<Stagger>
					<StaggerItem>
						<Title white size="clamp(40px,6vw,80px)" style={{ marginBottom: 32 }}>
							开始你的<br /><Highlight color={colors.yellow}>AI 学习之旅</Highlight>
						</Title>
					</StaggerItem>
					<StaggerItem>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
							{links.map(l => (
								<div key={l.label} style={{ color: 'rgba(255,255,255,0.8)', fontSize: 18 }}>
									<span style={{ fontWeight: 700, color: colors.yellow, marginRight: 8 }}>{l.label}</span>
									<span>{l.value}</span>
								</div>
							))}
						</div>
					</StaggerItem>
					<StaggerItem>
						<div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginBottom: 28 }}>
							<CTAButton bg={colors.yellow} color={colors.black}>免费试听</CTAButton>
							<CTAButton bg="transparent" color={colors.white}>预约咨询</CTAButton>
						</div>
					</StaggerItem>
					<StaggerItem>
						<div style={{
							width: 120, height: 120, border: '3px solid rgba(255,255,255,0.3)',
							background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center',
							margin: '0 auto 24px', color: 'rgba(255,255,255,0.5)', fontSize: 14, textAlign: 'center', fontWeight: 600,
						}}>QR Code<br />扫码咨询</div>
					</StaggerItem>
					<StaggerItem>
						<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, color: '#fff', fontSize: 18, fontWeight: 700 }}>
							<div style={{ width: 44, height: 44, borderRadius: 8, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: fonts.heading, fontWeight: 800, fontSize: 20, color: colors.dark }}>JR</div>
							匠人学院 JR ACADEMY
						</div>
					</StaggerItem>
				</Stagger>
			</Inner>
		</Slide>
	);
}

function CTAButton({ children, bg, color: c }: { children: React.ReactNode; bg: string; color: string }) {
	const [hover, setHover] = useState(false);
	const borderC = bg === 'transparent' ? colors.white : bg;
	return (
		<button
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			style={{
				padding: '14px 36px', fontSize: 18, fontWeight: 800, fontFamily: fonts.heading,
				border: `3px solid ${borderC}`, background: bg, color: c, cursor: 'pointer',
				boxShadow: hover ? 'none' : `4px 4px 0px ${borderC}`,
				transform: hover ? 'translate(3px,3px)' : 'none',
				transition: 'all 0.15s',
			}}
		>{children}</button>
	);
}
