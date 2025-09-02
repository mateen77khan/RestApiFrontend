export default function JournalItem({ journal, onDelete, onEdit }) {
    return (
        <div className="bg-gray-100 p-4 rounded-2xl shadow mb-3 flex justify-between items-start">
            <div>
                <h2 className="text-lg font-bold">{journal.title}</h2>
                <p className="text-gray-700">{journal.content}</p>
            </div>
            <div className="flex gap-2">
                <button
                    onClick={() => onEdit(journal)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                >
                    Edit
                </button>
                <button
                    onClick={() => onDelete(journal.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                    Delete
                </button>
            </div>
        </div>
    );
}
