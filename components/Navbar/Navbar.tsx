import React from 'react';

export default function Navbar(){
    return(
        <div>
            <nav>
                <ul className='flex justify-between md:justify-evenly'>
                    <li className='text-xs md:text-base'>About</li>
                    <li className='text-xs md:text-base mx-3'>Tech Stack</li>
                    <li className='text-xs md:text-base'>Work</li>
                    <li className='text-xs md:text-base mx-3'>Projects</li>
                    <li className='text-xs md:text-base'>Contact</li>
                </ul>
            </nav>
        </div>
    )
}