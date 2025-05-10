import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import projectsData from "../data/otherProjects.json";

const OtherProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const project = projectsData.find((p) => String(p.id) === String(id));

    if (!project) {
        return (
            <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center text-red-700 text-2xl font-mincho mt-10"
            >
                Projet non trouvé.
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
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-4xl font-mincho text-[var(--accent)]"
                >
                    {project.title}
                </motion.h1>

                <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-gray-500 mt-2"
                >
                    📅 {project.date}
                </motion.p>

                <motion.img 
                    src={`/images/${project.image}`} 
                    alt={project.title} 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    onError={(e) => (e.currentTarget.src = "/images/default.jpg")}
                    className="w-full h-64 object-cover mt-4 rounded-md"
                />

                <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-gray-700 mt-4"
                >
                    {project.description}
                </motion.p>

                {/* Technologies */}
                {project.technologies?.length > 0 && (
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                        className="mt-4"
                    >
                        <h3 className="text-lg font-semibold text-[var(--accent)]">Technologies utilisées :</h3>
                        <ul className="flex flex-wrap mt-2">
                            {project.technologies.map((tech, index) => (
                                <motion.li 
                                    key={index}
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                                    className="bg-[var(--hover)] text-white rounded-full px-3 py-1 text-sm mr-2 mb-2"
                                >
                                    {tech}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}

                {/* Liens externes */}
                {project.links?.length > 0 && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        className="mt-6"
                    >
                        <h3 className="text-xl font-semibold text-[var(--accent)]">Liens externes</h3>
                        <ul className="mt-2 space-y-2">
                            {project.links.map((link, index) => (
                                <li key={index}>
                                    <a 
                                        href={link.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:text-blue-700 underline"
                                    >
                                        🔗 {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}

                {/* Bouton retour */}
                <motion.button 
                    onClick={() => navigate(-1)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 bg-[var(--accent)] text-white px-4 py-2 rounded-lg hover:bg-[var(--hover)] transition"
                >
                    ⬅ Retour
                </motion.button>
            </motion.div>
        </motion.div>
    );
};

export default OtherProjectDetail;
