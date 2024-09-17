import React from 'react';

interface IntroductionProps {
    name: string;
    intro: string;
}

const Introduction: React.FC<IntroductionProps> = ({ name, intro }) => {
    return (
        <section>
            <div className='salutations font-bold text-6xl md:text-7xl text-center md:text-start bg-gradient-to-b dark:bg-gradient-to-t from-black to-white bg-clip-text text-transparent'>
                <p>Hi, I'm {name}</p>
            </div>
            <div className='mini-intro mt-6 text-sm md:text-lg'>
                <p>{intro}</p>
            </div>
        </section>
    );
};

export default Introduction;
