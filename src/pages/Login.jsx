import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { UseAuth } from "../auth/AuthContext";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = UseAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post("/auth/login", { username, password });
            // Expecting { id, username }
            setUser(res.data);
            navigate("/manage");
        } catch (error) {
            console.error(error);
            alert(error.response?.data || "Invalid credentials ❌");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleLogin} className="bg-white p-6 rounded-2xl shadow-lg w-80">
                <h2 className="text-xl font-bold mb-4">Login</h2>
                <input
                    type="text" placeholder="Username"
                    className="w-full p-2 border rounded mb-2"
                    value={username} onChange={(e) => setUsername(e.target.value)} required
                />
                <input
                    type="password" placeholder="Password"
                    className="w-full p-2 border rounded mb-2"
                    value={password} onChange={(e) => setPassword(e.target.value)} required
                />
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                    Login
                </button>
            </form>
        </div>
    );
}
