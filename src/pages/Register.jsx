import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { UseAuth } from "../auth/AuthContext";

export default function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = UseAuth();
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post("/auth/register", { username, password });
            // You can either log the user in directly...
            setUser(res.data); // expecting { id, username }
            navigate("/manage");
            // ...or redirect to login:
            // navigate("/login");
        } catch (error) {
            console.error(error);
            alert(error.response?.data || "Registration failed ❌");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-200 to-blue-200">
            <form onSubmit={handleRegister} className="bg-white p-6 rounded-2xl shadow-lg w-80">
                <h2 className="text-xl font-bold mb-4">Register</h2>
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
                <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
                    Register
                </button>
            </form>
        </div>
    );
}
