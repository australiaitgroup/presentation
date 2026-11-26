import SlideEngine from './components/SlideEngine';
import S01 from './components/slides/S01_Cover';
import S02 from './components/slides/S02_OfferWall';
import S03 from './components/slides/S03_About';
import S04 from './components/slides/S04_Path';
import S05 from './components/slides/S05_Assessment';
import S06 from './components/slides/S06_LearnAI';
import S07 from './components/slides/S07_Bootcamp';
import S08 from './components/slides/S08_P3';
import S09 from './components/slides/S09_CertMaster';
import S10 from './components/slides/S10_Connect';
import S11 from './components/slides/S11_CareerOS';
import S12 from './components/slides/S12_Mentors';
import S13 from './components/slides/S13_Voices';
import S14 from './components/slides/S14_Community';
import S15 from './components/slides/S15_Business';
import S16 from './components/slides/S16_Contact';

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
		</SlideEngine>
	);
}
