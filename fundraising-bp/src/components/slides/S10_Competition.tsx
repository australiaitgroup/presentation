import { motion } from 'framer-motion';
import { Slide, Title, Tag } from '../ui';
import { colors, fonts } from '../../styles/theme';

const headers = ['', 'Coursera', 'LeetCode', '九章算法', 'GA', 'JR Academy'];
const rows = [
	['双语社群', '✗', '部分', '有', '✗', '深度运营'],
	['AI 原生', '后补', '✗', '✗', '✗', '产品级 AI'],
	['全链路', '只有课', '只有题', '只有算法', '课+就业', '学→练→考→面→就业'],
	['认证体系', '有', '✗', '✗', '✗', '350+ 认证'],
	['互动实验室', '部分', '有', '✗', '✗', '6 种 Lab'],
	['Chrome 插件', '✗', '✗', '✗', '✗', '3 款'],
	['线下社群', '✗', '✗', '小规模', '有', '7 城 200+/年'],
	['结果保障', '✗', '✗', '✗', '有', '无 Offer 退 50%'],
];

export default function S10_Competition() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '90%', maxWidth: 1400, padding: 40 }}>
				<Tag bg={colors.red}>竞争格局</Tag>
				<Title style={{ marginTop: 16, marginBottom: 32 }} size="clamp(28px,4vw,48px)">
					唯一的 <span style={{ background: colors.red, color: '#fff', padding: '0 12px' }}>全链路 + 社群驱动 + AI 原生</span>
				</Title>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					style={{ overflow: 'hidden', border: `3px solid ${colors.black}`, boxShadow: `6px 6px 0 ${colors.black}` }}
				>
					<table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, fontFamily: fonts.body }}>
						<thead>
							<tr>
								{headers.map((h, i) => (
									<th key={i} style={{
										padding: '12px 14px', textAlign: 'center',
										background: i === 5 ? colors.red : colors.dark,
										color: '#fff', fontWeight: 700, fontSize: 15,
										borderRight: i < 5 ? '1px solid rgba(255,255,255,0.15)' : 'none',
									}}>
										{h}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{rows.map((row, ri) => (
								<tr key={ri}>
									{row.map((cell, ci) => (
										<td key={ci} style={{
											padding: '10px 14px', textAlign: 'center',
											background: ci === 5 ? (ri % 2 === 0 ? '#fff0f0' : '#fff5f5') : (ri % 2 === 0 ? '#f8f8f8' : '#fff'),
											fontWeight: ci === 0 || ci === 5 ? 700 : 400,
											color: ci === 5 ? colors.red : (ci === 0 ? colors.black : cell === '✗' ? '#ccc' : '#666'),
											fontSize: ci === 5 ? 14 : 13,
											borderRight: '1px solid #eee',
											borderBottom: '1px solid #eee',
										}}>
											{cell}
										</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				</motion.div>
			</div>
		</Slide>
	);
}
