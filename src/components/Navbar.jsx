import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="flex justify-between items-center px-8 py-4 shadow-md">

            <h1 className="text-2xl font-bold text-blue-600">
                SkillVerse
            </h1>

            <ul className="flex gap-6 font-medium">
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/courses">Courses</Link>
                </li>

                <li>
                    <Link to="/login">Login</Link>
                </li>

                <li>
                    <Link to="/register">Register</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;