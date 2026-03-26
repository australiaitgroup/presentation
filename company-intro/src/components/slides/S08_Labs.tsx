import { useState, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Slide } from '../ui';
import { colors, fonts } from '../../styles/theme';
import AnimatedBg from '../AnimatedBg';

interface Lab {
	id: string;
	icon: string;
	title: string;
	subtitle: string;
	color: string;
}

const labs: Lab[] = [
	{ id: 'prompt', icon: '💬', title: 'Prompt 实验室', subtitle: 'AI 评分 · 多轮对话', color: colors.purple },
	{ id: 'frontend', icon: '🎨', title: '前端实验室', subtitle: '实时预览 · 自动验证', color: colors.blue },
	{ id: 'python', icon: '🐍', title: 'Python 实验室', subtitle: '在线执行 · 测试驱动', color: colors.green },
	{ id: 'aws', icon: '☁️', title: 'AWS 实验室', subtitle: 'CLI 实操 · 云环境', color: colors.orange },
	{ id: 'azure', icon: '🔷', title: 'Azure 实验室', subtitle: 'CLI 交互 · 资源管理', color: colors.blue },
	{ id: 'llm', icon: '🧠', title: 'LLM 实验室', subtitle: 'RAG · Agent 构建', color: colors.red },
	{ id: 'git', icon: '🌿', title: 'Git 实验室', subtitle: '版本控制 · 协作', color: colors.yellow },
	{ id: 'vibe', icon: '💻', title: 'Vibe Coding', subtitle: 'AI 编程 · Cursor', color: colors.red },
];

/* ========== Shared micro-UI pieces ========== */

function StepDots({ steps, current }: { steps: { icon: string; label: string }[]; current: number }) {
	return (
		<div style={{ padding: '8px 14px', borderBottom: '1px solid #eee', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0 }}>
			{steps.map((s, i) => {
				const done = i < current;
				const active = i === current;
				const locked = i > current;
				return (
					<div key={i} style={{ display: 'flex', alignItems: 'center' }}>
						<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
							<div style={{
								width: 24, height: 24, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
								fontSize: 11,
								background: done ? '#22c55e' : active ? '#FFDE59' : '#f1f5f9',
								border: active ? '2px solid #000' : done ? '2px solid #22c55e' : '1.5px solid #ddd',
								color: done ? '#fff' : locked ? '#bbb' : '#333',
								fontWeight: 700,
							}}>
								{done ? '✓' : s.icon}
							</div>
							<span style={{ fontSize: 8.5, color: active ? '#000' : locked ? '#ccc' : '#666', fontWeight: active ? 700 : 400 }}>{s.label}</span>
						</div>
						{i < steps.length - 1 && (
							<div style={{ width: 24, height: 1.5, background: done ? '#22c55e' : '#e5e7eb', marginBottom: 12, marginLeft: 3, marginRight: 3 }} />
						)}
					</div>
				);
			})}
		</div>
	);
}

function LabSidebar({ labId, accentColor }: { labId: string; accentColor: string }) {
	const sidebarData: Record<string, { header: string; categories: { name: string; labs: { title: string; level: string; status: 'done' | 'active' | 'locked' }[] }[] }> = {
		prompt: {
			header: 'Prompt Lab',
			categories: [
				{ name: 'WARMUP', labs: [
					{ title: '基础对话', level: '入门', status: 'done' },
					{ title: '角色设定', level: '入门', status: 'done' },
					{ title: '格式约束', level: '中级', status: 'active' },
				]},
				{ name: 'ADVANCED', labs: [
					{ title: 'Few-shot', level: '中级', status: 'locked' },
					{ title: 'Chain of Thought', level: '高级', status: 'locked' },
				]},
			],
		},
		frontend: {
			header: 'Frontend Lab',
			categories: [
				{ name: 'CSS BASICS', labs: [
					{ title: 'Box Model', level: '入门', status: 'done' },
					{ title: 'Flexbox 布局', level: '中级', status: 'active' },
					{ title: 'Grid 布局', level: '中级', status: 'locked' },
				]},
				{ name: 'ANIMATION', labs: [
					{ title: 'Transition', level: '中级', status: 'locked' },
					{ title: 'Transform', level: '高级', status: 'locked' },
				]},
			],
		},
		python: {
			header: 'Python Lab',
			categories: [
				{ name: '基础语法', labs: [
					{ title: '变量与类型', level: '入门', status: 'done' },
					{ title: '函数基础', level: '入门', status: 'active' },
					{ title: '列表操作', level: '中级', status: 'locked' },
				]},
				{ name: '进阶', labs: [
					{ title: '类与对象', level: '中级', status: 'locked' },
				]},
			],
		},
		aws: {
			header: 'AWS Lab',
			categories: [
				{ name: 'STAGE 1', labs: [
					{ title: 'IAM 基础', level: '入门', status: 'done' },
					{ title: 'S3 存储', level: '入门', status: 'active' },
					{ title: 'EC2 实例', level: '中级', status: 'locked' },
				]},
				{ name: 'STAGE 2', labs: [
					{ title: 'VPC 网络', level: '中级', status: 'locked' },
				]},
			],
		},
		azure: {
			header: 'Azure Lab',
			categories: [
				{ name: 'FOUNDATIONS', labs: [
					{ title: '账号设置', level: '入门', status: 'done' },
					{ title: 'Resource Group', level: '入门', status: 'active' },
					{ title: 'App Service', level: '中级', status: 'locked' },
				]},
			],
		},
		llm: {
			header: 'LLM Lab',
			categories: [
				{ name: 'BASICS', labs: [
					{ title: 'LLM 原理', level: '入门', status: 'done' },
					{ title: 'RAG 架构', level: '中级', status: 'active' },
					{ title: 'Embedding', level: '中级', status: 'locked' },
				]},
				{ name: 'AGENT', labs: [
					{ title: 'Tool Calling', level: '高级', status: 'locked' },
				]},
			],
		},
		git: {
			header: 'Git Lab',
			categories: [
				{ name: '基础', labs: [
					{ title: 'Init & Commit', level: '入门', status: 'done' },
					{ title: '分支与合并', level: '中级', status: 'active' },
					{ title: '冲突解决', level: '中级', status: 'locked' },
				]},
			],
		},
		vibe: {
			header: 'Vibe Coding',
			categories: [
				{ name: 'SETUP', labs: [
					{ title: 'Cursor 安装', level: '入门', status: 'done' },
					{ title: 'Rules 配置', level: '入门', status: 'active' },
					{ title: 'Context 技巧', level: '中级', status: 'locked' },
				]},
			],
		},
	};

	const data = sidebarData[labId] || sidebarData.prompt;
	const totalLabs = data.categories.reduce((s, c) => s + c.labs.length, 0);
	const doneLabs = data.categories.reduce((s, c) => s + c.labs.filter(l => l.status === 'done').length, 0);
	const pct = Math.round((doneLabs / totalLabs) * 100);

	return (
		<div style={{ width: 150, background: '#fff', borderRight: '1.5px solid #eee', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
			<div style={{ padding: '7px 10px', background: accentColor, color: accentColor === colors.yellow ? '#000' : '#fff', fontSize: 11, fontWeight: 800, display: 'flex', alignItems: 'center', gap: 4 }}>
				<span style={{ fontSize: 9 }}>◀</span> {data.header}
			</div>
			<div style={{ padding: '7px 10px', borderBottom: '1px solid #f0f0f0' }}>
				<div style={{ fontSize: 9, color: '#888', marginBottom: 3 }}>练习进度 {doneLabs}/{totalLabs}</div>
				<div style={{ height: 5, background: '#f0f0f0', borderRadius: 2, overflow: 'hidden' }}>
					<div style={{ height: '100%', width: `${pct}%`, background: '#22c55e', borderRadius: 2 }} />
				</div>
			</div>
			<div style={{ flex: 1, overflow: 'auto', padding: '4px 0' }}>
				{data.categories.map((cat, ci) => (
					<div key={ci}>
						<div style={{ padding: '5px 10px', fontSize: 8.5, fontWeight: 700, color: '#999', background: '#fafafa', letterSpacing: 0.5 }}>
							{cat.name} <span style={{ float: 'right', fontWeight: 400 }}>{cat.labs.filter(l => l.status === 'done').length}/{cat.labs.length}</span>
						</div>
						{cat.labs.map((lab, li) => (
							<div key={li} style={{
								padding: '5px 10px', display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer',
								background: lab.status === 'active' ? '#FFFDE7' : 'transparent',
								borderLeft: lab.status === 'active' ? '3px solid #000' : '3px solid transparent',
								opacity: lab.status === 'locked' ? 0.5 : 1,
							}}>
								<span style={{
									width: 18, height: 18, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
									fontSize: 8.5, fontWeight: 700, flexShrink: 0,
									background: lab.status === 'done' ? '#22c55e' : lab.status === 'active' ? '#FFDE59' : '#f0f0f0',
									color: lab.status === 'done' ? '#fff' : lab.status === 'active' ? '#000' : '#bbb',
								}}>
									{lab.status === 'done' ? '✓' : lab.status === 'active' ? '➜' : '🔒'}
								</span>
								<div style={{ flex: 1, minWidth: 0 }}>
									<div style={{ fontSize: 10, fontWeight: lab.status === 'active' ? 700 : 400, color: '#333', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{lab.title}</div>
								</div>
								<span style={{ fontSize: 8, padding: '1px 4px', background: lab.level === '入门' ? '#dcfce7' : lab.level === '中级' ? '#fef3c7' : '#fee2e2', borderRadius: 2, color: '#666', flexShrink: 0 }}>{lab.level}</span>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
}

function AICoachPanel({ messages, color: accentColor }: { messages: { role: 'hint' | 'feedback' | 'score'; text: string }[]; color: string }) {
	return (
		<div style={{ width: 160, background: '#fafbff', borderLeft: '1.5px solid #eee', display: 'flex', flexDirection: 'column' }}>
			<div style={{ padding: '7px 10px', background: accentColor, color: accentColor === colors.yellow ? '#000' : '#fff', fontWeight: 800, fontSize: 11, display: 'flex', alignItems: 'center', gap: 4 }}>
				🤖 AI Tutor
			</div>
			<div style={{ flex: 1, padding: 6, display: 'flex', flexDirection: 'column', gap: 5, overflow: 'auto' }}>
				{messages.map((m, i) => (
					<div key={i} style={{
						padding: 6, borderRadius: 5,
						background: m.role === 'score' ? '#f0fdf4' : m.role === 'feedback' ? '#fff7ed' : '#f0f4ff',
						border: `1px solid ${m.role === 'score' ? '#a5d6a7' : m.role === 'feedback' ? '#fed7aa' : '#c7d2fe'}`,
					}}>
						<div style={{ fontSize: 9, fontWeight: 700, color: m.role === 'score' ? '#16a34a' : m.role === 'feedback' ? '#ea580c' : '#4338ca', marginBottom: 2 }}>
							{m.role === 'score' ? '📊 评分' : m.role === 'feedback' ? '💡 建议' : '🔑 提示'}
						</div>
						<div style={{ fontSize: 9.5, color: '#555', lineHeight: 1.5 }}>{m.text}</div>
					</div>
				))}
			</div>
			<div style={{ padding: '4px 6px', borderTop: '1px solid #eee', display: 'flex', gap: 3 }}>
				<div style={{ flex: 1, padding: '3px 6px', background: '#fff', border: '1px solid #ddd', borderRadius: 3, fontSize: 9, color: '#aaa' }}>问 AI Tutor...</div>
				<div style={{ padding: '3px 6px', background: accentColor, color: accentColor === colors.yellow ? '#000' : '#fff', borderRadius: 3, fontSize: 9, fontWeight: 700 }}>发送</div>
			</div>
		</div>
	);
}

function TipCard({ title, content, expanded = true, color: c = '#e0e7ff' }: { title: string; content: ReactNode; expanded?: boolean; color?: string }) {
	return (
		<div style={{ border: `1.5px solid ${c}`, borderRadius: 5, overflow: 'hidden' }}>
			<div style={{ padding: '4px 9px', background: c, fontSize: 10, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 4 }}>
				📌 {title} {!expanded && <span style={{ marginLeft: 'auto', fontSize: 9, color: '#888' }}>▸ 展开</span>}
			</div>
			{expanded && <div style={{ padding: '5px 9px', fontSize: 10, color: '#444', lineHeight: 1.5, background: '#fff' }}>{content}</div>}
		</div>
	);
}

/* ========== Lab Content Mocks ========== */

function MockPromptLab() {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
			<StepDots steps={[
				{ icon: '📖', label: '概念' },
				{ icon: '❓', label: 'MCQ' },
				{ icon: '✍️', label: '练习' },
				{ icon: '💭', label: '反思' },
			]} current={0} />
			<div style={{ flex: 1, padding: '10px 14px', overflow: 'auto', display: 'flex', flexDirection: 'column', gap: 8 }}>
				<div style={{ padding: 9, background: '#f5f3ff', border: '1.5px solid #ddd6fe', borderRadius: 6 }}>
					<div style={{ fontSize: 13, fontWeight: 800, marginBottom: 5, color: '#7c3aed' }}>📖 实验 #17: 让 AI 输出合法 JSON</div>
					<div style={{ fontSize: 10.5, color: '#555', marginBottom: 5 }}><b>学习目标：</b></div>
					{['理解 JSON 格式约束 Prompt', '掌握 Few-shot 提高稳定性', '学会评估 AI 输出一致性'].map((o, i) => (
						<div key={i} style={{ fontSize: 10, color: '#555', display: 'flex', alignItems: 'center', gap: 5, marginBottom: 3 }}>
							<span style={{ width: 16, height: 16, borderRadius: '50%', background: '#ede9fe', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8.5, fontWeight: 700, color: '#7c3aed', flexShrink: 0 }}>{i + 1}</span>
							{o}
						</div>
					))}
				</div>

				<div style={{ fontSize: 11, color: '#333', lineHeight: 1.7 }}>
					<b>格式约束 Prompt</b> — 需要 AI 按特定格式输出时（JSON、Markdown），在 Prompt 中明确约束输出结构。
				</div>

				<div style={{ background: '#1e1e2e', borderRadius: 5, overflow: 'hidden' }}>
					<div style={{ padding: '4px 9px', background: '#2d2d3f', fontSize: 9, color: '#888', fontFamily: fonts.mono }}>示例 Prompt</div>
					<div style={{ padding: 9, fontFamily: fonts.mono, fontSize: 10.5, color: '#a5b4fc', lineHeight: 1.6 }}>
						<span style={{ color: '#6ee7b7' }}>角色：</span>你是 JSON 格式化助手<br />
						<span style={{ color: '#6ee7b7' }}>输出：</span>{'{ name, price, tags }'}<br />
						<span style={{ color: '#fbbf24' }}>约束：</span>只输出 JSON，不要多余文字
					</div>
				</div>

				<TipCard title="Prompt 三要素" color="#ede9fe" content={
					<><b>1. 角色设定</b> — 告诉 AI 它是谁　<b>2. 格式约束</b> — 指定输出格式　<b>3. Few-shot</b> — 给示例</>
				} />
				<TipCard title="常见坑：输出不稳定" color="#fef3c7" content={<>增加 temperature=0 + 明确格式约束</>} />

				<motion.button whileHover={{ scale: 1.03 }} style={{ padding: '6px 18px', background: colors.purple, color: '#fff', border: 'none', fontSize: 11, fontWeight: 800, cursor: 'pointer', borderRadius: 5, alignSelf: 'flex-start' }}>
					我学会了，开始练习 →
				</motion.button>
			</div>
		</div>
	);
}

function MockFrontendLab() {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
			<StepDots steps={[
				{ icon: '📖', label: '概念' },
				{ icon: '💻', label: '编码' },
				{ icon: '❓', label: 'MCQ' },
				{ icon: '📱', label: '响应式' },
			]} current={0} />
			<div style={{ flex: 1, padding: '10px 14px', overflow: 'auto', display: 'flex', flexDirection: 'column', gap: 8 }}>
				<div style={{ padding: 9, background: '#eff6ff', border: '1.5px solid #bfdbfe', borderRadius: 6 }}>
					<div style={{ fontSize: 13, fontWeight: 800, marginBottom: 4, color: '#2563eb' }}>🎨 Lab: Flexbox 卡片布局</div>
					<div style={{ fontSize: 10, color: '#555', lineHeight: 1.5 }}>
						学会用 Flexbox 创建响应式卡片布局。<br />
						<b>关键属性：</b> display: flex · gap · justify-content · align-items
					</div>
				</div>

				<div style={{ fontSize: 11, color: '#333', lineHeight: 1.7 }}>
					<b>什么是 Flexbox？</b> — 一行 <code style={{ background: '#f1f5f9', padding: '1px 4px', fontSize: 10, fontFamily: fonts.mono }}>display: flex</code> 让子元素自动排成一行。
				</div>

				<div style={{ padding: 8, background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 5 }}>
					<div style={{ fontSize: 9.5, fontWeight: 700, marginBottom: 5, color: '#64748b' }}>布局示意</div>
					<div style={{ display: 'flex', gap: 6, justifyContent: 'center' }}>
						{['Card 1', 'Card 2', 'Card 3'].map((c, i) => (
							<div key={i} style={{ width: 56, height: 36, border: '2px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700, background: ['#dbeafe', '#fce7f3', '#dcfce7'][i], boxShadow: '2px 2px 0 #000' }}>{c}</div>
						))}
					</div>
					<div style={{ textAlign: 'center', fontSize: 8.5, color: '#94a3b8', marginTop: 4 }}>← justify-content: center →　gap: 20px</div>
				</div>

				<TipCard title="Flexbox 速查" color="#dbeafe" content={
					<span style={{ fontFamily: fonts.mono, fontSize: 9.5 }}>
						<b>容器：</b> flex · gap · justify-content · align-items<br />
						<b>项目：</b> flex: 1 · flex-grow · flex-shrink · order
					</span>
				} />
				<TipCard title="何时用 Grid 而非 Flexbox" color="#f0fdf4" content={<>二维布局用 Grid，一维用 Flexbox</>} />

				<motion.button whileHover={{ scale: 1.03 }} style={{ padding: '6px 18px', background: colors.blue, color: '#fff', border: 'none', fontSize: 11, fontWeight: 800, cursor: 'pointer', borderRadius: 5, alignSelf: 'flex-start' }}>
					我学会了，开始编码 →
				</motion.button>
			</div>
		</div>
	);
}

function MockConceptLab({ lab }: { lab: Lab }) {
	const data: Record<string, { title: string; objectives: string[]; text: ReactNode; codeTitle: string; code: ReactNode; tips: { title: string; content: ReactNode; color: string; expanded: boolean }[]; stepIcons: { icon: string; label: string }[] }> = {
		python: {
			title: '函数基础 — 参数与返回值',
			objectives: ['用 def 定义函数', '传参和返回值', '箭头函数简写'],
			text: <>函数是"可反复调用的小工具"。给它输入（参数），return 给你输出。Python 用 <code style={{ background: '#f1f5f9', padding: '1px 4px', fontSize: 10, fontFamily: fonts.mono }}>def</code> 定义函数。</>,
			codeTitle: '函数示例',
			code: <>
				<span style={{ color: '#c586c0' }}>def</span> <span style={{ color: '#dcdcaa' }}>greet</span>(name):<br />
				{'    '}<span style={{ color: '#c586c0' }}>return</span> <span style={{ color: '#ce9178' }}>f"Hello, </span><span style={{ color: '#569cd6' }}>{'{'}</span>name<span style={{ color: '#569cd6' }}>{'}'}</span><span style={{ color: '#ce9178' }}>"</span><br /><br />
				<span style={{ color: '#dcdcaa' }}>print</span>(<span style={{ color: '#dcdcaa' }}>greet</span>(<span style={{ color: '#ce9178' }}>"World"</span>))  <span style={{ color: '#6a9955' }}># Hello, World</span>
			</>,
			tips: [
				{ title: '函数声明 vs 表达式', color: '#dcfce7', expanded: true, content: <>声明会 hoisting（定义前可调用），表达式不会。</> },
				{ title: '纯函数', color: '#fef3c7', expanded: false, content: <>相同输入 → 相同输出，无副作用</> },
			],
			stepIcons: [{ icon: '📖', label: '概念' }, { icon: '💻', label: '编码' }, { icon: '❓', label: 'MCQ' }, { icon: '🎯', label: '实战' }],
		},
		llm: {
			title: 'RAG 架构 — 检索增强生成',
			objectives: ['RAG 三阶段架构', 'Embedding + Vector DB', 'Chunk 策略'],
			text: <>RAG = Retrieval-Augmented Generation。先从知识库<b>检索</b>相关文档，再作为上下文喂给 LLM <b>生成</b>回答。</>,
			codeTitle: 'RAG 管道示例',
			code: <>
				<span style={{ color: '#c586c0' }}>from</span> langchain <span style={{ color: '#c586c0' }}>import</span> FAISS<br /><br />
				<span style={{ color: '#6a9955' }}># 文档切片 → Embedding → 向量库</span><br />
				vectorstore = <span style={{ color: '#dcdcaa' }}>FAISS</span>.from_documents(docs)<br />
				<span style={{ color: '#6a9955' }}># 检索 → LLM → 回答</span><br />
				chain = vectorstore.as_retriever() | llm
			</>,
			tips: [
				{ title: 'RAG 三阶段', color: '#fee2e2', expanded: true, content: <><b>索引</b>（切片+向量化）→ <b>检索</b>（语义搜索）→ <b>生成</b>（LLM 回答）</> },
				{ title: 'Chunk 大小', color: '#fef3c7', expanded: false, content: <>500-1000 tokens 较合适</> },
			],
			stepIcons: [{ icon: '📖', label: '架构' }, { icon: '🔍', label: '示例' }, { icon: '❓', label: 'MCQ' }, { icon: '🛠', label: '实战' }],
		},
		vibe: {
			title: 'Cursor Rules — AI 编程规范',
			objectives: ['.cursorrules 的作用', '项目级 AI 规范', 'Context Engineering'],
			text: <><code style={{ background: '#f1f5f9', padding: '1px 4px', fontSize: 10, fontFamily: fonts.mono }}>.cursorrules</code> 让 AI 理解项目规范 — TypeScript strict、命名约定、架构模式 — 生成更符合风格的代码。</>,
			codeTitle: '.cursorrules 示例',
			code: <>
				{'{'}<br />
				{'  '}<span style={{ color: '#9cdcfe' }}>"rules"</span>: [<br />
				{'    '}<span style={{ color: '#ce9178' }}>"Use TypeScript strict mode"</span>,<br />
				{'    '}<span style={{ color: '#ce9178' }}>"Prefer functional components"</span>,<br />
				{'    '}<span style={{ color: '#ce9178' }}>"All APIs go through /services/"</span><br />
				{'  '}]<br />
				{'}'}
			</>,
			tips: [
				{ title: 'Context Engineering', color: '#fee2e2', expanded: true, content: <>给 AI 足够上下文（规则+示例+结构），生成质量大幅提升。</> },
				{ title: '好 Rules 的特征', color: '#ede9fe', expanded: false, content: <>具体 + 可执行</> },
			],
			stepIcons: [{ icon: '📖', label: '概念' }, { icon: '⚙️', label: '配置' }, { icon: '❓', label: 'MCQ' }, { icon: '🚀', label: 'AI 实战' }],
		},
	};

	const d = data[lab.id] || data.python;
	return (
		<div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
			<StepDots steps={d.stepIcons} current={0} />
			<div style={{ flex: 1, padding: '10px 14px', overflow: 'auto', display: 'flex', flexDirection: 'column', gap: 8 }}>
				<div style={{ padding: 9, background: lab.id === 'python' ? '#f0fdf4' : '#fef2f2', border: `1.5px solid ${lab.id === 'python' ? '#bbf7d0' : '#fecaca'}`, borderRadius: 6 }}>
					<div style={{ fontSize: 13, fontWeight: 800, marginBottom: 4 }}>{lab.icon} {d.title}</div>
					{d.objectives.map((o, i) => (
						<div key={i} style={{ fontSize: 10, color: '#555', display: 'flex', alignItems: 'center', gap: 4, marginBottom: 2 }}>
							<span style={{ width: 15, height: 15, borderRadius: '50%', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8.5, fontWeight: 700, color: '#64748b', flexShrink: 0 }}>{i + 1}</span>
							{o}
						</div>
					))}
				</div>

				<div style={{ fontSize: 11, color: '#333', lineHeight: 1.7 }}>{d.text}</div>

				<div style={{ background: '#1e1e1e', borderRadius: 5, overflow: 'hidden' }}>
					<div style={{ padding: '3px 9px', background: '#252526', fontSize: 9, color: '#888', fontFamily: fonts.mono }}>{d.codeTitle}</div>
					<div style={{ padding: 9, fontFamily: fonts.mono, fontSize: 10, color: '#d4d4d4', lineHeight: 1.7 }}>{d.code}</div>
				</div>

				{d.tips.map((tip, i) => (
					<TipCard key={i} title={tip.title} color={tip.color} content={tip.content} expanded={tip.expanded} />
				))}

				<motion.button whileHover={{ scale: 1.03 }} style={{ padding: '6px 18px', background: lab.color, color: lab.color === colors.yellow ? '#000' : '#fff', border: 'none', fontSize: 11, fontWeight: 800, cursor: 'pointer', borderRadius: 5, alignSelf: 'flex-start' }}>
					我学会了，开始练习 →
				</motion.button>
			</div>
		</div>
	);
}

function MockCLILab({ lab }: { lab: Lab }) {
	const d: Record<string, { title: string; scenario: string; concept: ReactNode; diagram: ReactNode; tip: { title: string; content: ReactNode; color: string } }> = {
		aws: {
			title: 'S3 对象存储',
			scenario: '你的团队需要存放网站静态资源（图片、CSS、JS），并能通过 URL 公开访问。',
			concept: <>S3 是 AWS 对象存储。数据存在 <b>Bucket</b>（桶）里，每个文件叫 <b>Object</b>，通过 Key（路径）访问。</>,
			diagram: (
				<div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center' }}>
					{[{ label: '上传文件', sub: 'aws s3 cp', bg: '#fff7ed' }, { label: 'S3 Bucket', sub: 'my-bucket/', bg: '#fef3c7' }, { label: '公开访问', sub: 'https://...', bg: '#dcfce7' }].map((n, i) => (
						<div key={i} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
							<div style={{ padding: '4px 8px', background: n.bg, border: '1px solid #ddd', borderRadius: 4, fontSize: 9.5, fontWeight: 700, textAlign: 'center' }}>
								{n.label}<br /><span style={{ fontSize: 8, color: '#888', fontWeight: 400, fontFamily: fonts.mono }}>{n.sub}</span>
							</div>
							{i < 2 && <span style={{ fontSize: 10 }}>→</span>}
						</div>
					))}
				</div>
			),
			tip: { title: 'S3 定价', color: '#fff7ed', content: <>存储 $0.023/GB/月 · GET $0.0004/千次 · 前 100GB 传输免费</> },
		},
		azure: {
			title: 'Resource Group',
			scenario: '在 Azure 上部署 Web 应用，第一步是创建 Resource Group 来组织所有资源。',
			concept: <>Resource Group 是 Azure 资源的<b>逻辑分组</b>。一个 RG 里的资源一起管理、删除、设权限。</>,
			diagram: (
				<div style={{ padding: 6, border: '1.5px solid #60a5fa', borderRadius: 5, background: '#eff6ff' }}>
					<div style={{ fontSize: 9.5, fontWeight: 700, marginBottom: 4, color: '#2563eb' }}>Resource Group: myRG</div>
					<div style={{ display: 'flex', gap: 4 }}>
						{['App Service', 'SQL DB', 'Storage'].map(r => (
							<div key={r} style={{ flex: 1, padding: 3, background: '#fff', border: '1px solid #93c5fd', borderRadius: 3, fontSize: 9, textAlign: 'center', fontWeight: 600 }}>{r}</div>
						))}
					</div>
				</div>
			),
			tip: { title: 'RG 命名', color: '#dbeafe', content: <>按项目/环境分组 — myapp-dev, myapp-prod，方便一键删除。</> },
		},
		git: {
			title: '分支与合并',
			scenario: '你和队友同时开发不同功能，用分支隔离代码变更，互不影响。',
			concept: <><b>main</b> 是主分支，创建 <b>feature 分支</b>开发功能，完成后合并回 main。每个分支是独立代码快照。</>,
			diagram: (
				<div style={{ padding: 6, background: '#fefce8', borderRadius: 5, border: '1px solid #fde68a' }}>
					<div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
						{['A', 'B', 'C'].map((c, i) => (
							<div key={c} style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
								<div style={{ width: 18, height: 18, borderRadius: '50%', background: '#22c55e', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8.5, fontWeight: 700 }}>{c}</div>
								{i < 2 && <span style={{ fontSize: 9 }}>—</span>}
							</div>
						))}
						<span style={{ fontSize: 9, fontWeight: 700, color: '#16a34a' }}>main</span>
					</div>
					<div style={{ marginLeft: 32, marginTop: 2, display: 'flex', alignItems: 'center', gap: 3 }}>
						<span style={{ fontSize: 9 }}>↘</span>
						{['D', 'E'].map((c, i) => (
							<div key={c} style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
								<div style={{ width: 18, height: 18, borderRadius: '50%', background: '#3b82f6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8.5, fontWeight: 700 }}>{c}</div>
								{i < 1 && <span style={{ fontSize: 9 }}>—</span>}
							</div>
						))}
						<span style={{ fontSize: 9, fontWeight: 700, color: '#2563eb' }}>feature</span>
					</div>
				</div>
			),
			tip: { title: '分支命名', color: '#fefce8', content: <>feature/xxx 新功能 · fix/xxx 修复 · hotfix/xxx 紧急</> },
		},
	};

	const c = d[lab.id] || d.aws;
	return (
		<div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
			<StepDots steps={[
				{ icon: '📖', label: '概念' },
				{ icon: '⌨️', label: 'CLI' },
				{ icon: '✅', label: '验证' },
				{ icon: '🎯', label: '场景' },
			]} current={0} />
			<div style={{ flex: 1, padding: '10px 14px', overflow: 'auto', display: 'flex', flexDirection: 'column', gap: 8 }}>
				<div style={{ fontSize: 13, fontWeight: 800 }}>{lab.icon} {c.title}</div>

				<div style={{ padding: 7, background: '#fefce8', border: '1.5px solid #fde68a', borderRadius: 5 }}>
					<div style={{ fontSize: 9.5, fontWeight: 700, color: '#a16207', marginBottom: 2 }}>🎯 场景</div>
					<div style={{ fontSize: 10.5, color: '#555', lineHeight: 1.5 }}>{c.scenario}</div>
				</div>

				<div style={{ fontSize: 11, color: '#333', lineHeight: 1.7 }}>{c.concept}</div>

				<div style={{ padding: 6, background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 5 }}>
					<div style={{ fontSize: 9.5, fontWeight: 700, color: '#64748b', marginBottom: 4 }}>架构图</div>
					{c.diagram}
				</div>

				<TipCard title={c.tip.title} color={c.tip.color} content={c.tip.content} />

				<motion.button whileHover={{ scale: 1.03 }} style={{ padding: '6px 18px', background: lab.color, color: lab.color === colors.yellow ? '#000' : '#fff', border: 'none', fontSize: 11, fontWeight: 800, cursor: 'pointer', borderRadius: 5, alignSelf: 'flex-start' }}>
					开始 CLI 实操 →
				</motion.button>
			</div>
		</div>
	);
}

/* ========== Main Slide ========== */
export default function S08_Labs() {
	const [activeId, setActiveId] = useState('prompt');
	const active = labs.find(l => l.id === activeId)!;

	const renderContent = () => {
		if (active.id === 'prompt') return <MockPromptLab />;
		if (active.id === 'frontend') return <MockFrontendLab />;
		if (['aws', 'azure', 'git'].includes(active.id)) return <MockCLILab lab={active} />;
		return <MockConceptLab lab={active} />;
	};

	return (
		<Slide bg="#e8f7e0" style={{ position: 'relative' }}>
			<AnimatedBg variant="grid" opacity={0.04} />
			<div style={{ position: 'relative', zIndex: 1, width: '96%', maxWidth: 1440, display: 'flex', gap: 16, padding: '12px 20px', height: '92%' }}>
				{/* Left — lab picker */}
				<div style={{ width: 185, display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
					<div style={{ display: 'inline-flex', padding: '4px 12px', background: colors.dark, color: '#fff', fontSize: 11, fontWeight: 700, fontFamily: fonts.mono, marginBottom: 6, alignSelf: 'flex-start' }}>先学后练 · AI 辅导</div>
					<h2 style={{ fontFamily: fonts.heading, fontSize: 26, fontWeight: 900, lineHeight: 1.1 }}>互动实验室</h2>
					<p style={{ fontSize: 10, color: '#666', marginTop: 4, fontFamily: fonts.mono }}>8 大 Lab · AI Tutor 全程陪练</p>

					<div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 3, flex: 1 }}>
						{labs.map(l => {
							const isActive = l.id === activeId;
							return (
								<motion.button key={l.id} onClick={() => setActiveId(l.id)} whileHover={{ x: 2 }}
									style={{
										display: 'flex', alignItems: 'center', gap: 6, padding: '5px 8px',
										border: isActive ? `3px solid ${colors.black}` : '1.5px solid #ccc',
										background: isActive ? '#fff' : 'transparent',
										boxShadow: isActive ? `3px 3px 0 ${l.color}` : 'none',
										cursor: 'pointer', textAlign: 'left', transition: 'all 0.15s',
									}}>
									<span style={{ fontSize: 15 }}>{l.icon}</span>
									<div style={{ flex: 1, minWidth: 0 }}>
										<div style={{ fontFamily: fonts.heading, fontSize: 11, fontWeight: 800 }}>{l.title}</div>
										<div style={{ fontSize: 8.5, color: '#888' }}>{l.subtitle}</div>
									</div>
								</motion.button>
							);
						})}
					</div>

					<div style={{ marginTop: 6, display: 'flex', flexDirection: 'column', gap: 3 }}>
						<div style={{ fontSize: 9.5, fontWeight: 700, color: '#333' }}>学习模式</div>
						<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
							{['📖 概念讲解', '💻 动手练习', '❓ MCQ 测验', '🤖 AI Tutor', '📌 Tip 卡片', '🎯 场景教学', '✅ 自动验证', '🎉 完成庆祝'].map(f => (
								<span key={f} style={{ fontSize: 8, fontWeight: 600, padding: '2px 4px', border: '1px solid #000', background: '#fff', borderRadius: 2 }}>{f}</span>
							))}
						</div>
					</div>
				</div>

				{/* Right — immersive 3-column lab mock */}
				<div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
					<AnimatePresence mode="wait">
						<motion.div key={activeId} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
							style={{ flex: 1, border: `3px solid ${colors.black}`, boxShadow: `6px 6px 0 ${active.color}`, overflow: 'hidden', borderRadius: 4, display: 'flex', background: '#fff' }}>
							<LabSidebar labId={activeId} accentColor={active.color} />
							<div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
								{renderContent()}
							</div>
							<AICoachPanel color={active.color} messages={[
								{ role: 'hint', text: '先看完概念讲解和 Tip 卡片，再进入下一步练习' },
								{ role: 'feedback', text: '理解原理再动手，学习效率更高' },
								{ role: 'hint', text: '🔒 更多提示 — 完成概念步后解锁' },
							]} />
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</Slide>
	);
}
