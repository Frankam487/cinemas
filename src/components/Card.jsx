const Card = ({ movie }) => {
    console.log(movie);
    return (
        <div className="card">
            <img src={"https://image.tmdb.org/t/p/original" + movie.poster_path
            } alt={"Photo de " + movie.title} />
            <h2>n dnv</h2>
        </div>
    );
}

export default Card;