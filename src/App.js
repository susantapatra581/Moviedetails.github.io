import Navbar from "./components/Navbar";
import Home from "./components/Home";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Addmovie from "./components/Addmovie";
import Moviedetails from "./components/Moviedetails";
import Searchpage from "./components/Searchpage";
import Notfound from "./components/Notfound";


function App() {
  return (
    <Router>
    <div className="App">
     <Navbar/>

     <Switch>

     <Route exact path="/">
     <Home/>
     </Route>

     <Route path="/add">
     <Addmovie/>
     </Route>
     <Route path="/moviedetails:id">
      <Moviedetails/>
     </Route>

      <Route path="/search:searchval">
       <Searchpage/>
      </Route>

      <Route path="*">
        <Notfound />
      </Route>

     </Switch>

    </div>
    </Router>
  );
}

export default App;


































// function App() 
// {
    
//     return(
//         <div>
//             <Movielist />
//         </div>
//     )

// }
// export default App;


















