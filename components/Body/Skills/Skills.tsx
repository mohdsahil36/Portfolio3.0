import React from 'react';

interface SkillsProps {
    skills: string[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
    return (
        <section>
            <div className='text-lg md:text-xl font-semibold'>
                <p>Tech Stack</p>
            </div>
            <div className='mt-2 text-sm md:text-base flex flex-wrap gap-2'>
                {skills.map((skill, id) => (
                    <div 
                    key={id} 
                    className='border md:border-2 border-solid border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-2xl text-xs md:text-sm px-2.5 py-1 hover:shadow-md dark:hover:shadow-md dark:hover:shadow-gray-800 transition-shadow duration-200 ease-in-out font-medium'
                  >
                    {skill}
                  </div>                                                                    
                ))}
            </div>
        </section>
    );
};

export default Skills;
