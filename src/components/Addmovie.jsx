import { useState } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "./UseFetch";

const Addmovie = () => {

    const [moviename, setMoveiName] = useState("");
    const [hero, setHero] = useState("")
    const [director, setDirector] = useState("")
    const [gener, setGener] = useState("")
    const [heroine, setHeroine] = useState("")
    const [rating, setRating] = useState("")
    const [language, setLanguage] = useState("")
    const [releasedate, setReleasedate] = useState("")


    let { datas : movies } = useFetch("http://localhost:4000/movieLists")

    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        let movie = { moviename, hero, director, gener ,heroine,language,releasedate}


        var duplicate = movies.some((m)=>{ return m.moviename === moviename })

        if(duplicate===false)
            {
                fetch("http://localhost:4000/movieLists",
                {
                    method:"POST", headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(movie)
                })

            .then(() => { history.push("/") })
}else{
    alert("movie is alerady exists")
}
       
    }
    return (
        <div className="add-movie">
            <h1>Add the new movie</h1>
            <hr />
            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="movie">Movie:</label> <input id="movie" type="text" value={moviename} onChange={(e) => { setMoveiName(e.target.value); }} />
                    <label htmlFor="hero">Hero:</label><input id="hero" type="text" value={hero} onChange={(e) => { setHero(e.target.value); }} />
                    <label htmlFor="gener">Herone:</label><input id="" type="text" value={heroine} onChange={(e) => { setHeroine(e.target.value); }} />

                    <label htmlFor="director">Director:</label><input id="director" type="text" value={director} onChange={(e) => { setDirector(e.target.value); }} />
                    <label htmlFor="gener">Gener:</label><input id="gener" type="text" value={gener} onChange={(e) => { setGener(e.target.value); }} />
                    <label htmlFor="gener">Rating:</label><input id="gener" type="text" value={rating} onChange={(e) => { setRating(e.target.value); }} />
                    <label htmlFor="gener">Language:</label><input id="gener" type="text" value={language} onChange={(e) => { setLanguage(e.target.value); }} />
                    <label htmlFor="gener">ReleaseDate:</label><input id="gener" type="text" value={releasedate} onChange={(e) => { setReleasedate(e.target.value); }} />

                </div>

                <input type="submit" value={"Add Movie"} id="submit" />
            </form>
        </div>


    );
}

export default Addmovie;



















