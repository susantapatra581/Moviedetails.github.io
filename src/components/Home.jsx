
import Movieslists from "./Movieslists";
import useFetch from "./UseFetch";
const Home = () => {

let {datas : movies,pending,error}=useFetch("http://localhost:4000/movieLists");
    return (

        <div className="home-content">
        {error && <h1>{error}</h1>}
         {pending && <div className="loader"></div>} 


           {movies &&   <Movieslists 
            movies={movies}
            title="All Movies"/>}
  
        </div>
    );
}

export default Home;

// type  "npx json-server --watch db.json --port 4000 " to start server













 