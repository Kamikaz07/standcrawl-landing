import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import FeaturesGrid from './components/FeaturesGrid';
import FeatureShowcase from './components/FeatureShowcase';
import HowItWorks from './components/HowItWorks';
import AcquisitionAgent from './components/AcquisitionAgent';
import DashboardPreview from './components/DashboardPreview';
import Platforms from './components/Platforms';
import Security from './components/Security';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <FeaturesGrid />
        <FeatureShowcase />
        <HowItWorks />
        <AcquisitionAgent />
        <DashboardPreview />
        <Platforms />
        <Security />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
