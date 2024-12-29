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
      <Navbar/>
      <HeroSection/>
      <AboutMe/>
      <Services/>
      <WorkExperience/>
      <ContactMe/>
    </Grid> 
  );
}

export default Home;
