import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import JournalList from "../components/JournalList";

export default function Manage() {
    const [journals, setJournals] = useState([]);
    const navigate = useNavigate();

    const fetchJournals = async () => {
        const res = await api.get("/journal");
        setJournals(res.data);
    };

    useEffect(() => {
        fetchJournals();
    }, []);

    const deleteJournal = async (id) => {
        await api.delete(`/journal/id/${id}`);
        fetchJournals();
    };

    const editJournal = (journal) => {
        navigate(`/create`, { state: { journal } }); // pass journal to edit
    };

    return (
        <div className="max-w-xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Manage Journals</h1>
                <button
                    onClick={() => navigate("/create")}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                    + New Entry
                </button>
            </div>

            {journals.length > 0 ? (
                <JournalList
                    journals={journals}
                    onDelete={deleteJournal}
                    onEdit={editJournal}
                />
            ) : (
                <p className="text-gray-500 text-center mt-6">
                    No journals yet. Create your first one! ✨
                </p>
            )}
        </div>
    );
}
