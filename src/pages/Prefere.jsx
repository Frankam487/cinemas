import { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";

const Prefere = () => {
    const [listData, setListData] = useState([]);

    useEffect(() => {
        let moviesId = window.localStorage.movies ? window.localStorage.movies.split(",") : [];
        for (let i = 0; i < moviesId.length; i++) {
            axios.get(`https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=ed82f4c18f2964e75117c2dc65e2161d`).then((res) => setListData(res.data))
        }
    }, [])
    return (
        <div className="prefere">
            <Header />
            <h2>Coup de coeur <span></span></h2>
            <div className="results">
                <ul>

                </ul>
            </div>
        </div>
    );
}

export default Prefere;