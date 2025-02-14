import { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

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
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("DONE", formData);
        alert("Message envoyé !");
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="min-h-screen bg-[#F5E1DA] flex items-center justify-center p-6">
            <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-8 border-4 border-[#C4A95E]">
                <h2 className="text-4xl font-mincho text-red-700 text-center">Me Contacter</h2>
                <p className="text-gray-700 text-center mt-2">Envoyez-moi un message ou retrouvez-moi sur mes réseaux.</p>

                <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                    <input
                        type="text"
                        name="name"
                        placeholder="Votre nom"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Votre email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700"
                    />
                    <textarea
                        name="message"
                        placeholder="Votre message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700 h-32"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-red-700 text-white py-3 rounded-lg hover:bg-[#C4A95E] transition font-bold"
                    >
                        Envoyer ✉️
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <h3 className="text-xl font-semibold text-red-700">Mes Réseaux</h3>
                    <div className="flex justify-center space-x-6 mt-3">
                        <a href="https://github.com/Mitake-ktm" target="_blank" className="text-gray-700 hover:text-red-700 text-3xl" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        <a href="https://www.instagram.com/mitake_ktm/" target="_blank" className="text-gray-700 hover:text-red-700 text-3xl" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://www.linkedin.com/in/k%C3%A9vin-d-almeida-822b78266/" target="_blank" className="text-gray-700 hover:text-red-700 text-3xl" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
