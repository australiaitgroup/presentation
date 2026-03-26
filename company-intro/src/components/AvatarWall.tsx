import { motion } from 'framer-motion';

const avatars = [
	'/images/avatars/default-first.png',
	'/images/avatars/default-second.png',
	'/images/avatars/default-third.png',
	'/images/avatars/default-fourth.png',
	'/images/avatars/default-fifth.png',
	'/images/avatars/default-sixth.png',
	'/images/avatars/default-seventh.png',
	'/images/avatars/default-eighth.png',
	'/images/avatars/default-ninth.png',
	'/images/avatars/default-tenth.png',
	'/images/avatars/default-eleventh.png',
	'/images/avatars/default-twelfth.png',
	'/images/avatars/default-thirteenth.png',
	'/images/avatars/default-fourteenth.png',
	'/images/avatars/default-fifteenth.png',
	'/images/avatars/styled-avatar--cyan.webp',
	'/images/avatars/styled-avatar--green.webp',
	'/images/avatars/styled-avatar--magenta.webp',
	'/images/avatars/styled-avatar--maroon.webp',
	'/images/avatars/styled-avatar--red.webp',
	'/images/avatars/styled-avatar--royal-blue.webp',
	'/images/avatars/student-story-avatar-1.webp',
	'/images/avatars/student-story-avatar-2.webp',
	'/images/avatars/student-story-avatar-3.webp',
];

interface AvatarWallProps {
	opacity?: number;
	rows?: number;
	cols?: number;
	size?: number;
}

export default function AvatarWall({ opacity = 0.12, rows = 5, cols = 10, size = 72 }: AvatarWallProps) {
	// Fill grid, repeating avatars as needed
	const total = rows * cols;
	const items = Array.from({ length: total }, (_, i) => avatars[i % avatars.length]);

	return (
		<div style={{
			position: 'absolute', inset: 0, overflow: 'hidden',
			display: 'grid',
			gridTemplateColumns: `repeat(${cols}, ${size}px)`,
			gridTemplateRows: `repeat(${rows}, ${size}px)`,
			justifyContent: 'center',
			alignContent: 'center',
			gap: 8,
			opacity,
			pointerEvents: 'none',
			zIndex: 0,
		}}>
			{items.map((src, i) => (
				<motion.img
					key={i}
					src={src}
					alt=""
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: i * 0.02, duration: 0.3 }}
					style={{
						width: size, height: size, borderRadius: '50%',
						objectFit: 'cover',
						filter: 'grayscale(30%)',
					}}
					onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
				/>
			))}
		</div>
	);
}
