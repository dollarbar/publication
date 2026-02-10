export function ByzantineBorder() {
  return (
    <>
      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-16 border-t-4 border-b-2 border-[#8b4513]">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <pattern id="topPattern" x="0" y="0" width="80" height="64" patternUnits="userSpaceOnUse">
            {/* Greek Key Pattern */}
            <path d="M 10 10 L 30 10 L 30 30 L 50 30 L 50 10 L 70 10 L 70 54 L 50 54 L 50 34 L 30 34 L 30 54 L 10 54 Z" 
                  fill="none" stroke="#8b4513" strokeWidth="2"/>
            {/* Decorative Circles */}
            <circle cx="40" cy="32" r="4" fill="#c19a6b" opacity="0.6"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#topPattern)"/>
        </svg>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-16 border-t-2 border-b-4 border-[#8b4513]">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <pattern id="bottomPattern" x="0" y="0" width="80" height="64" patternUnits="userSpaceOnUse">
            {/* Greek Key Pattern */}
            <path d="M 10 10 L 30 10 L 30 30 L 50 30 L 50 10 L 70 10 L 70 54 L 50 54 L 50 34 L 30 34 L 30 54 L 10 54 Z" 
                  fill="none" stroke="#8b4513" strokeWidth="2"/>
            {/* Decorative Circles */}
            <circle cx="40" cy="32" r="4" fill="#c19a6b" opacity="0.6"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#bottomPattern)"/>
        </svg>
      </div>

      {/* Left Border */}
      <div className="absolute left-0 top-16 bottom-16 w-16 border-l-4 border-r-2 border-[#8b4513]">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <pattern id="leftPattern" x="0" y="0" width="64" height="80" patternUnits="userSpaceOnUse">
            {/* Vertical Greek Key */}
            <path d="M 10 10 L 10 30 L 30 30 L 30 50 L 10 50 L 10 70 L 54 70 L 54 50 L 34 50 L 34 30 L 54 30 L 54 10 Z" 
                  fill="none" stroke="#8b4513" strokeWidth="2"/>
            {/* Cross Pattern */}
            <path d="M 26 40 L 32 40 M 29 37 L 29 43" stroke="#c19a6b" strokeWidth="2" opacity="0.6"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#leftPattern)"/>
        </svg>
      </div>

      {/* Right Border */}
      <div className="absolute right-0 top-16 bottom-16 w-16 border-l-2 border-r-4 border-[#8b4513]">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <pattern id="rightPattern" x="0" y="0" width="64" height="80" patternUnits="userSpaceOnUse">
            {/* Vertical Greek Key */}
            <path d="M 10 10 L 10 30 L 30 30 L 30 50 L 10 50 L 10 70 L 54 70 L 54 50 L 34 50 L 34 30 L 54 30 L 54 10 Z" 
                  fill="none" stroke="#8b4513" strokeWidth="2"/>
            {/* Cross Pattern */}
            <path d="M 26 40 L 32 40 M 29 37 L 29 43" stroke="#c19a6b" strokeWidth="2" opacity="0.6"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#rightPattern)"/>
        </svg>
      </div>

      {/* Corner Ornaments */}
      <div className="absolute top-0 left-0 w-16 h-16 flex items-center justify-center">
        <svg width="48" height="48" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="12" fill="none" stroke="#8b4513" strokeWidth="2"/>
          <circle cx="24" cy="24" r="6" fill="#c19a6b" opacity="0.6"/>
          <path d="M 24 12 L 24 18 M 24 30 L 24 36 M 12 24 L 18 24 M 30 24 L 36 24" 
                stroke="#8b4513" strokeWidth="2"/>
        </svg>
      </div>

      <div className="absolute top-0 right-0 w-16 h-16 flex items-center justify-center">
        <svg width="48" height="48" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="12" fill="none" stroke="#8b4513" strokeWidth="2"/>
          <circle cx="24" cy="24" r="6" fill="#c19a6b" opacity="0.6"/>
          <path d="M 24 12 L 24 18 M 24 30 L 24 36 M 12 24 L 18 24 M 30 24 L 36 24" 
                stroke="#8b4513" strokeWidth="2"/>
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-16 h-16 flex items-center justify-center">
        <svg width="48" height="48" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="12" fill="none" stroke="#8b4513" strokeWidth="2"/>
          <circle cx="24" cy="24" r="6" fill="#c19a6b" opacity="0.6"/>
          <path d="M 24 12 L 24 18 M 24 30 L 24 36 M 12 24 L 18 24 M 30 24 L 36 24" 
                stroke="#8b4513" strokeWidth="2"/>
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 w-16 h-16 flex items-center justify-center">
        <svg width="48" height="48" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="12" fill="none" stroke="#8b4513" strokeWidth="2"/>
          <circle cx="24" cy="24" r="6" fill="#c19a6b" opacity="0.6"/>
          <path d="M 24 12 L 24 18 M 24 30 L 24 36 M 12 24 L 18 24 M 30 24 L 36 24" 
                stroke="#8b4513" strokeWidth="2"/>
        </svg>
      </div>
    </>
  );
}
