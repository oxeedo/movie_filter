import { useEffect } from "react";

function Filter({ setActiveGenre, activeGenre, setFiltered, popular, setActivities }) {
    useEffect(() => {
        if (activeGenre === 12) {
            setActivities(popular);
        }
        const filtered = popular.filter((movie) =>
            movie.genre_ids.includes(activeGenre));
        setFiltered(filtered);
    }, [activeGenre]);
    return (
        <div className="filter-container">
            <button className={activeGenre === 12 ? 'active' : ''} onClick={() => setActiveGenre(12)}>All</button>
            <button className={activeGenre === 35 ? 'active' : ''} onClick={() => setActiveGenre(35)}>Comedy</button>
            <button className={activeGenre === 28 ? 'active' : ''} onClick={() => setActiveGenre(28)}>Action</button>

        </div>
    )
}
export default Filter;