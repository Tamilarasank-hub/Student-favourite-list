
import { Link } from "react-router-dom";

function Navbar() {

    return (
        <nav className="navbar">

            <Link to="/" className="nav-link">
                List of Students
            </Link>

            <Link to="/favourites" className="nav-link">
                Favourite Students
            </Link>

        </nav>
    );
}

export default Navbar;
