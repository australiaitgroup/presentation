import { img } from '../../utils/img';
import { motion } from 'framer-motion';
import { Slide } from '../ui';
import { colors, fonts } from '../../styles/theme';

const data = [
	{ num: '4,000+', label: 'Offers', desc: '学员拿到工作', bg: colors.red, color: '#fff', rotate: -3, scale: 1.05 },
	{ num: '200+', label: '活动/年', desc: '线上&线下', bg: colors.yellow, color: '#000', rotate: 2, scale: 1 },
	{ num: '10,000+', label: '学员', desc: '遍布全球', bg: colors.green, color: '#000', rotate: -1, scale: 1 },
	{ num: '600+', label: '导师', desc: 'Google Canva Atlassian', bg: colors.blue, color: '#fff', rotate: 3, scale: 1 },
];

export default function S03_Impact() {
	return (
		<Slide bg={colors.black} style={{ position: 'relative' }}>
			{/* Diagonal stripe decoration */}
			<div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 8, background: `repeating-linear-gradient(90deg, ${colors.red} 0, ${colors.red} 25%, ${colors.yellow} 25%, ${colors.yellow} 50%, ${colors.green} 50%, ${colors.green} 75%, ${colors.blue} 75%, ${colors.blue} 100%)` }} />

			<div style={{ position: 'relative', zIndex: 1, width: '90%', maxWidth: 1300, padding: 40 }}>
				{/* Title */}
				<motion.h2
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					style={{
						fontFamily: fonts.heading, fontSize: 'clamp(48px, 7vw, 80px)',
						fontWeight: 900, color: colors.white, lineHeight: 1, marginBottom: 40,
					}}
				>
					我们的<br />
					<span style={{
						display: 'inline-block', background: colors.red, padding: '0 24px',
						border: `4px solid ${colors.white}`, transform: 'rotate(-1deg)',
						boxShadow: `6px 6px 0 ${colors.yellow}`,
					}}>影响力</span>
				</motion.h2>

				<div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
					{/* Impact cards — BIG, tilted, overlapping */}
					<div style={{ flex: 1.2, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
						{data.map((d, i) => (
							<motion.div
								key={d.label}
								initial={{ opacity: 0, y: 40, rotate: 0 }}
								animate={{ opacity: 1, y: 0, rotate: d.rotate }}
								transition={{ delay: 0.2 + i * 0.1, type: 'spring', stiffness: 200 }}
								style={{
									padding: '28px 20px', background: d.bg, color: d.color,
									border: `4px solid ${colors.black}`,
									boxShadow: `8px 8px 0 ${i === 0 ? colors.yellow : colors.black}`,
									transform: `rotate(${d.rotate}deg) scale(${d.scale})`,
									textAlign: 'center',
								}}
							>
								<div style={{ fontFamily: fonts.heading, fontSize: 'clamp(44px, 5vw, 68px)', fontWeight: 900, lineHeight: 1 }}>{d.num}</div>
								<div style={{ fontFamily: fonts.heading, fontSize: 20, fontWeight: 800, marginTop: 6 }}>{d.label}</div>
								<div style={{ fontSize: 13, marginTop: 4, opacity: 0.8 }}>{d.desc}</div>
							</motion.div>
						))}
					</div>

					{/* Right — offer collage */}
					<motion.div
						initial={{ opacity: 0, rotate: 5 }}
						animate={{ opacity: 1, rotate: 2 }}
						transition={{ delay: 0.5 }}
						style={{ flex: 0.9, position: 'relative' }}
					>
						<div style={{
							border: `4px solid ${colors.white}`, boxShadow: `8px 8px 0 ${colors.red}`,
							overflow: 'hidden', transform: 'rotate(2deg)',
						}}>
							<img src={img("/images/offers-collage.webp")} alt="Offer 截图" style={{ width: '100%', height: 'auto', display: 'block' }}
								onError={e => { (e.target as HTMLImageElement).parentElement!.style.display = 'none'; }}
							/>
						</div>
						<motion.div
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ delay: 0.8, type: 'spring' }}
							style={{
								position: 'absolute', top: -20, right: -10, zIndex: 2,
								padding: '8px 16px', background: colors.yellow,
								border: `3px solid ${colors.black}`, boxShadow: `4px 4px 0 ${colors.black}`,
								transform: 'rotate(-8deg)', fontFamily: fonts.heading, fontWeight: 900, fontSize: 14,
							}}
						>
							✅ 真实 Offer
						</motion.div>

						{/* Partner logos strip */}
						<div style={{ marginTop: 20, display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
							{['ATLASSIAN', 'Canva', 'aws', 'Deloitte', 'Google', 'Microsoft'].map(p => (
								<span key={p} style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, color: 'rgba(255,255,255,0.4)' }}>{p}</span>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</Slide>
	);
}
