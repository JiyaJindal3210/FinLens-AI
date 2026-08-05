const HeroHeading = () => {
  return (
    <div className="space-y-8">

      <div className="space-y-5">

        <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight text-white">

          Understand Your

          <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
            Financial Behaviour
          </span>

          With AI

        </h1>

        <p className="max-w-2xl text-lg md:text-xl leading-8 text-zinc-400">

          FinLens AI learns your spending habits,
          detects unusual transactions,
          predicts financial risks,
          and helps you build smarter financial decisions every day.

        </p>

      </div>

    </div>
  );
};

export default HeroHeading;