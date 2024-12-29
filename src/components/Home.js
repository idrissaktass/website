import { Grid } from "@mui/system";
import AboutMe from './AboutSection';
import HeroSection from './HeroSection';
import Navbar from './Navbar';
import Services from './Services';
import WorkExperience from './WorkExperience';
import ContactMe from "./ContactMe";

function Home() {
  return (
    <Grid>
      <Navbar />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="about">
        <AboutMe />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="experience">
        <WorkExperience />
      </div>
      <div id="contact">
        <ContactMe />
      </div>
    </Grid>
  );
}


export default Home;
