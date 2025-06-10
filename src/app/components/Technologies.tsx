import React from 'react';

interface TechProps {
    name: string;
    iconSrc: string;
}

const TechIcon: React.FC<TechProps> = ({ name, iconSrc }) => {
    return (
        <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-2">
                <img src={iconSrc} alt={name} className="w-8 h-8" />
            </div>
            <span className="text-sm font-medium">{name}</span>
        </div>
    );
};

const Technologies: React.FC = () => {
    const techStack: TechProps[] = [
        { name: "Angular",     iconSrc: '/icons/dev/angular.svg' },
        { name: "React",       iconSrc: '/icons/dev/react.svg' },
        { name: "TypeScript",  iconSrc: '/icons/dev/typescript.svg' },
        { name: "Node.js",     iconSrc: '/icons/dev/node.svg' },
        { name: "Java",        iconSrc: '/icons/dev/java.svg' },
        { name: "Spring Boot", iconSrc: '/icons/dev/spring-boot.svg' },
        { name: "WordPress",   iconSrc: '/icons/dev/wordpress.svg' },
        { name: "MySQL",       iconSrc: '/icons/dev/mysql.svg' },
        { name: "AWS",         iconSrc: '/icons/dev/aws.svg' },
        { name: "Git",         iconSrc: '/icons/dev/git.svg' },
        { name: "Docker",      iconSrc: '/icons/dev/docker.svg' },
    ];
    
    return (
        <div className="w-full flex justify-center">
            <div className="flex flex-wrap justify-center gap-8 max-w-3xl">
                {techStack.map((tech, index) => (
                    <TechIcon key={index} name={tech.name} iconSrc={tech.iconSrc} />
                ))}
            </div>
        </div>
    );
};

export default Technologies;