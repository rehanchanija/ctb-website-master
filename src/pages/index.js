import OurPragrammes from "@/components/OurProgrammes";
import TeamMembers from "@/components/TeamMembers";
import BannerSection from "@/components/bannerSection";
import { Imagesection } from "@/components/image";
import Ourimpact from "@/components/ourImpact";
import Vision from "@/components/visionSection";
import About from "../components/about";
import Contact from "../components/contact";
import { Download } from "../components/download";

function Home() {
  return (
    <>
      <BannerSection />
      <Vision />
      <Ourimpact />
      <OurPragrammes />
      <About />
      <Imagesection />
      <TeamMembers />
      <Download />
      <Contact />
    </>
  );
}
export default Home;
