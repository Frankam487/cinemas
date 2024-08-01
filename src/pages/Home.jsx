import { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import Card from "../components/Card";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [goodToBad, setBadToGood] = useState("");
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${inputValue}&commlanguage=fr-FR`).then((res) =>
            setMovies(res.data.results));
    }, [inputValue])
   
    return (
        <div className="home">
            <Header />
            <div className="form">
                <div className="form-content">
                    <input type="text" onChange={(e) => setInputValue(e.target.value)} placeholder="Entrer le titre de votre film" />
                    <label htmlFor="">Rechercher</label>
                    <div className="btns">
                        <button onClick={() => setBadToGood("good")}>Top<span >&#8593;</span></button>
                        <button onClick={() => setBadToGood("nOgood")}>Flop<span>&#8595;</span></button>
                    </div>
                </div>
            </div>
            <div className="home-container">
                {
                    movies
                        .slice(0,12)
                        .sort((a, b) => {
                            if(goodToBad === "good"){
                                return b.popularity - a.popularity
                            } else if(goodToBad === "nOgood") {
                                return a.popularity - b.popularity
                            }
                        })
                        .map((movie, index) => (
                            <Card key={index} movie={movie} />
                        ))
                }
            </div>
        </div>
    );
}

export default Home;