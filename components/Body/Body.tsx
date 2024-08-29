import React from 'react';
import { Data } from '@/app/data/Data';
import Introduction from './Introduction/Introduction';
import About from './About/About';
import Skills from './Skills/Skills';

const { name, intro, about, skills } = Data;

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
        </>
    );
}
