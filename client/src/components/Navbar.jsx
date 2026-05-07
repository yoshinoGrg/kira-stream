import { useState } from "react"

import {
  FaBell,
  FaSearch
} from "react-icons/fa"

export default function Navbar({
  onSearch
}) {

  const [showSearch, setShowSearch] = useState(false)

  const [query, setQuery] = useState("")

  const handleSubmit = (e) => {

    e.preventDefault()

    if (!query.trim()) return

    onSearch(query)
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-black to-transparent">

      <div className="flex items-center justify-between px-4 md:px-10 py-4">

        <h1
  onClick={() => window.location.reload()}
  className="text-red-600 text-3xl md:text-5xl font-bold cursor-pointer"
>
  NETFLIX
</h1>

        <div className="flex items-center gap-6 text-white pr-40">

          {showSearch && (

            <form onSubmit={handleSubmit}>

              <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) =>
                  setQuery(e.target.value)
                }
                className="bg-black border border-gray-600 px-4 py-2 rounded outline-none"
              />

            </form>

          )}

          <FaSearch
            className="cursor-pointer text-xl"
            onClick={() =>
              setShowSearch(!showSearch)
            }
          />

          <FaBell className="cursor-pointer text-xl" />

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
            className="w-8 rounded"
          />

        </div>

      </div>
    </nav>
  )
}
