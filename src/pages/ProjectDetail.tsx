import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import projectsData from '../data/projects.json';

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projectsData.find((p) => p.id === Number(id));

    if (!project) {
        return (
            <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center text-red-700 text-2xl font-mincho mt-10"
            >
                Ce projet n'existe pas ou est en cours.
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
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-4xl font-mincho text-[var(--accent)]"
                >
                    {project.title}
                </motion.h1>

                <motion.img 
                    src={`/images/${project.image}`} 
                    alt={project.title} 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="w-full h-64 object-cover mt-4 rounded-md"
                />

                <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="text-gray-600 mt-2"
                >
                    📅 Créé le : {project.date}
                </motion.p>

                <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-gray-700 mt-4"
                >
                    {project.description}
                </motion.p>

                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="mt-4"
                >
                    <h3 className="text-lg font-semibold text-[var(--accent)]">Technologies utilisées :</h3>
                    <ul className="flex flex-wrap mt-2">
                        {project.technologies.length > 0 ? project.technologies.map((tech, index) => (
                            <motion.li 
                                key={index} 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                                className="bg-[var(--hover)] text-white rounded-full px-3 py-1 text-sm mr-2 mb-2"
                            >
                                {tech}
                            </motion.li>
                        )) : <li className="text-gray-500">Technologies non spécifiées</li>}
                    </ul>
                </motion.div>

                {project.github && (
                    <motion.a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        className="mt-4 block text-blue-600 hover:text-blue-800 underline"
                    >
                        🔗 Voir sur Github
                    </motion.a>
                )}

                {project.link && (
                    <motion.a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.3 }}
                        className="mt-2 block text-blue-500 hover:text-blue-700 underline"
                    >
                        🔗 Voir le projet
                    </motion.a>
                )}

                <motion.button 
                    onClick={() => navigate(-1)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 bg-[var(--accent)] text-white px-4 py-2 rounded-lg hover:bg-[var(--hover)] transition"
                >
                    ⬅ Retour aux projets
                </motion.button>
            </motion.div>
        </motion.div>
    );
};

export default ProjectDetail;
