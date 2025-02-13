import { useState } from "react";
import { Link } from "react-router-dom";
import projectsData from "../data/otherProjects.json";

const categories = ["Tous", "Dessin", "Pixel Art", "3D"];

const OtherProjects = () => {
    const [selectedCategory, setSelectedCategory] = useState("Tous");
    
    const filteredProjects = 
        selectedCategory === "Tous"
        ? projectsData
        : projectsData.filter((project) => project.category === selectedCategory);
    
    return (
        <div className="max-w-5xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-purple-600 text-center mb-6">Mes autres projects</h2>

            <div className="flex justify-center space-x-4 mb-6">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`px-4 py-2 rounded-lg transition ${
                            selectedCategory === category ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-700"
                        }`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                    <div key={project.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-purple-600">{project.title}</h3>
                            <p className="text-gray-600 mt-2">{project.description}</p>
                            <Link to={`/other-projects/${project.id}`} className="text-purple-600 hover:text-purple-800 mt-4 inline-block">
                            Voir plus</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OtherProjects;