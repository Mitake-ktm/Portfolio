import { useParams, useNavigate } from 'react-router-dom';
import projectsData from '../data/projects.json';


const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projectsData.find((p) => p.id === Number(id));

    if (!project) {
        return <h2 className='text-center text'>Projet non trouvé</h2>
    }

    return (
        <div className='bg-gray-100 min-h-sreen py-12 px-6'>
            <div className='max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6'>
                <h1 className='text-3xl font-bold text-purple-600'>{project.title}</h1>
                <img src={project.imageUrl} alt={project.title} className='w-full h-64 object-cover mt-4 rounded-md'/>
                <p className='text-gray-500 mt-2'>Crée le : {project.date}</p>
                <p className='text-gray-600 mt-4'>{project.description}</p>
                <div>
                    <h3 className='text-lg font-semibold text-purple-700'>Technologies utilisées :</h3>
                    <ul className='flex flex-wrap mt-2'>
                        {project.technologies.map((tech, index) => (
                            <li key={index} className='bg-purple-100 text-purple-800 rounded-full px-3 py-1 text-sm mr-2 mb-2'>
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>

                {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel='noopener noreferrer' className='mt-4 inline-block text-blue-600 hover:text-blue-800' >
                        Voir sur Github
                    </a>
                )}
                <button onClick={() => navigate(-1) }
                    className='mt-6 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition'>
                    Retour aux projets</button>
            </div>
        </div>
    )
}

export default ProjectDetail;