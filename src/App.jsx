import { useEffect, useState } from "react";
import api from "./api";
import JournalForm from "./components/JournalForm";
import JournalList from "./components/JournalList";

export default function App() {
  const [journals, setJournals] = useState([]);
  const [editing, setEditing] = useState(null);

  // Fetch all journals
  const fetchJournals = async () => {
    const res = await api.get("/journal");
    setJournals(res.data);
  };

  useEffect(() => {
    fetchJournals();
  }, []);

  // Add journal
  const addJournal = async (data) => {
    await api.post("/journal", data);
    fetchJournals();
  };

  // Update journal
  const updateJournal = async (data) => {
    await api.put(`/journal/id/${editing.id}`, data);
    setEditing(null);
    fetchJournals();
  };

  // Delete journal
  const deleteJournal = async (id) => {
    await api.delete(`/journal/id/${id}`);
    fetchJournals();
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-4">📓 Journal App</h1>

      <JournalForm
        onSubmit={editing ? updateJournal : addJournal}
        existing={editing}
      />

      <JournalList
        journals={journals}
        onDelete={deleteJournal}
        onEdit={setEditing}
      />
    </div>
  );
}
