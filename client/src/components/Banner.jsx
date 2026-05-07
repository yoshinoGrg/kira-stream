import { useMemo } from "react"

const banners = [

  {
    image: "/banners/banner1.gif",

    title: "Naruto",

    caption:
      "A lonely ninja rises through pain, friendship, and determination to become the strongest shinobi."
  },

  {
    image: "/banners/banner2.gif",

    title: "Spy x Family",

    caption:
      "A spy, an assassin, and a telepath build a fake family while hiding dangerous secrets."
  },

  {
    image: "/banners/banner3.gif",

    title: "Attack on Titan — Mikasa",

    caption:
      "Mikasa fights against a cruel world with unmatched strength, loyalty, and silent sorrow."
  },

  {
    image: "/banners/banner4.gif",

    title: "Eren & Mikasa",

    caption:
      "Bound by destiny and tragedy, Eren and Mikasa struggle between love, freedom, and destruction."
  },

  {
    image: "/banners/banner5.gif",

    title: "Naruto & Itachi",

    caption:
      "Two shinobi legends walk different paths through sacrifice, war, and hidden truth."
  }

]

export default function Banner() {

  const randomBanner = useMemo(() => {

    return banners[
      Math.floor(Math.random() * banners.length)
    ]

  }, [])

  return (
    <header className="relative h-screen overflow-hidden">

      <img
        src={randomBanner.image}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-10 text-white">

        <h1 className="text-5xl md:text-8xl font-bold mb-6 drop-shadow-lg">

          {randomBanner.title}

        </h1>

        <p className="max-w-2xl text-lg md:text-2xl leading-relaxed mb-8 text-gray-200">

          {randomBanner.caption}

        </p>

        <div className="flex gap-4">

          <button className="bg-white text-black px-8 py-3 rounded font-bold hover:bg-gray-300 transition">
            ▶ Play
          </button>

          <button className="bg-gray-700/80 px-8 py-3 rounded hover:bg-gray-600 transition">
            More Info
          </button>

        </div>

      </div>

      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />

    </header>
  )
}
