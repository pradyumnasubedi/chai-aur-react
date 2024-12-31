import "./App.css"
import MovieCard from "./components/MovieCard"
function App() {
  const movieNumber = 1
  return (
    <>
      {movieNumber === 1 ? (
        <MovieCard
          movie={{
            title: "Carry-On",
            release_date: "2024",
            url: "www.google.com",
          }}
        />
      ) : (
        <MovieCard
          movie={{
            title: "Bohemian Rhapsody",
            release_date: "2018",
            url: "www.google.com",
          }}
        />
      )}
    </>
  )
}

export default App
