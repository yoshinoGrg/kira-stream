import { useEffect, useState } from "react"

import {
  fetchMovies,
  fetchTrailer
} from "../api/tmdb"

import MovieModal from "./MovieModal"

export default function Row({
  title,
  fetchUrl
}) {

  const [movies, setMovies] = useState([])

  const [selectedMovie, setSelectedMovie] = useState(null)

  const [trailerKey, setTrailerKey] = useState(null)

  useEffect(() => {

    async function loadMovies() {

      try {

        const data = await fetchMovies(fetchUrl)

        console.log(data)

        setMovies(data)

      } catch (error) {

        console.error(
          "Movie fetch failed:",
          error
        )

      }
    }

    loadMovies()

  }, [fetchUrl])

  const handleMovieClick = async (movie) => {

    setSelectedMovie(movie)

    try {

      const key = await fetchTrailer(movie.id)

      setTrailerKey(key)

    } catch (error) {

      console.error(
        "Trailer fetch failed:",
        error
      )

    }
  }

  return (
    <div className="px-4 md:px-10 py-6">

      <h2 className="text-3xl font-bold text-white mb-4">
        {title}
      </h2>

      <div className="flex gap-4 overflow-x-scroll scrollbar-hide">

        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (

            <img
              key={movie.id}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title || movie.name}
              onClick={() => handleMovieClick(movie)}
              className="w-[180px] md:w-[250px] rounded hover:scale-110 transition duration-300 cursor-pointer"
            />

        ))}

      </div>

      <MovieModal
        movie={selectedMovie}
        trailerKey={trailerKey}
        onClose={() => {
          setSelectedMovie(null)
          setTrailerKey(null)
        }}
      />

    </div>
  )
}
