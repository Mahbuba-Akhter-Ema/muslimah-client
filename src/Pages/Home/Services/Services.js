import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesCard from '../ServicesCard/ServicesCard';

const Services = () => {

  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('https://muslimah-server.vercel.app/services')
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-zinc-900 mt-10 rounded">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
            Connect With Us
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-white lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="bc9273ce-29bb-4565-959b-714607d4d027"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#bc9273ce-29bb-4565-959b-714607d4d027)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Connect</span>
          </span>{' '}
          with Muslimh Service Providers.
        </h2>
        <p className="text-base text-white md:text-lg">
          Book video consultations with scholars, practitioners, financial advisors, and educators worldwide.
        </p>
      </div>
      <div className="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
        {
          services.map(service => <ServicesCard
            key={service._id}
            service={service}
          ></ServicesCard>)
        }
      </div>
      <div>
        <Link to="/allservices"><button className="flex items-center mx-auto mt-5 justify-center h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-teal-400 hover:bg-teal-600 focus:shadow-outline focus:outline-none">See All Services</button></Link>
      </div>
    </div>
  );
};

export default Services;