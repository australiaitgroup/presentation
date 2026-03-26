import { motion } from 'framer-motion';
import { Slide, Title, Tag } from '../ui';
import { colors, fonts, border, shadow } from '../../styles/theme';

export default function S13_WhyRaise() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '90%', maxWidth: 1400, padding: 40 }}>
				<Tag bg={colors.red}>为什么融资？</Tag>
				<Title style={{ marginTop: 16, marginBottom: 40 }} size="clamp(36px, 6vw, 72px)">
					我们不缺生存，<span style={{ background: colors.red, color: '#fff', padding: '0 16px' }}>缺加速</span>
				</Title>

				<div style={{ display: 'flex', gap: 24 }}>
					{/* Left - Current state */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2 }}
						style={{ flex: 1, border, background: colors.white, boxShadow: shadow, padding: '32px 28px' }}
					>
						<div style={{
							display: 'inline-block', padding: '4px 14px',
							background: colors.green, fontFamily: fonts.heading,
							fontSize: 16, fontWeight: 800, marginBottom: 20,
						}}>
							现状
						</div>
						<h3 style={{ fontFamily: fonts.heading, fontSize: 24, fontWeight: 800, marginBottom: 16 }}>
							活着，而且活得不错
						</h3>
						<p style={{ fontSize: 16, lineHeight: 1.8, color: '#555' }}>
							匠人学院<strong>已经是一个盈利的业务</strong>。
						</p>
						<p style={{ fontSize: 16, lineHeight: 1.8, color: '#555', marginTop: 8 }}>
							8 年来靠自身收入支撑了所有产品研发和市场拓展。没有外部融资，没有烧钱换增长。
						</p>
						<div style={{ marginTop: 20, padding: '12px 16px', background: '#fff3f3', border: `2px solid ${colors.red}` }}>
							<span style={{ fontWeight: 700, color: colors.red }}>但现在有一个时间窗口，错过就没了。</span>
						</div>
					</motion.div>

					{/* Right - Window */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.3 }}
						style={{ flex: 1, border, background: colors.white, boxShadow: shadow, padding: '32px 28px' }}
					>
						<div style={{
							display: 'inline-block', padding: '4px 14px',
							background: colors.red, color: '#fff', fontFamily: fonts.heading,
							fontSize: 16, fontWeight: 800, marginBottom: 20,
						}}>
							窗口期 2025-2027
						</div>

						{[
							{ tag: '需求端', text: '每个人都在问「我该怎么学 AI」\n焦虑在 2025-2026 达到顶峰' },
							{ tag: '供给端', text: '大厂做通用教育\n社群驱动 + 全链路仍是空白' },
							{ tag: '竞争端', text: '一旦有人先建立社群壁垒\n后来者几乎不可能追上' },
						].map(item => (
							<div key={item.tag} style={{ marginBottom: 16 }}>
								<span style={{
									display: 'inline-block', padding: '2px 10px',
									background: colors.red, color: '#fff',
									fontSize: 12, fontWeight: 700, marginBottom: 6,
								}}>
									{item.tag}
								</span>
								{item.text.split('\n').map((line, i) => (
									<p key={i} style={{ fontSize: 15, lineHeight: 1.6, color: '#555', paddingLeft: 4 }}>{line}</p>
								))}
							</div>
						))}
					</motion.div>
				</div>
			</div>
		</Slide>
	);
}
