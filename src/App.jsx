import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Navbar from './components/Navbar/Navbar'
import Moviecard from './components/Moviecard/Moviecard'

function App() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function fetchMovies() {
      try {
        const { data } = await axios.get('/api/tmdb/search', {
          params: { query: 'Batman' },
          signal: controller.signal,
        })
        if (!Array.isArray(data.results)) {
          throw new Error('Invalid movie response')
        }
        setMovies(data.results)
      } catch {
        if (!controller.signal.aborted) {
          setError('Elokuvien hakeminen epäonnistui. Yritä myöhemmin uudelleen.')
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }

    fetchMovies()
    return () => controller.abort()
  }, [])

  return(
    <>
    <Navbar/>  
      <main>
        <Routes>
          <Route
          path="/"
          exact
          element={<Home/>}
          />
          <Route
          path="/movies"
          exact
          element={<Movies/>}
          />
        </Routes>
      </main>
      <section aria-label="Elokuvat">
        {loading && <p role="status">Ladataan elokuvia…</p>}
        {error && <p role="alert">{error}</p>}
        {!loading && !error && movies.length === 0 && <p>Elokuvia ei löytynyt.</p>}
        {movies.map((movie) => (
          <Moviecard key={movie.id} movie={movie} />
        ))}
      </section>
    </>
  )
}

export default App
