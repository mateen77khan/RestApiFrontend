import { useLocation, useNavigate } from "react-router-dom";
import JournalForm from "../components/JournalForm";
import api from "../api";
import { UseAuth } from "../auth/AuthContext";

export default function Create() {
    const location = useLocation();
    const navigate = useNavigate();
    const { user } = UseAuth();
    const editing = location.state?.journal || null;

    const addJournal = async (data) => {
        if (!user?.id) {
            alert("You need to be logged in.");
            return;
        }
        await api.post(`/journal?userId=${user.id}`, data);
        navigate("/manage");
    };

    const updateJournal = async (data) => {
        await api.put(`/journal/id/${editing.id}`, data);
        navigate("/manage");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200">
            <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg w-full">
                <h1 className="text-2xl font-bold text-center mb-4">
                    {editing ? "Edit Entry ✏️" : "Create New Entry ✨"}
                </h1>
                <JournalForm onSubmit={editing ? updateJournal : addJournal} existing={editing} />
                <button
                    onClick={() => navigate("/manage")}
                    className="w-full mt-4 bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
}
