import Navbar from "@/components/common/Navbar";
import Hero from "@/components/common/Hero/Hero";
import FeatureSection from "@/components/Features/FeatureSection";
import PageBackground from "@/components/PageBackground";
import AIInsightsSection from "@/components/AIInsightsPreview/AIInsightsSection"

const LandingPage = () => {
  return (
    <main className="min-h-screen bg-[#09090B] text-white">

      <Navbar />

      <PageBackground>
        <Hero />
        <FeatureSection />
        <AIInsightsSection />
      </PageBackground>

    </main>
  );
};

export default LandingPage;