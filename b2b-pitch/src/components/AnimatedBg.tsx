import { motion } from 'framer-motion';
import { colors } from '../styles/theme';

interface AnimatedBgProps {
	variant?: 'dots' | 'grid' | 'shapes' | 'gradient';
	opacity?: number;
	color?: string;
}

export default function AnimatedBg({ variant = 'shapes', opacity = 0.15, color }: AnimatedBgProps) {
	return (
		<div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
			{variant === 'dots' && <DotPattern opacity={opacity} />}
			{variant === 'grid' && <GridPattern opacity={opacity} />}
			{variant === 'shapes' && <FloatingShapes opacity={opacity} />}
			{variant === 'gradient' && <GradientPulse opacity={opacity} color={color} />}
		</div>
	);
}

function DotPattern({ opacity }: { opacity: number }) {
	return (
		<motion.div
			animate={{ backgroundPosition: ['0px 0px', '30px 30px'] }}
			transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
			style={{
				position: 'absolute', inset: 0, opacity,
				backgroundImage: 'radial-gradient(circle, currentColor 2px, transparent 2px)',
				backgroundSize: '28px 28px',
			}}
		/>
	);
}

function GridPattern({ opacity }: { opacity: number }) {
	return (
		<motion.div
			animate={{ backgroundPosition: ['0px 0px', '50px 50px'] }}
			transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
			style={{
				position: 'absolute', inset: 0, opacity,
				backgroundImage: `linear-gradient(rgba(0,0,0,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.15) 1px, transparent 1px)`,
				backgroundSize: '50px 50px',
			}}
		/>
	);
}

function FloatingShapes({ opacity }: { opacity: number }) {
	const shapes = [
		{ x: '8%', y: '12%', size: 70, color: colors.yellow, delay: 0, rotate: 12 },
		{ x: '82%', y: '18%', size: 55, color: colors.green, delay: 0.3, rotate: -15 },
		{ x: '68%', y: '72%', size: 80, color: colors.blue, delay: 0.6, rotate: 8 },
		{ x: '18%', y: '78%', size: 45, color: colors.purple, delay: 0.9, rotate: -20 },
		{ x: '48%', y: '8%', size: 35, color: colors.red, delay: 0.5, rotate: 25 },
		{ x: '88%', y: '48%', size: 60, color: colors.orange, delay: 1.2, rotate: -10 },
		{ x: '3%', y: '48%', size: 40, color: colors.yellow, delay: 0.7, rotate: 30 },
		{ x: '38%', y: '88%', size: 50, color: colors.green, delay: 0.2, rotate: -5 },
		{ x: '58%', y: '38%', size: 30, color: colors.red, delay: 1.0, rotate: 45 },
		{ x: '28%', y: '28%', size: 42, color: colors.blue, delay: 1.4, rotate: -35 },
		{ x: '75%', y: '5%', size: 48, color: colors.purple, delay: 0.4, rotate: 18 },
		{ x: '15%', y: '55%', size: 38, color: colors.orange, delay: 1.6, rotate: -22 },
	];

	return (
		<>
			{shapes.map((s, i) => (
				<motion.div
					key={i}
					animate={{
						y: [0, -30, 0, 25, 0],
						x: [0, 15, -12, 8, 0],
						rotate: [s.rotate, s.rotate + 90, s.rotate + 180, s.rotate + 270, s.rotate + 360],
						scale: [1, 1.1, 1, 0.95, 1],
					}}
					transition={{ duration: 6 + i * 0.4, delay: s.delay, repeat: Infinity, ease: 'easeInOut' }}
					style={{
						position: 'absolute', left: s.x, top: s.y,
						width: s.size, height: s.size,
						background: s.color, opacity,
						border: `3px solid rgba(0,0,0,0.1)`,
						borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '4px' : 0,
						boxShadow: `0 0 ${s.size / 2}px ${s.color}40`,
					}}
				/>
			))}
		</>
	);
}

function GradientPulse({ opacity, color = colors.blue }: { opacity: number; color?: string }) {
	// Use a simpler approach with multiple colored orbs
	return (
		<>
			<motion.div
				animate={{
					x: ['0%', '30%', '10%', '-10%', '0%'],
					y: ['0%', '-15%', '10%', '20%', '0%'],
				}}
				transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
				style={{
					position: 'absolute', top: '10%', left: '20%',
					width: '40%', height: '40%', borderRadius: '50%',
					background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
					opacity: opacity * 0.8,
					filter: 'blur(60px)',
				}}
			/>
			<motion.div
				animate={{
					x: ['0%', '-20%', '15%', '5%', '0%'],
					y: ['0%', '20%', '-10%', '15%', '0%'],
				}}
				transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
				style={{
					position: 'absolute', bottom: '15%', right: '15%',
					width: '35%', height: '35%', borderRadius: '50%',
					background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
					opacity: opacity * 0.5,
					filter: 'blur(80px)',
				}}
			/>
		</>
	);
}
