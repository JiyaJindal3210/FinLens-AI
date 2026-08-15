const FeatureBackground = () => {
  return (
    <>
      
      {/* Left Cyan Glow */}
      <div
        className="
          absolute
          -left-32
          top-40
          h-[420px]
          w-[420px]
          rounded-full
          bg-cyan-500/10
          blur-[140px]
        "
      />

      {/* Center Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[550px]
          w-[550px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/5
          blur-[180px]
        "
      />

      {/* Right Purple Glow */}
      <div
        className="
          absolute
          -right-32
          bottom-20
          h-[480px]
          w-[480px]
          rounded-full
          bg-violet-500/10
          blur-[160px]
        "
      />
    </>
  );
};

export default FeatureBackground;