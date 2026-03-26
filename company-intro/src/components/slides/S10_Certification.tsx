import { Slide, Inner, Half, Title, Divider, CardSm, Stagger, StaggerItem } from '../ui';
import { colors } from '../../styles/theme';

const certs = [
	{ icon: '☁️', title: '云计算', desc: 'AWS SAA / SAP / SysOps · Azure AZ-900 / AZ-104 / AZ-500 · GCP ACE / PCA' },
	{ icon: '🔧', title: 'DevOps & 安全', desc: 'Kubernetes CKA / CKAD · Terraform · CompTIA Security+' },
	{ icon: '📊', title: '数据 & AI', desc: 'AWS Data Engineer · Azure AI-102 · Databricks' },
	{ icon: '📋', title: '项目 & 产品', desc: 'PMP · PSPO · PSM · Salesforce · ServiceNow' },
];

const features = [
	{ icon: '🧠', title: 'AI 智能题库', desc: '模拟考试 + 错题分析' },
	{ icon: '📖', title: '章节讲解', desc: '系统学习 + 实战 Quiz' },
	{ icon: '📱', title: 'CertMaster App', desc: '随时随地移动端刷题' },
];

export default function S10_Certification() {
	return (
		<Slide bg="#fff8dd">
			<Inner split>
				<Stagger style={{ flex: 1 }}>
					<StaggerItem><Title>350+ IT 认证<br />一站式备考</Title></StaggerItem>
					<StaggerItem><Divider color={colors.black} /></StaggerItem>
					{certs.map(c => (
						<StaggerItem key={c.title}>
							<div style={{ marginBottom: 14 }}>
								<strong style={{ fontSize: 16 }}>{c.icon} {c.title}</strong>
								<p style={{ fontSize: 14, color: '#555', lineHeight: 1.6 }}>{c.desc}</p>
							</div>
						</StaggerItem>
					))}
				</Stagger>
				<Half style={{ gap: 16 }}>
					{features.map(f => (
						<CardSm key={f.title} bg={colors.white}>
							<div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
								<span style={{ fontSize: 32 }}>{f.icon}</span>
								<div><strong style={{ fontSize: 16 }}>{f.title}</strong><p style={{ fontSize: 13, color: '#666', marginTop: 2 }}>{f.desc}</p></div>
							</div>
						</CardSm>
					))}
				</Half>
			</Inner>
		</Slide>
	);
}
