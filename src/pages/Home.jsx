export default function Home() {
    return (
        <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4">Welcome to Your Journal ✨</h1>
            <p className="text-gray-600 mb-6">
                Write your thoughts, dreams, and daily experiences.
                This is your personal space to reflect and grow. 🌱
            </p>
            <img
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2"
                alt="Journal"
                className="rounded-2xl shadow-lg mx-auto mb-6"
            />
            <p className="text-gray-500 italic">
                “Journaling is like whispering to one’s self and listening at the same time.”
            </p>
        </div>
    );
}
