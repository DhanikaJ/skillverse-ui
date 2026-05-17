function Navbar() {
    return (
        <nav className="flex justify-between items-center px-8 py-4 shadow-md">

            <h1 className="text-2xl font-bold text-blue-600">
                SkillVerse
            </h1>

            <ul className="flex gap-6 font-medium">
                <li>
                    <a href="/">Home</a>
                </li>

                <li>
                    <a href="/courses">Courses</a>
                </li>

                <li>
                    <a href="/login">Login</a>
                </li>

                <li>
                    <a href="/register">Register</a>
                    {/* <Link to="/register">Register</Link> */}
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;