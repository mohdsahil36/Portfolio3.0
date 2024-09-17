import React from 'react';
import { Data } from '@/app/data/Data';
import Introduction from './Introduction/Introduction';
import About from './About/About';
import Skills from './Skills/Skills';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';

const { name, intro, about, skills, experience } = Data;

export default function Body() {
    return (
        <>
            <div className='mt-8 md:mt-12'>
                <Introduction name={name} intro={intro} />
            </div>
            <div className='mt-8'>
                <About about={about}/>
            </div>
            <div className='mt-8'>
                <Skills skills={skills}/>
            </div>
            <div className='mt-8'>
                <Experience experience={experience}/>
            </div>
            <div className='mt-8'>
                <Projects/>
            </div>
        </>
    );
}
