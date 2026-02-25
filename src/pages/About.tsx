import { OrnateBorder } from "../components/OrnateBorder";

export default function About() {
  return (
    <div className="min-h-screen bg-[#f5f1e8] flex flex-col">
      
      <div className="flex-1 flex">
        <OrnateBorder>
          <div className="max-w-4xl mx-auto">
            {/* Page Header */}
            <div className="flex justify-center mb-8">
              <div className="text-6xl">☦</div>
            </div>

            <h1 className="text-center mb-4" style={{ fontFamily: 'Cinzel, serif', fontSize: '3rem', fontWeight: 700, lineHeight: '1.2' }}>
              ABOUT
              <br />
              ORTHODOX PUBLICATIONS
            </h1>

            {/* Decorative line */}
            <div className="flex items-center justify-center mb-12">
              <div className="h-px bg-black w-24"></div>
              <div className="mx-4 text-2xl">✦</div>
              <div className="h-px bg-black w-24"></div>
            </div>

            {/* Main Content */}
            <div className="space-y-8" style={{ fontFamily: 'EB Garamond, serif', fontSize: '1.125rem', lineHeight: '1.8' }}>
              {/* Mission Section */}
              <div>
                <h2 className="text-center mb-4" style={{ fontFamily: 'Cinzel, serif', fontSize: '1.5rem', fontWeight: 600, letterSpacing: '0.05em' }}>
                  OUR MISSION
                </h2>
                <div className="text-center mb-4 text-xl">✦</div>
                <p className="mb-4">
                  Orthodox Publications is dedicated to preserving and sharing the timeless wisdom of the Orthodox Christian tradition. Since our founding, we have sought to illuminate the sacred mysteries of our faith through scholarly articles, theological reflections, and devotional writings.
                </p>
                <p>
                  Our mission is to serve as a beacon of Orthodox teaching, providing resources for both the faithful seeking to deepen their spiritual life and scholars exploring the rich theological heritage of the Eastern Church.
                </p>
              </div>

              {/* Divider */}
              <div className="flex items-center justify-center my-8">
                <div className="h-px bg-gray-300 w-32"></div>
              </div>

              {/* History Section */}
              <div>
                <h2 className="text-center mb-4" style={{ fontFamily: 'Cinzel, serif', fontSize: '1.5rem', fontWeight: 600, letterSpacing: '0.05em' }}>
                  OUR HISTORY
                </h2>
                <div className="text-center mb-4 text-xl">✦</div>
                <p className="mb-4">
                  Founded in the spirit of the ancient Church Fathers, Orthodox Publications continues a tradition of Christian scholarship that stretches back through the centuries. We draw inspiration from the patristic writings, the lives of the saints, and the ongoing theological dialogue within the Orthodox Church.
                </p>
                <p>
                  Each publication is crafted with care and reverence, maintaining the aesthetic and spiritual sensibilities that have characterized Orthodox literature throughout the ages.
                </p>
              </div>

              {/* Divider */}
              <div className="flex items-center justify-center my-8">
                <div className="h-px bg-gray-300 w-32"></div>
              </div>

              {/* Editorial Board */}
              <div>
                <h2 className="text-center mb-6" style={{ fontFamily: 'Cinzel, serif', fontSize: '1.5rem', fontWeight: 600, letterSpacing: '0.05em' }}>
                  EDITORIAL BOARD
                </h2>
                <div className="text-center mb-6 text-xl">✦</div>
                
                <div className="space-y-6">
                  <div className="text-center">
                    <p className="tracking-widest mb-1" style={{ fontFamily: 'Cinzel, serif', fontSize: '1rem', fontWeight: 600 }}>
                      FATHER JOHN CHRYSOSTOM
                    </p>
                    <p className="text-sm text-gray-600 italic">Editor-in-Chief</p>
                  </div>

                  <div className="text-center">
                    <p className="tracking-widest mb-1" style={{ fontFamily: 'Cinzel, serif', fontSize: '1rem', fontWeight: 600 }}>
                      MOTHER MARIA OF JERUSALEM
                    </p>
                    <p className="text-sm text-gray-600 italic">Associate Editor</p>
                  </div>

                  <div className="text-center">
                    <p className="tracking-widest mb-1" style={{ fontFamily: 'Cinzel, serif', fontSize: '1rem', fontWeight: 600 }}>
                      ARCHBISHOP THEODORE
                    </p>
                    <p className="text-sm text-gray-600 italic">Theological Advisor</p>
                  </div>

                  <div className="text-center">
                    <p className="tracking-widest mb-1" style={{ fontFamily: 'Cinzel, serif', fontSize: '1rem', fontWeight: 600 }}>
                      FATHER SERAPHIM
                    </p>
                    <p className="text-sm text-gray-600 italic">Spiritual Director</p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="flex items-center justify-center my-8">
                <div className="h-px bg-gray-300 w-32"></div>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-center mb-4" style={{ fontFamily: 'Cinzel, serif', fontSize: '1.5rem', fontWeight: 600, letterSpacing: '0.05em' }}>
                  CONTACT US
                </h2>
                <div className="text-center mb-4 text-xl">✦</div>
                <div className="text-center space-y-2">
                  <p>Orthodox Publications</p>
                  <p>Ancient Monastery of the Holy Cross</p>
                  <p>Jerusalem, Holy Land</p>
                  <p className="mt-4 text-sm tracking-widest" style={{ fontFamily: 'Cinzel, serif' }}>
                    PUBLICATIONS@ORTHODOX.ORG
                  </p>
                </div>
              </div>
            </div>

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
          </div>
        </OrnateBorder>
      </div>
    </div>
  );
}