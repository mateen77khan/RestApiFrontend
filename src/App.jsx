import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Manage from "./pages/Manage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Create from "./pages/Create";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Protected routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/manage" element={<Manage />} />
              <Route path="/create" element={<Create />} />
            </Route>
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}
