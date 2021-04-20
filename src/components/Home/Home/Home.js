import React from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import FeaturedService from '../FeaturedService/FeaturedService';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Spring from '../../Spring/Spring'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <BusinessInfo></BusinessInfo>
            <FeaturedService></FeaturedService>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;