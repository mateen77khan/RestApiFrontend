import { useState, useEffect } from "react";

export default function JournalForm({ onSubmit, existing }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        if (existing) {
            setTitle(existing.title);
            setContent(existing.content);
        }
    }, [existing]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, content });
        setTitle("");
        setContent("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-2xl p-4 mb-4"
        >
            <input
                className="w-full p-2 border rounded mb-2"
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                className="w-full p-2 border rounded mb-2"
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            />
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
                {existing ? "Update" : "Add"}
            </button>
        </form>
    );
}
