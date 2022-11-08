import React from 'react';
import { FaDollarSign, FaGrinStars} from 'react-icons/fa';

const ServicesCard = ({ service }) => {
  const { img, title, price, rating, description } = service;
  return (
    <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
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
            <p className="text-sm text-gray-900">
              {description.slice(0, 100)+ '...' }
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
        <a
          href="/"
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default ServicesCard;