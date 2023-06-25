import { ThemeProvider } from 'next-themes';
import { AboutMe } from './assets/components/AboutMe/AboutMe';
import ParticlesBackground from './assets/components/Config/ParticlesBackground';
import { ButtonToTop } from './assets/components/Home/ButtonToTop';
import { PanelHero } from './assets/components/Home/PanelHero';
import { NavMenu } from './assets/components/NavMenu/NavMenu';
import { ProjectsLayout } from './assets/components/Projects/ProjectsLayout';
import { ContactMeLayout } from './assets/components/ContactMe/ContactMeLayout';
import { Footer } from './assets/components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function App() {
  return (
    <ThemeProvider>
      <ParticlesBackground />
      <NavMenu />
      <PanelHero />
      <AboutMe />
      <ProjectsLayout />
      <ContactMeLayout />
      <Footer />

      <ButtonToTop />
    </ThemeProvider>
  );
}

export default App;
