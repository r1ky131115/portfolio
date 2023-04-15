import { AboutMe } from './assets/components/AboutMe/AboutMe';
import ParticlesBackground from './assets/components/Config/ParticlesBackground';
import { ButtonToTop } from './assets/components/Home/ButtonToTop';
import { PanelHero } from './assets/components/Home/PanelHero';
import { NavMenu } from './assets/components/NavMenu/NavMenu';

function App() {
  return (
    <>
      <ParticlesBackground />
      <NavMenu />
      <PanelHero />
      <AboutMe />
      <ButtonToTop />
    </>
  );
}

export default App;
