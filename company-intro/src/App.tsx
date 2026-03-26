import SlideEngine from './components/SlideEngine';
import S01 from './components/slides/S01_Cover';
import S02 from './components/slides/S02_WhoWeAre';
import S03 from './components/slides/S03_Impact';
import S04 from './components/slides/S04_StudentWork';
import S05 from './components/slides/S05_Global';
import S06 from './components/slides/S06_Ecosystem';
import S07 from './components/slides/S07_AILearning';
import S08 from './components/slides/S08_Labs';
import S09 from './components/slides/S09_Bootcamps';
import S10 from './components/slides/S10_Certification';
import S11 from './components/slides/S11_CareerTools';
import S12 from './components/slides/S12_ChromeExt';
import S13 from './components/slides/S13_P3';
import S14 from './components/slides/S14_Mentors';
import S15 from './components/slides/S15_Events';
import S16 from './components/slides/S16_Platform';
import S17 from './components/slides/S17_Testimonials';
import S18 from './components/slides/S18_WhyJR';
import S19 from './components/slides/S19_Journey';
import S20 from './components/slides/S20_Partners';
import S21 from './components/slides/S21_CTA';

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
			<S19 />
			<S20 />
			<S21 />
		</SlideEngine>
	);
}
