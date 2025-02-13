import { useParams, useNavigate } from "react-router-dom";
import projectsData from "../data/otherProjects.json";

const OtherProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const project = projectsData.find((p) => p.id.toString() === id);

    if (!project) {
        return <h2 className="text-center text-red-600 text-xl mt-10">Projet non trouvé</h2>
    }

    return (
        <div>
            <button onClick={() => navigate(-1)} 
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition">Retour</button>
            <h2 className="text-3xl font-bold text-purple-600 mt-4">{project.title}</h2>
            <p className="text-gray-500">{project.date}</p>

            <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg mt-4" />

            <p className="text-gray-700 mt-4">{project.description}</p>

            <h3 className="text-lg font-semibold mt-4 text-purple-600">Technologies utilisées</h3>
            <ul className="list-disc pl-6 text-gray-600">
                {project.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>
        </div>
    )
};

export default OtherProjectDetail;