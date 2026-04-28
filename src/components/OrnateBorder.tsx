import borderImage from "@/assets/border.png";

export function OrnateBorder({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full h-full bg-white flex-1 p-8">
      {/* Border frame using the uploaded image */}
      <div 
        className="relative h-full"
        style={{
          borderStyle: 'solid',
          borderWidth: '30px',
          borderImageSource: `url(${borderImage})`,
          borderImageSlice: '150',
          borderImageRepeat: 'repeat',
          borderImageWidth: '30px'
        }}
      >
        {/* Content wrapper */}
        <div className="p-12">
          {children}
        </div>
      </div>
    </div>
  );
}