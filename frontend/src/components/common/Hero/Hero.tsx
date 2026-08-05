import HeroBadge from "./HeroBadge";
import HeroHeading from "./HeroHeading";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";
import HeroDashboardPreview from "./HeroDashboardPreview";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">

      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <HeroBadge />

            <HeroHeading />

            <HeroButtons />

            <HeroStats />

          </div>

          {/* RIGHT */}

          <div className="flex justify-center lg:justify-end">

            <HeroDashboardPreview />

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;