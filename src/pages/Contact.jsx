export default function Contact() {
    return (
        <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
            <p className="text-gray-600 mb-6">
                Have questions, feedback, or feature requests? We’d love to hear from you!
            </p>
            <form className="bg-white shadow-md rounded-2xl p-6">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-2 border rounded mb-3"
                    required
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-2 border rounded mb-3"
                    required
                />
                <textarea
                    placeholder="Your Message"
                    className="w-full p-2 border rounded mb-3"
                    rows="4"
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}
