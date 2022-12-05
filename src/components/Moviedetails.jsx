import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Updatemovie from "./Updatemovie";
import useFetch from "./UseFetch";

// posters
// import x from './photos/img1.jpeg'



const Moviedetails = () => {

    let { id } = useParams();
    let history = useHistory();
    let [update, setUpdate] = useState(false)


    let { datas: movie, pending, error } = useFetch(`http://localhost:4000/movieLists/${id}`);

    let handleDelete = (id) => {
        fetch(`http://localhost:4000/movieLists/${id}`, { method: "DELETE" })
            .then(() => { history.push("/") })
    }

    return (
        <center>
            <div>

                <h1 className="fulldetails">Full movie details</h1>
                <div className="home-content">
                    {error && <h1>{error}</h1>}
                    {pending && <div className="loader"></div>}

                    {!update && movie &&

                        <div>
                            <h2><img src={movie.poster} alt="not found" /></h2>
                            <h1>Movie:{movie.moviename}</h1>
                            < h2> Hero : {movie.hero}</h2>
                            <h2>Heroine: {movie.heroine}</h2>
                            <h2>Director: {movie.director}</h2>
                            <h2> Gener : {movie.gener}</h2>
                            <h2>Rating: {movie.rating}</h2>
                            <h2>Language: {movie.language}</h2>
                            <h2>ReleaseDate: {movie.releasedate}</h2>

                            <button onClick={() => { handleDelete(movie.id)}}>Delete</button>
                            <br />

                            <button onClick={() => {setUpdate(true) }} >
                                UpdateMovie
                            </button>

                        </div>
                    }

                    {update && <Updatemovie prveiousMovie={movie} />}

                </div>

            </div>
        </center>
    );

}

export default Moviedetails;













