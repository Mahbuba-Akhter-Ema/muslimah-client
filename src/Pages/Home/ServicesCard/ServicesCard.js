import React from 'react';
import { FaDollarSign, FaGrinStars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import useTitle from '../../../Hook/UseTitle';

const ServicesCard = ({ service }) => {
  useTitle('Service Cards');
  const { _id, img, title, price, rating, description } = service;
  return (
    <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
      <div className="relative w-full h-48">
        <PhotoProvider>
          <PhotoView src={img}>
            <img src={img} alt="" />
          </PhotoView>
        </PhotoProvider>
      </div>
      <div className="flex flex-col justify-between flex-grow p-4 rounded">
        <div>
          <div className="text-lg font-bold">{title}</div>
          {
            <p className="text-sm text-gray-900">
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
        <Link to={`/allservices/${_id}`}>
          <button
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-teal-400 hover:bg-teal-600 focus:shadow-outline focus:outline-none"
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServicesCard;