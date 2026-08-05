import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="w-full h-20 border-b border-white/10 backdrop-blur-md bg-black/30">
      <div className="max-w-7xl mx-auto h-full px-8 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide text-white">
          FinLens AI
        </h1>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 text-gray-300">
          <a href="#" className="hover:text-white transition">
            Features
          </a>

          <a href="#" className="hover:text-white transition">
            About
          </a>

          <a href="#" className="hover:text-white transition">
            Contact
          </a>
        </div>

        {/* Button */}
        <Button className="rounded-xl">
          Get Started
        </Button>

      </div>
    </nav>
  );
};

export default Navbar;