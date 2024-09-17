import React from 'react';

// Define the props interface for the Experience component
interface ExperienceProps {
    experience: {
        company: string;
        href: string;
        location: string;
        start: string;
        end: string;
        designation: string;
        icon:string;
    }[];
}

// Define the Experience component
const Experience: React.FC<ExperienceProps> = ({ experience }) => {
    return (
        <section>
            <div className='text-lg md:text-xl font-semibold'>
                <p>Experience</p>
            </div>
            {experience.map((item)=>(
                <></>
            ))}
        </section>
    );
}

export default Experience;