import { Link } from "react-router-dom";
import chapters from "../data/chapters.json";
import projects from "../data/otherProjects.json";

const WebNovel = () => {
    const webNovelProject = projects.find((p) => p.category === "Web Novel");

    if (!webNovelProject) {
        return (
            <h2 className="text-center text-red-700 text-2xl font-mincho mt-10">
                Le Web Novel est introuvable dans les autres projets.
            </h2>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-6 bg-[var(--bg-primary)] min-h-screen">
            <div className="text-center mb-8">
                <img
                    src={`/images/${webNovelProject.image}`}
                    alt={webNovelProject.title}
                    className="w-full h-64 object-cover rounded-lg shadow mb-4"
                    onError={(e) => (e.currentTarget.src = "/images/default.jpg")}
                />
                <h1 className="text-4xl font-mincho text-[var(--accent)] mb-2">
                    {webNovelProject.title}
                </h1>
                <p className="text-gray-700">{webNovelProject.description}</p>
                <p className="text-sm text-gray-500 mt-2">📅 {webNovelProject.date}</p>
            </div>

            <h2 className="text-2xl font-semibold text-[var(--accent)] mb-4">Chapitres</h2>
            <ul className="space-y-4">
                {chapters.map((chapter) => (
                    <li
                        key={chapter.id}
                        className="bg-white shadow p-4 rounded-lg hover:shadow-md transition"
                    >
                        <Link
                            to={`/web-novel/${chapter.id}`}
                            className="text-[var(--accent)] font-semibold"
                        >
                            {chapter.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WebNovel;
