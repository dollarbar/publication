import { OrnateBorder } from "../components/OrnateBorder";
import { useState } from "react";

const articlesByMonth = [
  {
    month: "February 2026",
    articles: [
      {
        id: 1,
        title: "THE DIVINE LITURGY",
        author: "Father John Chrysostom",
        date: "February 2026",
        excerpt: "An exploration of the sacred mysteries and traditions of the Divine Liturgy, examining the ancient prayers and hymns that have sustained the faithful through the ages. The Divine Liturgy stands as the center of Orthodox worship.",
        citation: "Chrysostom, J. (2026). The Divine Liturgy. Orthodox Publications, 12(2), 45-67."
      }
    ]
  },
  {
    month: "January 2026",
    articles: [
      {
        id: 2,
        title: "LIVES OF THE SAINTS",
        author: "Mother Maria of Jerusalem",
        date: "January 2026",
        excerpt: "A chronicle of the holy men and women who gave their lives in service to Christ and His Church. Through their examples of faith, we find guidance for our own spiritual journey in the modern world.",
        citation: "Maria of Jerusalem. (2026). Lives of the Saints. Orthodox Publications, 12(1), 12-34."
      }
    ]
  },
  {
    month: "December 2025",
    articles: [
      {
        id: 3,
        title: "THEOLOGICAL ESSAYS",
        author: "Archbishop Theodore",
        date: "December 2025",
        excerpt: "Reflections on the nature of the Trinity, the Incarnation, and the mysteries of our faith. These essays draw from both patristic wisdom and contemporary theological discourse to illuminate eternal truths.",
        citation: "Theodore, A. (2025). Theological Essays. Orthodox Publications, 11(12), 78-102."
      }
    ]
  },
  {
    month: "November 2025",
    articles: [
      {
        id: 4,
        title: "THE PRAYER OF THE HEART",
        author: "Father Seraphim",
        date: "November 2025",
        excerpt: "A guide to the Jesus Prayer and the practice of hesychasm. Learn how the ancient desert fathers cultivated inner stillness and communion with God through this sacred prayer tradition.",
        citation: "Seraphim, F. (2025). The Prayer of the Heart. Orthodox Publications, 11(11), 23-45."
      }
    ]
  },
  {
    month: "October 2025",
    articles: [
      {
        id: 5,
        title: "ICONOGRAPHY AND THEOLOGY",
        author: "Sister Anna the Iconographer",
        date: "October 2025",
        excerpt: "Understanding the theological significance of sacred images in Orthodox tradition. Icons serve as windows to heaven, revealing divine truth through color, form, and sacred symbolism.",
        citation: "Anna the Iconographer. (2025). Iconography and Theology. Orthodox Publications, 11(10), 56-78."
      }
    ]
  },
  {
    month: "September 2025",
    articles: [
      {
        id: 6,
        title: "FASTING AND FEASTING",
        author: "Father Maximos",
        date: "September 2025",
        excerpt: "The spiritual discipline of fasting and the joy of feast days in the Orthodox calendar. Through these rhythms of abstinence and celebration, we align ourselves with the Church's sacred cycle.",
        citation: "Maximos, F. (2025). Fasting and Feasting. Orthodox Publications, 11(9), 34-56."
      }
    ]
  },
  {
    month: "August 2025",
    articles: [
      {
        id: 7,
        title: "THE TRANSFIGURATION",
        author: "Bishop Gregory",
        date: "August 2025",
        excerpt: "Contemplating the glorious Transfiguration of our Lord on Mount Tabor, where His divine light was revealed to the disciples. This feast illuminates the path to theosis and our calling to participate in divine glory.",
        citation: "Gregory, B. (2025). The Transfiguration. Orthodox Publications, 11(8), 89-112."
      }
    ]
  },
  {
    month: "July 2025",
    articles: [
      {
        id: 8,
        title: "THE APOSTOLIC WITNESS",
        author: "Archimandrite Paul",
        date: "July 2025",
        excerpt: "Exploring the lives and teachings of the Holy Apostles, pillars of the Church who carried the Gospel to the ends of the earth. Their witness continues to guide and inspire the faithful in every generation.",
        citation: "Paul, A. (2025). The Apostolic Witness. Orthodox Publications, 11(7), 23-48."
      }
    ]
  }
];

export default function Articles() {
  const [hoveredMonth, setHoveredMonth] = useState<string | null>("February 2026");

  return (
    <div className="min-h-screen bg-[#f5f1e8] flex flex-col">
      
      <div className="flex-1 flex">
        <OrnateBorder>
          <div className="max-w-6xl mx-auto">
            {/* Page Header */}
            <div className="flex justify-center mb-8">
              <div className="text-6xl">☦</div>
            </div>

            <h1 className="text-center mb-4" style={{ fontFamily: 'Cinzel, serif', fontSize: '3rem', fontWeight: 700, lineHeight: '1.2' }}>
              PREVIOUS
              <br />
              ARTICLES
            </h1>

            {/* Decorative line */}
            <div className="flex items-center justify-center mb-12">
              <div className="h-px bg-black w-24"></div>
              <div className="mx-4 text-2xl">✦</div>
              <div className="h-px bg-black w-24"></div>
            </div>

            {/* Two Column Layout: Months Sidebar + Preview Area */}
            <div className="grid grid-cols-12 gap-8 mb-12">
              {/* Left Sidebar - Months */}
              <div className="col-span-3">
                <h2 className="text-center mb-6 pb-2 border-b-2 border-black" style={{ fontFamily: 'Cinzel, serif', fontSize: '1rem', fontWeight: 600, letterSpacing: '0.1em' }}>
                  ARCHIVE
                </h2>
                <div className="space-y-2">
                  {articlesByMonth.map((monthData) => (
                    <div
                      key={monthData.month}
                      onMouseEnter={() => setHoveredMonth(monthData.month)}
                      className={`p-3 cursor-pointer transition-all border-l-4 ${
                        hoveredMonth === monthData.month 
                          ? 'border-black bg-white shadow-md' 
                          : 'border-gray-300 hover:border-gray-500'
                      }`}
                    >
                      <div className="text-center text-xs">✦</div>
                      <p className="text-center text-xs mt-1" style={{ fontFamily: 'Cinzel, serif', fontWeight: hoveredMonth === monthData.month ? 600 : 400 }}>
                        {monthData.month}
                      </p>
                      <p className="text-center text-xs text-gray-500 mt-1">
                        {monthData.articles.length} {monthData.articles.length === 1 ? 'Article' : 'Articles'}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Area - Article Preview */}
              <div 
                className="col-span-9 sticky top-8 self-start"
                onMouseEnter={() => {
                  // Keep the current hovered month when mouse enters preview area
                }}
                onMouseLeave={() => setHoveredMonth("February 2026")}
              >
                {hoveredMonth ? (
                  <div className="space-y-6">
                    {articlesByMonth
                      .find((m) => m.month === hoveredMonth)
                      ?.articles.map((article) => (
                        <div key={article.id} className="border-2 border-black p-6 bg-white shadow-lg">
                          {/* Article ornament */}
                          <div className="text-center mb-3 text-2xl">✦</div>
                          
                          {/* Title */}
                          <h2 className="text-center mb-3" style={{ fontFamily: 'Cinzel, serif', fontSize: '1.5rem', fontWeight: 600, letterSpacing: '0.05em' }}>
                            {article.title}
                          </h2>

                          {/* Author and Date */}
                          <p className="text-center mb-4 text-xs tracking-widest text-gray-600" style={{ fontFamily: 'Cinzel, serif' }}>
                            {article.author}
                          </p>
                          <p className="text-center mb-4 text-xs text-gray-500" style={{ fontFamily: 'Cinzel, serif' }}>
                            {article.date}
                          </p>

                          {/* Divider */}
                          <div className="h-px bg-gray-300 mb-4"></div>

                          {/* Excerpt */}
                          <p className="mb-4" style={{ fontFamily: 'EB Garamond, serif', fontSize: '1.125rem', lineHeight: '1.8' }}>
                            {article.excerpt}
                          </p>

                          {/* Citation */}
                          <p className="text-xs text-gray-500 italic mt-4" style={{ fontFamily: 'EB Garamond, serif' }}>
                            {article.citation}
                          </p>

                          {/* Read More */}
                          <div className="text-center mt-6">
                            <button className="text-xs tracking-widest hover:text-gray-600 transition-colors border-b border-black pb-1" style={{ fontFamily: 'Cinzel, serif' }}>
                              READ FULL ARTICLE →
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center border-2 border-dashed border-gray-300 bg-white/50 rounded">
                    <div className="text-center p-12">
                      <div className="text-4xl mb-4 text-gray-400">✦</div>
                      <p className="text-gray-500 italic" style={{ fontFamily: 'EB Garamond, serif', fontSize: '1.125rem' }}>
                        Hover over a month to preview articles
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom decorative element */}
            <div className="flex items-center justify-center mt-8">
              <div className="h-px bg-black w-16"></div>
              <div className="mx-4 text-xl">✦</div>
              <div className="h-px bg-black w-16"></div>
            </div>

            {/* Footer */}
            <p className="text-center mt-6 text-sm tracking-widest" style={{ fontFamily: 'Cinzel, serif' }}>
              ANNO DOMINI MMXXVI
            </p>
          </div>
        </OrnateBorder>
      </div>
    </div>
  );
}