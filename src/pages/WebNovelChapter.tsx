import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import chapters from "../data/chapters.json";
import novels from "../data/otherProjects.json";

const WebNovelChapter = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const chapter = chapters.find((c) => c.id.toString() === id);
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

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-gray-800 whitespace-pre-line leading-relaxed"
                >
                    {chapter.content}
                </motion.p>

                <motion.button
                    onClick={() => navigate("/web-novel")}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 bg-[var(--accent)] text-white px-4 py-2 rounded-lg hover:bg-[var(--hover)] transition"
                >
                    ⬅ Retour à la liste
                </motion.button>
            </motion.div>
        </motion.div>
    );
};

export default WebNovelChapter;
