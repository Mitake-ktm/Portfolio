import { Link } from "react-router-dom";
import projectsData from "../data/projects.json"

const Projects = () =>{
    return(
    <div className="bg-gray-100 min-h-screen py-12 px-60">
        <h1 className="text-4xl font-bold text-center text-purple-600">Mes Projets</h1>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
                <div key={project.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover"/>
                    <div className="p-4">
                        <h3 className="text-xl font-semibold text-purple-600">{project.title}</h3>
                        <p className="text-gray-600 mt-2">{project.description}</p>
                        <Link to={`/project/${project.id}`} className="mt-4 inline-bmock text-purple-600 hover:text-purple-800">
                            Voir le projet
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    </div>); 
};

export default Projects