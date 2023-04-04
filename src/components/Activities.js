import { useEffect, useState } from "react";
import Movie from "./Movie";


function Activities() {
    function loadActivity() {

        fetch("https://api.themoviedb.org/3/movie/popular?api_key=ac0f97591cfb6d7272c24889e3b53834&language=en-US&page=1")
            .then((response) => response.json())
            .then((data) => {
                setActivities(data.results);
                console.log(data)

            })
    }
    useEffect(() => { loadActivity() }, [])
    const [popular, setActivities] = useState([])


    if (popular.length === 0) {
        <p>Loading...</p>
    }
    return (<div>

        {
            popular.map((movie) => {
                return <Movie key={movie.id} movie={movie} />
            })
        }


    </div>
    )
}
export default Activities