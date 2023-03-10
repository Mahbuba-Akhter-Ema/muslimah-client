import React, { useEffect, useState } from 'react';
import useTitle from '../../Hook/UseTitle';
import AllServiceCard from './AllServiceCard';

const AllServices = () => {
  useTitle('AllServices');
    const [allServices, setallServices] = useState([]);
  useEffect(() => {
    fetch('https://muslimah-server.vercel.app/allService')
    .then(res => res.json())
    .then(data => setallServices(data));
  },[]);
    return (
        <div className='grid grid-cols-1 gap-6 mt-10 lg:grid-cols-3 md:grid-cols-2'>
            {
                allServices.map(services => <AllServiceCard 
                key={services._id}
                services={services}
                ></AllServiceCard>)
            }
        </div>
    );
};

export default AllServices;