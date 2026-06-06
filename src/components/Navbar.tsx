import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login", { replace: true });
  };

  return (
    <nav className="flex justify-between items-center mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 py-4 shadow-md">
      <div className="flex items-center gap-2">
        <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
          <img src="/assets/images/logo/whiteplanet.png" alt="SkillVerse Logo" className="w-full h-full p-1" />
        </div>
        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          SkillVerse
        </span>
      </div>

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
