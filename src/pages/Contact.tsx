import { useState } from "react"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("DONE",formData);
        alert("Message envoyé !");
        setFormData({name: '', email: '', message: ''});
    }

    return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-8">
            <h2>Me contacter</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="name" placeholder="Votre nom" value={formData.name} onChange={handleChange} required 
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"/>
                <input type="email" name="email" placeholder="Votre email" value={formData.email} onChange={handleChange} required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"/>
                <textarea name="message" placeholder="Votre message" value={formData.message} onChange={handleChange} required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-2 focus:ring-purple-500 h-32"></textarea>
                <button type="submit" className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition">Envoyer</button>
            </form>
            <div className="mt-6 text-center">
                <h3 className="text-lg font-semibold text-gray-700">Mes Réseaux</h3>
                <div className="flex justify-center space-x-4 mt-3">
                    <a href="https://github.com/Mitake-ktm" target="_blank" className="text-gray-600 hover:text-purple-600 text-2xl" rel='noopener noreferrer'>
                        <FaGithub />
                    </a>
                    <a href="https://www.instagram.com/mitake_ktm/" target="_blank" className="text-gray-600 hover:text-purple-600 text-2xl" rel='noopener noreferrer'>
                        <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/k%C3%A9vin-d-almeida-822b78266/" target="blank" className="text-gray-600 hover:text-purple-600 text-2xl" rel='noopener noreferrer'>
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Contact