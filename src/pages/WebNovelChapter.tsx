import { useParams, useNavigate } from "react-router-dom";
import chapters from "../data/chapters.json";

const WebNovelChapter = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const chapter = chapters.find((c) => c.id.toString() === id);

    if (!chapter) {
        return <h2 className="text-center text-red-700 text-2xl font-mincho mt-10">Chapitre introuvable.</h2>;
    }

    return (
        <div className="max-w-3xl mx-auto p-6 bg-[var(--bg-primary)] min-h-screen">
            <h1 className="text-3xl font-mincho text-[var(--accent)] mb-4">{chapter.title}</h1>
            <p className="text-gray-800 whitespace-pre-line">{chapter.content}</p>
            <button
                onClick={() => navigate(-1)}
                className="mt-6 bg-[var(--accent)] text-white px-4 py-2 rounded-lg hover:bg-[var(--hover)] transition"
            >
                ⬅ Retour aux chapitres
            </button>
        </div>
    );
};

export default WebNovelChapter;
