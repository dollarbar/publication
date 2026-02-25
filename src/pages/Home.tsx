import { OrnateBorder } from "@/components/OrnateBorder2";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f1e8] flex flex-col">
      
      <div className="flex-1 flex">
        <OrnateBorder>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content - left side */}
            <div className="lg:col-span-2 relative">
              {/* Page Number - Top Left */}
              <div className="absolute top-0 left-0">
                <p className="text-xs tracking-wider text-gray-600" style={{ fontFamily: 'Cinzel, serif' }}>
                  PAGE 1
                </p>
              </div>

              {/* Ornamental top */}
              <div className="flex justify-center mb-8">
                <div className="text-6xl">☦</div>
              </div>

              {/* Title */}
              <h1 className="text-center mb-4" style={{ fontFamily: 'Cinzel, serif', fontSize: '3rem', fontWeight: 700, lineHeight: '1.2' }}>
                ORTHODOX
                <br />
                PUBLICATION
              </h1>

              {/* Author */}
              <p className="text-center mb-8 text-sm tracking-widest text-gray-700" style={{ fontFamily: 'Cinzel, serif' }}>
                BY FATHER JOHN CHRYSOSTOM
              </p>

              {/* Decorative line */}
              <div className="flex items-center justify-center mb-8">
                <div className="h-px bg-black w-24"></div>
                <div className="mx-4 text-2xl">✦</div>
                <div className="h-px bg-black w-24"></div>
              </div>

              {/* Subtitle */}
              <p className="text-center mb-12 text-lg tracking-widest" style={{ fontFamily: 'Cinzel, serif' }}>
                IN NOMINE PATRIS
              </p>

              {/* Body text */}
              <div className="space-y-6" style={{ fontFamily: 'EB Garamond, serif', fontSize: '1.125rem', lineHeight: '1.8' }}>
                <p className="first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1" style={{ fontFamily: 'EB Garamond, serif' }}>
                  In the beginning was the Word, and the Word was with God, and the Word was God. The same was in the beginning with God. All things were made by him; and without him was not any thing made that was made. In him was life; and the life was the light of men.
                </p>
                
                <p style={{ fontFamily: 'EB Garamond, serif' }}>
                  And the light shineth in darkness; and the darkness comprehended it not. There was a man sent from God, whose name was John. The same came for a witness, to bear witness of the Light, that all men through him might believe.
                </p>

                <p style={{ fontFamily: 'EB Garamond, serif' }}>
                  He was not that Light, but was sent to bear witness of that Light. That was the true Light, which lighteth every man that cometh into the world. He was in the world, and the world was made by him, and the world knew him not.
                </p>
              </div>

              {/* Citation */}
              <p className="text-left mt-8 text-xs text-gray-500" style={{ fontFamily: 'EB Garamond, serif' }}>
                Holy Bible. (2026). <i>John</i> 1:1-10.
              </p>

              {/* Bottom decorative element */}
              <div className="flex items-center justify-center mt-12">
                <div className="h-px bg-black w-16"></div>
                <div className="mx-4 text-xl">✦</div>
                <div className="h-px bg-black w-16"></div>
              </div>

              {/* Footer */}
              <p className="text-center mt-8 text-sm tracking-widest" style={{ fontFamily: 'Cinzel, serif' }}>
                ANNO DOMINI MMXXVI
              </p>

              {/* Pages */}
              <div className="flex items-center justify-center mt-6 gap-4">
                <button className="text-gray-600 hover:text-black transition-colors" aria-label="Previous page">
                  <span className="text-xl">←</span>
                </button>
                <p className="text-xs tracking-wider text-gray-600" style={{ fontFamily: 'Cinzel, serif' }}>
                  PAGES 1-3
                </p>
                <button className="text-gray-600 hover:text-black transition-colors" aria-label="Next page">
                  <span className="text-xl">→</span>
                </button>
              </div>
            </div>

            {/* Recent publications - right side */}
            <div className="lg:col-span-1 pl-8">
              <h2 className="text-center mb-4 border-b-2 border-black pb-2" style={{ fontFamily: 'Cinzel, serif', fontSize: '1rem', fontWeight: 600, letterSpacing: '0.1em' }}>
                RECENT<br />PUBLICATIONS
              </h2>

              <div className="space-y-4">
                <div className="border-b border-gray-300 pb-3">
                  <div className="text-center mb-1 text-xl">✦</div>
                  <h3 className="mb-1 text-center" style={{ fontFamily: 'Cinzel, serif', fontSize: '0.75rem', fontWeight: 600 }}>
                    THE DIVINE LITURGY
                  </h3>
                  <p className="text-xs text-center text-gray-600" style={{ fontFamily: 'Cinzel, serif' }}>
                    February 2026
                  </p>
                </div>

                <div className="border-b border-gray-300 pb-3">
                  <div className="text-center mb-1 text-xl">✦</div>
                  <h3 className="mb-1 text-center" style={{ fontFamily: 'Cinzel, serif', fontSize: '0.75rem', fontWeight: 600 }}>
                    LIVES OF THE SAINTS
                  </h3>
                  <p className="text-xs text-center text-gray-600" style={{ fontFamily: 'Cinzel, serif' }}>
                    January 2026
                  </p>
                </div>

                <div className="pb-3">
                  <div className="text-center mb-1 text-xl">✦</div>
                  <h3 className="mb-1 text-center" style={{ fontFamily: 'Cinzel, serif', fontSize: '0.75rem', fontWeight: 600 }}>
                    THEOLOGICAL ESSAYS
                  </h3>
                  <p className="text-xs text-center text-gray-600" style={{ fontFamily: 'Cinzel, serif' }}>
                    December 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </OrnateBorder>
      </div>
    </div>
  );
}