import * as React from "react";

type FullPageFrameProps = {
  children: React.ReactNode;
  strokeWidth?: number;
};

export const FullPageFrame: React.FC<FullPageFrameProps> = ({
  children,
  strokeWidth = 2,
}) => {
  return (
    <div className="relative min-h-screen w-full bg-[#f8f6f0] overflow-hidden">
      {/* SVG Frame */}
      <svg
        className="pointer-events-none fixed inset-0 h-full w-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        {/* Outer Border */}
        <rect
          x="20"
          y="20"
          width="960"
          height="960"
          fill="none"
          stroke="black"
          strokeWidth={strokeWidth}
        />

        {/* Inner Border */}
        <rect
          x="50"
          y="50"
          width="900"
          height="900"
          fill="none"
          stroke="black"
          strokeWidth={strokeWidth - 0.5}
          strokeDasharray="4 6"
        />

        {/* Corner Cross Flourish */}
        {[
          { x: 70, y: 70, r: 0 },
          { x: 930, y: 70, r: 90 },
          { x: 930, y: 930, r: 180 },
          { x: 70, y: 930, r: 270 },
        ].map((c, i) => (
          <g
            key={i}
            transform={`translate(${c.x} ${c.y}) rotate(${c.r}) translate(-70 -70)`}
          >
            <path
              d="M70 30 L70 110 M30 70 L110 70"
              stroke="black"
              strokeWidth={strokeWidth}
            />
            <circle
              cx="70"
              cy="70"
              r="28"
              fill="none"
              stroke="black"
              strokeWidth={strokeWidth}
            />
          </g>
        ))}

        {/* Mid-side Ornament */}
        {[
          { x: 500, y: 50, r: 0 },
          { x: 950, y: 500, r: 90 },
          { x: 500, y: 950, r: 180 },
          { x: 50, y: 500, r: 270 },
        ].map((m, i) => (
          <g key={i} transform={`translate(${m.x} ${m.y}) rotate(${m.r})`}>
            <path
              d="M-120 0 C-60 -20, 60 -20, 120 0"
              stroke="black"
              fill="none"
              strokeWidth={strokeWidth - 0.5}
            />
            <circle
              cx="0"
              cy="0"
              r="10"
              stroke="black"
              fill="none"
              strokeWidth={strokeWidth}
            />
          </g>
        ))}
      </svg>

      {/* Page Content */}
      <div className="relative z-10 px-16 py-20">
        {children}
      </div>
    </div>
  );
};