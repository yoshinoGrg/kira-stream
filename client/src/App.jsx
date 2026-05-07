import { useState } from "react"

import Auth from "./components/Auth"

import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Row from "./components/Row"

import requests from "./api/tmdb"

function App() {

  const [searchQuery, setSearchQuery] = useState("")

  const [user, setUser] = useState(null)

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  return (
    <div className="bg-black min-h-screen text-white">

      <Navbar onSearch={handleSearch} />

      <div className="fixed top-5 right-4 z-50">

        <Auth
          user={user}
          setUser={setUser}
        />

      </div>

      <Banner />

      {searchQuery.trim().length > 0 ? (

        <Row
          title="Search Results"
          fetchUrl={requests.search(searchQuery)}
        />

      ) : (

        <>
          <Row
            title="Trending Now"
            fetchUrl={requests.trending}
          />

          <Row
            title="Top Rated"
            fetchUrl={requests.topRated}
          />

          <Row
            title="Action Movies"
            fetchUrl={requests.action}
          />

          <Row
            title="Comedy Movies"
            fetchUrl={requests.comedy}
          />

          <Row
            title="Horror Movies"
            fetchUrl={requests.horror}
          />
        </>

      )}

    </div>
  )
}

export default App
