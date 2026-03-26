import { motion } from 'framer-motion';
import { Slide } from '../ui';
import { colors, fonts } from '../../styles/theme';
import { img } from '../../utils/img';
import { QRCodeSVG } from 'qrcode.react';
import AnimatedBg from '../AnimatedBg';

const certLogos = [
	{ name: 'AWS', file: 'aws.svg', bg: '#FF9900' },
	{ name: 'Azure', file: 'azure.svg', bg: '#0078D4' },
	{ name: 'GCP', file: 'gcp.svg', bg: '#4285F4' },
	{ name: 'K8s', file: 'kubernetes.svg', bg: '#326CE5' },
	{ name: 'Terraform', file: 'hashicorp.svg', bg: '#7B42BC' },
	{ name: 'CompTIA', file: 'comptia.svg', bg: '#C8202F' },
	{ name: 'PMP', file: 'pmi.svg', bg: '#1A6DB0' },
	{ name: 'Salesforce', file: 'salesforce.svg', bg: '#00A1E0' },
];

export default function S10_Certification() {
	return (
		<Slide bg={colors.yellow} style={{ position: 'relative' }}>
			<AnimatedBg variant="shapes" opacity={0.1} />

			{/* Decorative blocks */}
			<motion.div
				initial={{ x: 200 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}
				style={{ position: 'absolute', top: -40, right: -30, width: 300, height: 300, background: colors.red, transform: 'rotate(15deg)', opacity: 0.15 }}
			/>
			<motion.div
				initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 }}
				style={{ position: 'absolute', bottom: -20, left: -20, width: 200, height: 200, background: colors.blue, transform: 'rotate(-10deg)', opacity: 0.12 }}
			/>

			<div style={{ position: 'relative', zIndex: 1, width: '92%', maxWidth: 1400, display: 'flex', gap: 40, padding: '28px 40px', alignItems: 'center' }}>
				{/* Left — big title + stats */}
				<div style={{ flex: 1 }}>
					<motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}>
						<h2 style={{
							fontFamily: fonts.heading, fontSize: 'clamp(48px, 7vw, 90px)',
							fontWeight: 900, lineHeight: 1, letterSpacing: -3,
						}}>
							350+<br />
							<span style={{
								display: 'inline-block', background: colors.black, color: colors.yellow,
								padding: '0 20px', border: `4px solid ${colors.black}`,
								boxShadow: `6px 6px 0 ${colors.red}`, transform: 'rotate(-1deg)',
							}}>IT 认证</span>
						</h2>
					</motion.div>

					<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
						style={{ fontSize: 'clamp(16px, 2vw, 22px)', marginTop: 20, fontWeight: 600, lineHeight: 1.6 }}>
						一站式备考 · AI 智能刷题 · 真题模拟
					</motion.p>

					{/* Big stat cards */}
					<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
						style={{ display: 'flex', gap: 12, marginTop: 20 }}>
						{[
							{ num: '80,000+', label: '真题', bg: colors.red, color: '#fff' },
							{ num: '350+', label: '认证', bg: colors.black, color: colors.yellow },
							{ num: '6,000+', label: '学员', bg: colors.white, color: colors.black },
						].map((s, i) => (
							<motion.div
								key={s.label}
								initial={{ scale: 0, rotate: 0 }}
								animate={{ scale: 1, rotate: [0, -2, 2, 0][i] }}
								transition={{ delay: 0.5 + i * 0.1, type: 'spring', stiffness: 300 }}
								style={{
									padding: '14px 20px', background: s.bg, color: s.color,
									border: `3px solid ${colors.black}`, boxShadow: `5px 5px 0 ${colors.black}`,
									transform: `rotate(${[-2, 1, -1][i]}deg)`,
								}}
							>
								<div style={{ fontFamily: fonts.heading, fontSize: 32, fontWeight: 900, lineHeight: 1 }}>{s.num}</div>
								<div style={{ fontSize: 12, fontWeight: 700, marginTop: 2 }}>{s.label}</div>
							</motion.div>
						))}
					</motion.div>

					{/* Cert logos strip */}
					<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
						style={{ display: 'flex', gap: 10, marginTop: 20, flexWrap: 'wrap', alignItems: 'center' }}>
						{certLogos.map((c, i) => (
							<motion.div
								key={c.name}
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								transition={{ delay: 0.8 + i * 0.06, type: 'spring' }}
								style={{
									background: '#fff',
									border: `2px solid ${colors.black}`, boxShadow: `3px 3px 0 ${colors.black}`,
									display: 'flex', alignItems: 'center', gap: 6,
									padding: '4px 10px 4px 4px',
								}}
							>
								<img src={img(`/images/cert-providers/${c.file}`)} alt={c.name} style={{ width: 28, height: 28, objectFit: 'contain' }}
									onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
								/>
								<span style={{ fontSize: 11, fontWeight: 800, fontFamily: fonts.mono, color: c.bg }}>{c.name}</span>
							</motion.div>
						))}
					</motion.div>
				</div>

				{/* Right — huge numbers + Chrome extension */}
				<div style={{ flex: 0.9, display: 'flex', flexDirection: 'column', gap: 8, overflow: 'visible' }}>
					{/* Giant feature cards with massive numbers */}
					<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
						{[
							{ num: '80K+', icon: '🧠', title: '真题题库', desc: '模拟考试 · 错题本 · 智能推荐', bg: '#fff', rotate: -2 },
							{ num: 'AI', icon: '🤖', title: 'Tutor 解析', desc: '一键解答 · 知识点关联 · 举一反三', bg: '#fff', rotate: 1.5 },
						].map((f, i) => (
							<motion.div
								key={f.title}
								initial={{ opacity: 0, y: 30, scale: 0.9 }}
								animate={{ opacity: 1, y: 0, scale: 1, rotate: f.rotate }}
								transition={{ delay: 0.3 + i * 0.1, type: 'spring', stiffness: 250 }}
								style={{
									padding: '16px', background: f.bg,
									border: `4px solid ${colors.black}`,
									boxShadow: `6px 6px 0 ${colors.black}`,
									transform: `rotate(${f.rotate}deg)`,
									textAlign: 'center',
								}}
							>
								<div style={{ fontSize: 28, marginBottom: 4 }}>{f.icon}</div>
								<div style={{ fontFamily: fonts.heading, fontSize: 40, fontWeight: 900, lineHeight: 1, color: colors.red }}>{f.num}</div>
								<div style={{ fontFamily: fonts.heading, fontSize: 16, fontWeight: 800, marginTop: 4 }}>{f.title}</div>
								<div style={{ fontSize: 10, color: '#666', marginTop: 4 }}>{f.desc}</div>
							</motion.div>
						))}
					</div>

					<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
						{[
							{ num: '350+', icon: '📖', title: '认证章节', desc: '从零学起 · Quiz · 考点标注', bg: '#fff', rotate: 1 },
							{ num: '24/7', icon: '📱', title: 'App 刷题', desc: '手机随时练 · 离线 · 每日打卡', bg: '#fff', rotate: -1.5 },
						].map((f, i) => (
							<motion.div
								key={f.title}
								initial={{ opacity: 0, y: 30, scale: 0.9 }}
								animate={{ opacity: 1, y: 0, scale: 1, rotate: f.rotate }}
								transition={{ delay: 0.5 + i * 0.1, type: 'spring', stiffness: 250 }}
								style={{
									padding: '16px', background: f.bg,
									border: `4px solid ${colors.black}`,
									boxShadow: `6px 6px 0 ${colors.black}`,
									transform: `rotate(${f.rotate}deg)`,
									textAlign: 'center',
								}}
							>
								<div style={{ fontSize: 28, marginBottom: 4 }}>{f.icon}</div>
								<div style={{ fontFamily: fonts.heading, fontSize: 40, fontWeight: 900, lineHeight: 1, color: colors.blue }}>{f.num}</div>
								<div style={{ fontFamily: fonts.heading, fontSize: 16, fontWeight: 800, marginTop: 4 }}>{f.title}</div>
								<div style={{ fontSize: 10, color: '#666', marginTop: 4 }}>{f.desc}</div>
							</motion.div>
						))}
					</div>

					{/* 考证匠 Chrome Extension */}
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.7 }}
						style={{
							padding: '12px 16px', background: colors.red, color: '#fff',
							border: `4px solid ${colors.black}`, boxShadow: `6px 6px 0 ${colors.black}`,
							display: 'flex', alignItems: 'center', gap: 14,
						}}
					>
						<div style={{
							width: 88, height: 88, minWidth: 88, minHeight: 88,
							background: '#fff', padding: 6,
							border: `3px solid ${colors.black}`, flexShrink: 0,
						}}>
							<QRCodeSVG value="https://jiangren.com.au/tools/cert-master" size={76} level="L" />
						</div>
						<div style={{ flex: 1 }}>
							<div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 3 }}>
								<strong style={{ fontFamily: fonts.heading, fontSize: 20 }}>考证匠 CertMaster</strong>
								<span style={{ padding: '2px 8px', background: colors.yellow, color: '#000', fontSize: 9, fontWeight: 800, border: `2px solid ${colors.black}` }}>Chrome 插件</span>
							</div>
							<p style={{ fontSize: 12, opacity: 0.9 }}>
								浏览 ExamTopics 一键 AI 解题 · 自动读取题目 · 截屏解析
							</p>
						</div>
					</motion.div>
				</div>
			</div>
		</Slide>
	);
}
