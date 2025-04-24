import React from 'react';

interface ProjectProps {
    title: string;
    description: string;
    technologies: string[];
    imageUrl?: string;
    link?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, technologies, imageUrl, link }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            {imageUrl && (
                <div className="relative w-full" style={{ paddingTop: '61.8%' }}>
                    <img
                        src={imageUrl}
                        alt={title}
                        className="absolute top-0 left-0 w-full h-full object-cover object-center"
                    />
                </div>
            )}
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                {link && (
                    <div className="mt-auto">
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            View Project
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

const Projects: React.FC = () => {
    const projectsData: ProjectProps[] = [
        {
            title: "15 Puzzle",
            description: "A Progressive Web App implementation of the classic 15 puzzle game. Features include timer, move counter, and a global leaderboard to compete with players worldwide.",
            technologies: ["HTML", "CSS", "JavaScript", "Node.js", "AWS"],
            imageUrl: "/projects/15puzzle-online.png",
            link: "https://15puzzle.online"
        },
        {
            title: "AlgorithmsVisualized",
            description: "An interactive platform to explore and learn fundamental algorithms through real-time visualizations.",
            technologies: ["React", "TypeScript", "Tailwind CSS"],
            imageUrl: "/projects/algorithms-visualized.PNG",
            link: "https://algorithms-visualized.vercel.app"
        }
    ];
    
    return (
        <section id="projects" className="py-16">
            <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;