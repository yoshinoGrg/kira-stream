import axios from "axios"

const API_KEY = import.meta.env.VITE_TMDB_API_KEY

const requests = {
  trending: `/trending/all/week?api_key=${API_KEY}`,
  topRated: `/movie/top_rated?api_key=${API_KEY}`,
  action: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  comedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  horror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,

  search: (query) =>
    `/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
}

export const fetchMovies = async (url) => {

  const response = await axios.get(
    `https://api.themoviedb.org/3${url}`
  )

  return response.data.results
}

export const fetchTrailer = async (movieId) => {

  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`
  )

  const trailer = response.data.results.find(
    (video) => video.type === "Trailer"
  )

  return trailer ? trailer.key : null
}

export default requests
