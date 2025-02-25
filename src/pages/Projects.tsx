import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import projectsData from "../data/projects.json";

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState("Tous");

    const categories = ["Tous", ...Array.from(new Set(projectsData.map((project) => project.category)))];

    const filteredProjects = selectedCategory === "Tous"
        ? projectsData
        : projectsData.filter((project) => project.category === selectedCategory);

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-6xl mx-auto p-6 bg-[var(--bg-primary)] min-h-screen"
        >
            <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-4xl font-mincho text-[var(--accent)] text-center mb-6"
            >
                Mes Projets
            </motion.h1>

            <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="flex gap-4 justify-center mb-6"
            >
                {categories.map((category) => (
                    <motion.button
                        key={category}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-4 py-2 rounded-lg border transition ${
                            selectedCategory === category
                                ? "bg-[var(--accent)] text-white"
                                : "border-gray-400 text-gray-700 hover:bg-[var(--hover)] hover:text-white"
                        }`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </motion.button>
                ))}
            </motion.div>

            <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            >
                
            <div className="grid md:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                    <Link to={`/project/${project.id}`} 
                        className="bg-white p-4 shadow-lg rounded-lg transition transform hover:scale-105 hover:shadow-xl">
                            <img src={`/images/${project.image}`} alt={project.title} className="w-full h-48 object-cover rounded-lg" />
                            <h3 className="text-xl font-mincho text-[var(--accent)] mt-4">{project.title}</h3>
                            <p className="text-gray-600 mt-2">{project.description}</p>
                            <p className="text-gray-500 text-sm mt-2">📅 {project.date}</p>
                    </Link>
                ))}
            </div>
            </motion.div>
        </motion.div>
    );
};

export default Projects;
