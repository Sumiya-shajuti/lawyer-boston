import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Services = () => {

    const [serviceData, setServiceData] = useState([]);
    useEffect(() => {
        fetch('https://fathomless-stream-45638.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServiceData(data))
    }, [])
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{ color: 'brown' }}>OUR SERVICES</h5>
                <h2 style={{ color: '#3A4256' }}>Committed to helping our clients succeed</h2>
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