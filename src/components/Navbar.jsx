import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    const navClass = ({ isActive }) =>
        isActive
            ? "text-blue-600 font-semibold border-b-2 border-blue-600"
            : "text-gray-700 hover:text-blue-500";

    return (
        <nav className="bg-white shadow-md p-4 mb-6">
            <div className="max-w-4xl mx-auto flex justify-between items-center">
                <Link to="/" className="text-xl font-bold text-blue-600">
                    📓 JournalApp
                </Link>
                <div className="flex gap-6">
                    <NavLink to="/" className={navClass}>
                        Home
                    </NavLink>
                    <NavLink to="/manage" className={navClass}>
                        Manage
                    </NavLink>
                    <NavLink to="/about" className={navClass}>
                        About
                    </NavLink>
                    <NavLink to="/contact" className={navClass}>
                        Contact
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}
