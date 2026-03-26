import { Slide, Inner, Title, Subtitle, CardSm, Stagger, StaggerItem } from '../ui';

const mentors = [
	{ name: 'Lightman', role: 'JR Academy CEO', company: 'Web Full-stack', img: '/images/event-speaker.jpg' },
	{ name: 'Jatin Wadhwa', role: 'Head of Data & AI', company: 'Givvable', img: '/images/mentor-jatin-wadhwa.jpg' },
	{ name: 'Joe Zhou', role: 'Software Engineer', company: 'Google' },
	{ name: 'Yu Wang', role: 'SRE', company: 'Atlassian' },
	{ name: 'Sally Chen', role: 'Data Analyst', company: 'Deloitte' },
	{ name: 'Ran Ding', role: 'Principal Engineer', company: 'Atlassian' },
	{ name: 'Kevin Luo', role: 'Team Lead', company: 'Google' },
	{ name: 'Owen Yan', role: 'Data Engineer', company: 'Canva' },
	{ name: 'Vik Gambhir', role: 'Product Lead', company: 'Atlassian' },
	{ name: 'Katherine Chen', role: 'Software Engineer', company: 'Google' },
	{ name: 'Ray Ma', role: 'DevOps Engineer', company: 'Microsoft' },
	{ name: 'Bruce Zhao', role: 'Senior Developer', company: 'Deloitte' },
];

export default function S14_Mentors() {
	return (
		<Slide bg="#f5f0eb">
			<Inner center>
				<Title size="clamp(36px,5vw,64px)">600+ 来自顶尖企业的导师</Title>
				<Subtitle>来自 Google · Canva · Atlassian · Microsoft · Amazon · Deloitte · PwC · ANZ · CBA</Subtitle>
				<Stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 12, width: '100%', maxWidth: 1100 }}>
					{mentors.map(m => (
						<StaggerItem key={m.name}>
							<CardSm style={{ textAlign: 'center', padding: '16px 8px' }}>
								{(m as any).img ? (
									<img src={(m as any).img} alt={m.name} style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover', marginBottom: 6, border: '2px solid #000' }} onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }} />
								) : (
									<div style={{ fontSize: 30, marginBottom: 6 }}>👤</div>
								)}
								<strong style={{ fontSize: 13, display: 'block' }}>{m.name}</strong>
								<small style={{ fontSize: 11, color: '#666', display: 'block', marginTop: 4, lineHeight: 1.4 }}>{m.role}<br />{m.company}</small>
							</CardSm>
						</StaggerItem>
					))}
				</Stagger>
			</Inner>
		</Slide>
	);
}

function Slide_({ bg, children }: { bg: string; children: React.ReactNode }) {
	return <Slide bg={bg}>{children}</Slide>;
}
