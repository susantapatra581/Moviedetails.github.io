import { useState } from "react";
import { Link } from "react-router-dom";


const Movieslists = ({movies,title,/*deleteMovie*/}) => 
{
    // const [show,setShow]=useState(false);
    // const [buttonText,setbuttonText]=useState("show more");
    // const [num,setNum]= useState(null);

    // let handleShow=(id)=>{
    //     if(show===false)
    //     {
    //         setShow(true);
    //         setbuttonText("show less")
    //         setNum(id)
    //     }else{
    //         setShow(false);
    //         setbuttonText("show more")
    //         setNum(null)
    //     }
    // }

    return (  
        <center>
        <div className="movies-list">
            
            <h1 id="title">{title}</h1>
             {
                 movies.map((movie)=>{
                    return (
                       
                           <Link to={`/moviedetails${movie.id} `}>
                            
                            <div  key={movie.id}  className="movie" >
                            <h1> Movie Name : {movie.moviename}</h1>
                            <h2> Hero : {movie.hero}</h2>
                            <h2> Gener : {movie.gener}</h2>
           
                        </div>
                           </Link>
                         
                    )
                })
            }
        </div>
          </center>
    );
}
 
export default Movieslists;






{/* <button onClick={()=>{deleteMovie(movie.id)}}>Delete Movie</button> */}
                            
                            {/* { show && movie.id===num &&
                                <div className="extra-content">
                                    <h2>Director name:{movie.director}</h2>
                                    <h2>Id:{movie.id}</h2>
                                    <h2>Date :{movie.date}</h2>
                                    <h2>Rating:{movie.rating}</h2> */}
                                {/* </div>
                                
                            }
                            <button onClick={handleShow}>{buttonText}</button> */}











