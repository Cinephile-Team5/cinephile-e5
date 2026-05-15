import Button from "../components/Button";

export default function Home() {
  return (
    <main
      className="
      min-h-screen
      bg-[#0D0B1F]
      text-[#E2E0FC]
      px-6
      md:px-12
      lg:px-24
      xl:px-32
      pt-20
      md:pt-24
      lg:pt-28
      pb-32
      font-['Be_Vietnam_Pro']
    "
    >
      {/* HERO */}
      <section
        className="
        text-center
        lg:text-left
        lg:grid
        lg:grid-cols-2
        lg:gap-20
        lg:items-center
      "
      >
        {/* LEFT SIDE */}
        <div>
          {/* BADGE */}
          <div
            className="
            inline-block
            px-5
            py-2
            rounded-full
            border
            border-[#DF00C8]/40
            bg-[#DF00C8]/10
            text-[#FFACE8]
            text-xs
            md:text-sm
            tracking-[0.25em]
            uppercase
            font-['Spline_Sans']
          "
          >
            Ultra HD Streaming
          </div>

          {/* TITLE */}
          <h1
            className="
            mt-10
            md:mt-14
            lg:mt-16
            text-4xl
            md:text-6xl
            lg:text-7xl
            xl:text-8xl
            font-extrabold
            leading-tight
            font-['Spline_Sans']
          "
          >
            Discover{" "}
            <span className="text-[#00F4FE]">Pure</span>
            <br />
            Cinema.
          </h1>

          {/* TEXT */}
          <p
            className="
            mt-6
            md:mt-8
            text-base
            md:text-lg
            lg:text-xl
            leading-relaxed
            max-w-sm
            md:max-w-xl
            lg:mx-0
            mx-auto
            text-[#7D92B1]
          "
          >
            Precision-engineered streaming for the world's most dedicated
            cinephiles.
          </p>

          {/* BUTTONS */}
          <div
            className="
            mt-10
            flex
            flex-col
            md:flex-row
            gap-5
            justify-center
            lg:justify-start
          "
          >
            <Button text="GET STARTED" />

            <button
              className="
              border
              border-[#00F4FE]/30
              text-[#00F4FE]
              text-lg
              md:text-xl
              font-bold
              px-8
              py-4
              rounded-2xl
              transition
              hover:bg-[#00F4FE]/10
            "
            >
              BROWSE FILMS
            </button>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="hidden lg:block">
          <div className="relative rounded-3xl overflow-hidden border border-white/10">
            <img
              src="/inter_movie.jpg"
              alt="Featured movie"
              className="
              w-full
              h-[600px]
              object-cover
              opacity-80
            "
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B1F] to-transparent" />

            <div className="absolute bottom-8 left-8">
              <span
                className="
                px-4
                py-1
                rounded-full
                border
                border-[#DF00C8]/40
                bg-[#DF00C8]/10
                text-[#FFACE8]
                text-sm
                tracking-[0.2em]
                uppercase
                font-['Spline_Sans']
              "
              >
                Featured Experience
              </span>

              <h2
                className="
                mt-4
                text-5xl
                font-bold
                font-['Spline_Sans']
              "
              >
                Interstellar Voyage
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED MOVIE MOBILE/TABLET */}
      <section className="mt-24 lg:hidden">
        <div className="relative rounded-3xl overflow-hidden border border-white/10">
          <img
            src="/inter_movie.jpg"
            alt="Featured movie"
            className="
            w-full
            h-[240px]
            md:h-[420px]
            object-cover
            opacity-80
          "
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B1F] to-transparent" />

          <div className="absolute bottom-6 left-6">
            <span
              className="
              px-4
              py-1
              rounded-full
              border
              border-[#DF00C8]/40
              bg-[#DF00C8]/10
              text-[#FFACE8]
              text-xs
              md:text-sm
              tracking-[0.2em]
              uppercase
              font-['Spline_Sans']
            "
            >
              Now Trending
            </span>

            <h2
              className="
              mt-4
              text-2xl
              md:text-4xl
              font-bold
              font-['Spline_Sans']
            "
            >
              Interstellar Voyage
            </h2>
          </div>
        </div>
      </section>

      {/* KEEP WATCHING */}
      <section className="mt-20 md:mt-28">
        {/* HEADER */}
        <div className="flex items-center justify-between">
          <h2
            className="
            text-3xl
            md:text-5xl
            lg:text-6xl
            font-bold
            font-['Spline_Sans']
          "
          >
            Keep Watching
          </h2>

          <button
            className="
            text-[#00F4FE]
            text-sm
            md:text-lg
            font-semibold
          "
          >
            See All
          </button>
        </div>

        {/* CARD */}
        <div
          className="
          mt-8
          bg-[#151028]
          border
          border-white/10
          rounded-3xl
          p-5
          flex
          flex-col
          md:flex-row
          gap-5
          items-center
        "
        >
          <img
            src="/drama_card.jpg"
            alt="Movie"
            className="
            w-full
            h-[240px]
            md:w-36
            md:h-44
            lg:w-44
            lg:h-56
            object-cover
            rounded-2xl
          "
          />

          <div className="flex-1 flex flex-col justify-center w-full">
            <h3
              className="
              text-2xl
              md:text-3xl
              lg:text-4xl
              font-semibold
              font-['Spline_Sans']
            "
            >
              Neo Tokyo 2088
            </h3>

            <p
              className="
              text-[#7D92B1]
              mt-2
              text-base
              md:text-lg
            "
            >
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