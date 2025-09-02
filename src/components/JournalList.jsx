import JournalItem from "./JournalItem";

export default function JournalList({ journals, onDelete, onEdit }) {
    return (
        <div>
            {journals.map((j) => (
                <JournalItem
                    key={j.id}
                    journal={j}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            ))}
        </div>
    );
}
