



export function Navbar() {
  return (
    <div className="w-full border-b border-black/15">
      <nav className="mx-auto max-w-6xl px-6">
        <div className="flex h-12 items-center justify-end text-sm tracking-wide text-black/75">
          
          <a href="#home" className="px-3 hover:text-black transition">
            Home
          </a>
          <a href="#archive" className="px-3 hover:text-black transition">
            Archive
          </a>
          <a href="#about" className="px-3 hover:text-black transition">
            About
          </a>
          <a href="#contact" className="px-3 hover:text-black transition">
            Contact
          </a>

        </div>
      </nav>
    </div>
  );
}
