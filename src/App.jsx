import Hero from "./components/Hero";
import Services from "./components/Services";
import Navbar from "./components/Navbar";
import OurServices from "./components/OurServices";
import Featured from "./components/Featured";
import HowWorks from "./components/HowWorks";
import Review from "./components/Review";
import Blog from "./components/Blog";
import FAQ from "./components/FAQ";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <OurServices />
      <Featured />
      <HowWorks />
      <Review />
      <Blog />
      <FAQ />
      <Banner />
      <Footer />
    </>
  );
}