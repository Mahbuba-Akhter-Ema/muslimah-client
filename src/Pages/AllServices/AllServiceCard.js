import React from 'react';
import { FaDollarSign, FaGrinStars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const AllServiceCard = ({ services }) => {
  const { _id, img, title, price, rating, description } = services;
  return (
    <div className="flex flex-col transition duration-300 bg-zinc-900 text-white rounded shadow-sm hover:shadow">
      <div className="relative h-48">
        <PhotoProvider>
          <PhotoView src={img}>
            <img className='w-full' src={img} alt="" />
          </PhotoView>
        </PhotoProvider>
      </div>
      <div className="flex flex-col justify-between flex-grow p-4 m-4 shadow-2xl">
        <div className='lg:mt-16 p-4 sm:mt-16'>
          <div className="text-lg font-bold">{title}</div>
          {
            <p className="text-sm text-white">
              {description.slice(0, 100) + '...'}
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
        <Link
          to={`/allservices/${_id}`}
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-teal-400 hover:bg-teal-600 focus:shadow-outline focus:outline-none"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default AllServiceCard;