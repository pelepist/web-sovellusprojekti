import express from 'express'

const router = express.Router()

// Search movies using TMDB
router.get('/search', async (req, res, next) => {
  try {
    const { query } = req.query

    if (!query || !query.trim()) {
      return res.status(400).json({
        error: 'Search query is required'
      })
    }

    const url = new URL(
      'https://api.themoviedb.org/3/search/movie'
    )

    url.searchParams.set('api_key', process.env.TMDB_API_KEY)
    url.searchParams.set('query', query)

    const response = await fetch(url)

    if (!response.ok) {
      return res.status(response.status).json({
        error: 'TMDB API request failed'
      })
    }

    const data = await response.json()

    res.json(data)
  } catch (error) {
    next(error)
  }
})

export default router