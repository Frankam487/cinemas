const Card = ({ movie }) => {
    console.log(movie);

    const dateProcess = (chaine) => {
        let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
        });
        return newDate;
    }
    const genreFinder = () => {
        let genreArray = [];
        for (let i = 0; i < movie.genre_ids.length; i++) {
            switch (movie.genre_ids[i]) {
                case 28:
                    genreArray.push("Action");
                    break;
                case 12:
                    genreArray.push("Anime");
                    break;
                default:
                    break;
            }
        }
        return genreArray.map((genre, index) => <li key={index}>{genre}</li>)
    }
    const addStorage = () => {
        let storedData = window.localStorage.movies ? window.localStorage.movies.split(",") : [];

            window.localStorage.movies = movie.id
    }
    return (
        <div className="card">
            <img src={movie.poster_path ? "https://image.tmdb.org/t/p/original" + movie.poster_path : movie.poster_path
            } alt={"Photo de " + movie.title} />
            <div className="content-card">
                <h2>{movie.original_title
                }</h2>
                <p>Sorti le : {dateProcess(movie.release_date)}</p>
                <h5>{movie.popularity.toFixed(1)} <span>⭐</span></h5>
                <ul>
                    {
                        movie.genre_ids ? genreFinder() : null
                    }
                </ul>
                {movie.overview ? <h3>Synopsie</h3> : ""}
                <p className="overview">{movie.overview}</p>
                <button onClick={() => addStorage()}>Ajouter aux favories</button>
            </div>
        </div>
    );
}

export default Card;