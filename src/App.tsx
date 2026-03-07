import { Routes, Route } from 'react-router-dom';
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
import Empresa from './pages/Empresa';
import Sobre from './pages/Sobre';
import Legal from './pages/Legal';
import Termos from './pages/Termos';
import Privacidade from './pages/Privacidade';
import Cookies from './pages/Cookies';

function LandingPage() {
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

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/empresa" element={<Empresa />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/legal" element={<Legal />} />
      <Route path="/termos" element={<Termos />} />
      <Route path="/privacidade" element={<Privacidade />} />
      <Route path="/cookies" element={<Cookies />} />
    </Routes>
  );
}
