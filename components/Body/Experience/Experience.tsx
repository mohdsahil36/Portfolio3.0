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
                <div className='flex items-center justify-between py-4 text-xs text-neutral-300'>
                    <div className='flex items-center'>
                        <img src={item.icon} alt="React Image" className='h-12 rounded-full' />
                        <div className='ms-3'>
                            <p>{item.company}</p>
                            <p className='mt-1'>{item.designation}</p>
                        </div>
                    </div>
                    <div className='text-end'>
                        <span>{item.start}</span> - <span>{item.end}</span>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Experience;