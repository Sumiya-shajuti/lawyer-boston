import React from 'react';
import judicial from '../../../images/judicial.png';
import law from '../../../images/work permit.png';
import family from '../../../images/family.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Judicial Issues',
        img: judicial
    },
    {
        name: 'Work Permit',
        img:law
    },
    {
        name: 'Family Reunification',
        img: family
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
            <h5 style={{color:'brown'}}>OUR SERVICES</h5>
            <h2 style={{color:'#3A4256'}}>Committed to helping our clients succeed</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                    serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;