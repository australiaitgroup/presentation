import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Slide } from '../ui';
import { colors, fonts } from '../../styles/theme';
import AnimatedBg from '../AnimatedBg';

interface Direction {
	id: string;
	icon: string;
	badge: string;
	badgeBg: string;
	title: string;
	subtitle: string;
	chapters: string[];
	tools: string[];
	color: string;
	duration: string;
}

const directions: Direction[] = [
	{
		id: 'prompt', icon: '✍️', badge: '111章', badgeBg: colors.yellow,
		title: 'Prompt 大师', subtitle: '掌握和 AI 对话的艺术',
		duration: '2-3 周',
		chapters: [
			'Introduction', 'Basics', 'Elements', 'Tips', 'Examples', 'Model Settings',
			'Zero-shot Prompting', 'Few-shot Prompting', 'Chain-of-Thought (CoT)', 'Prompt Chaining', 'RAG', 'ReAct',
			'Tree of Thought (ToT)', 'Reflexion', 'Generated Knowledge', 'Self-Consistency', 'PAL', 'Multimodal CoT',
			'GraphPrompts', 'Active-Prompt', 'APE', 'ART', 'DSP',
			'Prompt Library 总览', 'Classification Prompts', 'Sentiment Classification', 'Sentiment (Few-shot)',
			'Adversarial Prompts', 'Prompt Leaking', 'Jailbreaking',
			'Mathematics Prompts', 'Adding Odd Numbers', 'Composite Functions',
			'Reasoning Prompts', 'Indirect Reasoning', 'Physical Reasoning',
			'Coding Prompts', 'Code Snippets', 'MySQL Query', 'TikZ Diagram',
			'Q&A Prompts', 'Information Extraction', 'Text Summarization',
			'Image Generation', 'Evaluation', 'Truthfulness', 'Creativity',
			'Multi-turn Dialogue', 'Role Playing', 'Structured Output',
			'Prompt Injection Defense', 'Content Filtering', 'Safety Guardrails', 'Red Teaming',
			'AI Agent Prompts', 'Tool-Use Prompts', 'Planning Prompts', 'Memory Prompts', 'Multi-Agent', 'Orchestration',
			'GPT-4 特性', 'Claude 3 特性', 'Gemini Pro 特性', 'Llama 3 特性', 'Mistral 特性',
			'模型能力对比', '上下文窗口', 'Token 计算', '模型选型指南', '成本优化',
			'多模态 Prompt', '图片理解', '视频理解', 'PDF 分析', '音频处理',
			'System Prompt 基础', 'System Prompt 模板', 'System Prompt 高级技巧',
			'企业级 System Prompt', '角色定义方法论', 'Prompt 版本管理', '自动化测试', 'Prompt CI/CD',
			'Google 官方: 清晰指令', 'Google 官方: 系统指令', 'Google 官方: Few-shot',
			'Google 官方: 思维链', 'Google 官方: 迭代优化',
			'实战: 客服机器人', '实战: 代码审查', '实战: 数据分析',
			'实战: 内容生成', '实战: 翻译系统', '实战: 教育助手',
			'Prompt 面试真题', 'Prompt Engineer 职业路径',
			'行业案例: 金融', '行业案例: 医疗', '行业案例: 教育', '行业案例: 电商',
			'附录: Prompt 速查表', '附录: 常见错误', '附录: 工具推荐',
		],
		tools: ['ChatGPT', 'Claude', 'Gemini', 'Midjourney', 'Llama'],
		color: colors.yellow,
	},
	{
		id: 'vibe', icon: '🎨', badge: 'HOT', badgeBg: colors.red,
		title: 'Vibe Coding', subtitle: '用自然语言写代码',
		duration: '4-8 周',
		chapters: [
			'Vibe Coding 是什么', '安装 Cursor 与环境准备', '写出第一个 Prompt', 'Vibe Coding 思维模型', '高质量 Prompt 模板', '理解与校验 AI 的回复',
			'用 AI 做 Debug', '与 AI 结对编程', '多文件协作与项目级修改', '交付一个小功能的全流程',
			'用 AI 做测试与质量保障', '性能与成本优化', '安全与隐私最佳实践', '团队协作与 PR 流程',
			'工具与模型最新动态', 'AI Agents 与工具调用', '前后端协同与 API 生成',
			'数据与知识库协作', '持续改进与自动化', 'AI 辅助重构与架构演进',
			'AI 辅助 UX 文案与交互', '可观测性与 Guardrails', '脚手架与自动化交付', '实战: Todo App',
			'Claude Code 入门', 'Claude Code 高级用法', 'Windsurf 编辑器', 'GitHub Copilot 工作流',
			'v0 快速原型', 'Bolt.new 全栈项目', 'Cursor Rules 配置',
			'Context Engineering', 'CLAUDE.md 最佳实践', '.cursorrules 模板',
			'AI 全栈项目: 前端', 'AI 全栈项目: 后端', 'AI 全栈项目: 部署',
		],
		tools: ['Cursor', 'Claude Code', 'Windsurf', 'Copilot', 'v0', 'Bolt'],
		color: colors.red,
	},
	{
		id: 'engineer', icon: '🤖', badge: 'NEW', badgeBg: colors.blue,
		title: 'AI Engineer', subtitle: '从使用 AI 到构建 AI 应用',
		duration: '8-12 周',
		chapters: [
			'LLM API 入门', 'AI 模型对比参考', 'Prompt Engineering',
			'Context Fundamentals', 'RAG 系统入门', 'LangChain 框架', 'Context Engineering & Memory', 'Context Compression', 'Context Degradation Patterns',
			'Function Calling & Tool Use', 'Tool Design Principles', '多模态与工具链',
			'AI Agent 开发基础', 'System Prompt 设计实战', 'System Prompt 案例库', 'Agent 框架速览', 'Agent 框架横向对比', 'Multi-Agent Patterns', 'Agent 深入',
			'Evaluation & Quality Monitoring', 'LLM-as-a-Judge 评测', 'Synthetic Data & Augmentation', 'LLM 工程化与网关', '工作流与自动化',
			'安全与威胁建模', 'Data Governance & Privacy', '部署与成本优化', '生产环境部署', 'Debugging & Incident Playbook',
			'AI Coding 工作流', 'Vibe Coding 实战', 'AI Rules 配置实战', 'MCP 开发最佳实践', 'MCP 发布指南',
			'Skills 范式: Agent 到技能库', 'Claude Code 技术原理', 'Claude Code Examples', 'AI 产品与体验',
			'AI 规则持续改进', 'PR Review 方法论', '代码分析与重构',
		],
		tools: ['LangChain', 'OpenAI', 'ChromaDB', 'Pinecone', 'AWS Bedrock'],
		color: colors.blue,
	},
	{
		id: 'office', icon: '💼', badge: '23章', badgeBg: colors.orange,
		title: 'AI 办公提效', subtitle: '用 AI 干掉重复劳动',
		duration: '2 周',
		chapters: [
			'AI 写作入门', 'AI 邮件助手', 'AI 会议纪要', 'AI 文档生成', 'AI PPT 制作',
			'AI 数据处理', 'AI Excel 公式', 'AI 报告撰写', 'AI 翻译工具', 'AI 日程管理',
			'AI 知识库搭建', 'AI 社交媒体', 'AI 客服话术', 'AI 合同审查', 'AI 竞品分析',
			'Notion AI 实战', 'ChatGPT 办公技巧', 'Claude 办公场景', 'AI 自动化工作流',
			'Zapier + AI', 'Make + AI', 'AI 团队协作', 'AI 办公全流程',
		],
		tools: ['ChatGPT', 'Claude', 'Notion AI', 'Gamma'],
		color: colors.orange,
	},
	{
		id: 'builder', icon: '🛠️', badge: 'NEW', badgeBg: colors.green,
		title: 'AI Builder', subtitle: '快速构建 AI 产品原型',
		duration: '3-4 周',
		chapters: [
			'AI 产品原型方法论', 'No-Code AI 工具选型', 'Zapier AI 自动化', 'Make 场景搭建',
			'AI Chatbot 搭建', 'AI 知识库产品', 'AI 内容生成器', 'AI 数据看板',
			'AI 表单处理', 'AI 图片生成产品', 'AI 语音转文字', 'AI 视频生成',
			'产品发布与测试', '用户反馈与迭代', 'AI SaaS 商业模式',
			'实战: 内部工具', '实战: 客户服务', '实战: 内容平台',
		],
		tools: ['Zapier', 'Make', 'Notion AI', 'Canva AI'],
		color: colors.green,
	},
	{
		id: 'openclaw', icon: '🦞', badge: 'HOT', badgeBg: colors.red,
		title: 'OpenClaw', subtitle: '本地 AI 智能体自动化',
		duration: '3 周',
		chapters: [
			'OpenClaw 入门', '本地 LLM 部署', 'Agent 基础概念', '工具注册与调用', 'MCP 协议详解',
			'MCP Server 开发', 'MCP Client 集成', '工具链编排', '自动化流程设计',
			'文件系统 Agent', '浏览器自动化', 'API 集成 Agent', '数据库 Agent',
			'Multi-Agent 协作', '生产环境部署', '实战: 办公自动化',
		],
		tools: ['OpenClaw', 'MCP', 'Ollama', 'Local LLM'],
		color: '#ff6b35',
	},
];

export default function S07_AILearning() {
	const [activeId, setActiveId] = useState('prompt');
	const active = directions.find(d => d.id === activeId)!;
	const scrollRef = useRef<HTMLDivElement>(null);

	// Auto-scroll chapter list slowly
	useEffect(() => {
		const el = scrollRef.current;
		if (!el) return;
		el.scrollTop = 0;
		const interval = setInterval(() => {
			if (el.scrollTop < el.scrollHeight - el.clientHeight) {
				el.scrollTop += 0.5;
			}
		}, 30);
		return () => clearInterval(interval);
	}, [activeId]);

	return (
		<Slide bg={colors.darkBg} style={{ position: 'relative' }}>
			<AnimatedBg variant="gradient" opacity={0.08} color={active.color} />

			<div style={{ position: 'relative', zIndex: 1, width: '94%', maxWidth: 1440, display: 'flex', gap: 24, padding: '16px 32px', height: '92%' }}>
				{/* Left — direction tabs */}
				<div style={{ width: 260, display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
					<motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
						<span style={{ display: 'inline-block', padding: '4px 12px', background: colors.red, border: `2px solid ${colors.white}`, fontFamily: fonts.mono, color: '#fff', fontSize: 10, fontWeight: 700, marginBottom: 8 }}>
							全球华人学习 AI 第一站
						</span>
						<h2 style={{ fontFamily: fonts.heading, fontSize: 32, fontWeight: 900, color: colors.white, lineHeight: 1.1 }}>
							AI 学习中心
						</h2>
						<p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 10, marginTop: 4, fontFamily: fonts.mono }}>
							15 方向 · 385+ 章节 · 点击切换
						</p>
					</motion.div>

					<div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 3, flex: 1 }}>
						{directions.map(d => {
							const isActive = d.id === activeId;
							return (
								<motion.button key={d.id} onClick={() => setActiveId(d.id)} whileHover={{ x: 3 }}
									style={{
										display: 'flex', alignItems: 'center', gap: 8, padding: '7px 10px',
										border: `2px solid ${isActive ? d.color : 'rgba(255,255,255,0.06)'}`,
										background: isActive ? `${d.color}18` : 'transparent',
										cursor: 'pointer', textAlign: 'left', transition: 'all 0.15s', position: 'relative',
									}}>
									{isActive && <motion.div layoutId="active-tab-indicator" style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: d.color }} />}
									<span style={{ fontSize: 16 }}>{d.icon}</span>
									<div style={{ flex: 1 }}>
										<div style={{ fontFamily: fonts.heading, fontSize: 12, fontWeight: 800, color: colors.white }}>{d.title}</div>
										<div style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)' }}>{d.chapters.length} 章 · {d.duration}</div>
									</div>
									<span style={{ fontSize: 8, padding: '1px 5px', background: d.badgeBg, fontWeight: 800, color: [colors.yellow, colors.green].includes(d.badgeBg) ? '#000' : '#fff' }}>{d.badge}</span>
								</motion.button>
							);
						})}
					</div>
				</div>

				{/* Right — ALL chapters displayed */}
				<div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
					<AnimatePresence mode="wait">
						<motion.div key={activeId} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
							style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>

							<div style={{ background: '#fff', border: `4px solid ${colors.black}`, boxShadow: `8px 8px 0 ${active.color}`, flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
								{/* Header */}
								<div style={{ padding: '14px 20px', borderBottom: `3px solid ${colors.black}`, display: 'flex', alignItems: 'center', gap: 12, background: `${active.color}10`, flexShrink: 0 }}>
									<span style={{ fontSize: 32 }}>{active.icon}</span>
									<div style={{ flex: 1 }}>
										<h3 style={{ fontFamily: fonts.heading, fontSize: 24, fontWeight: 900 }}>{active.title}</h3>
										<p style={{ fontSize: 12, color: '#666' }}>{active.subtitle}</p>
									</div>
									<div style={{ textAlign: 'right' }}>
										<div style={{ fontFamily: fonts.heading, fontSize: 36, fontWeight: 900, color: active.color, lineHeight: 1 }}>{active.chapters.length}</div>
										<div style={{ fontSize: 10, fontWeight: 700, color: '#888' }}>章节</div>
									</div>
									<div style={{ display: 'flex', gap: 4, flexDirection: 'column' }}>
										<span style={{ padding: '2px 8px', fontSize: 10, fontWeight: 700, background: active.color, color: [colors.yellow, colors.green].includes(active.color) ? '#000' : '#fff', border: `1.5px solid ${colors.black}` }}>{active.duration}</span>
										<span style={{ padding: '2px 8px', fontSize: 10, fontWeight: 700, background: '#f1f5f9', border: `1.5px solid ${colors.black}` }}>免费</span>
									</div>
								</div>

								{/* ALL chapters — auto-scrolling waterfall */}
								<div ref={scrollRef} style={{ flex: 1, overflow: 'hidden', padding: '12px 16px' }}
									onMouseEnter={() => { if (scrollRef.current) scrollRef.current.style.overflow = 'auto'; }}
									onMouseLeave={() => { if (scrollRef.current) scrollRef.current.style.overflow = 'hidden'; }}
								>
									<div style={{
										display: 'grid',
										gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
										gap: 4,
									}}>
										{active.chapters.map((ch, i) => (
											<motion.div
												key={ch}
												initial={{ opacity: 0, scale: 0.9 }}
												animate={{ opacity: 1, scale: 1 }}
												transition={{ delay: Math.min(i * 0.008, 0.5) }}
												style={{
													display: 'flex', alignItems: 'center', gap: 8,
													padding: '5px 10px', fontSize: 12,
													background: i < 3 ? `${active.color}12` : i % 2 === 0 ? '#f8f9fa' : '#fff',
													borderLeft: `3px solid ${i < 3 ? active.color : i < 10 ? `${active.color}50` : '#e5e7eb'}`,
												}}
											>
												<span style={{
													minWidth: 20, height: 20, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
													background: i < 3 ? active.color : '#f1f5f9',
													color: i < 3 ? '#fff' : '#999', fontSize: 9, fontWeight: 700,
													fontFamily: fonts.mono, flexShrink: 0,
												}}>{i + 1}</span>
												<span style={{ fontWeight: i < 3 ? 700 : 400, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{ch}</span>
											</motion.div>
										))}
									</div>
								</div>

								{/* Footer — tools + CTA */}
								<div style={{ padding: '10px 16px', borderTop: `2px solid #eee`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0, background: '#fafafa' }}>
									<div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
										{active.tools.map(tool => (
											<span key={tool} style={{ padding: '2px 7px', border: `1.5px solid ${colors.black}`, fontSize: 10, fontWeight: 700, boxShadow: `1.5px 1.5px 0 ${colors.black}` }}>{tool}</span>
										))}
									</div>
									<span style={{
										padding: '6px 16px', background: active.color, fontFamily: fonts.heading,
										fontWeight: 800, fontSize: 12, border: `2px solid ${colors.black}`,
										boxShadow: `3px 3px 0 ${colors.black}`,
										color: [colors.yellow, colors.green].includes(active.color) ? '#000' : '#fff',
									}}>免费开始 →</span>
								</div>
							</div>
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</Slide>
	);
}
