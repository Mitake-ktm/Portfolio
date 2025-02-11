const Hero = () => {
    return (
        <section className="bg-indigo-900 text-gray-100 min-h-creen flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-5xl md:text-6xl font-bold text-purple-400">Bienvenue sur mon Porfolio</h1>
            <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-2xl">Développeur Web passionné par la création d'expériences uniques.</p>
            <a href="#projects" className="mt-6 bg-purple-600 hover:bg-purple-700 text-gray-100 font-bold px-6 py-3 rounded-lg shadow-lg transition">
                Voir mes projets
            </a>
        </section>
    )
};

export default Hero;