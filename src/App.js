import { ThemeProvider } from 'next-themes';
import { AboutMe } from './components/AboutMe/AboutMe';
import ParticlesBackground from './components/Config/ParticlesBackground';
import { ButtonToTop } from './components/Home/ButtonToTop';
import { PanelHero } from './components/Home/PanelHero';
import { NavMenu } from './components/NavMenu/NavMenu';
import { ProjectsLayout } from './components/Projects/ProjectsLayout';
import { ContactMeLayout } from './components/ContactMe/ContactMeLayout';
import { Footer } from './components/Footer/Footer';
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
