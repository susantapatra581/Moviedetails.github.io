import { useParams } from "react-router-dom";
import Movieslists from "./Movieslists";
import useFetch from "./UseFetch";


const Searchpage = () => {

    let{datas:movies,pending,error}=useFetch(" http://localhost:4000/movieLists")


let{searchval}=useParams();


    return ( 
        <div>
            <h1>search page: {searchval}</h1>
        {
            movies && <Movieslists  
             movies={movies.filter((movie)=>{return movie.moviename.toLowerCase().includes(searchval.toLowerCase()) } ) } 
             title="serch Result" />}
            
        </div>
     );
}
 
export default Searchpage;















