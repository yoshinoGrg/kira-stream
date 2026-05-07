import { useState } from "react"

export default function SearchBar({ onSearch }) {

  const [query, setQuery] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!query.trim()) return

    onSearch(query)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="px-4 md:px-10 py-6"
    >
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-4 rounded bg-gray-900 text-white outline-none"
      />
    </form>
  )
}
