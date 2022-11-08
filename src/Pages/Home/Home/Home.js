import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Carousel from '../Carousel/Carousel';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Services></Services>
            <Banner></Banner>
            <About></About>          
        </div>
    );
};

export default Home;