import { Link } from "react-router-dom";
import { useContext } from "react";
import { useThemeContext } from "../hooks/useThemeContext";

function Navbar() {
  const { color } = useThemeContext();
  return (
    <nav style={{ backgroundColor: color }}>
      <div className="align-elements flex justify-between items-center py-3">
        <Link className="text-3xl" to="/">
          My Kitchen
        </Link>
     <div>
     <Link className="btn btn-secondary right-5" to="/login">
          LOGOUT
        </Link>
        <Link className="btn btn-primary" to="/create">
          Create
        </Link>
     </div>
      </div>
    </nav>
  );
}

export default Navbar;
