import { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import Card from "../components/Card";

const Home = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=code&commlanguage=fr-FR`).then((res) =>
            setMovies(res.data.results));
        console.log(movies);
    }, [])
    return (
        <div className="home">
            <Header />
            <div className="home-container">
                {
                    movies.map((movie, index) => (
                        <Card key={index} movie={movie} />
                    ))
                }
            </div>
        </div>
    );
}

export default Home;