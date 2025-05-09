import { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

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
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center p-6"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-8 border-4 border-[var(--hover)]"
            >
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-4xl font-mincho text-[var(--accent)] text-center"
                >
                    Me Contacter
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-gray-700 text-center mt-2"
                >
                    Envoyez-moi un message ou retrouvez-moi sur mes réseaux.
                </motion.p>

                <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-4 mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Votre nom"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Votre email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                    />
                    <textarea
                        name="message"
                        placeholder="Votre message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)] h-32"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-[var(--accent)] text-white py-3 rounded-lg hover:bg-[var(--hover)] transition font-bold"
                    >
                        Envoyer ✉️
                    </button>
                </motion.form>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mt-6 text-center"
                >
                    <h3 className="text-xl font-semibold text-[var(--accent)]">Mes Réseaux</h3>
                    <div className="flex justify-center space-x-6 mt-3">
                        <a
                            title="Github"
                            href="https://github.com/Mitake-ktm"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-[var(--accent)] text-3xl transition"
                        >
                            <FaGithub />
                        </a>
                        <a
                            title="Instagram"
                            href="https://www.instagram.com/mitake_ktm/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-[var(--accent)] text-3xl transition"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            title="LinkedIn"
                            href="https://www.linkedin.com/in/k%C3%A9vin-d-almeida-822b78266/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-[var(--accent)] text-3xl transition"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Contact;
