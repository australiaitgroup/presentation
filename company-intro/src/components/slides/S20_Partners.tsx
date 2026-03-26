import AnimatedBg from '../AnimatedBg';
import { Slide, Inner, Title, Divider, Card, Stagger, StaggerItem } from '../ui';
import { colors, fonts } from '../../styles/theme';

const partners = ['ATLASSIAN', 'Canva', 'aws', 'Google Cloud', 'Microsoft', 'Deloitte'];

export default function S20_Partners() {
	return (
		<Slide bg={colors.white} style={{ position: 'relative' }}>
			<AnimatedBg variant="shapes" opacity={0.04} />
			<Inner center>
				<Title size="clamp(40px,5.5vw,72px)">我们的合作伙伴</Title>
				<Divider center />
				<Stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, maxWidth: 800, width: '100%' }}>
					{partners.map(p => (
						<StaggerItem key={p}>
							<Card style={{ textAlign: 'center', padding: '32px 24px' }}>
								<span style={{ fontFamily: fonts.mono, fontSize: 22, fontWeight: 700, color: '#333' }}>{p}</span>
							</Card>
						</StaggerItem>
					))}
				</Stagger>
			</Inner>
		</Slide>
	);
}
