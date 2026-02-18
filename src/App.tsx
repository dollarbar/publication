import { ByzantineBorder } from "./components/byzantine-border";
import { copy } from "./lorepsum.tsx";

export default function App() {
  return (
    <div className="size-full bg-[#f8f6f0] flex items-center justify-center p-8">
      <div className="relative w-full max-w-4xl flex aspect-[8.5/11] bg-white shadow-2xl">
        {/* Byzantine Border Pattern */}
        <ByzantineBorder />
        
        {/* Title and Subtitle - Top Aligned */}
        <div className="absolute top-20 flex flex-col px-16">
          <div className="text-center max-w-2xl space-y-2">
            <h1 className="text-5xl tracking-wide text-[#8b4513]">THE CHRONICLE</h1>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-[#8b4513]"></div>
              <p className="text-sm tracking-[0.3em] text-[#8b4513]">QUARTERLY EDITION</p>
              <div className="h-px w-16 bg-[#8b4513]"></div>
            </div>
            <p className="text-xs tracking-widest text-gray-500 pt-2">VOLUME XII • WINTER 2026</p>
          </div>
          {/* Previous Publications - Right Side */}
          <div className="ml-auto mt-4 mr-2">
            <div className="space-y-4">
              <h3 className="text-xs tracking-widest text-[#8b4513] mb-3">PREVIOUS EDITIONS</h3>
              <nav className="space-y-2">
                <a href="#" className="block text-xs text-gray-600 hover:text-[#8b4513] transition-colors">
                  Volume XI • Autumn 2025
                </a>
                <a href="#" className="block text-xs text-gray-600 hover:text-[#8b4513] transition-colors">
                  Volume X • Summer 2025
                </a>
                <a href="#" className="block text-xs text-gray-600 hover:text-[#8b4513] transition-colors">
                  Volume IX • Spring 2025
                </a>
                <a href="#" className="block text-xs text-gray-600 hover:text-[#8b4513] transition-colors">
                  Volume VIII • Winter 2025
                </a>
                <a href="#" className="block text-xs text-gray-600 hover:text-[#8b4513] transition-colors">
                  Volume VII • Autumn 2024
                </a>
              </nav>
              <div className="py-3 border-t border-gray-300">
                <a href="#" className="block text-xs text-[#8b4513] hover:underline">
                  View All Archives →
                </a>
              </div>
            </div>
          </div>
          {/* Body Content - Center Aligned */}
          <div className="px-16">
            <div className="text-center max-w-xl space-y-4 text-gray-700">
              <p className="text-lg italic">
                A publication dedicated to exploring the intersection of tradition and modernity
              </p>
              <p className="text-sm leading-relaxed">
                In this edition, we delve into the rich tapestry of Byzantine art and architecture, 
                examining how these ancient patterns continue to influence contemporary design. 
                From the golden mosaics of Ravenna to the intricate geometric designs of 
                Constantinople, we trace the enduring legacy of an empire.

                {copy}
                <br />
                <br />
                {copy}
                <br />
                <br />
                {copy}
                <br />
                <br />
                {copy}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}