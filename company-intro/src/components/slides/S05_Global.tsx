import { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker, Line } from 'react-simple-maps';
import { motion, AnimatePresence } from 'framer-motion';
import { Slide, Inner, Title, Tag } from '../ui';
import { colors, fonts, border, shadowSm } from '../../styles/theme';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

interface Location {
	name: string;
	flag: string;
	coords: [number, number]; // [lng, lat]
	label: string;
	isHQ?: boolean;
	desc: string;
}

const HQ_COORDS: [number, number] = [151.2, -33.87]; // Sydney

const locations: Location[] = [
	{ name: 'Australia', flag: '🇦🇺', coords: HQ_COORDS, label: 'Australia', isHQ: true, desc: '总部 · 悉尼 / 墨尔本 / 布里斯班 / 堪培拉\njiangren.com.au' },
	{ name: 'New Zealand', flag: '🇳🇿', coords: [174.77, -41.28], label: 'NZ', desc: '奥克兰 · 惠灵顿' },
	{ name: 'Singapore', flag: '🇸🇬', coords: [103.85, 1.29], label: 'Singapore', desc: '东南亚华人学员中心' },
	{ name: 'Malaysia', flag: '🇲🇾', coords: [101.69, 3.14], label: 'Malaysia', desc: '吉隆坡 · 马来华人社区' },
	{ name: 'United Kingdom', flag: '🇬🇧', coords: [-0.12, 51.51], label: 'UK', desc: '伦敦 · 欧洲华人学员' },
	{ name: 'United States', flag: '🇺🇸', coords: [-118.24, 34.05], label: 'USA', desc: '北美华人技术社区' },
	{ name: 'China', flag: '🇨🇳', coords: [121.47, 31.23], label: 'China', desc: '上海 · 全球华人学员最大来源地' },
	{ name: 'Canada', flag: '🇨🇦', coords: [-79.38, 43.65], label: 'Canada', desc: '多伦多 · 温哥华 · 北美华人社区' },
];

export default function S05_Global() {
	const [active, setActive] = useState<string | null>(null);
	const activeLocation = locations.find(l => l.name === active);

	return (
		<Slide bg={colors.darkBg}>
			<Inner style={{
				flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
				padding: '24px 40px', gap: 12, height: '90%',
			}}>
				{/* Header row */}
				<div style={{ display: 'flex', alignItems: 'center', gap: 20, width: '100%', justifyContent: 'space-between' }}>
					<div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
						<Title white size="clamp(32px,4vw,56px)">走向国际</Title>
						<div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
							<Tag bg={colors.red}>中文站 jiangren.com.au</Tag>
							<Tag bg={colors.blue}>英文站 jiangren.au</Tag>
						</div>
					</div>
					<p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, fontFamily: fonts.mono }}>点击标记查看详情</p>
				</div>

				{/* Map — takes up most space */}
				<div style={{ flex: 1, width: '100%', position: 'relative', minHeight: 0 }}>
					<ComposableMap
						projection="geoMercator"
						projectionConfig={{ scale: 140, center: [80, 10] }}
						style={{ width: '100%', height: '100%' }}
					>
						<Geographies geography={GEO_URL}>
							{({ geographies }) =>
								geographies.map((geo) => (
									<Geography
										key={geo.rsmKey}
										geography={geo}
										fill="rgba(255,255,255,0.08)"
										stroke="rgba(255,255,255,0.15)"
										strokeWidth={0.5}
										style={{
											default: { outline: 'none' },
											hover: { fill: 'rgba(255,255,255,0.12)', outline: 'none' },
											pressed: { outline: 'none' },
										}}
									/>
								))
							}
						</Geographies>

						{/* Connection lines from HQ to each location */}
						{locations.filter(l => !l.isHQ).map(l => (
							<Line
								key={`line-${l.name}`}
								from={HQ_COORDS}
								to={l.coords}
								stroke={colors.yellow}
								strokeWidth={1}
								strokeLinecap="round"
								strokeDasharray="4 4"
								strokeOpacity={0.3}
							/>
						))}

						{/* Location markers */}
						{locations.map(l => (
							<Marker key={l.name} coordinates={l.coords}>
								{/* Pulse ring for HQ */}
								{l.isHQ && (
									<motion.circle
										r={18}
										fill="none"
										stroke={colors.green}
										strokeWidth={2}
										animate={{ r: [14, 22, 14], opacity: [0.8, 0.2, 0.8] }}
										transition={{ duration: 2, repeat: Infinity }}
									/>
								)}
								{/* Marker dot */}
								<motion.circle
									r={l.isHQ ? 10 : 7}
									fill={l.isHQ ? colors.green : active === l.name ? colors.yellow : colors.red}
									stroke="#fff"
									strokeWidth={2}
									style={{ cursor: 'pointer' }}
									whileHover={{ scale: 1.4 }}
									onClick={() => setActive(active === l.name ? null : l.name)}
								/>
								{/* Label */}
								<text
									textAnchor="middle"
									y={l.isHQ ? 26 : 20}
									style={{
										fontFamily: fonts.mono,
										fontSize: l.isHQ ? 12 : 10,
										fontWeight: 700,
										fill: l.isHQ ? colors.green : '#fff',
										pointerEvents: 'none',
									}}
								>
									{l.isHQ ? '🏠 HQ' : l.label}
								</text>
							</Marker>
						))}
					</ComposableMap>

					{/* Info popup */}
					<AnimatePresence>
						{activeLocation && (
							<motion.div
								initial={{ opacity: 0, y: 10, scale: 0.95 }}
								animate={{ opacity: 1, y: 0, scale: 1 }}
								exit={{ opacity: 0, y: 10, scale: 0.95 }}
								transition={{ duration: 0.2 }}
								style={{
									position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)',
									background: colors.white, border, boxShadow: shadowSm,
									padding: '16px 24px', minWidth: 280, zIndex: 10,
								}}
							>
								<div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
									<span style={{ fontSize: 28 }}>{activeLocation.flag}</span>
									<strong style={{ fontFamily: fonts.heading, fontSize: 20 }}>{activeLocation.name}</strong>
									{activeLocation.isHQ && <Tag bg={colors.green} color={colors.black}>总部</Tag>}
								</div>
								<p style={{ fontSize: 14, color: '#555', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{activeLocation.desc}</p>
								<button
									onClick={() => setActive(null)}
									style={{
										position: 'absolute', top: 8, right: 12, background: 'none', border: 'none',
										fontSize: 18, cursor: 'pointer', color: '#999', fontWeight: 700,
									}}
								>×</button>
							</motion.div>
						)}
					</AnimatePresence>
				</div>

				{/* Bottom location strip */}
				<div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
					{locations.map(l => (
						<motion.button
							key={l.name}
							onClick={() => setActive(active === l.name ? null : l.name)}
							whileHover={{ scale: 1.05 }}
							style={{
								padding: '8px 16px', border: active === l.name ? `2px solid ${colors.yellow}` : '2px solid rgba(255,255,255,0.2)',
								background: active === l.name ? 'rgba(255,222,89,0.15)' : 'rgba(255,255,255,0.05)',
								color: '#fff', fontSize: 14, fontWeight: 600, cursor: 'pointer',
								display: 'flex', alignItems: 'center', gap: 8, fontFamily: fonts.body,
								transition: 'all 0.15s',
							}}
						>
							<span style={{ fontSize: 20 }}>{l.flag}</span>
							{l.label}
							{l.isHQ && <span style={{ fontSize: 10, background: colors.green, color: '#000', padding: '1px 6px', fontWeight: 800 }}>HQ</span>}
						</motion.button>
					))}
				</div>
			</Inner>
		</Slide>
	);
}
