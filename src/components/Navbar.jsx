import { useState } from "react";
import { Link } from "react-router-dom";



const Navbar = () => {

    const [searchval, setSearchval] = useState("")

    return (
        <nav>
            <h1>hungaama</h1>
            <input type="search" value={searchval} onChange={(e) => { setSearchval(e.target.value); }}  />

            <Link id="search1" to={`search${searchval}`}>
                <button id="search">🔍</button>
            </Link>
            <div>
                <Link to="/">Home</Link>
                <Link className="link" to="/add">Add New Movie</Link>

            </div>
        </nav>
    );
}

export default Navbar




















