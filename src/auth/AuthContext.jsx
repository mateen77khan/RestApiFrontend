import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null); // will hold {id, username} or null

    const login = (userData) => {
        setUser(userData);
        // optionally save in localStorage so it survives refresh
        localStorage.setItem("user", JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    // restore user if present in localStorage
    if (!user) {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// ✅ hook to access auth state anywhere
export function UseAuth() {
    return useContext(AuthContext);
}
