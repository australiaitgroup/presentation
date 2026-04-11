import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ComposableMap, Geographies, Geography, Marker, Line } from 'react-simple-maps';
import { Slide, Title, Tag } from '../ui';
import { colors, fonts, border, shadow } from '../../styles/theme';
import AnimatedBg from '../AnimatedBg';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';
const HQ: [number, number] = [151.2, -33.87];

interface Location {
	name: string;
	flag: string;
	coords: [number, number];
	description: string;
	isHQ?: boolean;
}

const locations: Location[] = [
	{ name: 'Australia', flag: '🇦🇺', coords: HQ, description: 'HQ · Sydney / Melbourne / Brisbane / Canberra', isHQ: true },
	{ name: 'New Zealand', flag: '🇳🇿', coords: [174.77, -41.28], description: 'Auckland & Wellington community' },
	{ name: 'Singapore', flag: '🇸🇬', coords: [103.85, 1.29], description: 'Southeast Asia hub' },
	{ name: 'Malaysia', flag: '🇲🇾', coords: [101.69, 3.14], description: 'Kuala Lumpur campus network' },
	{ name: 'United Kingdom', flag: '🇬🇧', coords: [-0.12, 51.51], description: 'London tech community' },
	{ name: 'USA', flag: '🇺🇸', coords: [-118.24, 34.05], description: 'Silicon Valley & New York' },
	{ name: 'China', flag: '🇨🇳', coords: [121.47, 31.23], description: 'Shanghai partner network' },
	{ name: 'Canada', flag: '🇨🇦', coords: [-79.38, 43.65], description: 'Toronto & Vancouver' },
	{ name: 'Dubai', flag: '🇦🇪', coords: [55.27, 25.2], description: 'Middle East expansion' },
];

export default function S13_Global() {
	const [active, setActive] = useState<Location | null>(null);

	return (
		<Slide bg={colors.darkBg} style={{ position: 'relative' }}>
			<AnimatedBg variant="gradient" color="#38B6FF" opacity={0.25} />

			<div style={{ position: 'relative', zIndex: 1, width: '95%', maxWidth: 1600, height: '90%', display: 'flex', flexDirection: 'column', gap: 0 }}>
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '20px 0 0 0' }}
				>
					<Title white style={{ margin: 0, fontSize: 'clamp(32px,4vw,56px)' }}>Global Presence</Title>
					<Tag bg={colors.red}>Chinese Site</Tag>
					<Tag bg={colors.blue}>English Site</Tag>
				</motion.div>

				{/* Map area */}
				<div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center' }}>
					<div style={{ width: '100%', height: '100%', maxHeight: 720 }}>
						<ComposableMap
							projection="geoMercator"
							projectionConfig={{ scale: 160, center: [20, 10] }}
							style={{ width: '100%', height: '100%' }}
						>
							<Geographies geography={GEO_URL}>
								{({ geographies }: { geographies: any[] }) =>
									geographies.map((geo) => (
										<Geography
											key={geo.rsmKey}
											geography={geo}
											style={{
												default: { fill: 'rgba(255,255,255,0.08)', stroke: 'rgba(56,182,255,0.3)', strokeWidth: 0.5, outline: 'none' },
												hover: { fill: 'rgba(56,182,255,0.18)', stroke: 'rgba(56,182,255,0.5)', strokeWidth: 0.5, outline: 'none' },
												pressed: { fill: 'rgba(56,182,255,0.25)', outline: 'none' },
											}}
										/>
									))
								}
							</Geographies>

							{/* Connection lines from HQ */}
							{locations.filter(l => !l.isHQ).map((loc, i) => (
								<Line
									key={i}
									from={HQ}
									to={loc.coords}
									stroke={colors.yellow}
									strokeWidth={1.2}
									strokeDasharray="6 4"
									strokeLinecap="round"
									style={{ opacity: 0.6 }}
								/>
							))}

							{/* Markers */}
							{locations.map((loc) => (
								<Marker key={loc.name} coordinates={loc.coords}>
									{loc.isHQ ? (
										<g onClick={() => setActive(active?.name === loc.name ? null : loc)} style={{ cursor: 'pointer' }}>
											{/* Pulse rings */}
											<motion.circle
												r={18} fill="none" stroke={colors.green} strokeWidth={2}
												animate={{ r: [12, 22, 12], opacity: [0.8, 0, 0.8] }}
												transition={{ duration: 2, repeat: Infinity }}
											/>
											<motion.circle
												r={12} fill="none" stroke={colors.green} strokeWidth={1.5}
												animate={{ r: [8, 18, 8], opacity: [0.6, 0, 0.6] }}
												transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
											/>
											<circle r={8} fill={colors.green} stroke="#fff" strokeWidth={2.5} />
											<circle r={3} fill="#fff" />
										</g>
									) : (
										<g onClick={() => setActive(active?.name === loc.name ? null : loc)} style={{ cursor: 'pointer' }}>
											<circle
												r={active?.name === loc.name ? 9 : 6}
												fill={colors.red}
												stroke="#fff"
												strokeWidth={2}
												style={{ transition: 'r 0.2s' }}
											/>
										</g>
									)}
								</Marker>
							))}
						</ComposableMap>
					</div>

					{/* Info popup */}
					<AnimatePresence>
						{active && (
							<motion.div
								initial={{ opacity: 0, scale: 0.85, y: 10 }}
								animate={{ opacity: 1, scale: 1, y: 0 }}
								exit={{ opacity: 0, scale: 0.85, y: 10 }}
								transition={{ duration: 0.2 }}
								style={{
									position: 'absolute', top: '10%', right: 20,
									background: colors.white, border, boxShadow: shadow,
									padding: '20px 24px', minWidth: 260,
									zIndex: 10,
								}}
							>
								<div style={{ fontSize: 40, marginBottom: 8 }}>{active.flag}</div>
								<div style={{ fontFamily: fonts.heading, fontSize: 22, fontWeight: 900, color: colors.dark }}>{active.name}</div>
								<div style={{ height: 3, background: active.isHQ ? colors.green : colors.red, width: 40, margin: '8px 0' }} />
								<div style={{ fontSize: 14, color: '#555', fontWeight: 500, lineHeight: 1.5 }}>{active.description}</div>
								{active.isHQ && (
									<span style={{
										display: 'inline-block', marginTop: 10, padding: '4px 12px',
										background: colors.green, color: colors.black,
										fontSize: 12, fontWeight: 700, fontFamily: fonts.mono,
										border: '2px solid #000',
									}}>HEADQUARTERS</span>
								)}
							</motion.div>
						)}
					</AnimatePresence>
				</div>

				{/* Bottom location buttons */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4 }}
					style={{ display: 'flex', gap: 10, flexWrap: 'wrap', padding: '12px 0' }}
				>
					{locations.map((loc) => (
						<button
							key={loc.name}
							onClick={() => setActive(active?.name === loc.name ? null : loc)}
							style={{
								display: 'flex', alignItems: 'center', gap: 8,
								padding: '8px 16px',
								background: active?.name === loc.name ? colors.white : 'rgba(255,255,255,0.1)',
								border: active?.name === loc.name ? `2px solid ${colors.black}` : '2px solid rgba(255,255,255,0.3)',
								boxShadow: active?.name === loc.name ? '3px 3px 0 #000' : 'none',
								color: active?.name === loc.name ? colors.black : 'rgba(255,255,255,0.85)',
								fontFamily: fonts.body, fontSize: 13, fontWeight: 600,
								cursor: 'pointer',
								transition: 'all 0.15s',
							}}
						>
							<span style={{ fontSize: 18 }}>{loc.flag}</span>
							<span>{loc.name}</span>
							{loc.isHQ && <span style={{ fontSize: 10, background: colors.green, color: '#000', padding: '2px 6px', fontWeight: 700 }}>HQ</span>}
						</button>
					))}
				</motion.div>
			</div>
		</Slide>
	);
}
