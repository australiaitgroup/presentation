import SlideEngine from './components/SlideEngine';
import S01 from './components/slides/S01_Cover';
import S02 from './components/slides/S02_Problem';
import S03 from './components/slides/S03_WhoWeAre';
import S04 from './components/slides/S04_Impact';
import S05 from './components/slides/S05_Alumni';
import S06 from './components/slides/S06_Solutions';
import S07 from './components/slides/S07_Consulting';
import S08 from './components/slides/S08_Training';
import S09 from './components/slides/S09_Platform';
import S10 from './components/slides/S10_Certification';
import S11 from './components/slides/S11_Pipeline';
import S12 from './components/slides/S12_CareerTools';
import S13 from './components/slides/S13_Global';
import S14 from './components/slides/S14_Mentors';
import S15 from './components/slides/S15_Partnerships';
import S16 from './components/slides/S16_CaseStudies';
import S17 from './components/slides/S17_WhyJR';
import S18 from './components/slides/S18_CTA';

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
			<S18 />
		</SlideEngine>
	);
}
