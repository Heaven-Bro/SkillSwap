import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-blue-600 text-white p-4">

            <div className="max-w-7xl mx-auto flex justify-between">

                <h1 className="text-2xl font-bold">
                    SkillSwap
                </h1>

                <div className="flex gap-5">

                    <Link to="/">
                        Home
                    </Link>

                    <Link to="/skills">
                        Skills
                    </Link>
                    <Link

                        to="/skills/create"

                        className="hover:text-yellow-300"

                    >

                        Add Skill

                    </Link>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;