import YouTube from "react-youtube"

export default function MovieModal({
  movie,
  trailerKey,
  onClose
}) {

  if (!movie) return null

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex justify-center items-center p-4">

      <div className="bg-gray-900 text-white rounded max-w-4xl w-full relative overflow-y-auto max-h-[90vh]">

        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-3xl z-50"
        >
          ✕
        </button>

        {trailerKey && (
          <YouTube
            videoId={trailerKey}
            opts={{
              width: "100%",
              height: "400",
              playerVars: {
                autoplay: 1,
              },
            }}
          />
        )}

        <div className="p-6">

          <h1 className="text-4xl font-bold mb-4">
            {movie.title || movie.name}
          </h1>

          <p className="mb-4 text-gray-300">
            {movie.overview}
          </p>

          <div className="flex gap-6">
            <p>⭐ {movie.vote_average}</p>
            <p>📅 {movie.release_date}</p>
          </div>

        </div>
      </div>
    </div>
  )
}
