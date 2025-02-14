import { Link } from "react-router-dom";
import { useState } from "react";
import projectsData from "../data/projects.json";

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState("Tous");

    const categories = ["Tous", ...Array.from(new Set(projectsData.map((project) => project.category)))];

    const filteredProjects = selectedCategory === "Tous"
        ? projectsData
        : projectsData.filter((project) => project.category === selectedCategory);

    return (
        <div className="max-w-6xl mx-auto p-6 bg-[#F5E1DA] min-h-screen">
            <h1 className="text-4xl font-mincho text-red-700 text-center mb-6">Mes Projets</h1>

            <div className="flex gap-4 justify-center mb-6">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`px-4 py-2 rounded-lg border transition ${
                            selectedCategory === category
                                ? "bg-red-700 text-white"
                                : "border-gray-400 text-gray-700 hover:bg-[#C4A95E] hover:text-white"
                        }`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                    <Link key={project.id} to={`/project/${project.id}`} className="bg-white p-4 shadow-lg rounded-lg transition transform hover:scale-105 hover:shadow-xl">
                        <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg" />
                        <h3 className="text-xl font-mincho text-red-700 mt-4">{project.title}</h3>
                        <p className="text-gray-600 mt-2">{project.description}</p>
                        <p className="text-gray-500 text-sm mt-2">📅 {project.date}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Projects;
