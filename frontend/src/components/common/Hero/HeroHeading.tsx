const HeroHeading = () => {
  return (
    <div className="max-w-3xl">

      

      {/* Heading */}

      <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">

        Understand Every

        <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(34,211,238,0.18)]">
          Rupee.
        </span>

        <span className="mt-2 block">
          Before It Leaves
        </span>

        <span className="block">
          Your Wallet.
        </span>

      </h1>

      {/* Description */}

      <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">

        FinLens AI analyzes your spending behaviour, predicts financial risks,
        builds smarter budgets, and delivers personalized AI-powered insights
        to help you make confident financial decisions every day.

      </p>

    </div>
  );
};

export default HeroHeading;