import { useParams, useNavigate } from "react-router-dom";
import projectsData from "../data/otherProjects.json";

const OtherProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const project = projectsData.find((p) => p.id.toString() === id);

    if (!project) {
        return <h2 className="text-center text-red-700 text-2xl font-mincho mt-10">Projet non trouvé.</h2>;
    }

    return (
        <div className="bg-[#F5E1DA] min-h-screen py-12 px-6">
            <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-4xl font-mincho text-red-700">{project.title}</h1>
                <p className="text-gray-500">📅 Créé le : {project.date}</p>
                <img src={project.image} alt={project.title} className="w-full h-64 object-cover mt-4 rounded-md" />
                <p className="text-gray-700 mt-4">{project.description}</p>

                <div className="mt-4">
                    <h3 className="text-lg font-semibold text-red-700">Technologies utilisées :</h3>
                    <ul className="flex flex-wrap mt-2">
                        {project.technologies.length > 0 ? project.technologies.map((tech, index) => (
                            <li key={index} className="bg-[#C4A95E] text-white rounded-full px-3 py-1 text-sm mr-2 mb-2">
                                {tech}
                            </li>
                        )) : <li className="text-gray-500">Technologies non spécifiées</li>}
                    </ul>
                </div>

                {project.links && project.links.length > 0 && (
                    <div className="mt-6">
                        <h3 className="text-xl font-semibold text-red-700">Liens externes</h3>
                        <ul className="mt-2 space-y-2">
                            {project.links.map((link, index) => (
                                <li key={index}>
                                    <a href={link.url} target="_blank" rel="noopener noreferrer"
                                       className="text-blue-500 hover:text-blue-700 underline">
                                        🔗 {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <button onClick={() => navigate(-1)}
                    className="mt-6 bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-[#C4A95E] transition">
                    ⬅ Retour
                </button>
            </div>
        </div>
    );
};

export default OtherProjectDetail;
