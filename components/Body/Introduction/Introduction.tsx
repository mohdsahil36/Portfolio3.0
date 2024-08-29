import React from 'react';

interface IntroductionProps {
    name: string;
    intro: string;
}

const Introduction: React.FC<IntroductionProps> = ({ name, intro }) => {
    return (
        <section>
            <div className='salutations font-bold text-3xl md:text-5xl text-center'>
                <p>Hi, I'm {name}</p>
            </div>
            <div className='mini-intro mt-5 text-sm md:text-lg'>
                <p>{intro}</p>
            </div>
        </section>
    );
};

export default Introduction;
