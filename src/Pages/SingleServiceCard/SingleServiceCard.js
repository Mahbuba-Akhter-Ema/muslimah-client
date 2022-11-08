import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaDollarSign, FaGrinStars } from 'react-icons/fa';

const SingleServiceCard = () => {
    const product = useLoaderData();
    const { img, title, price, rating, description } = product;
    return (
        <div className='grid grid-cols-1 gap-6 mt-10 lg:grid-cols-2 md:grid-cols-2'>
            <div className="flex flex-col transition duration-300 bg-zinc-900 text-white rounded mt-10">
                <div className="relative w-full h-48">
                    <img
                        src={img}
                        className="object-cover w-full h-full rounded-t"
                        alt="Plan"
                    />
                </div>
                <div className="flex flex-col justify-between flex-grow p-4 border border-t-0 rounded-b">
                    <div>
                        <div className="text-lg font-bold">{title}</div>
                        {
                            <p className="text-sm text-white">
                                {description}
                            </p>
                        }
                        <div className="flex justify-items-center justify-around p-2 mt-5 mb-4 font-bold sm:text-3xl">
                            <div className='flex items-center'>
                                <span className='text-2xl'><FaDollarSign /></span> {price}
                            </div>
                            <div className='flex items-center'>
                                <span className='text-2xl mr-2'><FaGrinStars /></span> {rating}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleServiceCard;