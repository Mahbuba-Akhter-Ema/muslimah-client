import React from 'react';
import useTitle from '../../../Hook/UseTitle';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Carousel from '../Carousel/Carousel';
import Services from '../Services/Services';

const Home = () => {
    useTitle('Home');
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