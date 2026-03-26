import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import { Slide, Inner, Half, Title, Divider, Tag, Stagger, StaggerItem } from '../ui';
import { colors } from '../../styles/theme';

interface Feature {
	id: string;
	icon: string;
	label: string;
	title: string;
	mockContent: React.ReactNode;
}

function MockBar({ label, pct, color }: { label: string; pct: number; color: string }) {
	return (
		<div style={{ marginBottom: 6 }}>
			<div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, marginBottom: 2 }}>
				<span>{label}</span><span style={{ fontWeight: 700 }}>{pct}%</span>
			</div>
			<div style={{ height: 5, background: '#e5e7eb', borderRadius: 3 }}>
				<motion.div initial={{ width: 0 }} animate={{ width: `${pct}%` }} transition={{ duration: 0.6, delay: 0.2 }} style={{ height: '100%', background: color, borderRadius: 3 }} />
			</div>
		</div>
	);
}

const features: Feature[] = [
	{
		id: 'analysis', icon: '📊', label: 'Analysis',
		title: 'AI 职位分析',
		mockContent: (
			<div style={{ fontSize: 11 }}>
				<div style={{ background: '#f0fdf4', border: '1.5px solid #22c55e', padding: '8px 10px', marginBottom: 8, borderRadius: 4 }}>
					<div style={{ fontWeight: 700, color: '#16a34a', fontSize: 13 }}>✓ 综合匹配度 87%</div>
					<div style={{ color: '#555', marginTop: 2 }}>Senior Frontend Engineer · Canva · Sydney</div>
				</div>
				<MockBar label="技术栈匹配" pct={92} color="#22c55e" />
				<MockBar label="经验年限" pct={78} color="#3b82f6" />
				<MockBar label="学历要求" pct={95} color="#8b5cf6" />
				<MockBar label="软技能" pct={82} color="#f59e0b" />
				<div style={{ marginTop: 8, padding: 8, background: '#fffbeb', border: '1px solid #fde047', borderRadius: 4, lineHeight: 1.5 }}>
					<strong>🎯 关键词缺失：</strong> GraphQL, Figma, A/B Testing<br />
					<strong>💡 建议：</strong> 简历加入 Design System 相关经验，匹配度可提升至 93%
				</div>
				<div style={{ marginTop: 8, padding: 8, background: '#f0f9ff', border: '1px solid #bae6fd', borderRadius: 4, lineHeight: 1.5 }}>
					<strong>💰 薪资预测：</strong> $140k - $180k AUD<br />
					<strong>🏢 公司评分：</strong> Glassdoor 4.3/5 · 工作签证 ✓
				</div>
			</div>
		),
	},
	{
		id: 'interview', icon: '🎯', label: 'Interview',
		title: 'AI 面试准备',
		mockContent: (
			<div style={{ fontSize: 11 }}>
				<div style={{ fontSize: 10, color: '#888', marginBottom: 6 }}>根据 Canva Frontend 岗位生成：</div>
				{[
					{ type: 'Behavioral', q: 'Tell me about a time you had to make a difficult technical decision under pressure.', tag: '⭐ 高频' },
					{ type: 'Technical', q: 'Explain how React Fiber works and why it was introduced.', tag: '🔥 必考' },
					{ type: 'System Design', q: 'Design a real-time collaborative design tool like Canva.', tag: '💎 终面' },
					{ type: 'Coding', q: 'Implement a debounce function that supports immediate invocation.', tag: '📝 笔试' },
				].map((item, i) => (
					<div key={i} style={{ padding: 8, background: i === 0 ? '#eff6ff' : '#fff', border: '1px solid #e2e8f0', marginBottom: 4, borderRadius: 4 }}>
						<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
							<strong style={{ color: '#3b82f6' }}>{item.type}</strong>
							<span style={{ fontSize: 9, background: '#fef3c7', padding: '1px 6px', borderRadius: 3 }}>{item.tag}</span>
						</div>
						<p style={{ marginTop: 3, color: '#555', lineHeight: 1.4 }}>{item.q}</p>
					</div>
				))}
				<div style={{ textAlign: 'center', color: '#3b82f6', fontWeight: 600, marginTop: 4, fontSize: 10 }}>查看全部 28 道题 →</div>
			</div>
		),
	},
	{
		id: 'cover', icon: '✉️', label: 'Cover Letter',
		title: 'AI Cover Letter',
		mockContent: (
			<div style={{ fontSize: 11 }}>
				<div style={{ display: 'flex', gap: 4, marginBottom: 8, flexWrap: 'wrap' }}>
					{['专业正式', '热情积极', '简洁有力'].map((t, i) => (
						<span key={t} style={{ padding: '3px 8px', background: i === 0 ? '#dbeafe' : '#f1f5f9', border: '1px solid #cbd5e1', fontSize: 10, cursor: 'pointer', borderRadius: 3 }}>{t}</span>
					))}
				</div>
				<div style={{ padding: 10, background: '#fafafa', border: '1px solid #e2e8f0', borderRadius: 4, lineHeight: 1.6, maxHeight: 180, overflow: 'hidden' }}>
					<p>Dear Hiring Manager,</p>
					<p style={{ marginTop: 6 }}>I am writing to express my strong interest in the <strong>Senior Frontend Engineer</strong> position at <strong>Canva</strong>. With 4+ years of experience building high-performance React applications and a passion for design tools...</p>
					<p style={{ marginTop: 6 }}>At my current role at [Company], I led the migration of a legacy jQuery dashboard to React + TypeScript, resulting in a <strong>40% improvement</strong> in page load time and <strong>25% increase</strong> in user engagement...</p>
					<p style={{ marginTop: 6 }}>I am particularly excited about Canva's mission to empower everyone to design. My experience with...</p>
				</div>
				<div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
					<span style={{ padding: '4px 10px', background: '#22c55e', color: '#fff', fontSize: 10, fontWeight: 700, borderRadius: 3, cursor: 'pointer' }}>📋 复制</span>
					<span style={{ padding: '4px 10px', background: '#3b82f6', color: '#fff', fontSize: 10, fontWeight: 700, borderRadius: 3, cursor: 'pointer' }}>📝 编辑</span>
					<span style={{ padding: '4px 10px', background: '#f1f5f9', color: '#333', fontSize: 10, fontWeight: 700, borderRadius: 3, cursor: 'pointer' }}>🔄 重新生成</span>
				</div>
			</div>
		),
	},
	{
		id: 'company', icon: '🏢', label: 'Company',
		title: '公司情报',
		mockContent: (
			<div style={{ fontSize: 11 }}>
				<div style={{ padding: 10, background: '#f0f9ff', border: '1px solid #bae6fd', marginBottom: 8, borderRadius: 4, display: 'flex', alignItems: 'center', gap: 10 }}>
					<div style={{ width: 36, height: 36, background: '#00c4cc', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: 14, flexShrink: 0 }}>C</div>
					<div>
						<strong style={{ fontSize: 13 }}>Canva</strong><br />
						<span style={{ color: '#666', fontSize: 10 }}>Design Platform · Sydney · 5000+ employees</span>
					</div>
				</div>
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
					{[
						{ icon: '📋', label: '面试轮数', value: '4 轮' },
						{ icon: '💰', label: '薪资范围', value: '$140-180k' },
						{ icon: '🎫', label: '签证担保', value: '✓ 482/494' },
						{ icon: '⭐', label: '面试难度', value: '中高 (3.8/5)' },
						{ icon: '📊', label: '招聘趋势', value: '↑ 活跃招聘' },
						{ icon: '🕐', label: '平均流程', value: '3-4 周' },
					].map(item => (
						<div key={item.label} style={{ padding: 6, border: '1px solid #eee', borderRadius: 4 }}>
							<div style={{ fontSize: 9, color: '#888' }}>{item.icon} {item.label}</div>
							<div style={{ fontWeight: 700, fontSize: 12, marginTop: 1 }}>{item.value}</div>
						</div>
					))}
				</div>
				<div style={{ marginTop: 8, padding: 6, background: '#fefce8', border: '1px solid #fde047', borderRadius: 4 }}>
					<strong>🔥 Tech Stack：</strong> React, TypeScript, Java, AWS, GraphQL, Kotlin
				</div>
			</div>
		),
	},
	{
		id: 'profile', icon: '👤', label: 'Profile',
		title: 'LinkedIn 优化',
		mockContent: (
			<div style={{ fontSize: 11 }}>
				<div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10, padding: 8, background: '#fafafa', borderRadius: 4, border: '1px solid #eee' }}>
					<div style={{ width: 36, height: 36, borderRadius: '50%', background: '#dbeafe', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>👤</div>
					<div style={{ flex: 1 }}>
						<strong style={{ fontSize: 12 }}>Your Profile</strong><br />
						<span style={{ fontSize: 9, color: '#888' }}>LinkedIn SEO Score</span>
					</div>
					<div style={{ textAlign: 'center' }}>
						<div style={{ fontFamily: '"Space Mono"', fontSize: 22, fontWeight: 700, color: '#f59e0b' }}>72</div>
						<div style={{ fontSize: 8, color: '#f59e0b' }}>/ 100</div>
					</div>
				</div>
				<MockBar label="📝 Headline 优化" pct={60} color="#f59e0b" />
				<MockBar label="📖 About 完整度" pct={45} color="#ef4444" />
				<MockBar label="💼 Experience 描述" pct={85} color="#22c55e" />
				<MockBar label="🏷️ Skills 标签" pct={90} color="#22c55e" />
				<MockBar label="📸 头像 & Banner" pct={70} color="#f59e0b" />
				<div style={{ marginTop: 6, padding: 8, background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 4, lineHeight: 1.5 }}>
					<strong style={{ color: '#dc2626' }}>⚠️ 优先修改：</strong><br />
					About 部分缺少关键词 "React", "TypeScript"，建议加入项目成果数据
				</div>
			</div>
		),
	},
	{
		id: 'saved', icon: '💼', label: 'Saved',
		title: '职位追踪',
		mockContent: (
			<div style={{ fontSize: 11 }}>
				{[
					{ company: 'Canva', role: 'Sr. Frontend', status: '面试中', statusColor: '#3b82f6', date: '3天前' },
					{ company: 'Atlassian', role: 'Full Stack', status: '已投递', statusColor: '#f59e0b', date: '5天前' },
					{ company: 'Google', role: 'Frontend', status: '已保存', statusColor: '#6b7280', date: '1周前' },
					{ company: 'CBA', role: 'React Dev', status: '拿到Offer!', statusColor: '#22c55e', date: '2周前' },
				].map((job, i) => (
					<div key={i} style={{ padding: 8, border: '1px solid #eee', marginBottom: 4, borderRadius: 4, display: 'flex', alignItems: 'center', gap: 8 }}>
						<div style={{ width: 28, height: 28, background: '#f1f5f9', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800, flexShrink: 0 }}>{job.company[0]}</div>
						<div style={{ flex: 1 }}>
							<strong>{job.company}</strong> · {job.role}
							<div style={{ fontSize: 9, color: '#999' }}>{job.date}</div>
						</div>
						<span style={{ fontSize: 9, padding: '2px 6px', background: `${job.statusColor}15`, color: job.statusColor, fontWeight: 700, borderRadius: 3 }}>{job.status}</span>
					</div>
				))}
				<div style={{ textAlign: 'center', marginTop: 6, padding: 6, background: '#f0fdf4', borderRadius: 4, fontWeight: 700, color: '#16a34a' }}>
					📊 本月投递 12 · 面试 3 · Offer 1
				</div>
			</div>
		),
	},
];

export default function S12_ChromeExt() {
	const [activeTab, setActiveTab] = useState('analysis');
	const active = features.find(f => f.id === activeTab)!;

	return (
		<Slide bg={colors.darkBg}>
			<Inner split>
				<Stagger style={{ flex: 0.85 }}>
					<StaggerItem>
						<div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
							<Tag bg={colors.green} color={colors.black}>Chrome 插件</Tag>
							<Tag bg={colors.red}>免费下载</Tag>
						</div>
					</StaggerItem>
					<StaggerItem><Title white style={{ marginTop: 16 }}>求职匠<br />Job Hunter</Title></StaggerItem>
					<StaggerItem><p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 'clamp(14px,1.8vw,20px)', marginTop: 6 }}>AI 驱动的全能求职助手</p></StaggerItem>
					<StaggerItem><Divider color={colors.red} /></StaggerItem>
					<StaggerItem>
						<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 16px', marginTop: 4 }}>
							{[
								'📊 一键 AI 职位分析',
								'🎯 面试问题预测',
								'✉️ AI Cover Letter',
								'🏢 公司情报查询',
								'👤 LinkedIn SEO 优化',
								'💼 职位申请追踪',
								'✍️ AI 写 LinkedIn Post',
								'🤝 人脉管理',
								'📝 认证刷题助手',
								'🌐 求职资源中心',
							].map(t => (
								<div key={t} style={{ color: 'rgba(255,255,255,0.8)', fontSize: 13, lineHeight: 1.8 }}>{t}</div>
							))}
						</div>
					</StaggerItem>
					<StaggerItem>
						<div style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 16 }}>
							<div style={{ display: 'flex', gap: 4 }}>
								{['styled-avatar--cyan', 'styled-avatar--green', 'styled-avatar--magenta', 'styled-avatar--red'].map(a => (
									<img key={a} src={`/images/avatars/${a}.webp`} alt="" style={{ width: 24, height: 24, borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.3)' }} onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }} />
								))}
							</div>
							<span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>1,000+ 用户在用</span>
						</div>
					</StaggerItem>
					{/* QR Code */}
					<StaggerItem>
						<div style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 14 }}>
							<div style={{
								width: 72, height: 72, background: '#fff', padding: 4,
								border: `2px solid ${colors.yellow}`,
								flexShrink: 0,
							}}>
								<QRCodeSVG value="https://jiangren.com.au/tools/job-hunter" size={64} level="M" />
							</div>
							<div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 11, lineHeight: 1.6 }}>
								扫码下载 Chrome 插件<br />
								<span style={{ color: colors.yellow, fontWeight: 700 }}>完全免费</span> · 支持 Seek / LinkedIn / Indeed
							</div>
						</div>
					</StaggerItem>
				</Stagger>

				{/* Interactive mock sidepanel */}
				<Half style={{ alignItems: 'center', justifyContent: 'center' }}>
					<div style={{
						width: 330, background: '#fff', border: `3px solid ${colors.black}`,
						boxShadow: `10px 10px 0px ${colors.black}`, overflow: 'hidden',
						display: 'flex', flexDirection: 'column', height: 520,
					}}>
						{/* Header */}
						<div style={{ padding: '10px 14px', background: colors.dark, color: '#fff', display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
							<div style={{ width: 26, height: 26, borderRadius: 6, background: colors.green, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800 }}>JR</div>
							<div style={{ flex: 1 }}>
								<div style={{ fontSize: 12, fontWeight: 700 }}>求职匠 Job Hunter</div>
								<div style={{ fontSize: 9, opacity: 0.6 }}>AI-Powered Job Assistant</div>
							</div>
							<div style={{ fontSize: 9, padding: '2px 8px', background: colors.yellow, color: '#000', fontWeight: 800, borderRadius: 3 }}>PRO</div>
						</div>

						{/* Balance bar */}
						<div style={{ padding: '6px 14px', background: '#f8fafc', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 10, flexShrink: 0 }}>
							<span>⚡ Credits: <strong>128</strong></span>
							<span style={{ color: '#3b82f6', fontWeight: 600, cursor: 'pointer' }}>Upgrade →</span>
						</div>

						{/* Content */}
						<div style={{ flex: 1, overflow: 'auto', padding: 12 }}>
							<AnimatePresence mode="wait">
								<motion.div
									key={activeTab}
									initial={{ opacity: 0, y: 8 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -8 }}
									transition={{ duration: 0.2 }}
								>
									<div style={{ fontSize: 14, fontWeight: 800, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
										{active.icon} {active.title}
									</div>
									{active.mockContent}
								</motion.div>
							</AnimatePresence>
						</div>

						{/* Feature grid tabs */}
						<div style={{ padding: '6px 10px 8px', borderTop: '2px solid #eee', background: '#fafafa', flexShrink: 0 }}>
							<div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 2 }}>
								{features.map(f => (
									<button
										key={f.id}
										onClick={() => setActiveTab(f.id)}
										style={{
											display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1,
											padding: '5px 2px', border: 'none', cursor: 'pointer', borderRadius: 6,
											background: activeTab === f.id ? '#dbeafe' : 'transparent',
											transition: 'all 0.15s',
										}}
									>
										<span style={{ fontSize: 16 }}>{f.icon}</span>
										<span style={{ fontSize: 8, fontWeight: 600, color: activeTab === f.id ? '#2563eb' : '#999' }}>{f.label}</span>
									</button>
								))}
							</div>
						</div>
					</div>
				</Half>
			</Inner>
		</Slide>
	);
}
