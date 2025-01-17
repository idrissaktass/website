import { Grid } from "@mui/system";
import AboutMe from './AboutSection';
import HeroSection from './HeroSection';
import Navbar from './Navbar';
import Services from './Services';
import WorkExperience from './WorkExperience';

function Home() {
  return (
    <Grid>
      <div id="hero">
        <Navbar />
      </div>
      <HeroSection />
      <div id="about">
        <AboutMe />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="experience">
        <WorkExperience />
      </div>
    </Grid>
  );
}


export default Home;
