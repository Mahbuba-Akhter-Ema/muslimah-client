import React from 'react';
import bannerGif from './banner-gif (2).gif';

const Banner = () => {
    return (
        <div className="overflow-hidden bg-zinc-900 mt-10 rounded">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-col items-center justify-between xl:flex-row">
                    <div className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                            Welcome to <span className="text-teal-400">Muslimah</span> <br className="hidden md:block" />
                            Dawah Of{' '} Islam.
                        </h2>
                        <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                            Muslimah allows Muslim professionals to utizile their expertise in order to help others. Members are able to find like minded individuals that can help teach them Arabic/Quran, offer financial advice, mental health services or Islamic Studies.
                        </p>
                        <a
                            href="/"
                            aria-label=""
                            className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-400 hover:text-teal-700"
                        >
                            Learn more
                            <svg
                                className="inline-block w-3 ml-2"
                                fill="currentColor"
                                viewBox="0 0 12 12"
                            >
                                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                            </svg>
                        </a>
                    </div>
                    <div className="w-full max-w-xl xl:w-7/12">
                        <div className="relative">
                            <img src={bannerGif} alt="" srcset="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;