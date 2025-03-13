import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(242, 242, 160, 0.8)] backdrop-blur-lg border-b border-black/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-black">
            {" "}
            Narendra<span className="text-500"> Nelluri</span>{" "}
          </a>

          <div
            className="w-7 h-5 text-black font-bold relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-black hover:font-bold">
              {" "}
              Home
            </a>
            <a href="#about" className="text-black hover:font-bold">
              {" "}
              About{" "}
            </a>
            <a href="#projects" className="text-black hover:font-bold">
              {" "}
              Projects{" "}
            </a>
            <a href="#contact" className="text-black hover:font-bold">
              {" "}
              Contact{" "}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
