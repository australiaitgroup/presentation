import { motion } from 'framer-motion';
import { Slide } from '../ui';
import { colors, fonts } from '../../styles/theme';

export default function S17_ThankYou() {
	return (
		<Slide bg={colors.red} style={{ position: 'relative' }}>
			<div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
				<motion.div
					initial={{ x: 300, y: 300 }}
					animate={{ x: 0, y: 0 }}
					transition={{ duration: 0.6 }}
					style={{
						position: 'absolute', bottom: -100, right: -80,
						width: 500, height: 500,
						background: colors.yellow,
						transform: 'rotate(12deg)',
						border: `4px solid ${colors.black}`,
					}}
				/>
				<div style={{
					position: 'absolute', inset: 0, opacity: 0.06,
					backgroundImage: 'radial-gradient(circle, #000 1.5px, transparent 1.5px)',
					backgroundSize: '30px 30px',
				}} />
			</div>

			<div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
				>
					<div style={{
						display: 'inline-flex', alignItems: 'center', gap: 12,
						padding: '10px 24px', background: colors.white,
						border: `3px solid ${colors.black}`, boxShadow: `5px 5px 0 ${colors.black}`,
						marginBottom: 32,
					}}>
						<div style={{
							width: 40, height: 40, borderRadius: 8, background: colors.black,
							display: 'flex', alignItems: 'center', justifyContent: 'center',
							color: '#fff', fontFamily: fonts.heading, fontWeight: 900, fontSize: 20,
						}}>
							JR
						</div>
						<span style={{ fontFamily: fonts.heading, fontSize: 18, fontWeight: 800 }}>匠人学院 JR ACADEMY</span>
					</div>
				</motion.div>

				<motion.h1
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.3 }}
					style={{
						fontFamily: fonts.heading, fontSize: 'clamp(48px, 7vw, 90px)',
						fontWeight: 900, color: colors.white, lineHeight: 1.1,
						textShadow: '3px 3px 0 rgba(0,0,0,0.2)',
					}}
				>
					AI 时代，学 AI 找匠人
				</motion.h1>

				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5 }}
					style={{
						marginTop: 32, fontSize: 22, color: 'rgba(255,255,255,0.8)',
						fontFamily: fonts.heading, fontWeight: 600,
					}}
				>
					感谢阅读 · 期待深入交流
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.6 }}
					style={{ marginTop: 28, display: 'flex', gap: 16, justifyContent: 'center' }}
				>
					<span style={{
						padding: '10px 24px', background: colors.white,
						border: `3px solid ${colors.black}`, boxShadow: `4px 4px 0 ${colors.black}`,
						fontFamily: fonts.mono, fontSize: 16, fontWeight: 700,
					}}>
						jiangren.com.au
					</span>
					<span style={{
						padding: '10px 24px', border: '3px solid rgba(255,255,255,0.5)',
						color: colors.white, fontFamily: fonts.mono, fontSize: 16, fontWeight: 700,
					}}>
						联系方式待补充
					</span>
				</motion.div>
			</div>
		</Slide>
	);
}
