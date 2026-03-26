import SlideEngine from './components/SlideEngine';
import S01 from './components/slides/S01_Cover';
import S02 from './components/slides/S02_Problem';
import S03 from './components/slides/S03_WhyNow';
import S04 from './components/slides/S04_Market';
import S05 from './components/slides/S05_Products';
import S06 from './components/slides/S06_FullChain';
import S07 from './components/slides/S07_ChromeExt';
import S08 from './components/slides/S08_Traction';
import S09 from './components/slides/S09_Moats';
import S10 from './components/slides/S10_Competition';
import S11 from './components/slides/S11_BusinessModel';
import S12 from './components/slides/S12_Flywheel';
import S13 from './components/slides/S13_WhyRaise';
import S14 from './components/slides/S14_UseOfFunds';
import S15 from './components/slides/S15_Risks';
import S16 from './components/slides/S16_WhyInvest';
import S17 from './components/slides/S17_ThankYou';

export default function App() {
	return (
		<SlideEngine>
			<S01 />
			<S02 />
			<S03 />
			<S04 />
			<S05 />
			<S06 />
			<S07 />
			<S08 />
			<S09 />
			<S10 />
			<S11 />
			<S12 />
			<S13 />
			<S14 />
			<S15 />
			<S16 />
			<S17 />
		</SlideEngine>
	);
}
