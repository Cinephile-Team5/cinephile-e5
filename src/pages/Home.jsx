
export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0B1F] text-[#E2E0FC] px-6 pt-24 pb-32 font-['Be_Vietnam_Pro']">
      {/* HERO */}
      <section className="text-center">
        {/* BADGE */}
        <div className="inline-block px-5 py-2 rounded-full border border-[#DF00C8]/40 bg-[#DF00C8]/10 text-[#FFACE8] text-sm tracking-[0.25em] uppercase font-['Spline_Sans']">
          Ultra HD Streaming
        </div>

        {/* TITLE */}
        <h1 className="mt-16 text-6xl font-extrabold leading-tight font-['Spline_Sans']">
          Discover{" "}
          <span className="text-[#00F4FE]">
            Pure
          </span>
          <br />
          Cinema.
        </h1>

        {/* TEXT */}
        <p className="mt-10 text-[#7D92B1] text-xl leading-relaxed max-w-md mx-auto">
          Precision-engineered streaming for the world's most dedicated
          cinephiles.
        </p>

        {/* BUTTONS */}
        <div className="mt-12 flex flex-col gap-5">
          <button className="bg-[#00F4FE] text-[#0D0B1F] text-3xl font-bold py-5 rounded-2xl transition hover:scale-[1.02]">
            Get Access
          </button>

          <button className="border border-[#00F4FE]/30 text-[#00F4FE] text-3xl font-bold py-5 rounded-2xl transition hover:bg-[#00F4FE]/10">
            View Catalog
          </button>
        </div>
      </section>

      {/* FEATURED MOVIE */}
      <section className="mt-36">
        <div className="relative rounded-3xl overflow-hidden border border-white/10">
          <img
             src="/interstellar.jpg"
            alt="Featured movie"
            className="w-full h-[240px] object-cover opacity-80"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B1F] to-transparent" />

          <div className="absolute bottom-6 left-6">
            <span className="px-4 py-1 rounded-full border border-[#DF00C8]/40 bg-[#DF00C8]/10 text-[#FFACE8] text-sm tracking-[0.2em] uppercase font-['Spline_Sans']">
              Now Trending
            </span>

            <h2 className="mt-4 text-4xl font-bold font-['Spline_Sans']">
              Interstellar Voyage
            </h2>
          </div>
        </div>
      </section>

      {/* KEEP WATCHING */}
      <section className="mt-20">
        <div className="flex items-center justify-between">
          <h2 className="text-5xl font-bold font-['Spline_Sans']">
            Keep Watching
          </h2>

          <button className="text-[#00F4FE] text-xl font-semibold">
            See All
          </button>
        </div>

        {/* CARD */}
        <div className="mt-8 bg-[#151028] border border-white/10 rounded-3xl p-5 flex gap-5">
          <img
            src="/drama_card.jpg"
            alt="Movie"
            className="w-28 h-36 object-cover rounded-2xl"
          />

          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-3xl font-semibold font-['Spline_Sans']">
              Neo Tokyo 2088
            </h3>

            <p className="text-[#7D92B1] mt-2 text-lg">
              S1 : E4 "The Signal"
            </p>

            {/* PROGRESS BAR */}
            <div className="mt-5 h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="w-[70%] h-full bg-gradient-to-r from-[#00F4FE] to-[#DF00C8]" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}