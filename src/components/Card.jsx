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
    return (
        <div className="card">
            <img src={"https://image.tmdb.org/t/p/original" + movie.poster_path
            } alt={"Photo de " + movie.title} />
            <div className="content-card">
                <h2>{movie.original_title
                }</h2>
                <p>Sorti le : {dateProcess(movie.release_date)}</p>
                <h5>{movie.popularity.toFixed(1)} <span>⭐</span></h5>
            </div>
        </div>
    );
}

export default Card;