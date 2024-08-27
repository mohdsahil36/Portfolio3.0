import React from 'react';
import { Data } from '@/app/data/Data';
import Introduction from './Introduction/Introduction';
import About from './About/About';

const { name, intro, about } = Data;

export default function Body() {
    return (
        <>
            <div className='mt-8 md:mt-12'>
                <Introduction name={name} intro={intro} />
            </div>
            <div className='mt-8'>
                <About about={about}/>
            </div>
        </>
    );
}
