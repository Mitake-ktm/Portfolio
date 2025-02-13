import { Link } from "react-router-dom";
import { useState } from "react";
import projectsData from "../data/projects.json"

const Projects = () =>{
    const [selectedCategory, setSelectedCategory] = useState("Tous");

    const categories = ["Tous", ...Array.from(new Set(projectsData.map((project) => project.category)))];

    const filteredProjects = selectedCategory === "Tous"
    ? projectsData
    : projectsData.filter((project) => project.category === selectedCategory);

    return(
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-purple-600 mb-4">Mes Projets</h1>

            <div className="flex gap-4 mb-6">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`px-4 py-2 rounded-lg border 
                            ${selectedCategory === category ? "bg-purple-600 text-white" : "border-gray-300 text-gray-600 hover:bg-gray-100"}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                    <Link to={`/project/${project.id}`} className="bg-white p-4 shadow-lg rounded-lg">
                        
                        <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover rounded-lg" />
                        <h3 className="text-xl font-semibold text-purple-600 mt-4">{project.title}</h3>
                        <p className="text-gray-600 mt-2">{project.description}</p>
                        <p className="text-gray-500 text-sm mt-2">{project.date}</p>
                    
                    </Link>

                ))}
            </div>
        </div>
    ); 
};

export default Projects