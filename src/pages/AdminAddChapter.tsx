import { useState } from "react";
import chapters from "../data/chapters.json";

const AdminAddChapter = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newChapter = {
            id: chapters.length + 1,
            title,
            content,
            date
        };

        console.log("📚 Nouveau chapitre :", newChapter);
        alert("Chapitre simulé ! (tu dois gérer l'enregistrement côté backend ou fichier)");
        
        setTitle("");
        setContent("");
        setDate("");
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-[var(--bg-primary)] min-h-screen">
            <div className="bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-3xl font-mincho text-[var(--accent)] mb-6 text-center">Ajouter un Chapitre</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Titre du chapitre"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="w-full p-3 border rounded-lg"
                    />
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                        className="w-full p-3 border rounded-lg"
                    />
                    <textarea
                        placeholder="Contenu du chapitre"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        rows={10}
                        className="w-full p-3 border rounded-lg"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-[var(--accent)] text-white py-3 rounded-lg hover:bg-[var(--hover)] transition"
                    >
                        ➕ Ajouter le chapitre
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminAddChapter;
