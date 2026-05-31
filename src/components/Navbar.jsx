import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login", { replace: true });
  };

  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md">
      <h1 className="text-2xl font-bold text-blue-600">SkillVerse</h1>

      <ul className="flex gap-6 font-medium">
        <li>
          <Link to="/">Home</Link>
        </li>

        {token && (
          <li>
            <Link to="/dashboard">My Courses</Link>
          </li>
        )}

        <li>
          <Link to="/courses">Courses</Link>
        </li>

        {token ? (
          <li>
            <button type="button" onClick={handleLogout}>
              Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>

            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
