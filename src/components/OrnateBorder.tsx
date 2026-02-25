export function OrnateBorder({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full h-full bg-white flex-1">
      {/* Outer thick border */}
      <div className="border-[12px] border-black relative h-full">
        {/* Decorative corner flourishes */}
        {/* <div className="absolute top-0 left-0 text-4xl -translate-x-2 -translate-y-2">✤</div>
        <div className="absolute top-0 right-0 text-4xl translate-x-2 -translate-y-2">✤</div>
        <div className="absolute bottom-0 left-0 text-4xl -translate-x-2 translate-y-2">✤</div>
        <div className="absolute bottom-0 right-0 text-4xl translate-x-2 translate-y-2">✤</div>
        */}
        {/* Inner border */}
        <div className="border-4 border-black m-4 relative">
          {/* Side decorative elements */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 text-2xl bg-white px-1">✦</div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 text-2xl bg-white px-1">✦</div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl bg-white py-1">✦</div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-2xl bg-white py-1">✦</div>

          {/* Content wrapper */}
          <div className="p-12">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}