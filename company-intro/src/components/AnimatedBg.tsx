import { motion } from 'framer-motion';
import { colors } from '../styles/theme';

interface AnimatedBgProps {
	variant?: 'dots' | 'grid' | 'shapes' | 'gradient';
	opacity?: number;
	color?: string;
}

export default function AnimatedBg({ variant = 'shapes', opacity = 0.08, color }: AnimatedBgProps) {
	return (
		<div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
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
			transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
			style={{
				position: 'absolute', inset: 0, opacity,
				backgroundImage: 'radial-gradient(circle, currentColor 1.5px, transparent 1.5px)',
				backgroundSize: '30px 30px',
			}}
		/>
	);
}

function GridPattern({ opacity }: { opacity: number }) {
	return (
		<motion.div
			animate={{ backgroundPosition: ['0px 0px', '60px 60px'] }}
			transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
			style={{
				position: 'absolute', inset: 0, opacity,
				backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
				backgroundSize: '60px 60px',
			}}
		/>
	);
}

function FloatingShapes({ opacity }: { opacity: number }) {
	const shapes = [
		{ x: '10%', y: '15%', size: 40, color: colors.yellow, delay: 0, rotate: 12 },
		{ x: '85%', y: '20%', size: 30, color: colors.green, delay: 0.5, rotate: -15 },
		{ x: '70%', y: '75%', size: 50, color: colors.blue, delay: 1, rotate: 8 },
		{ x: '20%', y: '80%', size: 25, color: colors.purple, delay: 1.5, rotate: -20 },
		{ x: '50%', y: '10%', size: 20, color: colors.red, delay: 0.8, rotate: 25 },
		{ x: '90%', y: '50%', size: 35, color: colors.orange, delay: 2, rotate: -10 },
		{ x: '5%', y: '50%', size: 18, color: colors.yellow, delay: 1.2, rotate: 30 },
		{ x: '40%', y: '90%', size: 28, color: colors.green, delay: 0.3, rotate: -5 },
		{ x: '60%', y: '40%', size: 15, color: colors.red, delay: 1.8, rotate: 45 },
		{ x: '30%', y: '30%', size: 22, color: colors.blue, delay: 2.2, rotate: -35 },
	];

	return (
		<>
			{shapes.map((s, i) => (
				<motion.div
					key={i}
					animate={{
						y: [0, -20, 0, 15, 0],
						x: [0, 10, -8, 5, 0],
						rotate: [s.rotate, s.rotate + 90, s.rotate + 180, s.rotate + 270, s.rotate + 360],
					}}
					transition={{ duration: 8 + i * 0.5, delay: s.delay, repeat: Infinity, ease: 'easeInOut' }}
					style={{
						position: 'absolute', left: s.x, top: s.y,
						width: s.size, height: s.size,
						background: s.color, opacity,
						border: '2px solid rgba(0,0,0,0.15)',
						borderRadius: i % 3 === 0 ? '50%' : 0,
					}}
				/>
			))}
		</>
	);
}

function GradientPulse({ opacity, color = colors.blue }: { opacity: number; color?: string }) {
	return (
		<motion.div
			animate={{
				background: [
					`radial-gradient(ellipse at 20% 50%, ${color}${Math.round(opacity * 255).toString(16).padStart(2, '0')} 0%, transparent 70%)`,
					`radial-gradient(ellipse at 80% 30%, ${color}${Math.round(opacity * 255).toString(16).padStart(2, '0')} 0%, transparent 70%)`,
					`radial-gradient(ellipse at 50% 80%, ${color}${Math.round(opacity * 255).toString(16).padStart(2, '0')} 0%, transparent 70%)`,
					`radial-gradient(ellipse at 20% 50%, ${color}${Math.round(opacity * 255).toString(16).padStart(2, '0')} 0%, transparent 70%)`,
				],
			}}
			transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
			style={{ position: 'absolute', inset: 0 }}
		/>
	);
}
