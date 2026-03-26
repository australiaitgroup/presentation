import AnimatedBg from '../AnimatedBg';
import { Slide, Inner, Title, Divider } from '../ui';
import { colors, fonts } from '../../styles/theme';

const rows = [
	['ATLASSIAN', 'Canva', 'Microsoft', 'amazon', 'Google'],
	['J.P.Morgan', 'Deloitte.', 'pwc', 'KPMG', 'EY', 'accenture'],
	['NAB', 'CommBank', 'ANZ', 'Westpac', 'Telstra', 'Thoughtworks'],
	['REA Group', 'Domain', 'MYOB', 'ROKT', 'Xero', 'Rio Tinto', 'Infosys'],
	['Suncorp', 'Carsales', 'Cognizant', 'Tencent', 'Binance'],
];

export default function S04_StudentWork() {
	return (
		<Slide bg={colors.white} style={{ position: 'relative' }}>
			<AnimatedBg variant="shapes" opacity={0.04} />
			<Inner center>
				<Title size="clamp(40px,5.5vw,72px)">我们学员工作在</Title>
				<Divider center />
				<div style={{ width: '100%', maxWidth: 1200, marginTop: 8 }}>
					{rows.map((row, ri) => (
						<div key={ri} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'clamp(16px,3vw,40px)', marginBottom: 18, flexWrap: 'wrap' }}>
							{row.map(name => (
								<span key={name} style={{
									fontFamily: fonts.mono, fontSize: name.length < 6 ? 'clamp(20px,2.5vw,30px)' : 'clamp(16px,2vw,24px)',
									fontWeight: ['Deloitte.', 'KPMG', 'ANZ'].includes(name) ? 800 : 600, color: '#444',
									transition: 'all 0.15s', cursor: 'default',
								}}>
									{name}
								</span>
							))}
						</div>
					))}
					<div style={{ textAlign: 'center', marginTop: 8 }}>
						<span style={{ fontFamily: fonts.mono, color: colors.red, fontStyle: 'italic', fontSize: 20, fontWeight: 700 }}>more...</span>
					</div>
				</div>
			</Inner>
		</Slide>
	);
}
