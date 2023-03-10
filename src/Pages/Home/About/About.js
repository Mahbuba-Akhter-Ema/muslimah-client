import React from 'react';
import useTitle from '../../../Hook/UseTitle';

const About = () => {
    useTitle('About');
    return (
        <div className="px-8 py-16 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-12 lg:py-20 bg-zinc-900  text-gray-100 mt-10 rounded">
            <div className='md:max-w-full sm:w-90  flex items-center'>
                <iframe
                    width="1200"
                    height="400"
                    src="https://www.youtube.com/embed/AciAWDbwyEw"
                    title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
            </div>
        </div>
    );
};

export default About;