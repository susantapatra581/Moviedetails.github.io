// import { useParams } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom";


const Updatemovie = ({prveiousMovie}) => {


    const [moviename, setMoveiName] = useState(prveiousMovie.moviename);
    const [hero, setHero] = useState(prveiousMovie.hero)
    const [director, setDirector] = useState(prveiousMovie.director)
    const [gener, setGener] = useState(prveiousMovie.gener)
    const [heroine, setHeroine] = useState(prveiousMovie.heroine)
    const [rating, setRating] = useState(prveiousMovie.rating)
    const [language, setLanguage] = useState(prveiousMovie.language)
    const [releasedate, setReleasedate] = useState(prveiousMovie.releasedate)

    // let {id}=useParams();
// console.log(prveiousMovie.moviename,"prveiousMovie.moviename");

    let history=useHistory();




    const handleSubmit = (e) => {
        e.preventDefault();
        let updateMovie = { moviename, hero, director, gener ,heroine,rating,language,releasedate}

                fetch(`http://localhost:4000/movieLists/${prveiousMovie.id}`,
                {
                    method: "PUT", headers: { "Accept":"application/json","Content-Type": "application/json" },
                    body: JSON.stringify(updateMovie)
                })

            .then(() => { history.push("/") })
    }
    
    return (
        <div className="add-movie">
             <h1>Update Movie</h1>
            <hr/>
            <form onSubmit={handleSubmit}>

                <div>
                <label htmlFor="movie">Movie:</label> <input id="movie" type="text" value={moviename} onChange={(e) => { setMoveiName(e.target.value); }} />
                    <label htmlFor="hero">Hero:</label><input id="hero" type="text" value={hero} onChange={(e) => { setHero(e.target.value); }} />
                    <label htmlFor="gener">Herione:</label><input id="" type="text" value={heroine} onChange={(e) => { setHeroine(e.target.value); }} />

                    <label htmlFor="director">Director:</label><input id="director" type="text" value={director} onChange={(e) => { setDirector(e.target.value); }} />
                    <label htmlFor="gener">Gener:</label><input id="gener" type="text" value={gener} onChange={(e) => { setGener(e.target.value); }} />
                    <label htmlFor="gener">Rating:</label><input id="gener" type="text" value={rating} onChange={(e) => { setRating(e.target.value); }} />
                    <label htmlFor="gener">Language:</label><input id="gener" type="text" value={language} onChange={(e) => { setLanguage(e.target.value); }} />
                    <label htmlFor="gener">ReleaseDate:</label><input id="gener" type="text" value={releasedate} onChange={(e) => { setReleasedate(e.target.value); }} />

                </div>
                <input type="submit" value={"Update Movie"} id="submit" />
            </form>
        </div>
     );
}
 
export default Updatemovie;













