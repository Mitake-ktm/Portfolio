import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import chapters from "../data/chapters.json";
import novels from "../data/otherProjects.json";

const WebNovelChapter = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const chapterId = parseInt(id || "", 10);
    const sortedChapters = [...chapters].sort((a, b) => a.id - b.id);
    const chapterIndex = sortedChapters.findIndex(c => c.id === chapterId);
    const chapter = sortedChapters[chapterIndex];
    const novel = novels.find((p) => p.category === "Web Novel");

    if (!chapter || !novel) {
        return (
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center text-red-700 text-2xl font-mincho mt-10"
            >
                Chapitre ou roman introuvable.
            </motion.h2>
        );
    }

    const prevChapter = sortedChapters[chapterIndex - 1];
    const nextChapter = sortedChapters[chapterIndex + 1];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="bg-[var(--bg-primary)] min-h-screen py-12 px-6"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6"
            >
                <p className="text-sm text-gray-500 mb-1">📚 {novel.title}</p>

                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-3xl font-mincho text-[var(--accent)] mb-4"
                >
                    {chapter.title}
                </motion.h1>

                <p className="text-sm text-gray-500 mb-4">
                    Chapitre {chapterIndex + 1} / {sortedChapters.length}
                </p>

                <p className="text-sm text-gray-500 mb-4">
                    🕓 Publié le : {chapter.date}
                </p>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-gray-800 whitespace-pre-line leading-relaxed"
                >
                    {chapter.content}
                </motion.p>

                <div className="flex flex-wrap justify-between mt-8 gap-4">
                    {prevChapter && (
                        <motion.button
                            onClick={() => navigate(`/web-novel/${prevChapter.id}`)}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[var(--accent)] text-white px-4 py-2 rounded-lg hover:bg-[var(--hover)] transition"
                        >
                            ⬅ {prevChapter.title}
                        </motion.button>
                    )}

                    {nextChapter && (
                        <motion.button
                            onClick={() => navigate(`/web-novel/${nextChapter.id}`)}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[var(--accent)] text-white px-4 py-2 rounded-lg hover:bg-[var(--hover)] transition"
                        >
                            {nextChapter.title} ➡
                        </motion.button>
                    )}
                </div>

                <motion.button
                    onClick={() => navigate("/web-novel")}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 w-full bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
                >
                    🏠 Retour à la liste des chapitres
                </motion.button>
            </motion.div>
        </motion.div>
    );
};

export default WebNovelChapter;
