export default function App() {
  return (
    <section className="relative w-full overflow-hidden">

      {/* parchment background */}
      <div className="absolute inset-0">
        <img
          src="/images/slavic-paper.jpg"
          alt=""
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-[#1b140e]/70" />
      </div>

      {/* ornamental top border */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-24 text-center">

        {/* top woodcut ornament */}
        <div className="mx-auto mb-8 w-full max-w-3xl border-t-8 border-b-8 border-[#3a2a1b] py-6">
          <div className="text-[#b08a4a] text-xs tracking-[0.4em] uppercase">
            Venetian Press • 16th Century Style
          </div>

          <h1 className="mt-4 font-serif text-4xl md:text-6xl tracking-wide text-[#e6d8b8]">
            ЛѢТОПИСЬ
          </h1>

          <p className="mt-3 text-[#d8c8a4] tracking-[0.3em] text-sm">
            Chronicle & Record
          </p>
        </div>

        {/* subtitle */}
        <p className="mx-auto max-w-2xl text-[#cdbb95] leading-relaxed">
          Inspired by the Church Slavonic printing tradition of the Vuković
          press in Venice (est. 1519), this banner evokes the ornamental
          woodcut borders and rubricated lettering of early Slavic printed
          books.
        </p>

        {/* CTA */}
        <button className="mt-10 px-8 py-3 bg-[#8b2e1e] text-[#f3e8d0] tracking-wider hover:bg-[#6f2417] transition">
          ENTER ARCHIVE
        </button>
      </div>
    </section>
  );
}