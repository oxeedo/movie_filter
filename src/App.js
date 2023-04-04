
import './App.css';
import { useEffect, useState } from "react";
import Movie from "./components/Movie";
import Filter from './Filter';
import { motion, } from "framer-motion"
function App() {
  function loadActivity() {

    fetch("https://api.themoviedb.org/3/movie/popular?api_key=ac0f97591cfb6d7272c24889e3b53834&language=en-US&page=1")
      .then((response) => response.json())
      .then((data) => {
        setActivities(data.results);
        setFiltered(data.results);
        console.log(data)

      })
  }
  useEffect(() => { loadActivity() }, [])
  const [popular, setActivities] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  return (
    <div className="App">
      <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre}
        setActiveGenre={setActiveGenre} setActivities={setActivities} />

      <motion.div className="popular-movies">

        {filtered.map((movie) => {
          return <Movie key={movie.id} movie={movie} />

        })}

      </motion.div> </div>)
}

export default App;
