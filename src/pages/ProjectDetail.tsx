import { useParams, useNavigate } from 'react-router-dom';
import projectsData from '../data/projects.json';

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projectsData.find((p) => p.id === Number(id));

    if (!project) {
        return <h2 className="text-center text-red-700 text-2xl font-mincho mt-10">Ce projet n'existe pas ou est en cours.</h2>;
    }

    return (
        <div className="bg-[#F5E1DA] min-h-screen py-12 px-6">
            <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-4xl font-mincho text-red-700">{project.title}</h1>
                <img src={project.image} alt={project.title} className="w-full h-64 object-cover mt-4 rounded-md"/>
                <p className="text-gray-600 mt-2">📅 Créé le : {project.date}</p>
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

                {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="mt-4 block text-blue-600 hover:text-blue-800 underline">
                        🔗 Voir sur Github
                    </a>
                )}

                {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-2 block text-blue-500 hover:text-blue-700 underline">
                        🔗 Voir le projet
                    </a>
                )}

                <button onClick={() => navigate(-1)}
                    className="mt-6 bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-[#C4A95E] transition">
                    ⬅ Retour aux projets
                </button>
            </div>
        </div>
    );
};

export default ProjectDetail;
