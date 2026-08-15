import {
  AuroraBackground,
  FadeIn,
} from "@/animations";



import HeroBadge from "./HeroBadge";
import HeroHeading from "./HeroHeading";
import HeroButtons from "./HeroButtons";
import HeroTrustSection from "./HeroTrustSection";
import HeroDashboardPreview from "./HeroDashboardPreview";
import HeroScrollIndicator from "./HeroScrollIndicator";


const Hero = () => {
  return (
    <AuroraBackground>
      
      <section className="relative">

        <div className="mx-auto max-w-7xl px-6 pt-24 pb-12 lg:px-8">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* LEFT */}

            <div>

              <div className="space-y-8">
                <FadeIn delay={0.1}>
                  <HeroBadge />
                </FadeIn>
                <FadeIn delay={0.2}>
                  <HeroHeading />
                </FadeIn>
              </div>

              <FadeIn delay={0.3}>
                <HeroButtons />
              </FadeIn>

              <FadeIn delay={0.4}>
                <HeroTrustSection />
              </FadeIn>

            </div>

            {/* RIGHT */}

            <div className="flex justify-center lg:justify-end">

              <FadeIn delay={0.5}>
                <HeroDashboardPreview />
              </FadeIn>

            </div>

          </div>
          <HeroScrollIndicator />
        </div>
        

      </section>
      
    </AuroraBackground>
  );
};

export default Hero;