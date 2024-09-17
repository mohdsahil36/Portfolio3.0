import React from 'react';

interface AboutMeProps{
    about:string;
}

const About: React.FC<AboutMeProps>=({about})=>{
    return(
        <section>
            <div className='text-lg md:text-xl font-semibold'>
                <p>About</p>
            </div>
            <div className='mt-2 text-sm md:text-sm text-slate-900 dark:text-slate-50'>
                <p>{about}</p>
            </div>
        </section>
    )
}
export default About